'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { loadTextContent } from '@/utils/textLoader';
import type { Casino } from '@/types/casino';
import { CryptoIcon } from '@/components/CryptoIcon';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface CasinoReviewProps {
  casino: Casino;
}

export function CasinoReview({ casino }: CasinoReviewProps) {
  const [review, setReview] = useState<string>('Loading...');
  const [pros, setPros] = useState<string[]>([]);
  const [cons, setCons] = useState<string[]>([]);

  useEffect(() => {
    async function loadContent() {
      try {
        console.log('Loading files:', {
          review: casino.review_path,
          pros: casino.pros_path,
          cons: casino.cons_path
        });

        const [reviewContent, prosContent, consContent] = await Promise.all([
          loadTextContent(casino.review_path),
          loadTextContent(casino.pros_path),
          loadTextContent(casino.cons_path)
        ]);

        if (reviewContent.includes('Failed to load content')) {
          setReview('Review content coming soon...');
        } else {
          setReview(reviewContent);
        }

        if (prosContent.includes('Failed to load content')) {
          setPros([]);
        } else {
          setPros(prosContent.split('\n').filter(Boolean));
        }

        if (consContent.includes('Failed to load content')) {
          setCons([]);
        } else {
          setCons(consContent.split('\n').filter(Boolean));
        }

      } catch (error) {
        console.error('Error loading casino content:', error);
        setReview('Review content coming soon...');
        setPros([]);
        setCons([]);
      }
    }

    loadContent();
  }, [casino]);

  return (
    <article className="space-y-8">
      {/* Hero Section */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image
              src={casino.logo_path}
              alt={`${casino.casino_name} logo`}
              fill
              className="rounded-xl object-contain"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {casino.casino_name} Review
            </h1>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg px-4 py-2">
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  {casino.bonus_percentage}
                </span>
                <span className="text-gray-300 ml-1">up to</span>
                <span className="text-xl font-bold text-white ml-2">
                  {casino.bonus_max_amount_in_euro}
                </span>
              </div>

              {casino.free_spins && (
                <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-2">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {casino.free_spins}
                  </span>
                  <span className="text-gray-300 ml-2">Free Spins</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pros & Cons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="bg-green-900/30 border-b border-green-800/50 px-6 py-4">
            <h2 className="text-xl font-bold text-green-400">Pros</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span className="text-gray-300">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="bg-red-900/30 border-b border-red-800/50 px-6 py-4">
            <h2 className="text-xl font-bold text-red-400">Cons</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              {cons.map((con, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span className="text-gray-300">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Full Review - Oppdatert formatering */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <div className="bg-blue-900/30 border-b border-blue-800/50 px-6 py-4">
          <h2 className="text-xl font-bold text-blue-400">Full Review</h2>
        </div>
        <div className="p-6 prose prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              // Styling for overskrifter
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold mb-4 mt-6 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-bold mb-3 mt-6">
                  {children}
                </h2>
              ),
              // Styling for paragrafer
              p: ({ children }) => (
                <p className="mb-4 text-gray-300 leading-relaxed">
                  {children}
                </p>
              ),
              // Styling for lister
              ul: ({ children }) => (
                <ul className="mb-4 space-y-2 list-disc list-inside">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="text-gray-300">
                  {children}
                </li>
              ),
              // Styling for lenker
              a: ({ children, href }) => (
                <a 
                  href={href}
                  className="text-blue-400 hover:text-blue-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {review}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
} 