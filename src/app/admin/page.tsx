'use client';

import { useState, useEffect, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Login from '@/components/Login';
import { supabase } from '@/utils/supabase';
import { AffiliateData } from '@/types/affiliate';
import { useRouter } from 'next/navigation';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default function AdminPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [casinos, setCasinos] = useState<AffiliateData[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    bonus: '',
    short_description: '',
    affiliate_link: '',
    features: [''],
    terms: '',
    position: 1,
    logo: '',
    rating: 5
  });

  useEffect(() => {
    if (isLoggedIn) {
      fetchCasinos();
    }
  }, [isLoggedIn]);

  async function fetchCasinos() {
    const { data } = await supabase
      .from('casinos')
      .select('*')
      .order('position');
    
    if (data) {
      setCasinos(data);
    }
  }

  async function handleDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(casinos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Oppdater posisjonene
    const updatedItems = items.map((item, index) => ({
      ...item,
      position: index + 1
    }));

    setCasinos(updatedItems);

    // Oppdater i databasen
    for (const item of updatedItems) {
      await supabase
        .from('casinos')
        .update({ position: item.position })
        .eq('id', item.id);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    try {
      if (isEditing) {
        // Oppdater eksisterende casino
        const { error } = await supabase
          .from('casinos')
          .update({
            name: formData.name,
            logo: formData.logo,
            bonus: formData.bonus,
            short_description: formData.short_description,
            affiliate_link: formData.affiliate_link,
            features: formData.features,
            terms: formData.terms,
            rating: formData.rating,
            position: formData.position
          })
          .eq('id', formData.id);

        if (error) {
          console.error('Error updating casino:', error);
          alert('Feil ved oppdatering av casino');
          return;
        }
      } else {
        // Legg til nytt casino
        const newId = generateUUID();

        // Hent høyeste position først
        const { data: positionData } = await supabase
          .from('casinos')
          .select('position')
          .order('position', { ascending: false })
          .limit(1);

        const newPosition = positionData && positionData[0] 
          ? positionData[0].position + 1 
          : 1;

        const { error } = await supabase
          .from('casinos')
          .insert([{
            id: newId,
            name: formData.name,
            logo: formData.logo,
            bonus: formData.bonus,
            short_description: formData.short_description,
            affiliate_link: formData.affiliate_link,
            features: formData.features.filter(f => f.trim() !== ''),
            terms: formData.terms,
            rating: formData.rating,
            position: newPosition
          }]);

        if (error) {
          console.error('Error adding casino:', error);
          alert('Feil ved opprettelse av casino');
          return;
        }
      }

      // Oppdater listen og reset skjema
      await fetchCasinos();
      
      // Reset form med riktig neste position
      setFormData({
        id: '',
        name: '',
        bonus: '',
        short_description: '',
        affiliate_link: '',
        features: [''],
        terms: '',
        position: casinos.length + 2, // +2 fordi vi nettopp la til ett
        logo: '',
        rating: 5
      });
      setIsEditing(false);

      // Vis bekreftelse
      alert(isEditing ? 'Casino oppdatert!' : 'Nytt casino lagt til!');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Noe gikk galt. Sjekk konsollen for detaljer.');
    }
  }

  async function deleteCasino(id: string) {
    if (window.confirm('Er du sikker på at du vil slette dette casinoet?')) {
      await supabase
        .from('casinos')
        .delete()
        .eq('id', id);
      
      fetchCasinos();
    }
  }

  function editCasino(casino: AffiliateData) {
    setFormData({
      id: casino.id || '',
      name: casino.name || '',
      bonus: casino.bonus || '',
      short_description: casino.short_description || '',
      affiliate_link: casino.affiliate_link || '',
      features: casino.features || [''],
      terms: casino.terms || '',
      position: casino.position || 1,
      logo: casino.logo || '',
      rating: casino.rating || 5
    });
    setIsEditing(true);
    window.scrollTo(0, document.body.scrollHeight);
  }

  const handleImageUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      // Sjekk filtype
      if (!file.type.startsWith('image/')) {
        alert('Kun bildefiler er tillatt');
        return;
      }

      // Sjekk filstørrelse (maks 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Bildet må være mindre enn 2MB');
        return;
      }

      alert('Laster opp bilde...');

      // Generer et unikt filnavn med original extension
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

      // Last opp til Supabase Storage
      const { data, error } = await supabase.storage
        .from('casino-logos')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Upload error:', error);
        throw error;
      }

      // Få public URL
      const { data: { publicUrl } } = supabase.storage
        .from('casino-logos')
        .getPublicUrl(fileName);

      // Oppdater form
      setFormData(prev => ({
        ...prev,
        logo: publicUrl
      }));

      alert('Bilde lastet opp!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Feil ved opplasting av bilde. Sjekk konsollen for detaljer.');
    }
  }, []);

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Casino Admin</h1>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Logg ut
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="casinos">
          {(provided) => (
            <div 
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mb-12"
            >
              <h2 className="text-xl font-bold mb-4">
                Eksisterende Casinoer (dra for å endre rekkefølge)
              </h2>
              <div className="bg-gray-800 rounded-lg p-4 space-y-2">
                {casinos.map((casino, index) => (
                  <Draggable 
                    key={casino.id} 
                    draggableId={casino.id} 
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <img 
                            src={casino.logo} 
                            alt={casino.name}
                            className="w-12 h-12 object-contain"
                          />
                          <div>
                            <h3 className="font-bold">{casino.name}</h3>
                            <p className="text-sm text-gray-400">
                              {casino.short_description}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => editCasino(casino)}
                            className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
                          >
                            Rediger
                          </button>
                          <button
                            onClick={() => deleteCasino(casino.id)}
                            className="px-3 py-1 bg-red-600 rounded hover:bg-red-700"
                          >
                            Slett
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="mt-12 bg-gray-800/50 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6">
          {isEditing ? 'Rediger Casino' : 'Legg til nytt casino'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Casino Navn</label>
            <input 
              type="text"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Logo</label>
            <div className="flex items-center space-x-4">
              {formData.logo && (
                <img 
                  src={formData.logo} 
                  alt="Preview" 
                  className="w-24 h-24 object-contain bg-gray-900 rounded-lg p-2"
                />
              )}
              <div className="flex-1">
                <input 
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                />
                <input 
                  type="text"
                  value={formData.logo}
                  onChange={e => setFormData({...formData, logo: e.target.value})}
                  placeholder="eller lim inn bilde-URL"
                  className="w-full mt-2 p-2 rounded bg-gray-700 border border-gray-600"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2">Bonus</label>
            <input 
              type="text"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={formData.bonus}
              onChange={e => setFormData({...formData, bonus: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Kort Beskrivelse</label>
            <textarea 
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={formData.short_description}
              onChange={e => setFormData({...formData, short_description: e.target.value})}
              required
              rows={3}
            />
          </div>

          <div>
            <label className="block mb-2">Affiliate Link</label>
            <input 
              type="url"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={formData.affiliate_link}
              onChange={e => setFormData({...formData, affiliate_link: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Features</label>
            {formData.features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input 
                  type="text"
                  className="flex-grow p-2 rounded bg-gray-700 border border-gray-600"
                  value={feature}
                  onChange={e => {
                    const newFeatures = [...formData.features];
                    newFeatures[index] = e.target.value;
                    setFormData({...formData, features: newFeatures});
                  }}
                />
                {index === formData.features.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setFormData({
                      ...formData, 
                      features: [...formData.features, '']
                    })}
                    className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
                  >
                    +
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      const newFeatures = formData.features.filter((_, i) => i !== index);
                      setFormData({...formData, features: newFeatures});
                    }}
                    className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
                  >
                    -
                  </button>
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-2">Terms</label>
            <input 
              type="text"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={formData.terms}
              onChange={e => setFormData({...formData, terms: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Rating (1-5)</label>
            <input 
              type="number"
              min="1"
              max="5"
              step="0.1"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              value={formData.rating}
              onChange={e => setFormData({...formData, rating: parseFloat(e.target.value)})}
              required
            />
          </div>

          <div className="flex gap-4">
            <button 
              type="submit"
              className="flex-1 py-3 bg-green-600 rounded-lg font-bold hover:bg-green-700"
            >
              {isEditing ? 'Oppdater Casino' : 'Legg til Casino'}
            </button>
            
            {isEditing && (
              <button 
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setFormData({
                    id: '',
                    name: '',
                    bonus: '',
                    short_description: '',
                    affiliate_link: '',
                    features: [''],
                    terms: '',
                    position: casinos.length + 1,
                    logo: '',
                    rating: 5
                  });
                }}
                className="flex-1 py-3 bg-gray-600 rounded-lg font-bold hover:bg-gray-700"
              >
                Avbryt
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
} 