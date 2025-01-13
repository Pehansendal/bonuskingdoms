function __cf_cjs(esm) {
  const cjs = 'default' in esm ? esm.default : {};
	for (const [k, v] of Object.entries(esm)) {
		if (k !== 'default') {
			Object.defineProperty(cjs, k, {
				enumerable: true,
				value: v,
			});
		}
	}
	return cjs;
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js
globalThis.clearImmediate = clearImmediateFallback;

// node_modules/unenv/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
function notImplemented(name) {
  const fn3 = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn3, { __unenv__: true });
}
__name(notImplemented, "notImplemented");

// node_modules/unenv/runtime/mock/noop.mjs
var noop_default = Object.assign(() => {
}, { __unenv__: true });

// node_modules/unenv/runtime/node/timers/internal/immediate.mjs
var Immediate = class {
  _onImmediate;
  _timeout;
  constructor(callback, args) {
    this._onImmediate = callback;
    if ("setTimeout" in globalThis) {
      this._timeout = setTimeout(callback, 0, ...args);
    } else {
      callback(...args);
    }
  }
  ref() {
    this._timeout?.ref();
    return this;
  }
  unref() {
    this._timeout?.unref();
    return this;
  }
  hasRef() {
    return this._timeout?.hasRef() ?? false;
  }
  [Symbol.dispose]() {
    if ("clearTimeout" in globalThis) {
      clearTimeout(this._timeout);
    }
  }
};
__name(Immediate, "Immediate");

// node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs
function setImmediateFallbackPromises(value) {
  return new Promise((res) => {
    res(value);
  });
}
__name(setImmediateFallbackPromises, "setImmediateFallbackPromises");
function setImmediateFallback(callback, ...args) {
  return new Immediate(callback, args);
}
__name(setImmediateFallback, "setImmediateFallback");
setImmediateFallback.__promisify__ = setImmediateFallbackPromises;
function clearImmediateFallback(immediate) {
  immediate?.[Symbol.dispose]();
}
__name(clearImmediateFallback, "clearImmediateFallback");

// node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js
globalThis.setImmediate = setImmediateFallback;

// node_modules/unenv/runtime/node/console/index.mjs
import { Writable } from "node:stream";

// node_modules/unenv/runtime/mock/proxy.mjs
var fn = /* @__PURE__ */ __name(function() {
}, "fn");
function createMock(name, overrides = {}) {
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop === "__unenv__") {
        return true;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return [];
    }
  });
}
__name(createMock, "createMock");
var proxy_default = createMock("mock");

// node_modules/unenv/runtime/node/console/index.mjs
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? notImplemented("console.createTask");
var assert = notImplemented("console.assert");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? proxy_default.__createMock__("console.Console");

// node_modules/unenv/runtime/node/console/$cloudflare.mjs
var workerdConsole = globalThis["console"];
var {
  assert: assert2,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler: noop_default,
  _stdout,
  _stdoutErrorHandler: noop_default,
  _times: proxy_default
});
var cloudflare_default = workerdConsole;

// node_modules/wrangler/_virtual_unenv_global_polyfill-console.js
globalThis.console = cloudflare_default;

// node_modules/unenv/runtime/web/performance/_entry.mjs
var _supportedEntryTypes = [
  "event",
  // PerformanceEntry
  "mark",
  // PerformanceMark
  "measure",
  // PerformanceMeasure
  "resource"
  // PerformanceResourceTiming
];
var _PerformanceEntry = class {
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || performance.now();
    this.detail = options?.detail;
  }
  get duration() {
    return performance.now() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
__name(_PerformanceEntry, "_PerformanceEntry");
var PerformanceEntry = globalThis.PerformanceEntry || _PerformanceEntry;
var _PerformanceMark = class extends _PerformanceEntry {
  entryType = "mark";
};
__name(_PerformanceMark, "_PerformanceMark");
var PerformanceMark = globalThis.PerformanceMark || _PerformanceMark;
var _PerformanceMeasure = class extends _PerformanceEntry {
  entryType = "measure";
};
__name(_PerformanceMeasure, "_PerformanceMeasure");
var PerformanceMeasure = globalThis.PerformanceMeasure || _PerformanceMeasure;
var _PerformanceResourceTiming = class extends _PerformanceEntry {
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
__name(_PerformanceResourceTiming, "_PerformanceResourceTiming");
var PerformanceResourceTiming = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming;

// node_modules/unenv/runtime/web/performance/_performance.mjs
var _timeOrigin = Date.now();
var _Performance = class {
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = proxy_default.__createMock__("PerformanceNavigation");
  timing = proxy_default.__createMock__("PerformanceTiming");
  onresourcetimingbufferfull = null;
  now() {
    if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin) {
      return globalThis.performance.now();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter(
      (e) => e.entryType !== "resource" || e.entryType !== "navigation"
    );
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter(
      (e) => e.name === name && (!type || e.entryType === type)
    );
  }
  getEntriesByType(type) {
    return this._entries.filter(
      (e) => e.entryType === type
    );
  }
  mark(name, options) {
    const entry = new _PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || performance2.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || performance2.now();
    }
    const entry = new _PerformanceMeasure(measureName, {
      startTime: start,
      detail: { start, end }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  toJSON() {
    return this;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
};
__name(_Performance, "_Performance");
var Performance = globalThis.Performance || _Performance;
var performance2 = globalThis.performance || new Performance();

// node_modules/unenv/runtime/web/performance/_observer.mjs
var _PerformanceObserver = class {
  __unenv__ = true;
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
};
__name(_PerformanceObserver, "_PerformanceObserver");
__publicField(_PerformanceObserver, "supportedEntryTypes", _supportedEntryTypes);
var PerformanceObserver = globalThis.PerformanceObserver || _PerformanceObserver;
var _PerformanceObserverEntryList = class {
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
__name(_PerformanceObserverEntryList, "_PerformanceObserverEntryList");
var PerformanceObserverEntryList = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList;

// node_modules/unenv/runtime/polyfill/global-this.mjs
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return {};
}
__name(getGlobal, "getGlobal");
var global_this_default = getGlobal();

// node_modules/unenv/runtime/polyfill/performance.mjs
global_this_default.performance = global_this_default.performance || performance2;
global_this_default.Performance = global_this_default.Performance || Performance;
global_this_default.PerformanceEntry = global_this_default.PerformanceEntry || PerformanceEntry;
global_this_default.PerformanceMark = global_this_default.PerformanceMark || PerformanceMark;
global_this_default.PerformanceMeasure = global_this_default.PerformanceMeasure || PerformanceMeasure;
global_this_default.PerformanceObserver = global_this_default.PerformanceObserver || PerformanceObserver;
global_this_default.PerformanceObserverEntryList = global_this_default.PerformanceObserverEntryList || PerformanceObserverEntryList;
global_this_default.PerformanceResourceTiming = global_this_default.PerformanceResourceTiming || PerformanceResourceTiming;
var performance_default = global_this_default.performance;

// node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js
globalThis.performance = performance_default;

// node_modules/unenv/runtime/mock/empty.mjs
var empty_default = Object.freeze(
  Object.create(null, {
    __unenv__: { get: () => true }
  })
);

// node_modules/unenv/runtime/node/process/internal/env.mjs
var _envShim = /* @__PURE__ */ Object.create(null);
var _processEnv = globalThis.process?.env;
var _getEnv = /* @__PURE__ */ __name((useShim) => _processEnv || globalThis.__env__ || (useShim ? _envShim : globalThis), "_getEnv");
var env = new Proxy(_envShim, {
  get(_2, prop) {
    const env23 = _getEnv();
    return env23[prop] ?? _envShim[prop];
  },
  has(_2, prop) {
    const env23 = _getEnv();
    return prop in env23 || prop in _envShim;
  },
  set(_2, prop, value) {
    const env23 = _getEnv(true);
    env23[prop] = value;
    return true;
  },
  deleteProperty(_2, prop) {
    const env23 = _getEnv(true);
    delete env23[prop];
    return true;
  },
  ownKeys() {
    const env23 = _getEnv();
    return Object.keys(env23);
  }
});

// node_modules/unenv/runtime/node/process/internal/time.mjs
var hrtime = Object.assign(
  /* @__PURE__ */ __name(function hrtime2(startTime) {
    const now = Date.now();
    const seconds = Math.trunc(now / 1e3);
    const nanos = now % 1e3 * 1e6;
    if (startTime) {
      let diffSeconds = seconds - startTime[0];
      let diffNanos = nanos - startTime[0];
      if (diffNanos < 0) {
        diffSeconds = diffSeconds - 1;
        diffNanos = 1e9 + diffNanos;
      }
      return [diffSeconds, diffNanos];
    }
    return [seconds, nanos];
  }, "hrtime2"),
  {
    bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint")
  }
);
var nextTick = globalThis.queueMicrotask ? (cb, ...args) => {
  globalThis.queueMicrotask(cb.bind(void 0, ...args));
} : _createNextTickWithTimeout();
function _createNextTickWithTimeout() {
  let queue = [];
  let draining = false;
  let currentQueue;
  let queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length > 0) {
      queue = [...currentQueue, ...queue];
    } else {
      queueIndex = -1;
    }
    if (queue.length > 0) {
      drainQueue();
    }
  }
  __name(cleanUpNextTick, "cleanUpNextTick");
  function drainQueue() {
    if (draining) {
      return;
    }
    const timeout = setTimeout(cleanUpNextTick);
    draining = true;
    let len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex]();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = void 0;
    draining = false;
    clearTimeout(timeout);
  }
  __name(drainQueue, "drainQueue");
  const nextTick23 = /* @__PURE__ */ __name((cb, ...args) => {
    queue.push(cb.bind(void 0, ...args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue);
    }
  }, "nextTick2");
  return nextTick23;
}
__name(_createNextTickWithTimeout, "_createNextTickWithTimeout");

// node_modules/unenv/runtime/node/process/internal/process.mjs
var title = "unenv";
var argv = [];
var version = "";
var versions = {
  ares: "",
  http_parser: "",
  icu: "",
  modules: "",
  node: "",
  openssl: "",
  uv: "",
  v8: "",
  zlib: ""
};
function noop() {
  return process2;
}
__name(noop, "noop");
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = /* @__PURE__ */ __name(function emit2(event) {
  if (event === "message" || event === "multipleResolves") {
    return process2;
  }
  return false;
}, "emit2");
var prependListener = noop;
var prependOnceListener = noop;
var listeners = /* @__PURE__ */ __name(function(name) {
  return [];
}, "listeners");
var listenerCount = /* @__PURE__ */ __name(() => 0, "listenerCount");
var binding = /* @__PURE__ */ __name(function(name) {
  throw new Error("[unenv] process.binding is not supported");
}, "binding");
var _cwd = "/";
var cwd = /* @__PURE__ */ __name(function cwd2() {
  return _cwd;
}, "cwd2");
var chdir = /* @__PURE__ */ __name(function chdir2(dir4) {
  _cwd = dir4;
}, "chdir2");
var umask = /* @__PURE__ */ __name(function umask2() {
  return 0;
}, "umask2");
var getegid = /* @__PURE__ */ __name(function getegid2() {
  return 1e3;
}, "getegid2");
var geteuid = /* @__PURE__ */ __name(function geteuid2() {
  return 1e3;
}, "geteuid2");
var getgid = /* @__PURE__ */ __name(function getgid2() {
  return 1e3;
}, "getgid2");
var getuid = /* @__PURE__ */ __name(function getuid2() {
  return 1e3;
}, "getuid2");
var getgroups = /* @__PURE__ */ __name(function getgroups2() {
  return [];
}, "getgroups2");
var getBuiltinModule = /* @__PURE__ */ __name((_name) => void 0, "getBuiltinModule");
var abort = notImplemented("process.abort");
var allowedNodeEnvironmentFlags = /* @__PURE__ */ new Set();
var arch = "";
var argv0 = "";
var config = empty_default;
var connected = false;
var constrainedMemory = /* @__PURE__ */ __name(() => 0, "constrainedMemory");
var availableMemory = /* @__PURE__ */ __name(() => 0, "availableMemory");
var cpuUsage = notImplemented("process.cpuUsage");
var debugPort = 0;
var dlopen = notImplemented("process.dlopen");
var disconnect = noop;
var emitWarning = noop;
var eventNames = notImplemented("process.eventNames");
var execArgv = [];
var execPath = "";
var exit = notImplemented("process.exit");
var features = /* @__PURE__ */ Object.create({
  inspector: void 0,
  debug: void 0,
  uv: void 0,
  ipv6: void 0,
  tls_alpn: void 0,
  tls_sni: void 0,
  tls_ocsp: void 0,
  tls: void 0,
  cached_builtins: void 0
});
var getActiveResourcesInfo = /* @__PURE__ */ __name(() => [], "getActiveResourcesInfo");
var getMaxListeners = notImplemented(
  "process.getMaxListeners"
);
var kill = notImplemented("process.kill");
var memoryUsage = Object.assign(
  () => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }),
  { rss: () => 0 }
);
var pid = 1e3;
var platform = "";
var ppid = 1e3;
var rawListeners = notImplemented(
  "process.rawListeners"
);
var release = /* @__PURE__ */ Object.create({
  name: "",
  lts: "",
  sourceUrl: void 0,
  headersUrl: void 0
});
var report = /* @__PURE__ */ Object.create({
  compact: void 0,
  directory: void 0,
  filename: void 0,
  getReport: notImplemented("process.report.getReport"),
  reportOnFatalError: void 0,
  reportOnSignal: void 0,
  reportOnUncaughtException: void 0,
  signal: void 0,
  writeReport: notImplemented("process.report.writeReport")
});
var resourceUsage = notImplemented(
  "process.resourceUsage"
);
var setegid = notImplemented("process.setegid");
var seteuid = notImplemented("process.seteuid");
var setgid = notImplemented("process.setgid");
var setgroups = notImplemented("process.setgroups");
var setuid = notImplemented("process.setuid");
var setMaxListeners = notImplemented(
  "process.setMaxListeners"
);
var setSourceMapsEnabled = notImplemented("process.setSourceMapsEnabled");
var stdout = proxy_default.__createMock__("process.stdout");
var stderr = proxy_default.__createMock__("process.stderr");
var stdin = proxy_default.__createMock__("process.stdin");
var traceDeprecation = false;
var uptime = /* @__PURE__ */ __name(() => 0, "uptime");
var exitCode = 0;
var setUncaughtExceptionCaptureCallback = notImplemented("process.setUncaughtExceptionCaptureCallback");
var hasUncaughtExceptionCaptureCallback = /* @__PURE__ */ __name(() => false, "hasUncaughtExceptionCaptureCallback");
var sourceMapsEnabled = false;
var loadEnvFile = notImplemented(
  "process.loadEnvFile"
);
var mainModule = void 0;
var permission = {
  has: () => false
};
var channel = {
  ref() {
  },
  unref() {
  }
};
var throwDeprecation = false;
var finalization = {
  register() {
  },
  unregister() {
  },
  registerBeforeExit() {
  }
};
var assert3 = notImplemented("process.assert");
var openStdin = notImplemented("process.openStdin");
var _debugEnd = notImplemented("process._debugEnd");
var _debugProcess = notImplemented("process._debugProcess");
var _fatalException = notImplemented("process._fatalException");
var _getActiveHandles = notImplemented("process._getActiveHandles");
var _getActiveRequests = notImplemented("process._getActiveRequests");
var _kill = notImplemented("process._kill");
var _preload_modules = [];
var _rawDebug = notImplemented("process._rawDebug");
var _startProfilerIdleNotifier = notImplemented(
  "process._startProfilerIdleNotifier"
);
var _stopProfilerIdleNotifier = notImplemented(
  "process.__stopProfilerIdleNotifier"
);
var _tickCallback = notImplemented("process._tickCallback");
var _linkedBinding = notImplemented("process._linkedBinding");
var domain = void 0;
var initgroups = notImplemented("process.initgroups");
var moduleLoadList = [];
var reallyExit = noop;
var _exiting = false;
var _events = [];
var _eventsCount = 0;
var _maxListeners = 0;
var process2 = {
  // @ts-expect-error
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  exitCode,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  throwDeprecation,
  mainModule,
  permission,
  channel,
  arch,
  argv,
  argv0,
  assert: assert3,
  binding,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  openStdin,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions
};

// node_modules/unenv/runtime/node/process/$cloudflare.mjs
var unpatchedGlobalThisProcess = globalThis["process"];
var getBuiltinModule2 = unpatchedGlobalThisProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule2("node:process");
var { env: env2, exit: exit2, nextTick: nextTick2, platform: platform2 } = workerdProcess;
var _process = {
  /**
   * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
   */
  // @ts-expect-error (not typed)
  _debugEnd,
  _debugProcess,
  _events,
  _eventsCount,
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _linkedBinding,
  _maxListeners,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert: assert3,
  availableMemory,
  binding,
  chdir,
  config,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  domain,
  emit,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exit: exit2,
  exitCode,
  features,
  getActiveResourcesInfo,
  getMaxListeners,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime,
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  memoryUsage,
  moduleLoadList,
  off,
  on,
  once,
  openStdin,
  pid,
  platform: platform2,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  reallyExit,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  setUncaughtExceptionCaptureCallback,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  umask,
  uptime,
  version,
  versions,
  /**
   * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
   */
  env: env2,
  getBuiltinModule: getBuiltinModule2,
  nextTick: nextTick2
};
var cloudflare_default2 = _process;

// node_modules/wrangler/_virtual_unenv_global_polyfill-process.js
globalThis.process = cloudflare_default2;

// .wrangler/tmp/pages-Orbm0I/bundledWorker-0.3098038306971853.mjs
import { Writable as Writable2 } from "node:stream";
var __defProp2 = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp2 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value, "__defNormalProp");
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var __esm = /* @__PURE__ */ __name((fn22, res) => /* @__PURE__ */ __name(function __init() {
  return fn22 && (res = (0, fn22[__getOwnPropNames(fn22)[0]])(fn22 = 0)), res;
}, "__init"), "__esm");
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
}, "__export");
var __publicField2 = /* @__PURE__ */ __name((obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
}, "__publicField");
var init_virtual_unenv_global_polyfill_clear_immediate = __esm({
  "../../../node_modules/wrangler/_virtual_unenv_global_polyfill-clear$immediate.js"() {
    init_cloudflare();
    globalThis.clearImmediate = clearImmediateFallback2;
  }
});
function createNotImplementedError2(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError2, "createNotImplementedError");
function notImplemented2(name) {
  const fn22 = /* @__PURE__ */ __name2(() => {
    throw createNotImplementedError2(name);
  }, "fn");
  return Object.assign(fn22, { __unenv__: true });
}
__name(notImplemented2, "notImplemented");
var init_utils = __esm({
  "../../../node_modules/unenv/runtime/_internal/utils.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name2(createNotImplementedError2, "createNotImplementedError");
    __name2(notImplemented2, "notImplemented");
  }
});
var noop_default2;
var init_noop = __esm({
  "../../../node_modules/unenv/runtime/mock/noop.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    noop_default2 = Object.assign(() => {
    }, { __unenv__: true });
  }
});
var Immediate2;
var init_immediate = __esm({
  "../../../node_modules/unenv/runtime/node/timers/internal/immediate.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    Immediate2 = /* @__PURE__ */ __name(class {
      _onImmediate;
      _timeout;
      constructor(callback, args) {
        this._onImmediate = callback;
        if ("setTimeout" in globalThis) {
          this._timeout = setTimeout(callback, 0, ...args);
        } else {
          callback(...args);
        }
      }
      ref() {
        this._timeout?.ref();
        return this;
      }
      unref() {
        this._timeout?.unref();
        return this;
      }
      hasRef() {
        return this._timeout?.hasRef() ?? false;
      }
      [Symbol.dispose]() {
        if ("clearTimeout" in globalThis) {
          clearTimeout(this._timeout);
        }
      }
    }, "Immediate");
    __name2(Immediate2, "Immediate");
  }
});
function setImmediateFallbackPromises2(value) {
  return new Promise((res) => {
    res(value);
  });
}
__name(setImmediateFallbackPromises2, "setImmediateFallbackPromises");
function setImmediateFallback2(callback, ...args) {
  return new Immediate2(callback, args);
}
__name(setImmediateFallback2, "setImmediateFallback");
function clearImmediateFallback2(immediate) {
  immediate?.[Symbol.dispose]();
}
__name(clearImmediateFallback2, "clearImmediateFallback");
var init_set_immediate = __esm({
  "../../../node_modules/unenv/runtime/node/timers/internal/set-immediate.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_immediate();
    __name2(setImmediateFallbackPromises2, "setImmediateFallbackPromises");
    __name2(setImmediateFallback2, "setImmediateFallback");
    setImmediateFallback2.__promisify__ = setImmediateFallbackPromises2;
    __name2(clearImmediateFallback2, "clearImmediateFallback");
  }
});
var init_cloudflare = __esm({
  "../../../node_modules/unenv/runtime/node/timers/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_set_immediate();
  }
});
var init_virtual_unenv_global_polyfill_set_immediate = __esm({
  "../../../node_modules/wrangler/_virtual_unenv_global_polyfill-set$immediate.js"() {
    init_cloudflare();
    globalThis.setImmediate = setImmediateFallback2;
  }
});
function createMock2(name, overrides = {}) {
  fn2.prototype.name = name;
  const props = {};
  return new Proxy(fn2, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock2;
      }
      if (prop === "__unenv__") {
        return true;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock2(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock2(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock2(`[${name}]`);
    },
    // @ts-ignore (ES6-only - removed in ES7)
    // https://github.com/tc39/ecma262/issues/161
    enumerate() {
      return [];
    }
  });
}
__name(createMock2, "createMock");
var fn2;
var proxy_default2;
var init_proxy = __esm({
  "../../../node_modules/unenv/runtime/mock/proxy.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    fn2 = /* @__PURE__ */ __name2(function() {
    }, "fn");
    __name2(createMock2, "createMock");
    proxy_default2 = createMock2("mock");
  }
});
var _console2;
var _ignoreErrors2;
var _stderr2;
var _stdout2;
var log3;
var info3;
var trace3;
var debug3;
var table3;
var error3;
var warn3;
var createTask3;
var assert4;
var clear3;
var count3;
var countReset3;
var dir3;
var dirxml3;
var group3;
var groupEnd3;
var groupCollapsed3;
var profile3;
var profileEnd3;
var time3;
var timeEnd3;
var timeLog3;
var timeStamp3;
var Console2;
var init_console = __esm({
  "../../../node_modules/unenv/runtime/node/console/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    init_noop();
    init_utils();
    init_proxy();
    init_noop();
    _console2 = globalThis.console;
    _ignoreErrors2 = true;
    _stderr2 = new Writable2();
    _stdout2 = new Writable2();
    log3 = _console2?.log ?? noop_default2;
    info3 = _console2?.info ?? log3;
    trace3 = _console2?.trace ?? info3;
    debug3 = _console2?.debug ?? log3;
    table3 = _console2?.table ?? log3;
    error3 = _console2?.error ?? log3;
    warn3 = _console2?.warn ?? error3;
    createTask3 = _console2?.createTask ?? notImplemented2("console.createTask");
    assert4 = notImplemented2("console.assert");
    clear3 = _console2?.clear ?? noop_default2;
    count3 = _console2?.count ?? noop_default2;
    countReset3 = _console2?.countReset ?? noop_default2;
    dir3 = _console2?.dir ?? noop_default2;
    dirxml3 = _console2?.dirxml ?? noop_default2;
    group3 = _console2?.group ?? noop_default2;
    groupEnd3 = _console2?.groupEnd ?? noop_default2;
    groupCollapsed3 = _console2?.groupCollapsed ?? noop_default2;
    profile3 = _console2?.profile ?? noop_default2;
    profileEnd3 = _console2?.profileEnd ?? noop_default2;
    time3 = _console2?.time ?? noop_default2;
    timeEnd3 = _console2?.timeEnd ?? noop_default2;
    timeLog3 = _console2?.timeLog ?? noop_default2;
    timeStamp3 = _console2?.timeStamp ?? noop_default2;
    Console2 = _console2?.Console ?? proxy_default2.__createMock__("console.Console");
  }
});
var workerdConsole2;
var assert22;
var clear22;
var context2;
var count22;
var countReset22;
var createTask22;
var debug22;
var dir22;
var dirxml22;
var error22;
var group22;
var groupCollapsed22;
var groupEnd22;
var info22;
var log22;
var profile22;
var profileEnd22;
var table22;
var time22;
var timeEnd22;
var timeLog22;
var timeStamp22;
var trace22;
var warn22;
var cloudflare_default3;
var init_cloudflare2 = __esm({
  "../../../node_modules/unenv/runtime/node/console/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_console();
    workerdConsole2 = globalThis["console"];
    ({
      assert: assert22,
      clear: clear22,
      context: (
        // @ts-expect-error undocumented public API
        context2
      ),
      count: count22,
      countReset: countReset22,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask22
      ),
      debug: debug22,
      dir: dir22,
      dirxml: dirxml22,
      error: error22,
      group: group22,
      groupCollapsed: groupCollapsed22,
      groupEnd: groupEnd22,
      info: info22,
      log: log22,
      profile: profile22,
      profileEnd: profileEnd22,
      table: table22,
      time: time22,
      timeEnd: timeEnd22,
      timeLog: timeLog22,
      timeStamp: timeStamp22,
      trace: trace22,
      warn: warn22
    } = workerdConsole2);
    Object.assign(workerdConsole2, {
      Console: Console2,
      _ignoreErrors: _ignoreErrors2,
      _stderr: _stderr2,
      _stderrErrorHandler: noop_default2,
      _stdout: _stdout2,
      _stdoutErrorHandler: noop_default2,
      _times: proxy_default2
    });
    cloudflare_default3 = workerdConsole2;
  }
});
var init_virtual_unenv_global_polyfill_console = __esm({
  "../../../node_modules/wrangler/_virtual_unenv_global_polyfill-console.js"() {
    init_cloudflare2();
    globalThis.console = cloudflare_default3;
  }
});
var _supportedEntryTypes2;
var _PerformanceEntry2;
var PerformanceEntry2;
var _PerformanceMark2;
var PerformanceMark2;
var _PerformanceMeasure2;
var PerformanceMeasure2;
var _PerformanceResourceTiming2;
var PerformanceResourceTiming2;
var init_entry = __esm({
  "../../../node_modules/unenv/runtime/web/performance/_entry.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _supportedEntryTypes2 = [
      "event",
      // PerformanceEntry
      "mark",
      // PerformanceMark
      "measure",
      // PerformanceMeasure
      "resource"
      // PerformanceResourceTiming
    ];
    _PerformanceEntry2 = /* @__PURE__ */ __name(class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || performance.now();
        this.detail = options?.detail;
      }
      get duration() {
        return performance.now() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    }, "_PerformanceEntry");
    __name2(_PerformanceEntry2, "_PerformanceEntry");
    PerformanceEntry2 = globalThis.PerformanceEntry || _PerformanceEntry2;
    _PerformanceMark2 = /* @__PURE__ */ __name(class extends _PerformanceEntry2 {
      entryType = "mark";
    }, "_PerformanceMark");
    __name2(_PerformanceMark2, "_PerformanceMark");
    PerformanceMark2 = globalThis.PerformanceMark || _PerformanceMark2;
    _PerformanceMeasure2 = /* @__PURE__ */ __name(class extends _PerformanceEntry2 {
      entryType = "measure";
    }, "_PerformanceMeasure");
    __name2(_PerformanceMeasure2, "_PerformanceMeasure");
    PerformanceMeasure2 = globalThis.PerformanceMeasure || _PerformanceMeasure2;
    _PerformanceResourceTiming2 = /* @__PURE__ */ __name(class extends _PerformanceEntry2 {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    }, "_PerformanceResourceTiming");
    __name2(_PerformanceResourceTiming2, "_PerformanceResourceTiming");
    PerformanceResourceTiming2 = globalThis.PerformanceResourceTiming || _PerformanceResourceTiming2;
  }
});
var _timeOrigin2;
var _Performance2;
var Performance2;
var performance22;
var init_performance = __esm({
  "../../../node_modules/unenv/runtime/web/performance/_performance.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_proxy();
    init_entry();
    _timeOrigin2 = Date.now();
    _Performance2 = /* @__PURE__ */ __name(class {
      __unenv__ = true;
      timeOrigin = _timeOrigin2;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = proxy_default2.__createMock__("PerformanceNavigation");
      timing = proxy_default2.__createMock__("PerformanceTiming");
      onresourcetimingbufferfull = null;
      now() {
        if (globalThis?.performance?.now && this.timeOrigin === _timeOrigin2) {
          return globalThis.performance.now();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter(
          (e) => e.entryType !== "resource" || e.entryType !== "navigation"
        );
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter(
          (e) => e.name === name && (!type || e.entryType === type)
        );
      }
      getEntriesByType(type) {
        return this._entries.filter(
          (e) => e.entryType === type
        );
      }
      mark(name, options) {
        const entry = new _PerformanceMark2(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || performance22.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || performance22.now();
        }
        const entry = new _PerformanceMeasure2(measureName, {
          startTime: start,
          detail: { start, end }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      toJSON() {
        return this;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError2("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError2("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError2("Performance.dispatchEvent");
      }
    }, "_Performance");
    __name2(_Performance2, "_Performance");
    Performance2 = globalThis.Performance || _Performance2;
    performance22 = globalThis.performance || new Performance2();
  }
});
var _PerformanceObserver2;
var PerformanceObserver2;
var _PerformanceObserverEntryList2;
var PerformanceObserverEntryList2;
var init_observer = __esm({
  "../../../node_modules/unenv/runtime/web/performance/_observer.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_utils();
    init_entry();
    _PerformanceObserver2 = /* @__PURE__ */ __name(class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError2("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError2("PerformanceObserver.observe");
      }
    }, "_PerformanceObserver");
    __name2(_PerformanceObserver2, "_PerformanceObserver");
    __publicField2(_PerformanceObserver2, "supportedEntryTypes", _supportedEntryTypes2);
    PerformanceObserver2 = globalThis.PerformanceObserver || _PerformanceObserver2;
    _PerformanceObserverEntryList2 = /* @__PURE__ */ __name(class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    }, "_PerformanceObserverEntryList");
    __name2(_PerformanceObserverEntryList2, "_PerformanceObserverEntryList");
    PerformanceObserverEntryList2 = globalThis.PerformanceObserverEntryList || _PerformanceObserverEntryList2;
  }
});
var init_performance2 = __esm({
  "../../../node_modules/unenv/runtime/web/performance/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance();
    init_observer();
    init_entry();
  }
});
function getGlobal2() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return {};
}
__name(getGlobal2, "getGlobal");
var global_this_default2;
var init_global_this = __esm({
  "../../../node_modules/unenv/runtime/polyfill/global-this.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    __name2(getGlobal2, "getGlobal");
    global_this_default2 = getGlobal2();
  }
});
var performance_default2;
var init_performance3 = __esm({
  "../../../node_modules/unenv/runtime/polyfill/performance.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_performance2();
    init_global_this();
    global_this_default2.performance = global_this_default2.performance || performance22;
    global_this_default2.Performance = global_this_default2.Performance || Performance2;
    global_this_default2.PerformanceEntry = global_this_default2.PerformanceEntry || PerformanceEntry2;
    global_this_default2.PerformanceMark = global_this_default2.PerformanceMark || PerformanceMark2;
    global_this_default2.PerformanceMeasure = global_this_default2.PerformanceMeasure || PerformanceMeasure2;
    global_this_default2.PerformanceObserver = global_this_default2.PerformanceObserver || PerformanceObserver2;
    global_this_default2.PerformanceObserverEntryList = global_this_default2.PerformanceObserverEntryList || PerformanceObserverEntryList2;
    global_this_default2.PerformanceResourceTiming = global_this_default2.PerformanceResourceTiming || PerformanceResourceTiming2;
    performance_default2 = global_this_default2.performance;
  }
});
var init_virtual_unenv_global_polyfill_performance = __esm({
  "../../../node_modules/wrangler/_virtual_unenv_global_polyfill-performance.js"() {
    init_performance3();
    globalThis.performance = performance_default2;
  }
});
var empty_default2;
var init_empty = __esm({
  "../../../node_modules/unenv/runtime/mock/empty.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    empty_default2 = Object.freeze(
      Object.create(null, {
        __unenv__: { get: () => true }
      })
    );
  }
});
var _envShim2;
var _processEnv2;
var _getEnv2;
var env3;
var init_env = __esm({
  "../../../node_modules/unenv/runtime/node/process/internal/env.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _envShim2 = /* @__PURE__ */ Object.create(null);
    _processEnv2 = globalThis.process?.env;
    _getEnv2 = /* @__PURE__ */ __name2((useShim) => _processEnv2 || globalThis.__env__ || (useShim ? _envShim2 : globalThis), "_getEnv");
    env3 = new Proxy(_envShim2, {
      get(_2, prop) {
        const env222 = _getEnv2();
        return env222[prop] ?? _envShim2[prop];
      },
      has(_2, prop) {
        const env222 = _getEnv2();
        return prop in env222 || prop in _envShim2;
      },
      set(_2, prop, value) {
        const env222 = _getEnv2(true);
        env222[prop] = value;
        return true;
      },
      deleteProperty(_2, prop) {
        const env222 = _getEnv2(true);
        delete env222[prop];
        return true;
      },
      ownKeys() {
        const env222 = _getEnv2();
        return Object.keys(env222);
      }
    });
  }
});
function _createNextTickWithTimeout2() {
  let queue = [];
  let draining = false;
  let currentQueue;
  let queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length > 0) {
      queue = [...currentQueue, ...queue];
    } else {
      queueIndex = -1;
    }
    if (queue.length > 0) {
      drainQueue();
    }
  }
  __name(cleanUpNextTick, "cleanUpNextTick");
  __name2(cleanUpNextTick, "cleanUpNextTick");
  function drainQueue() {
    if (draining) {
      return;
    }
    const timeout = setTimeout(cleanUpNextTick);
    draining = true;
    let len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex]();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = void 0;
    draining = false;
    clearTimeout(timeout);
  }
  __name(drainQueue, "drainQueue");
  __name2(drainQueue, "drainQueue");
  const nextTick222 = /* @__PURE__ */ __name2((cb, ...args) => {
    queue.push(cb.bind(void 0, ...args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue);
    }
  }, "nextTick2");
  return nextTick222;
}
__name(_createNextTickWithTimeout2, "_createNextTickWithTimeout");
var hrtime3;
var nextTick3;
var init_time = __esm({
  "../../../node_modules/unenv/runtime/node/process/internal/time.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    hrtime3 = Object.assign(
      /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function hrtime22(startTime) {
        const now = Date.now();
        const seconds = Math.trunc(now / 1e3);
        const nanos = now % 1e3 * 1e6;
        if (startTime) {
          let diffSeconds = seconds - startTime[0];
          let diffNanos = nanos - startTime[0];
          if (diffNanos < 0) {
            diffSeconds = diffSeconds - 1;
            diffNanos = 1e9 + diffNanos;
          }
          return [diffSeconds, diffNanos];
        }
        return [seconds, nanos];
      }, "hrtime2"), "hrtime2"),
      {
        bigint: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function bigint2() {
          return BigInt(Date.now() * 1e6);
        }, "bigint"), "bigint")
      }
    );
    nextTick3 = globalThis.queueMicrotask ? (cb, ...args) => {
      globalThis.queueMicrotask(cb.bind(void 0, ...args));
    } : _createNextTickWithTimeout2();
    __name2(_createNextTickWithTimeout2, "_createNextTickWithTimeout");
  }
});
function noop2() {
  return process22;
}
__name(noop2, "noop");
var title2;
var argv2;
var version2;
var versions2;
var on2;
var addListener2;
var once2;
var off2;
var removeListener2;
var removeAllListeners2;
var emit3;
var prependListener2;
var prependOnceListener2;
var listeners2;
var listenerCount2;
var binding2;
var _cwd2;
var cwd3;
var chdir3;
var umask3;
var getegid3;
var geteuid3;
var getgid3;
var getuid3;
var getgroups3;
var getBuiltinModule3;
var abort2;
var allowedNodeEnvironmentFlags2;
var arch2;
var argv02;
var config2;
var connected2;
var constrainedMemory2;
var availableMemory2;
var cpuUsage2;
var debugPort2;
var dlopen2;
var disconnect2;
var emitWarning2;
var eventNames2;
var execArgv2;
var execPath2;
var exit3;
var features2;
var getActiveResourcesInfo2;
var getMaxListeners2;
var kill2;
var memoryUsage2;
var pid2;
var platform3;
var ppid2;
var rawListeners2;
var release2;
var report2;
var resourceUsage2;
var setegid2;
var seteuid2;
var setgid2;
var setgroups2;
var setuid2;
var setMaxListeners2;
var setSourceMapsEnabled2;
var stdout2;
var stderr2;
var stdin2;
var traceDeprecation2;
var uptime2;
var exitCode2;
var setUncaughtExceptionCaptureCallback2;
var hasUncaughtExceptionCaptureCallback2;
var sourceMapsEnabled2;
var loadEnvFile2;
var mainModule2;
var permission2;
var channel2;
var throwDeprecation2;
var finalization2;
var assert32;
var openStdin2;
var _debugEnd2;
var _debugProcess2;
var _fatalException2;
var _getActiveHandles2;
var _getActiveRequests2;
var _kill2;
var _preload_modules2;
var _rawDebug2;
var _startProfilerIdleNotifier2;
var _stopProfilerIdleNotifier2;
var _tickCallback2;
var _linkedBinding2;
var domain2;
var initgroups2;
var moduleLoadList2;
var reallyExit2;
var _exiting2;
var _events2;
var _eventsCount2;
var _maxListeners2;
var process22;
var init_process = __esm({
  "../../../node_modules/unenv/runtime/node/process/internal/process.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_proxy();
    init_empty();
    init_utils();
    init_env();
    init_time();
    init_time();
    title2 = "unenv";
    argv2 = [];
    version2 = "";
    versions2 = {
      ares: "",
      http_parser: "",
      icu: "",
      modules: "",
      node: "",
      openssl: "",
      uv: "",
      v8: "",
      zlib: ""
    };
    __name2(noop2, "noop");
    on2 = noop2;
    addListener2 = noop2;
    once2 = noop2;
    off2 = noop2;
    removeListener2 = noop2;
    removeAllListeners2 = noop2;
    emit3 = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function emit22(event) {
      if (event === "message" || event === "multipleResolves") {
        return process22;
      }
      return false;
    }, "emit2"), "emit2");
    prependListener2 = noop2;
    prependOnceListener2 = noop2;
    listeners2 = /* @__PURE__ */ __name2(function(name) {
      return [];
    }, "listeners");
    listenerCount2 = /* @__PURE__ */ __name2(() => 0, "listenerCount");
    binding2 = /* @__PURE__ */ __name2(function(name) {
      throw new Error("[unenv] process.binding is not supported");
    }, "binding");
    _cwd2 = "/";
    cwd3 = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function cwd22() {
      return _cwd2;
    }, "cwd2"), "cwd2");
    chdir3 = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function chdir22(dir32) {
      _cwd2 = dir32;
    }, "chdir2"), "chdir2");
    umask3 = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function umask22() {
      return 0;
    }, "umask2"), "umask2");
    getegid3 = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function getegid22() {
      return 1e3;
    }, "getegid2"), "getegid2");
    geteuid3 = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function geteuid22() {
      return 1e3;
    }, "geteuid2"), "geteuid2");
    getgid3 = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function getgid22() {
      return 1e3;
    }, "getgid2"), "getgid2");
    getuid3 = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function getuid22() {
      return 1e3;
    }, "getuid2"), "getuid2");
    getgroups3 = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function getgroups22() {
      return [];
    }, "getgroups2"), "getgroups2");
    getBuiltinModule3 = /* @__PURE__ */ __name2((_name) => void 0, "getBuiltinModule");
    abort2 = notImplemented2("process.abort");
    allowedNodeEnvironmentFlags2 = /* @__PURE__ */ new Set();
    arch2 = "";
    argv02 = "";
    config2 = empty_default2;
    connected2 = false;
    constrainedMemory2 = /* @__PURE__ */ __name2(() => 0, "constrainedMemory");
    availableMemory2 = /* @__PURE__ */ __name2(() => 0, "availableMemory");
    cpuUsage2 = notImplemented2("process.cpuUsage");
    debugPort2 = 0;
    dlopen2 = notImplemented2("process.dlopen");
    disconnect2 = noop2;
    emitWarning2 = noop2;
    eventNames2 = notImplemented2("process.eventNames");
    execArgv2 = [];
    execPath2 = "";
    exit3 = notImplemented2("process.exit");
    features2 = /* @__PURE__ */ Object.create({
      inspector: void 0,
      debug: void 0,
      uv: void 0,
      ipv6: void 0,
      tls_alpn: void 0,
      tls_sni: void 0,
      tls_ocsp: void 0,
      tls: void 0,
      cached_builtins: void 0
    });
    getActiveResourcesInfo2 = /* @__PURE__ */ __name2(() => [], "getActiveResourcesInfo");
    getMaxListeners2 = notImplemented2(
      "process.getMaxListeners"
    );
    kill2 = notImplemented2("process.kill");
    memoryUsage2 = Object.assign(
      () => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }),
      { rss: () => 0 }
    );
    pid2 = 1e3;
    platform3 = "";
    ppid2 = 1e3;
    rawListeners2 = notImplemented2(
      "process.rawListeners"
    );
    release2 = /* @__PURE__ */ Object.create({
      name: "",
      lts: "",
      sourceUrl: void 0,
      headersUrl: void 0
    });
    report2 = /* @__PURE__ */ Object.create({
      compact: void 0,
      directory: void 0,
      filename: void 0,
      getReport: notImplemented2("process.report.getReport"),
      reportOnFatalError: void 0,
      reportOnSignal: void 0,
      reportOnUncaughtException: void 0,
      signal: void 0,
      writeReport: notImplemented2("process.report.writeReport")
    });
    resourceUsage2 = notImplemented2(
      "process.resourceUsage"
    );
    setegid2 = notImplemented2("process.setegid");
    seteuid2 = notImplemented2("process.seteuid");
    setgid2 = notImplemented2("process.setgid");
    setgroups2 = notImplemented2("process.setgroups");
    setuid2 = notImplemented2("process.setuid");
    setMaxListeners2 = notImplemented2(
      "process.setMaxListeners"
    );
    setSourceMapsEnabled2 = notImplemented2("process.setSourceMapsEnabled");
    stdout2 = proxy_default2.__createMock__("process.stdout");
    stderr2 = proxy_default2.__createMock__("process.stderr");
    stdin2 = proxy_default2.__createMock__("process.stdin");
    traceDeprecation2 = false;
    uptime2 = /* @__PURE__ */ __name2(() => 0, "uptime");
    exitCode2 = 0;
    setUncaughtExceptionCaptureCallback2 = notImplemented2("process.setUncaughtExceptionCaptureCallback");
    hasUncaughtExceptionCaptureCallback2 = /* @__PURE__ */ __name2(() => false, "hasUncaughtExceptionCaptureCallback");
    sourceMapsEnabled2 = false;
    loadEnvFile2 = notImplemented2(
      "process.loadEnvFile"
    );
    mainModule2 = void 0;
    permission2 = {
      has: () => false
    };
    channel2 = {
      ref() {
      },
      unref() {
      }
    };
    throwDeprecation2 = false;
    finalization2 = {
      register() {
      },
      unregister() {
      },
      registerBeforeExit() {
      }
    };
    assert32 = notImplemented2("process.assert");
    openStdin2 = notImplemented2("process.openStdin");
    _debugEnd2 = notImplemented2("process._debugEnd");
    _debugProcess2 = notImplemented2("process._debugProcess");
    _fatalException2 = notImplemented2("process._fatalException");
    _getActiveHandles2 = notImplemented2("process._getActiveHandles");
    _getActiveRequests2 = notImplemented2("process._getActiveRequests");
    _kill2 = notImplemented2("process._kill");
    _preload_modules2 = [];
    _rawDebug2 = notImplemented2("process._rawDebug");
    _startProfilerIdleNotifier2 = notImplemented2(
      "process._startProfilerIdleNotifier"
    );
    _stopProfilerIdleNotifier2 = notImplemented2(
      "process.__stopProfilerIdleNotifier"
    );
    _tickCallback2 = notImplemented2("process._tickCallback");
    _linkedBinding2 = notImplemented2("process._linkedBinding");
    domain2 = void 0;
    initgroups2 = notImplemented2("process.initgroups");
    moduleLoadList2 = [];
    reallyExit2 = noop2;
    _exiting2 = false;
    _events2 = [];
    _eventsCount2 = 0;
    _maxListeners2 = 0;
    process22 = {
      // @ts-expect-error
      _events: _events2,
      _eventsCount: _eventsCount2,
      _exiting: _exiting2,
      _maxListeners: _maxListeners2,
      _debugEnd: _debugEnd2,
      _debugProcess: _debugProcess2,
      _fatalException: _fatalException2,
      _getActiveHandles: _getActiveHandles2,
      _getActiveRequests: _getActiveRequests2,
      _kill: _kill2,
      _preload_modules: _preload_modules2,
      _rawDebug: _rawDebug2,
      _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
      _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
      _tickCallback: _tickCallback2,
      domain: domain2,
      initgroups: initgroups2,
      moduleLoadList: moduleLoadList2,
      reallyExit: reallyExit2,
      exitCode: exitCode2,
      abort: abort2,
      addListener: addListener2,
      allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
      hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
      setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
      loadEnvFile: loadEnvFile2,
      sourceMapsEnabled: sourceMapsEnabled2,
      throwDeprecation: throwDeprecation2,
      mainModule: mainModule2,
      permission: permission2,
      channel: channel2,
      arch: arch2,
      argv: argv2,
      argv0: argv02,
      assert: assert32,
      binding: binding2,
      chdir: chdir3,
      config: config2,
      connected: connected2,
      constrainedMemory: constrainedMemory2,
      availableMemory: availableMemory2,
      cpuUsage: cpuUsage2,
      cwd: cwd3,
      debugPort: debugPort2,
      dlopen: dlopen2,
      disconnect: disconnect2,
      emit: emit3,
      emitWarning: emitWarning2,
      env: env3,
      eventNames: eventNames2,
      execArgv: execArgv2,
      execPath: execPath2,
      exit: exit3,
      finalization: finalization2,
      features: features2,
      getBuiltinModule: getBuiltinModule3,
      getegid: getegid3,
      geteuid: geteuid3,
      getgid: getgid3,
      getgroups: getgroups3,
      getuid: getuid3,
      getActiveResourcesInfo: getActiveResourcesInfo2,
      getMaxListeners: getMaxListeners2,
      hrtime: hrtime3,
      kill: kill2,
      listeners: listeners2,
      listenerCount: listenerCount2,
      memoryUsage: memoryUsage2,
      nextTick: nextTick3,
      on: on2,
      off: off2,
      once: once2,
      openStdin: openStdin2,
      pid: pid2,
      platform: platform3,
      ppid: ppid2,
      prependListener: prependListener2,
      prependOnceListener: prependOnceListener2,
      rawListeners: rawListeners2,
      release: release2,
      removeAllListeners: removeAllListeners2,
      removeListener: removeListener2,
      report: report2,
      resourceUsage: resourceUsage2,
      setegid: setegid2,
      seteuid: seteuid2,
      setgid: setgid2,
      setgroups: setgroups2,
      setuid: setuid2,
      setMaxListeners: setMaxListeners2,
      setSourceMapsEnabled: setSourceMapsEnabled2,
      stderr: stderr2,
      stdin: stdin2,
      stdout: stdout2,
      title: title2,
      traceDeprecation: traceDeprecation2,
      umask: umask3,
      uptime: uptime2,
      version: version2,
      versions: versions2
    };
  }
});
var unpatchedGlobalThisProcess2;
var getBuiltinModule22;
var workerdProcess2;
var env22;
var exit22;
var nextTick22;
var platform22;
var _process2;
var cloudflare_default22;
var init_cloudflare3 = __esm({
  "../../../node_modules/unenv/runtime/node/process/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_process();
    unpatchedGlobalThisProcess2 = globalThis["process"];
    getBuiltinModule22 = unpatchedGlobalThisProcess2.getBuiltinModule;
    workerdProcess2 = getBuiltinModule22("node:process");
    ({ env: env22, exit: exit22, nextTick: nextTick22, platform: platform22 } = workerdProcess2);
    _process2 = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      // @ts-expect-error (not typed)
      _debugEnd: _debugEnd2,
      _debugProcess: _debugProcess2,
      _events: _events2,
      _eventsCount: _eventsCount2,
      _exiting: _exiting2,
      _fatalException: _fatalException2,
      _getActiveHandles: _getActiveHandles2,
      _getActiveRequests: _getActiveRequests2,
      _kill: _kill2,
      _linkedBinding: _linkedBinding2,
      _maxListeners: _maxListeners2,
      _preload_modules: _preload_modules2,
      _rawDebug: _rawDebug2,
      _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
      _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
      _tickCallback: _tickCallback2,
      abort: abort2,
      addListener: addListener2,
      allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
      arch: arch2,
      argv: argv2,
      argv0: argv02,
      assert: assert32,
      availableMemory: availableMemory2,
      binding: binding2,
      chdir: chdir3,
      config: config2,
      constrainedMemory: constrainedMemory2,
      cpuUsage: cpuUsage2,
      cwd: cwd3,
      debugPort: debugPort2,
      dlopen: dlopen2,
      domain: domain2,
      emit: emit3,
      emitWarning: emitWarning2,
      eventNames: eventNames2,
      execArgv: execArgv2,
      execPath: execPath2,
      exit: exit22,
      exitCode: exitCode2,
      features: features2,
      getActiveResourcesInfo: getActiveResourcesInfo2,
      getMaxListeners: getMaxListeners2,
      getegid: getegid3,
      geteuid: geteuid3,
      getgid: getgid3,
      getgroups: getgroups3,
      getuid: getuid3,
      hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
      hrtime: hrtime3,
      initgroups: initgroups2,
      kill: kill2,
      listenerCount: listenerCount2,
      listeners: listeners2,
      loadEnvFile: loadEnvFile2,
      memoryUsage: memoryUsage2,
      moduleLoadList: moduleLoadList2,
      off: off2,
      on: on2,
      once: once2,
      openStdin: openStdin2,
      pid: pid2,
      platform: platform22,
      ppid: ppid2,
      prependListener: prependListener2,
      prependOnceListener: prependOnceListener2,
      rawListeners: rawListeners2,
      reallyExit: reallyExit2,
      release: release2,
      removeAllListeners: removeAllListeners2,
      removeListener: removeListener2,
      report: report2,
      resourceUsage: resourceUsage2,
      setMaxListeners: setMaxListeners2,
      setSourceMapsEnabled: setSourceMapsEnabled2,
      setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
      setegid: setegid2,
      seteuid: seteuid2,
      setgid: setgid2,
      setgroups: setgroups2,
      setuid: setuid2,
      sourceMapsEnabled: sourceMapsEnabled2,
      stderr: stderr2,
      stdin: stdin2,
      stdout: stdout2,
      title: title2,
      umask: umask3,
      uptime: uptime2,
      version: version2,
      versions: versions2,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      env: env22,
      getBuiltinModule: getBuiltinModule22,
      nextTick: nextTick22
    };
    cloudflare_default22 = _process2;
  }
});
var init_virtual_unenv_global_polyfill_process = __esm({
  "../../../node_modules/wrangler/_virtual_unenv_global_polyfill-process.js"() {
    init_cloudflare3();
    globalThis.process = cloudflare_default22;
  }
});
var _AsyncLocalStorage;
var AsyncLocalStorage;
var init_async_local_storage = __esm({
  "../../../node_modules/unenv/runtime/node/async_hooks/internal/async-local-storage.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _AsyncLocalStorage = /* @__PURE__ */ __name(class {
      __unenv__ = true;
      _currentStore;
      _enterStore;
      _enabled = true;
      getStore() {
        return this._currentStore ?? this._enterStore;
      }
      disable() {
        this._enabled = false;
      }
      enable() {
        this._enabled = true;
      }
      enterWith(store) {
        this._enterStore = store;
      }
      run(store, callback, ...args) {
        this._currentStore = store;
        const res = callback(...args);
        this._currentStore = void 0;
        return res;
      }
      exit(callback, ...args) {
        const _previousStore = this._currentStore;
        this._currentStore = void 0;
        const res = callback(...args);
        this._currentStore = _previousStore;
        return res;
      }
      static snapshot() {
        throw new Error("[unenv] `AsyncLocalStorage.snapshot` is not implemented!");
      }
    }, "_AsyncLocalStorage");
    __name2(_AsyncLocalStorage, "_AsyncLocalStorage");
    AsyncLocalStorage = globalThis.AsyncLocalStorage || _AsyncLocalStorage;
  }
});
var async_hook_exports = {};
__export(async_hook_exports, {
  AsyncHook: () => AsyncHook,
  asyncWrapProviders: () => asyncWrapProviders,
  createHook: () => createHook,
  executionAsyncId: () => executionAsyncId,
  executionAsyncResource: () => executionAsyncResource,
  triggerAsyncId: () => triggerAsyncId
});
var _AsyncHook;
var AsyncHook;
var createHook;
var executionAsyncId;
var executionAsyncResource;
var triggerAsyncId;
var asyncWrapProviders;
var init_async_hook = __esm({
  "../../../node_modules/unenv/runtime/node/async_hooks/internal/async-hook.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    _AsyncHook = /* @__PURE__ */ __name(class {
      __unenv__ = true;
      _enabled = false;
      _callbacks = {};
      constructor(callbacks = {}) {
        this._callbacks = callbacks;
      }
      enable() {
        this._enabled = true;
        return this;
      }
      disable() {
        this._enabled = false;
        return this;
      }
      init(asyncId, type, triggerAsyncId2, resource) {
        if (this._enabled && this._callbacks.init) {
          this._callbacks.init(asyncId, type, triggerAsyncId2, resource);
        }
      }
      before(asyncId) {
        if (this._enabled && this._callbacks.before) {
          this._callbacks.before(asyncId);
        }
      }
      after(asyncId) {
        if (this._enabled && this._callbacks.after) {
          this._callbacks.after(asyncId);
        }
      }
      destroy(asyncId) {
        if (this._enabled && this._callbacks.destroy) {
          this._callbacks.destroy(asyncId);
        }
      }
      promiseResolve(asyncId) {
        if (this._enabled && this._callbacks.promiseResolve) {
          this._callbacks.promiseResolve(asyncId);
        }
      }
    }, "_AsyncHook");
    __name2(_AsyncHook, "_AsyncHook");
    AsyncHook = globalThis.AsyncHook || _AsyncHook;
    createHook = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function createHook2(callbacks) {
      const asyncHook = new _AsyncHook(callbacks);
      return asyncHook;
    }, "createHook2"), "createHook2");
    executionAsyncId = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function executionAsyncId2() {
      return 0;
    }, "executionAsyncId2"), "executionAsyncId2");
    executionAsyncResource = /* @__PURE__ */ __name2(function() {
      return /* @__PURE__ */ Object.create(null);
    }, "executionAsyncResource");
    triggerAsyncId = /* @__PURE__ */ __name2(function() {
      return 0;
    }, "triggerAsyncId");
    asyncWrapProviders = Object.assign(/* @__PURE__ */ Object.create(null), {
      NONE: 0,
      DIRHANDLE: 1,
      DNSCHANNEL: 2,
      ELDHISTOGRAM: 3,
      FILEHANDLE: 4,
      FILEHANDLECLOSEREQ: 5,
      BLOBREADER: 6,
      FSEVENTWRAP: 7,
      FSREQCALLBACK: 8,
      FSREQPROMISE: 9,
      GETADDRINFOREQWRAP: 10,
      GETNAMEINFOREQWRAP: 11,
      HEAPSNAPSHOT: 12,
      HTTP2SESSION: 13,
      HTTP2STREAM: 14,
      HTTP2PING: 15,
      HTTP2SETTINGS: 16,
      HTTPINCOMINGMESSAGE: 17,
      HTTPCLIENTREQUEST: 18,
      JSSTREAM: 19,
      JSUDPWRAP: 20,
      MESSAGEPORT: 21,
      PIPECONNECTWRAP: 22,
      PIPESERVERWRAP: 23,
      PIPEWRAP: 24,
      PROCESSWRAP: 25,
      PROMISE: 26,
      QUERYWRAP: 27,
      QUIC_ENDPOINT: 28,
      QUIC_LOGSTREAM: 29,
      QUIC_PACKET: 30,
      QUIC_SESSION: 31,
      QUIC_STREAM: 32,
      QUIC_UDP: 33,
      SHUTDOWNWRAP: 34,
      SIGNALWRAP: 35,
      STATWATCHER: 36,
      STREAMPIPE: 37,
      TCPCONNECTWRAP: 38,
      TCPSERVERWRAP: 39,
      TCPWRAP: 40,
      TTYWRAP: 41,
      UDPSENDWRAP: 42,
      UDPWRAP: 43,
      SIGINTWATCHDOG: 44,
      WORKER: 45,
      WORKERHEAPSNAPSHOT: 46,
      WRITEWRAP: 47,
      ZLIB: 48,
      CHECKPRIMEREQUEST: 49,
      PBKDF2REQUEST: 50,
      KEYPAIRGENREQUEST: 51,
      KEYGENREQUEST: 52,
      KEYEXPORTREQUEST: 53,
      CIPHERREQUEST: 54,
      DERIVEBITSREQUEST: 55,
      HASHREQUEST: 56,
      RANDOMBYTESREQUEST: 57,
      RANDOMPRIMEREQUEST: 58,
      SCRYPTREQUEST: 59,
      SIGNREQUEST: 60,
      TLSWRAP: 61,
      VERIFYREQUEST: 62
    });
  }
});
var _asyncIdCounter;
var _AsyncResource;
var AsyncResource;
var init_async_resource = __esm({
  "../../../node_modules/unenv/runtime/node/async_hooks/internal/async-resource.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_async_hook();
    _asyncIdCounter = 100;
    _AsyncResource = /* @__PURE__ */ __name(class {
      __unenv__ = true;
      type;
      _asyncId;
      _triggerAsyncId;
      constructor(type, triggerAsyncId2 = executionAsyncId()) {
        this.type = type;
        this._asyncId = -1 * _asyncIdCounter++;
        this._triggerAsyncId = typeof triggerAsyncId2 === "number" ? triggerAsyncId2 : triggerAsyncId2?.triggerAsyncId;
      }
      static bind(fn22, type, thisArg) {
        const resource = new AsyncResource(type ?? "anonymous");
        return resource.bind(fn22);
      }
      bind(fn22, thisArg) {
        const binded = /* @__PURE__ */ __name2((...args) => this.runInAsyncScope(fn22, thisArg, ...args), "binded");
        binded.asyncResource = this;
        return binded;
      }
      runInAsyncScope(fn22, thisArg, ...args) {
        const result = fn22.apply(thisArg, args);
        return result;
      }
      emitDestroy() {
        return this;
      }
      asyncId() {
        return this._asyncId;
      }
      triggerAsyncId() {
        return this._triggerAsyncId;
      }
    }, "_AsyncResource");
    __name2(_AsyncResource, "_AsyncResource");
    AsyncResource = globalThis.AsyncResource || _AsyncResource;
  }
});
var async_hooks_default;
var init_async_hooks = __esm({
  "../../../node_modules/unenv/runtime/node/async_hooks/index.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_async_local_storage();
    init_async_resource();
    init_async_hook();
    init_async_hook();
    async_hooks_default = {
      AsyncLocalStorage,
      AsyncResource,
      ...async_hook_exports
    };
  }
});
var cloudflare_exports = {};
__export(cloudflare_exports, {
  AsyncLocalStorage: () => AsyncLocalStorage2,
  AsyncResource: () => AsyncResource2,
  asyncWrapProviders: () => asyncWrapProviders,
  createHook: () => createHook,
  default: () => cloudflare_default32,
  executionAsyncId: () => executionAsyncId,
  executionAsyncResource: () => executionAsyncResource,
  triggerAsyncId: () => triggerAsyncId
});
var workerdAsyncHooks;
var AsyncLocalStorage2;
var AsyncResource2;
var cloudflare_default32;
var init_cloudflare4 = __esm({
  "../../../node_modules/unenv/runtime/node/async_hooks/$cloudflare.mjs"() {
    init_virtual_unenv_global_polyfill_process();
    init_virtual_unenv_global_polyfill_performance();
    init_virtual_unenv_global_polyfill_console();
    init_virtual_unenv_global_polyfill_set_immediate();
    init_virtual_unenv_global_polyfill_clear_immediate();
    init_async_hooks();
    init_async_hooks();
    workerdAsyncHooks = process.getBuiltinModule("node:async_hooks");
    ({ AsyncLocalStorage: AsyncLocalStorage2, AsyncResource: AsyncResource2 } = workerdAsyncHooks);
    cloudflare_default32 = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      // @ts-expect-error @types/node is missing this one - this is a bug in typings
      asyncWrapProviders,
      createHook,
      executionAsyncId,
      executionAsyncResource,
      triggerAsyncId,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      AsyncLocalStorage: AsyncLocalStorage2,
      AsyncResource: AsyncResource2
    };
  }
});
init_virtual_unenv_global_polyfill_process();
init_virtual_unenv_global_polyfill_performance();
init_virtual_unenv_global_polyfill_console();
init_virtual_unenv_global_polyfill_set_immediate();
init_virtual_unenv_global_polyfill_clear_immediate();
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = Promise.resolve().then(() => (init_cloudflare4(), cloudflare_exports)).then(({ AsyncLocalStorage: AsyncLocalStorage3 }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage3;
  const envAsyncLocalStorage = new AsyncLocalStorage3();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage3();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var is = Object.create;
var H = Object.defineProperty;
var as = Object.getOwnPropertyDescriptor;
var es = Object.getOwnPropertyNames;
var ns = Object.getPrototypeOf;
var cs = Object.prototype.hasOwnProperty;
var E = /* @__PURE__ */ __name2((s, t) => () => (s && (t = s(s = 0)), t), "E");
var N = /* @__PURE__ */ __name2((s, t) => () => (t || s((t = { exports: {} }).exports, t), t.exports), "N");
var os = /* @__PURE__ */ __name2((s, t, a, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of es(t))
      !cs.call(s, n) && n !== a && H(s, n, { get: () => t[n], enumerable: !(i = as(t, n)) || i.enumerable });
  return s;
}, "os");
var U = /* @__PURE__ */ __name2((s, t, a) => (a = s != null ? is(ns(s)) : {}, os(t || !s || !s.__esModule ? H(a, "default", { value: s, enumerable: true }) : a, s)), "U");
var h;
var r = E(() => {
  h = { collectedLocales: [] };
});
var w;
var y = E(() => {
  w = { version: 3, routes: { none: [{ src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true }, { src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308 }], filesystem: [{ src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/_next/data/(.*)$", status: 404 }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|E3IuNthG\\-8LegPSdAqcoF)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }], error: [{ status: 404, src: "^.*$", dest: "/404" }] }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "all-casinos.html": { path: "all-casinos", contentType: "text/html; charset=utf-8" }, "index.html": { path: "index", contentType: "text/html; charset=utf-8" } }, framework: { version: "14.1.0" }, crons: [] };
});
var d;
var g = E(() => {
  d = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/Bonus kingdoms logo liten.png": { type: "static" }, "/_next/static/E3IuNthG-8LegPSdAqcoF/_buildManifest.js": { type: "static" }, "/_next/static/E3IuNthG-8LegPSdAqcoF/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/647-c77facdb43b6d12d.js": { type: "static" }, "/_next/static/chunks/69-c7efea4b65083e7f.js": { type: "static" }, "/_next/static/chunks/app/all-casinos/page-bcc4731ce3ce5ab8.js": { type: "static" }, "/_next/static/chunks/app/layout-06d9f711891f908d.js": { type: "static" }, "/_next/static/chunks/app/not-found-d1460cbfb60d596c.js": { type: "static" }, "/_next/static/chunks/app/page-631371f55d289a83.js": { type: "static" }, "/_next/static/chunks/fd9d1056-cc48c28d170fddc2.js": { type: "static" }, "/_next/static/chunks/framework-f66176bb897dc684.js": { type: "static" }, "/_next/static/chunks/main-50fb44b9c417ff6d.js": { type: "static" }, "/_next/static/chunks/main-app-15007fbdffd2bda9.js": { type: "static" }, "/_next/static/chunks/pages/_app-75f6107b0260711c.js": { type: "static" }, "/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js": { type: "static" }, "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js": { type: "static" }, "/_next/static/chunks/webpack-a574d9f61bfd46f2.js": { type: "static" }, "/_next/static/css/99fbaa5f409f0e80.css": { type: "static" }, "/_next/static/media/26a46d62cd723877-s.woff2": { type: "static" }, "/_next/static/media/55c55f0601d81cf3-s.woff2": { type: "static" }, "/_next/static/media/581909926a08bbc8-s.woff2": { type: "static" }, "/_next/static/media/6d93bde91c0c2823-s.woff2": { type: "static" }, "/_next/static/media/97e0cb1ae144a2a9-s.woff2": { type: "static" }, "/_next/static/media/a34f9d1faa5f3315-s.p.woff2": { type: "static" }, "/_next/static/media/df0a9ae256c0569c-s.woff2": { type: "static" }, "/all-casinos.html": { type: "override", path: "/all-casinos.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/all-casinos.txt": { type: "static" }, "/bk-logo-stor.png": { type: "static" }, "/bonus-kingdoms-logo.png": { type: "static" }, "/casinos/10betcasino.png": { type: "static" }, "/casinos/11crococasino.png": { type: "static" }, "/casinos/12playcasino.png": { type: "static" }, "/casinos/1betcasino.png": { type: "static" }, "/casinos/1gocasino.png": { type: "static" }, "/casinos/1redcasino.png": { type: "static" }, "/casinos/1wincasino.png": { type: "static" }, "/casinos/1xbetcasino.png": { type: "static" }, "/casinos/1xslotscasino.png": { type: "static" }, "/casinos/20betcasino.png": { type: "static" }, "/casinos/21betscasino.png": { type: "static" }, "/casinos/21betsiocasino.png": { type: "static" }, "/casinos/21bitcasino.png": { type: "static" }, "/casinos/21dukescasino.png": { type: "static" }, "/casinos/22betcasino.png": { type: "static" }, "/casinos/24casino.png": { type: "static" }, "/casinos/24slotscasino.png": { type: "static" }, "/casinos/30betcasino.png": { type: "static" }, "/casinos/31betcomcasino.png": { type: "static" }, "/casinos/321cryptocasino.png": { type: "static" }, "/casinos/3dicecasino.png": { type: "static" }, "/casinos/4kasinocasino.png": { type: "static" }, "/casinos/500casino.png": { type: "static" }, "/casinos/50crownscasino.png": { type: "static" }, "/casinos/55betcasino.png": { type: "static" }, "/casinos/5gringoscasino.png": { type: "static" }, "/casinos/77spinscasino.png": { type: "static" }, "/casinos/7bitcasino.png": { type: "static" }, "/casinos/7reelscasino.png": { type: "static" }, "/casinos/7signscasino.png": { type: "static" }, "/casinos/888starzcasino.png": { type: "static" }, "/casinos/8xwinscasino.png": { type: "static" }, "/casinos/9winzcasino.png": { type: "static" }, "/casinos/airbetcasino.png": { type: "static" }, "/casinos/alexandercasino.png": { type: "static" }, "/casinos/alfcasino.png": { type: "static" }, "/casinos/allrightcasino.png": { type: "static" }, "/casinos/allslotscasino.png": { type: "static" }, "/casinos/allspinscasino.png": { type: "static" }, "/casinos/allstarzcasino.png": { type: "static" }, "/casinos/ameriobetcasino.png": { type: "static" }, "/casinos/amunracasino.png": { type: "static" }, "/casinos/anarchycasino.png": { type: "static" }, "/casinos/aplaycasino.png": { type: "static" }, "/casinos/arcanebetcasino.png": { type: "static" }, "/casinos/artcasino.png": { type: "static" }, "/casinos/asinocasino.png": { type: "static" }, "/casinos/aufcasino.png": { type: "static" }, "/casinos/avocasino.png": { type: "static" }, "/casinos/awbitcasino.png": { type: "static" }, "/casinos/axecasino.png": { type: "static" }, "/casinos/badshahcriccasino.png": { type: "static" }, "/casinos/bahigocasino.png": { type: "static" }, "/casinos/bankonbetcasino.png": { type: "static" }, "/casinos/banzaibet.png": { type: "static" }, "/casinos/baterybetcasino.png": { type: "static" }, "/casinos/baterywincasino.png": { type: "static" }, "/casinos/bcgamecasino.png": { type: "static" }, "/casinos/bdmbetcasino.png": { type: "static" }, "/casinos/beastinocasino.png": { type: "static" }, "/casinos/bellavegascasino.png": { type: "static" }, "/casinos/bet24starcasino.png": { type: "static" }, "/casinos/betadorcasino.png": { type: "static" }, "/casinos/betandplaycasino.png": { type: "static" }, "/casinos/betandyoucasino.png": { type: "static" }, "/casinos/betbeastcasino.png": { type: "static" }, "/casinos/betboomcasino.png": { type: "static" }, "/casinos/betcgcasino.png": { type: "static" }, "/casinos/betchaincasino.png": { type: "static" }, "/casinos/betcoincasino.png": { type: "static" }, "/casinos/beteumcasino.png": { type: "static" }, "/casinos/betfinalcasino.png": { type: "static" }, "/casinos/betflarecasino.png": { type: "static" }, "/casinos/betfreecasino.png": { type: "static" }, "/casinos/betfurycasino.png": { type: "static" }, "/casinos/betgrwcasino.png": { type: "static" }, "/casinos/betibetcasino.png": { type: "static" }, "/casinos/betifycasino.png": { type: "static" }, "/casinos/betifymecasino.png": { type: "static" }, "/casinos/betitallcasino.png": { type: "static" }, "/casinos/betmartinicasino.png": { type: "static" }, "/casinos/betmastercasino.png": { type: "static" }, "/casinos/betmaximuscasino.png": { type: "static" }, "/casinos/betnoxcasino.png": { type: "static" }, "/casinos/betobetcasino.png": { type: "static" }, "/casinos/betonlinecasino.png": { type: "static" }, "/casinos/betonredcasino.png": { type: "static" }, "/casinos/betovixcasino.png": { type: "static" }, "/casinos/betovocasino.png": { type: "static" }, "/casinos/betpandaiocasino.png": { type: "static" }, "/casinos/betplayscasino.png": { type: "static" }, "/casinos/betroom24casino.png": { type: "static" }, "/casinos/betrunnercasino.png": { type: "static" }, "/casinos/betsiocasino.png": { type: "static" }, "/casinos/betsofacasino.png": { type: "static" }, "/casinos/betsomniacasino.png": { type: "static" }, "/casinos/betssencasino.png": { type: "static" }, "/casinos/betswapcasino.png": { type: "static" }, "/casinos/betticasino.png": { type: "static" }, "/casinos/bettiltcasino.png": { type: "static" }, "/casinos/betwinnercasino.png": { type: "static" }, "/casinos/betybetcasino.png": { type: "static" }, "/casinos/betzardcasino.png": { type: "static" }, "/casinos/betzinocasino.png": { type: "static" }, "/casinos/billybetscasino.png": { type: "static" }, "/casinos/billybillioncasino.png": { type: "static" }, "/casinos/bingocafecasino.png": { type: "static" }, "/casinos/bingolinercasino.png": { type: "static" }, "/casinos/bitbet24casino.png": { type: "static" }, "/casinos/bitcasinoio.png": { type: "static" }, "/casinos/bitcoincasino.png": { type: "static" }, "/casinos/bitcoincomgamescasino.png": { type: "static" }, "/casinos/bitcoingamescasino.png": { type: "static" }, "/casinos/bitdreamscasino.png": { type: "static" }, "/casinos/bitkingzcasino.png": { type: "static" }, "/casinos/bitslercasino.png": { type: "static" }, "/casinos/bitstarzcasino.png": { type: "static" }, "/casinos/bitstrikeiocasino.png": { type: "static" }, "/casinos/bitvegasiocasino.png": { type: "static" }, "/casinos/bizzocasino.png": { type: "static" }, "/casinos/bk8casino.png": { type: "static" }, "/casinos/blackdiamondcasino.png": { type: "static" }, "/casinos/blacklioncasino.png": { type: "static" }, "/casinos/blacklotuscasino.png": { type: "static" }, "/casinos/blazecasino.png": { type: "static" }, "/casinos/blitz-betcasino.png": { type: "static" }, "/casinos/blizzcasino.png": { type: "static" }, "/casinos/bluechipcasino.png": { type: "static" }, "/casinos/blueleocasino.png": { type: "static" }, "/casinos/bluffbetcasino.png": { type: "static" }, "/casinos/bmbetcasino.png": { type: "static" }, "/casinos/boaboacasino.png": { type: "static" }, "/casinos/bodogcasino.png": { type: "static" }, "/casinos/bohocasino.png": { type: "static" }, "/casinos/bombasticcasino.png": { type: "static" }, "/casinos/bonanzinocasino.png": { type: "static" }, "/casinos/bongocasino.png": { type: "static" }, "/casinos/bonscasino.png": { type: "static" }, "/casinos/booicasino.png": { type: "static" }, "/casinos/boomerang-betcasino.png": { type: "static" }, "/casinos/boomerang-betiocasino.png": { type: "static" }, "/casinos/boomerangcasino.png": { type: "static" }, "/casinos/box24casino.png": { type: "static" }, "/casinos/brangocasino.png": { type: "static" }, "/casinos/brazino777casino.png": { type: "static" }, "/casinos/brucebetcasino.png": { type: "static" }, "/casinos/bspiniocasino.png": { type: "static" }, "/casinos/btc365casino.png": { type: "static" }, "/casinos/bullcasino.png": { type: "static" }, "/casinos/bullrunbetscasino.png": { type: "static" }, "/casinos/bullsbetcasino.png": { type: "static" }, "/casinos/burancasino.png": { type: "static" }, "/casinos/burningbetcasino.png": { type: "static" }, "/casinos/buumicasino.png": { type: "static" }, "/casinos/cabarinocasino.png": { type: "static" }, "/casinos/cadabruscasino.png": { type: "static" }, "/casinos/cadoolacasino.png": { type: "static" }, "/casinos/caibocasino.png": { type: "static" }, "/casinos/campeonbetcasino.png": { type: "static" }, "/casinos/captaincookscasino.png": { type: "static" }, "/casinos/casabetcasino.png": { type: "static" }, "/casinos/cashedcasino.png": { type: "static" }, "/casinos/cashwincasino.png": { type: "static" }, "/casinos/casibeecasino.png": { type: "static" }, "/casinos/casinadocasino.png": { type: "static" }, "/casinos/casiniacasino.png": { type: "static" }, "/casinos/casinoadrenaline.png": { type: "static" }, "/casinos/casinobello.png": { type: "static" }, "/casinos/casinobetcasino.png": { type: "static" }, "/casinos/casinochan.png": { type: "static" }, "/casinos/casinodays.png": { type: "static" }, "/casinos/casinoestrella.png": { type: "static" }, "/casinos/casinoextra.png": { type: "static" }, "/casinos/casinoextreme.png": { type: "static" }, "/casinos/casinofriday.png": { type: "static" }, "/casinos/casinoin.png": { type: "static" }, "/casinos/casinoinfinity.png": { type: "static" }, "/casinos/casinojax.png": { type: "static" }, "/casinos/casinolycasino.png": { type: "static" }, "/casinos/casinomidas.png": { type: "static" }, "/casinos/casinomoons.png": { type: "static" }, "/casinos/casinomustang.png": { type: "static" }, "/casinos/casinoniccasino.png": { type: "static" }, "/casinos/casinoorca.png": { type: "static" }, "/casinos/casinorocket.png": { type: "static" }, "/casinos/casinosecret.png": { type: "static" }, "/casinos/casinosky.png": { type: "static" }, "/casinos/casinostarsio.png": { type: "static" }, "/casinos/casinostriker.png": { type: "static" }, "/casinos/casinotogether.png": { type: "static" }, "/casinos/casinovacasino.png": { type: "static" }, "/casinos/casinovibes.png": { type: "static" }, "/casinos/casinox.png": { type: "static" }, "/casinos/casinozercasino.png": { type: "static" }, "/casinos/casinycasino.png": { type: "static" }, "/casinos/casitabicasino.png": { type: "static" }, "/casinos/casoocasino.png": { type: "static" }, "/casinos/catcasino.png": { type: "static" }, "/casinos/caz-wincasino.png": { type: "static" }, "/casinos/cazimbocasino.png": { type: "static" }, "/casinos/chancerbetcasino.png": { type: "static" }, "/casinos/cherryspinscasino.png": { type: "static" }, "/casinos/chipstarscasino.png": { type: "static" }, "/casinos/cleopatracasino.png": { type: "static" }, "/casinos/cloudbetcasino.png": { type: "static" }, "/casinos/clubrichescasino.png": { type: "static" }, "/casinos/cobracasino.png": { type: "static" }, "/casinos/coinplaycasino.png": { type: "static" }, "/casinos/coinsgamecasino.png": { type: "static" }, "/casinos/comeoncasino.png": { type: "static" }, "/casinos/conquestadorcasino.png": { type: "static" }, "/casinos/coolzinocasino.png": { type: "static" }, "/casinos/corgislotcasino.png": { type: "static" }, "/casinos/cosmicslotcasino.png": { type: "static" }, "/casinos/cosmobetcasino.png": { type: "static" }, "/casinos/cosmoswincasino.png": { type: "static" }, "/casinos/crashinocasino.png": { type: "static" }, "/casinos/cricbabacasino.png": { type: "static" }, "/casinos/crocoslotscasino.png": { type: "static" }, "/casinos/crownplaycasino.png": { type: "static" }, "/casinos/crownslotscasino.png": { type: "static" }, "/casinos/crusinocasino.png": { type: "static" }, "/casinos/cryptobosscasino(1).png": { type: "static" }, "/casinos/cryptobosscasino.png": { type: "static" }, "/casinos/cryptogamesiocasino.png": { type: "static" }, "/casinos/cryptoleocasino.png": { type: "static" }, "/casinos/cryptorinocasino.png": { type: "static" }, "/casinos/cryptorushcasino.png": { type: "static" }, "/casinos/cryptoslotscasino.png": { type: "static" }, "/casinos/cryptowildcasino.png": { type: "static" }, "/casinos/cyberbetcasino.png": { type: "static" }, "/casinos/dachbetcasino.png": { type: "static" }, "/casinos/daddycasino.png": { type: "static" }, "/casinos/dailyspinscasino.png": { type: "static" }, "/casinos/dazardbetcasino.png": { type: "static" }, "/casinos/dazardcasino.png": { type: "static" }, "/casinos/dedprzcasino.png": { type: "static" }, "/casinos/delorocasino.png": { type: "static" }, "/casinos/dingdingdingcasino.png": { type: "static" }, "/casinos/divasluckcasino.png": { type: "static" }, "/casinos/dolfwincasino.png": { type: "static" }, "/casinos/dollycasino.png": { type: "static" }, "/casinos/dreambetcasino.png": { type: "static" }, "/casinos/dreamwinscasino.png": { type: "static" }, "/casinos/driftcasino.png": { type: "static" }, "/casinos/dripcasino.png": { type: "static" }, "/casinos/dublinbetcasino.png": { type: "static" }, "/casinos/dublzcasino.png": { type: "static" }, "/casinos/duckdicecasino.png": { type: "static" }, "/casinos/duelbitscasino.png": { type: "static" }, "/casinos/dundeeslotscasino.png": { type: "static" }, "/casinos/emirbetcasino.png": { type: "static" }, "/casinos/empireiocasino.png": { type: "static" }, "/casinos/emucasino.png": { type: "static" }, "/casinos/epicbetcasino.png": { type: "static" }, "/casinos/everumcasino.png": { type: "static" }, "/casinos/evobetcasino.png": { type: "static" }, "/casinos/evoiocasino.png": { type: "static" }, "/casinos/excitewincasino.png": { type: "static" }, "/casinos/extravegascasino.png": { type: "static" }, "/casinos/f12betcasino.png": { type: "static" }, "/casinos/fairspincasino.png": { type: "static" }, "/casinos/fansportcasino.png": { type: "static" }, "/casinos/fatbosscasino.png": { type: "static" }, "/casinos/fatfruitcasino.png": { type: "static" }, "/casinos/fatpandacasino.png": { type: "static" }, "/casinos/fatpiratecasino.png": { type: "static" }, "/casinos/fcmooncasino.png": { type: "static" }, "/casinos/felixspincasino.png": { type: "static" }, "/casinos/fezbetcasino.png": { type: "static" }, "/casinos/fgfoxcasino.png": { type: "static" }, "/casinos/firespincasino.png": { type: "static" }, "/casinos/flamingcasino.png": { type: "static" }, "/casinos/flappycasino.png": { type: "static" }, "/casinos/flukyonecasino.png": { type: "static" }, "/casinos/flushcasino.png": { type: "static" }, "/casinos/fortunejackcasino.png": { type: "static" }, "/casinos/fortunepandacasino.png": { type: "static" }, "/casinos/fortuneplaycasino.png": { type: "static" }, "/casinos/freedomcasino.png": { type: "static" }, "/casinos/freespincasino.png": { type: "static" }, "/casinos/freshbetcasino.png": { type: "static" }, "/casinos/freshcasino.png": { type: "static" }, "/casinos/fruits4realcasino.png": { type: "static" }, "/casinos/frumzicasino.png": { type: "static" }, "/casinos/funbetcasino.png": { type: "static" }, "/casinos/futureplaycasino.png": { type: "static" }, "/casinos/futuriticasino.png": { type: "static" }, "/casinos/galaxybetcasino.png": { type: "static" }, "/casinos/gamacasino.png": { type: "static" }, "/casinos/gamblezencasino.png": { type: "static" }, "/casinos/gamdomcasino.png": { type: "static" }, "/casinos/gamixbetcasino.png": { type: "static" }, "/casinos/gamixcasino.png": { type: "static" }, "/casinos/gangstacasino.png": { type: "static" }, "/casinos/gate777casino.png": { type: "static" }, "/casinos/gembetcasino.png": { type: "static" }, "/casinos/geniejackpotcasino.png": { type: "static" }, "/casinos/genieplaycasino.png": { type: "static" }, "/casinos/getluckycasino.png": { type: "static" }, "/casinos/getslotscasino.png": { type: "static" }, "/casinos/ggbetcasino.png": { type: "static" }, "/casinos/gizbocasino.png": { type: "static" }, "/casinos/godbunnycasino.png": { type: "static" }, "/casinos/goldenbetcasino.png": { type: "static" }, "/casinos/goldencrowncasino.png": { type: "static" }, "/casinos/goldenpandacasino.png": { type: "static" }, "/casinos/goldenstarcasino.png": { type: "static" }, "/casinos/goldentigercasino.png": { type: "static" }, "/casinos/goldspincasino.png": { type: "static" }, "/casinos/gomblingocasino.png": { type: "static" }, "/casinos/goodmancasino.png": { type: "static" }, "/casinos/goralbetcasino.png": { type: "static" }, "/casinos/gospincasino.png": { type: "static" }, "/casinos/grandwincasino.png": { type: "static" }, "/casinos/gransinocasino.png": { type: "static" }, "/casinos/greatspincasino.png": { type: "static" }, "/casinos/greatwincasino.png": { type: "static" }, "/casinos/greenspinbetcasino.png": { type: "static" }, "/casinos/gudarcasino.png": { type: "static" }, "/casinos/gunsbetcasino.png": { type: "static" }, "/casinos/gxmblecasino.png": { type: "static" }, "/casinos/happyhugocasino.png": { type: "static" }, "/casinos/happyslotscasino.png": { type: "static" }, "/casinos/happyspinscasino.png": { type: "static" }, "/casinos/hashluckycasino.png": { type: "static" }, "/casinos/hazcasino.png": { type: "static" }, "/casinos/heatscasino.png": { type: "static" }, "/casinos/helabetcasino.png": { type: "static" }, "/casinos/hellspincasino.png": { type: "static" }, "/casinos/heroibetcasino.png": { type: "static" }, "/casinos/herospincasino.png": { type: "static" }, "/casinos/hexabetcasino.png": { type: "static" }, "/casinos/highrollercasino.png": { type: "static" }, "/casinos/hillocasino.png": { type: "static" }, "/casinos/hiperwincasino.png": { type: "static" }, "/casinos/hitnspincasino.png": { type: "static" }, "/casinos/horuscasino.png": { type: "static" }, "/casinos/hotbetcasino.png": { type: "static" }, "/casinos/hotslotscasino.png": { type: "static" }, "/casinos/houseofspadescasino.png": { type: "static" }, "/casinos/hugewincasino.png": { type: "static" }, "/casinos/hugocasino.png": { type: "static" }, "/casinos/icebetcasino.png": { type: "static" }, "/casinos/icecasino.png": { type: "static" }, "/casinos/immerioncasino.png": { type: "static" }, "/casinos/impressariocasino.png": { type: "static" }, "/casinos/inetbetcasino.png": { type: "static" }, "/casinos/instantcasino.png": { type: "static" }, "/casinos/instaspincasino.png": { type: "static" }, "/casinos/ivibetcasino.png": { type: "static" }, "/casinos/iwildcasino.png": { type: "static" }, "/casinos/izzicasino.png": { type: "static" }, "/casinos/jackbitcasino.png": { type: "static" }, "/casinos/jackburstcasino.png": { type: "static" }, "/casinos/jackmillioncasino.png": { type: "static" }, "/casinos/jackpotcitycasino.png": { type: "static" }, "/casinos/jackpotfrenzycasino.png": { type: "static" }, "/casinos/jackpotgurucasino.png": { type: "static" }, "/casinos/jackpotycasino.png": { type: "static" }, "/casinos/jacktopcasino.png": { type: "static" }, "/casinos/jeetcitycasino.png": { type: "static" }, "/casinos/jetcasino.png": { type: "static" }, "/casinos/jettbetcasino.png": { type: "static" }, "/casinos/joefortunecasino.png": { type: "static" }, "/casinos/johnvegascasino.png": { type: "static" }, "/casinos/joker8casino.png": { type: "static" }, "/casinos/joocasino.png": { type: "static" }, "/casinos/joyacasino.png": { type: "static" }, "/casinos/joycasino.png": { type: "static" }, "/casinos/jozzcasino.png": { type: "static" }, "/casinos/jupicasino(1).png": { type: "static" }, "/casinos/jupicasino.png": { type: "static" }, "/casinos/jupiterclubcasino.png": { type: "static" }, "/casinos/justbitcasino.png": { type: "static" }, "/casinos/justcasino.png": { type: "static" }, "/casinos/justcasinoio.png": { type: "static" }, "/casinos/jvspinbetcasino(1).png": { type: "static" }, "/casinos/jvspinbetcasino.png": { type: "static" }, "/casinos/k8iocasino.png": { type: "static" }, "/casinos/kascasino.png": { type: "static" }, "/casinos/katsubetcasino.png": { type: "static" }, "/casinos/kaulanacasino.png": { type: "static" }, "/casinos/kikobetcasino.png": { type: "static" }, "/casinos/kinbetcasino.png": { type: "static" }, "/casinos/kingamocasino.png": { type: "static" }, "/casinos/kingbillycasino.png": { type: "static" }, "/casinos/kingdomcasino.png": { type: "static" }, "/casinos/kingmakercasino.png": { type: "static" }, "/casinos/kingswincasino.png": { type: "static" }, "/casinos/kirgocasino.png": { type: "static" }, "/casinos/koicasino.png": { type: "static" }, "/casinos/kriptycasino.png": { type: "static" }, "/casinos/kruunacasino.png": { type: "static" }, "/casinos/kryptosinocasino.png": { type: "static" }, "/casinos/lakepalacecasino.png": { type: "static" }, "/casinos/lamabetcasino.png": { type: "static" }, "/casinos/legianocasino.png": { type: "static" }, "/casinos/legzocasino.png": { type: "static" }, "/casinos/lemoncasino.png": { type: "static" }, "/casinos/leonbetcasino.png": { type: "static" }, "/casinos/letsgocasino.png": { type: "static" }, "/casinos/letsluckycasino.png": { type: "static" }, "/casinos/levelupcasino.png": { type: "static" }, "/casinos/lexcasino.png": { type: "static" }, "/casinos/librabetcasino.png": { type: "static" }, "/casinos/lilibetcasino.png": { type: "static" }, "/casinos/lionslotscasino.png": { type: "static" }, "/casinos/lionspincasino.png": { type: "static" }, "/casinos/livecasinoio.png": { type: "static" }, "/casinos/locowincasino.png": { type: "static" }, "/casinos/loftcasino(1).png": { type: "static" }, "/casinos/loftcasino.png": { type: "static" }, "/casinos/lokicasino.png": { type: "static" }, "/casinos/lopebetcasino.png": { type: "static" }, "/casinos/lotusasiacasino.png": { type: "static" }, "/casinos/lucky31casino.png": { type: "static" }, "/casinos/lucky7evencasino.png": { type: "static" }, "/casinos/luckybaycasino.png": { type: "static" }, "/casinos/luckybirdcasino.png": { type: "static" }, "/casinos/luckyblockcasino.png": { type: "static" }, "/casinos/luckychoocasino.png": { type: "static" }, "/casinos/luckycircuscasino.png": { type: "static" }, "/casinos/luckycreekcasino.png": { type: "static" }, "/casinos/luckycryptocasino.png": { type: "static" }, "/casinos/luckydayscasino.png": { type: "static" }, "/casinos/luckydreamscasino.png": { type: "static" }, "/casinos/luckyelfcasino.png": { type: "static" }, "/casinos/luckyhandcasino.png": { type: "static" }, "/casinos/luckyhourcasino.png": { type: "static" }, "/casinos/luckyhuntercasino.png": { type: "static" }, "/casinos/luckykoalacasino.png": { type: "static" }, "/casinos/luckykongcasino.png": { type: "static" }, "/casinos/luckynuggetcasino.png": { type: "static" }, "/casinos/luckyonescasino.png": { type: "static" }, "/casinos/luckyreelscasino.png": { type: "static" }, "/casinos/luckyspinscasino.png": { type: "static" }, "/casinos/luckystarcasino.png": { type: "static" }, "/casinos/luckystartcasino.png": { type: "static" }, "/casinos/luckyvibecasino.png": { type: "static" }, "/casinos/luckywhalecasino.png": { type: "static" }, "/casinos/luckywinscasino.png": { type: "static" }, "/casinos/lucyscasino.png": { type: "static" }, "/casinos/lukkicasino.png": { type: "static" }, "/casinos/lunubetcasino.png": { type: "static" }, "/casinos/luxurycasino.png": { type: "static" }, "/casinos/lyracasino.png": { type: "static" }, "/casinos/lysticasino.png": { type: "static" }, "/casinos/macaucasino.png": { type: "static" }, "/casinos/magicalspincasino.png": { type: "static" }, "/casinos/malinacasino.png": { type: "static" }, "/casinos/mangacasino.png": { type: "static" }, "/casinos/marathonbetcasino.png": { type: "static" }, "/casinos/marsbetcasino.png": { type: "static" }, "/casinos/mbitcasino.png": { type: "static" }, "/casinos/megadicecasino.png": { type: "static" }, "/casinos/megaparicasino.png": { type: "static" }, "/casinos/megarichcasino.png": { type: "static" }, "/casinos/megaslotiocasino.png": { type: "static" }, "/casinos/melbetcasino.png": { type: "static" }, "/casinos/merlincasino.png": { type: "static" }, "/casinos/metaspinscryptocasino.png": { type: "static" }, "/casinos/metawincasino.png": { type: "static" }, "/casinos/miamiclubcasino.png": { type: "static" }, "/casinos/midasluckcasino.png": { type: "static" }, "/casinos/miraxcasino.png": { type: "static" }, "/casinos/mobilebet.png": { type: "static" }, "/casinos/moicasino.png": { type: "static" }, "/casinos/mondcasino.png": { type: "static" }, "/casinos/monixbetcasino.png": { type: "static" }, "/casinos/monrocasino.png": { type: "static" }, "/casinos/montecryptoscasino.png": { type: "static" }, "/casinos/moonwincasino.png": { type: "static" }, "/casinos/mostbetcasino.png": { type: "static" }, "/casinos/mrbetcasino.png": { type: "static" }, "/casinos/mrbitcasino.png": { type: "static" }, "/casinos/mrpachocasino.png": { type: "static" }, "/casinos/mundoapostascasino.png": { type: "static" }, "/casinos/mychancecasino.png": { type: "static" }, "/casinos/mystakecasino.png": { type: "static" }, "/casinos/n1betcasino.png": { type: "static" }, "/casinos/nalucasino.png": { type: "static" }, "/casinos/nationalcasino.png": { type: "static" }, "/casinos/needforspincasino.png": { type: "static" }, "/casinos/neon54casino.png": { type: "static" }, "/casinos/neospincasino.png": { type: "static" }, "/casinos/ninlaycasino(1).png": { type: "static" }, "/casinos/ninlaycasino.png": { type: "static" }, "/casinos/nitrobetcasino(1).png": { type: "static" }, "/casinos/nitrobetcasino.png": { type: "static" }, "/casinos/niyvicasino.png": { type: "static" }, "/casinos/nolimitbetcasino.png": { type: "static" }, "/casinos/nominicasino.png": { type: "static" }, "/casinos/nopeincasino.png": { type: "static" }, "/casinos/norgesspillcasino.png": { type: "static" }, "/casinos/novajackpotcasino.png": { type: "static" }, "/casinos/nuggetslotscasino.png": { type: "static" }, "/casinos/nummuscasino.png": { type: "static" }, "/casinos/odds96casino.png": { type: "static" }, "/casinos/ohmyspinscasino.png": { type: "static" }, "/casinos/ohmyzinocasino.png": { type: "static" }, "/casinos/olympiacasino.png": { type: "static" }, "/casinos/olympusbetcasino.png": { type: "static" }, "/casinos/omnislotscasino.png": { type: "static" }, "/casinos/oneduncasino.png": { type: "static" }, "/casinos/onluckcasino.png": { type: "static" }, "/casinos/onwincasino.png": { type: "static" }, "/casinos/orbetcasino.png": { type: "static" }, "/casinos/oshcasino.png": { type: "static" }, "/casinos/oshicasino.png": { type: "static" }, "/casinos/ovitoonscasino.png": { type: "static" }, "/casinos/pachipachicasino.png": { type: "static" }, "/casinos/pairadicecasino.png": { type: "static" }, "/casinos/palmcasino.png": { type: "static" }, "/casinos/palmslotscasino.png": { type: "static" }, "/casinos/pan-casino.png": { type: "static" }, "/casinos/parimatchcasino.png": { type: "static" }, "/casinos/parimatchwincasino.png": { type: "static" }, "/casinos/paripesacasino.png": { type: "static" }, "/casinos/pin-upcasino.png": { type: "static" }, "/casinos/pinnaclecasino.png": { type: "static" }, "/casinos/piratespotcasino.png": { type: "static" }, "/casinos/plangamescasino.png": { type: "static" }, "/casinos/platincasino.png": { type: "static" }, "/casinos/playamocasino(1).png": { type: "static" }, "/casinos/playamocasino.png": { type: "static" }, "/casinos/playbetiocasino.png": { type: "static" }, "/casinos/playboomcasino.png": { type: "static" }, "/casinos/playfastcasino.png": { type: "static" }, "/casinos/playfinacasino.png": { type: "static" }, "/casinos/playfortunacasino.png": { type: "static" }, "/casinos/playiocasino.png": { type: "static" }, "/casinos/playmojocasino.png": { type: "static" }, "/casinos/playmoolacasino.png": { type: "static" }, "/casinos/playouwincasino.png": { type: "static" }, "/casinos/playzillacasino.png": { type: "static" }, "/casinos/pledoocasino.png": { type: "static" }, "/casinos/pokies2gocasino.png": { type: "static" }, "/casinos/polestarcasino.png": { type: "static" }, "/casinos/possucasino.png": { type: "static" }, "/casinos/powbetcasino.png": { type: "static" }, "/casinos/powerbet777casino(1).png": { type: "static" }, "/casinos/powerbet777casino.png": { type: "static" }, "/casinos/powerplaycasino.png": { type: "static" }, "/casinos/powerupcasino.png": { type: "static" }, "/casinos/pribetcasino.png": { type: "static" }, "/casinos/primebetzcasino.png": { type: "static" }, "/casinos/prontobetcasino.png": { type: "static" }, "/casinos/pumacasino.png": { type: "static" }, "/casinos/punterzcasino.png": { type: "static" }, "/casinos/purewincasino.png": { type: "static" }, "/casinos/queencasino.png": { type: "static" }, "/casinos/queenspinscasino.png": { type: "static" }, "/casinos/quickslotcasino.png": { type: "static" }, "/casinos/quickwincasino.png": { type: "static" }, "/casinos/rabonacasino.png": { type: "static" }, "/casinos/ragingbullcasino.png": { type: "static" }, "/casinos/rajabetscasino.png": { type: "static" }, "/casinos/rakebitcasino.png": { type: "static" }, "/casinos/rakoocasino.png": { type: "static" }, "/casinos/ramenbetcasino.png": { type: "static" }, "/casinos/razecasino.png": { type: "static" }, "/casinos/razedcasino.png": { type: "static" }, "/casinos/readycasino.png": { type: "static" }, "/casinos/realspincasino.png": { type: "static" }, "/casinos/reddicecasino.png": { type: "static" }, "/casinos/reddogcasino.png": { type: "static" }, "/casinos/redstarcasino.png": { type: "static" }, "/casinos/reelcryptocasino.png": { type: "static" }, "/casinos/reloadbetcasino.png": { type: "static" }, "/casinos/respincasino.png": { type: "static" }, "/casinos/retrobetcasino.png": { type: "static" }, "/casinos/revolutioncasino.png": { type: "static" }, "/casinos/richardcasino.png": { type: "static" }, "/casinos/richcasino.png": { type: "static" }, "/casinos/rickycasino.png": { type: "static" }, "/casinos/riobetcasino.png": { type: "static" }, "/casinos/ritzocasino.png": { type: "static" }, "/casinos/rivalocasino.png": { type: "static" }, "/casinos/rivieracasino.png": { type: "static" }, "/casinos/rizzcasino.png": { type: "static" }, "/casinos/robocatcasino.png": { type: "static" }, "/casinos/robycasino.png": { type: "static" }, "/casinos/rocketplaycasino.png": { type: "static" }, "/casinos/rocketspincasino.png": { type: "static" }, "/casinos/rocketwincasino.png": { type: "static" }, "/casinos/rockwincasino.png": { type: "static" }, "/casinos/rojabetcasino.png": { type: "static" }, "/casinos/rokucasino.png": { type: "static" }, "/casinos/rollersiocasino.png": { type: "static" }, "/casinos/rollettocasino.png": { type: "static" }, "/casinos/rollingslotscasino.png": { type: "static" }, "/casinos/rollinocasino.png": { type: "static" }, "/casinos/rollxocasino.png": { type: "static" }, "/casinos/romancasino.png": { type: "static" }, "/casinos/roobetcasino.png": { type: "static" }, "/casinos/roolicasino.png": { type: "static" }, "/casinos/roosterbetcasino.png": { type: "static" }, "/casinos/royalgamecasino.png": { type: "static" }, "/casinos/royalstarscasino.png": { type: "static" }, "/casinos/royalvegascasino.png": { type: "static" }, "/casinos/royspinscasino.png": { type: "static" }, "/casinos/run4wincasino.png": { type: "static" }, "/casinos/sapphirebetcasino.png": { type: "static" }, "/casinos/scatterhallcasino.png": { type: "static" }, "/casinos/scorpioncasino.png": { type: "static" }, "/casinos/senseigamecasino.png": { type: "static" }, "/casinos/sgcasino.png": { type: "static" }, "/casinos/shambalacasino.png": { type: "static" }, "/casinos/shangrilacasino.png": { type: "static" }, "/casinos/sherbetcasino.png": { type: "static" }, "/casinos/shinobibetcasino.png": { type: "static" }, "/casinos/shotzcasino.png": { type: "static" }, "/casinos/shufflecasino.png": { type: "static" }, "/casinos/silverplaycasino.png": { type: "static" }, "/casinos/simsinoscasino.png": { type: "static" }, "/casinos/sirwincasino.png": { type: "static" }, "/casinos/skycrowncasino.png": { type: "static" }, "/casinos/slotacasino.png": { type: "static" }, "/casinos/slotboxcasino.png": { type: "static" }, "/casinos/sloterracasino.png": { type: "static" }, "/casinos/slotexocasino.png": { type: "static" }, "/casinos/slotitcasino.png": { type: "static" }, "/casinos/slotlandcasino.png": { type: "static" }, "/casinos/slotlordscasino.png": { type: "static" }, "/casinos/slotmafiacasino.png": { type: "static" }, "/casinos/slotmancasino.png": { type: "static" }, "/casinos/slotmonstercasino.png": { type: "static" }, "/casinos/slotocashcasino.png": { type: "static" }, "/casinos/slotozencasino.png": { type: "static" }, "/casinos/slotparadisecasino.png": { type: "static" }, "/casinos/slotscitycasino.png": { type: "static" }, "/casinos/slotsflixcasino.png": { type: "static" }, "/casinos/slotsgallerycasino.png": { type: "static" }, "/casinos/slotsinccasino.png": { type: "static" }, "/casinos/slotsminescasino.png": { type: "static" }, "/casinos/slotspalacecasino.png": { type: "static" }, "/casinos/slotticacasino.png": { type: "static" }, "/casinos/slotticasino.png": { type: "static" }, "/casinos/slottojamcasino.png": { type: "static" }, "/casinos/slottywaycasino.png": { type: "static" }, "/casinos/slotumcasino.png": { type: "static" }, "/casinos/slotunacasino.png": { type: "static" }, "/casinos/slotvibecasino.png": { type: "static" }, "/casinos/smokacecasino.png": { type: "static" }, "/casinos/snatchcasino.png": { type: "static" }, "/casinos/solcasino.png": { type: "static" }, "/casinos/solisbetcasino.png": { type: "static" }, "/casinos/sombrerospinscasino.png": { type: "static" }, "/casinos/spacelillycasino.png": { type: "static" }, "/casinos/spadesqueencasino.png": { type: "static" }, "/casinos/spartanslotscasino.png": { type: "static" }, "/casinos/spellwincasino.png": { type: "static" }, "/casinos/spin247casino.png": { type: "static" }, "/casinos/spinangacasino.png": { type: "static" }, "/casinos/spinariumcasino.png": { type: "static" }, "/casinos/spinarocasino.png": { type: "static" }, "/casinos/spinawaycasino.png": { type: "static" }, "/casinos/spinbetcasino.png": { type: "static" }, "/casinos/spinbettercasino.png": { type: "static" }, "/casinos/spinbitcasino.png": { type: "static" }, "/casinos/spinchcasino.png": { type: "static" }, "/casinos/spinfestcasino.png": { type: "static" }, "/casinos/spinfevercasino.png": { type: "static" }, "/casinos/spinightcasino.png": { type: "static" }, "/casinos/spinjocasino.png": { type: "static" }, "/casinos/spinlinecasino.png": { type: "static" }, "/casinos/spinnalotcasino.png": { type: "static" }, "/casinos/spinrollzcasino.png": { type: "static" }, "/casinos/spinsambacasino.png": { type: "static" }, "/casinos/spinsamuraicasino.png": { type: "static" }, "/casinos/spinsbrocasino.png": { type: "static" }, "/casinos/spinspacecasino.png": { type: "static" }, "/casinos/spinsupcasino.png": { type: "static" }, "/casinos/spinsycasino.png": { type: "static" }, "/casinos/spinybetcasino.png": { type: "static" }, "/casinos/spiritcasino.png": { type: "static" }, "/casinos/sportazacasino.png": { type: "static" }, "/casinos/sportsbetiocasino.png": { type: "static" }, "/casinos/sportsbettingcasino.png": { type: "static" }, "/casinos/sportunacasino.png": { type: "static" }, "/casinos/stakecasino.png": { type: "static" }, "/casinos/stakeprixcasino.png": { type: "static" }, "/casinos/stakewiniocasino.png": { type: "static" }, "/casinos/stardacasino.png": { type: "static" }, "/casinos/staxinocasino.png": { type: "static" }, "/casinos/staycasino.png": { type: "static" }, "/casinos/stelariocasino.png": { type: "static" }, "/casinos/stupidcasino.png": { type: "static" }, "/casinos/sugarcasino.png": { type: "static" }, "/casinos/sultanbetcasino.png": { type: "static" }, "/casinos/sunplaycasino.png": { type: "static" }, "/casinos/supacasicasino.png": { type: "static" }, "/casinos/supacasiiocasino.png": { type: "static" }, "/casinos/superbosscasino.png": { type: "static" }, "/casinos/sushicasino.png": { type: "static" }, "/casinos/svenbetcasino.png": { type: "static" }, "/casinos/swipercasino.png": { type: "static" }, "/casinos/syndicatecasino.png": { type: "static" }, "/casinos/talismaniacasino.png": { type: "static" }, "/casinos/thebescasino.png": { type: "static" }, "/casinos/theclubhousecasino.png": { type: "static" }, "/casinos/thepokiesnetcasino.png": { type: "static" }, "/casinos/thorcasino.png": { type: "static" }, "/casinos/thunderpickcasino.png": { type: "static" }, "/casinos/tikicasino.png": { type: "static" }, "/casinos/tikitakacasino.png": { type: "static" }, "/casinos/tiktakbetcasino(1).png": { type: "static" }, "/casinos/tiktakbetcasino.png": { type: "static" }, "/casinos/tivitbetcasino.png": { type: "static" }, "/casinos/tombrichescasino.png": { type: "static" }, "/casinos/tonybetcasino.png": { type: "static" }, "/casinos/tornadobetcasino.png": { type: "static" }, "/casinos/treasuremilecasino.png": { type: "static" }, "/casinos/treasurespinscasino.png": { type: "static" }, "/casinos/trinocasino.png": { type: "static" }, "/casinos/trip2vipcasino.png": { type: "static" }, "/casinos/tripscasino.png": { type: "static" }, "/casinos/trivelabetcasino.png": { type: "static" }, "/casinos/trustdicecasino.png": { type: "static" }, "/casinos/tsarscasino.png": { type: "static" }, "/casinos/tuskcasino.png": { type: "static" }, "/casinos/twincasino.png": { type: "static" }, "/casinos/universalslotscasino.png": { type: "static" }, "/casinos/unlimcasino.png": { type: "static" }, "/casinos/vasycasino.png": { type: "static" }, "/casinos/vavadacasino.png": { type: "static" }, "/casinos/vavecasino.png": { type: "static" }, "/casinos/vbetcasino.png": { type: "static" }, "/casinos/vegasinocasino.png": { type: "static" }, "/casinos/vegaslegacycasino.png": { type: "static" }, "/casinos/vegasnowcasino.png": { type: "static" }, "/casinos/vegazcasino.png": { type: "static" }, "/casinos/velobetcasino.png": { type: "static" }, "/casinos/verdecasino.png": { type: "static" }, "/casinos/vibecasino.png": { type: "static" }, "/casinos/vidavegascasino.png": { type: "static" }, "/casinos/vinylcasino.png": { type: "static" }, "/casinos/viperwincasino.png": { type: "static" }, "/casinos/vipslots.png": { type: "static" }, "/casinos/voltslotcasino.png": { type: "static" }, "/casinos/voodoocasino.png": { type: "static" }, "/casinos/vulkanbetcasino.png": { type: "static" }, "/casinos/vulkanvegascasino.png": { type: "static" }, "/casinos/wantedwincasino.png": { type: "static" }, "/casinos/wasinocasino.png": { type: "static" }, "/casinos/wazambacasino.png": { type: "static" }, "/casinos/wazbeecasino.png": { type: "static" }, "/casinos/wazobetcasino.png": { type: "static" }, "/casinos/wcasinoonline.png": { type: "static" }, "/casinos/weisscasino.png": { type: "static" }, "/casinos/wellecasino.png": { type: "static" }, "/casinos/weltbetcasino.png": { type: "static" }, "/casinos/westcasino.png": { type: "static" }, "/casinos/wettenlivecasino.png": { type: "static" }, "/casinos/whamoocasino.png": { type: "static" }, "/casinos/wikibetcasino.png": { type: "static" }, "/casinos/wikiluckcasino.png": { type: "static" }, "/casinos/wildfortuneiocasino.png": { type: "static" }, "/casinos/wildiocasino.png": { type: "static" }, "/casinos/wildsinocasino.png": { type: "static" }, "/casinos/wildtokyocasino.png": { type: "static" }, "/casinos/wildtornadocasino.png": { type: "static" }, "/casinos/willscasino.png": { type: "static" }, "/casinos/winadaycasino.png": { type: "static" }, "/casinos/winawincasino.png": { type: "static" }, "/casinos/windettacasino.png": { type: "static" }, "/casinos/wingagacasino.png": { type: "static" }, "/casinos/winlegendscasino.png": { type: "static" }, "/casinos/winmakercasino.png": { type: "static" }, "/casinos/winningcasino.png": { type: "static" }, "/casinos/winningdayscasino.png": { type: "static" }, "/casinos/winsanecasino.png": { type: "static" }, "/casinos/winscorecasino.png": { type: "static" }, "/casinos/winsharkcasino.png": { type: "static" }, "/casinos/winspiritcasino.png": { type: "static" }, "/casinos/winsroyalcasino.png": { type: "static" }, "/casinos/winstoriacasino.png": { type: "static" }, "/casinos/wintomatocasino.png": { type: "static" }, "/casinos/wintopiacasino.png": { type: "static" }, "/casinos/winwardcasino.png": { type: "static" }, "/casinos/winwincasino.png": { type: "static" }, "/casinos/winziocasino.png": { type: "static" }, "/casinos/wirwettencasino.png": { type: "static" }, "/casinos/wishcasino.png": { type: "static" }, "/casinos/wizebetscasino.png": { type: "static" }, "/casinos/wolfbetcasino.png": { type: "static" }, "/casinos/wolfycasino.png": { type: "static" }, "/casinos/wonacocasino.png": { type: "static" }, "/casinos/woocasino.png": { type: "static" }, "/casinos/wsmcasino.png": { type: "static" }, "/casinos/wunderwinscasino.png": { type: "static" }, "/casinos/x7casino.png": { type: "static" }, "/casinos/yaycasino.png": { type: "static" }, "/casinos/ybetscasino.png": { type: "static" }, "/casinos/yojucasino.png": { type: "static" }, "/casinos/yonibetcasino(1).png": { type: "static" }, "/casinos/yonibetcasino.png": { type: "static" }, "/casinos/yukongoldcasino.png": { type: "static" }, "/casinos/zenbettingcasino.png": { type: "static" }, "/casinos/zencasino.png": { type: "static" }, "/casinos/zetcasino.png": { type: "static" }, "/casinos/zeuswincasino.png": { type: "static" }, "/casinos/zinkracasino.png": { type: "static" }, "/casinos/zipcasino.png": { type: "static" }, "/casinos/zodiacbetcasino.png": { type: "static" }, "/casinos/zodiaccasino.png": { type: "static" }, "/casinos/zolobetcasino.png": { type: "static" }, "/casinos/zoomecasino.png": { type: "static" }, "/casinos/zotabetcasino.png": { type: "static" }, "/favicon.ico": { type: "static" }, "/file.svg": { type: "static" }, "/globe.svg": { type: "static" }, "/index.html": { type: "override", path: "/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/index.txt": { type: "static" }, "/next.svg": { type: "static" }, "/reviews/10betcasino.json": { type: "static" }, "/reviews/11crococasino.json": { type: "static" }, "/reviews/1gocasino.json": { type: "static" }, "/reviews/1redcasino.json": { type: "static" }, "/reviews/1xslotscasino.json": { type: "static" }, "/reviews/20betcasino.json": { type: "static" }, "/reviews/22betcasino.json": { type: "static" }, "/reviews/24Casino.json": { type: "static" }, "/reviews/24slotscasino.json": { type: "static" }, "/reviews/4kasinocasino.json": { type: "static" }, "/reviews/500casino.json": { type: "static" }, "/reviews/50crownscasino.json": { type: "static" }, "/reviews/55betcasino.json": { type: "static" }, "/reviews/7BitCasino.json": { type: "static" }, "/reviews/888starzcasino.json": { type: "static" }, "/reviews/Artcasino.json": { type: "static" }, "/reviews/Avocasino.json": { type: "static" }, "/reviews/Axecasino.json": { type: "static" }, "/reviews/BuranCasino.json": { type: "static" }, "/reviews/CasinoBello.json": { type: "static" }, "/reviews/CasinoStriker.json": { type: "static" }, "/reviews/CasinoVibes.json": { type: "static" }, "/reviews/Casinoin.json": { type: "static" }, "/reviews/CatCasino.json": { type: "static" }, "/reviews/EmuCasino.json": { type: "static" }, "/reviews/JohnVegasCasino.json": { type: "static" }, "/reviews/JoyCasino.json": { type: "static" }, "/reviews/JustCasino.json": { type: "static" }, "/reviews/LyraCasino.json": { type: "static" }, "/reviews/Mobilebet.json": { type: "static" }, "/reviews/MoiCasino.json": { type: "static" }, "/reviews/Mondcasino.json": { type: "static" }, "/reviews/Pan-Casino.json": { type: "static" }, "/reviews/Playfastcasino.json": { type: "static" }, "/reviews/ReadyCasino.json": { type: "static" }, "/reviews/Rickycasino.json": { type: "static" }, "/reviews/StayCasino.json": { type: "static" }, "/reviews/Thorcasino.json": { type: "static" }, "/reviews/ZenCasino.json": { type: "static" }, "/reviews/Zipcasino.json": { type: "static" }, "/reviews/airbetcasino.json": { type: "static" }, "/reviews/allspinscasino.json": { type: "static" }, "/reviews/allstarzcasino.json": { type: "static" }, "/reviews/ameriobetcasino.json": { type: "static" }, "/reviews/anarchycasino.json": { type: "static" }, "/reviews/aplaycasino.json": { type: "static" }, "/reviews/arcanebetcasino.json": { type: "static" }, "/reviews/asinocasino.json": { type: "static" }, "/reviews/aufcasino.json": { type: "static" }, "/reviews/bankonbetcasino.json": { type: "static" }, "/reviews/bdmbetcasino.json": { type: "static" }, "/reviews/beastinocasino.json": { type: "static" }, "/reviews/betandplaycasino.json": { type: "static" }, "/reviews/betandyoucasino.json": { type: "static" }, "/reviews/betbeastcasino.json": { type: "static" }, "/reviews/betchaincasino.json": { type: "static" }, "/reviews/betcoincasino.json": { type: "static" }, "/reviews/beteumcasino.json": { type: "static" }, "/reviews/betfinalcasino.json": { type: "static" }, "/reviews/betflarecasino.json": { type: "static" }, "/reviews/betifycasino.json": { type: "static" }, "/reviews/betifymecasino.json": { type: "static" }, "/reviews/betitallcasino.json": { type: "static" }, "/reviews/betmartinicasino.json": { type: "static" }, "/reviews/betnoxcasino.json": { type: "static" }, "/reviews/betonredcasino.json": { type: "static" }, "/reviews/betovixcasino.json": { type: "static" }, "/reviews/betroom24casino.json": { type: "static" }, "/reviews/betrunnercasino.json": { type: "static" }, "/reviews/betsofacasino.json": { type: "static" }, "/reviews/betsomniacasino.json": { type: "static" }, "/reviews/betssencasino.json": { type: "static" }, "/reviews/betswapcasino.json": { type: "static" }, "/reviews/betticasino.json": { type: "static" }, "/reviews/betzinocasino.json": { type: "static" }, "/reviews/billybetscasino.json": { type: "static" }, "/reviews/billybillioncasino.json": { type: "static" }, "/reviews/bitcoincasino.json": { type: "static" }, "/reviews/bitcoingamescasino.json": { type: "static" }, "/reviews/bitkingzcasino.json": { type: "static" }, "/reviews/bitslercasino.json": { type: "static" }, "/reviews/bitstarzcasino.json": { type: "static" }, "/reviews/bizzocasino.json": { type: "static" }, "/reviews/bk8casino.json": { type: "static" }, "/reviews/blacklioncasino.json": { type: "static" }, "/reviews/blazecasino.json": { type: "static" }, "/reviews/blitz-betcasino.json": { type: "static" }, "/reviews/blueleocasino.json": { type: "static" }, "/reviews/bluffbetcasino.json": { type: "static" }, "/reviews/bohocasino.json": { type: "static" }, "/reviews/bongocasino.json": { type: "static" }, "/reviews/booicasino.json": { type: "static" }, "/reviews/boomerang-betcasino.json": { type: "static" }, "/reviews/boomerangcasino.json": { type: "static" }, "/reviews/brangocasino.json": { type: "static" }, "/reviews/brazino777casino.json": { type: "static" }, "/reviews/brucebetcasino.json": { type: "static" }, "/reviews/bullcasino.json": { type: "static" }, "/reviews/bullsbetcasino.json": { type: "static" }, "/reviews/burningbetcasino.json": { type: "static" }, "/reviews/buumicasino.json": { type: "static" }, "/reviews/cabarinocasino.json": { type: "static" }, "/reviews/cadabruscasino.json": { type: "static" }, "/reviews/cadoolacasino.json": { type: "static" }, "/reviews/caibocasino.json": { type: "static" }, "/reviews/campeonbetcasino.json": { type: "static" }, "/reviews/cashwincasino.json": { type: "static" }, "/reviews/casinoadrenaline.json": { type: "static" }, "/reviews/casinobetcasino.json": { type: "static" }, "/reviews/casinoestrella.json": { type: "static" }, "/reviews/casinoextra.json": { type: "static" }, "/reviews/casinoextreme.json": { type: "static" }, "/reviews/casinofriday.json": { type: "static" }, "/reviews/casinoinfinity.json": { type: "static" }, "/reviews/casinolycasino.json": { type: "static" }, "/reviews/casinoorca.json": { type: "static" }, "/reviews/casinorocket.json": { type: "static" }, "/reviews/casinovacasino.json": { type: "static" }, "/reviews/casinox.json": { type: "static" }, "/reviews/casinozercasino.json": { type: "static" }, "/reviews/casinycasino.json": { type: "static" }, "/reviews/casoocasino.json": { type: "static" }, "/reviews/chipstarscasino.json": { type: "static" }, "/reviews/cleopatracasino.json": { type: "static" }, "/reviews/clubrichescasino.json": { type: "static" }, "/reviews/cobracasino.json": { type: "static" }, "/reviews/coinsgamecasino.json": { type: "static" }, "/reviews/comeoncasino.json": { type: "static" }, "/reviews/conquestadorcasino.json": { type: "static" }, "/reviews/coolzinocasino.json": { type: "static" }, "/reviews/cosmicslotcasino.json": { type: "static" }, "/reviews/cosmobetcasino.json": { type: "static" }, "/reviews/crashinocasino.json": { type: "static" }, "/reviews/crocoslotscasino.json": { type: "static" }, "/reviews/crownslotscasino.json": { type: "static" }, "/reviews/cryptoleocasino.json": { type: "static" }, "/reviews/cryptorushcasino.json": { type: "static" }, "/reviews/daddycasino.json": { type: "static" }, "/reviews/dailyspinscasino.json": { type: "static" }, "/reviews/dazardbetcasino.json": { type: "static" }, "/reviews/dedprzcasino.json": { type: "static" }, "/reviews/delorocasino.json": { type: "static" }, "/reviews/divasluckcasino.json": { type: "static" }, "/reviews/dolfwincasino.json": { type: "static" }, "/reviews/driftcasino.json": { type: "static" }, "/reviews/dripcasino.json": { type: "static" }, "/reviews/dublzcasino.json": { type: "static" }, "/reviews/duckdicecasino.json": { type: "static" }, "/reviews/dundeeslotscasino.json": { type: "static" }, "/reviews/epicbetcasino.json": { type: "static" }, "/reviews/everumcasino.json": { type: "static" }, "/reviews/evobetcasino.json": { type: "static" }, "/reviews/fairspincasino.json": { type: "static" }, "/reviews/fansportcasino.json": { type: "static" }, "/reviews/fatpandacasino.json": { type: "static" }, "/reviews/fatpiratecasino.json": { type: "static" }, "/reviews/felixspincasino.json": { type: "static" }, "/reviews/flamingcasino.json": { type: "static" }, "/reviews/flappycasino.json": { type: "static" }, "/reviews/flushcasino.json": { type: "static" }, "/reviews/fortunejackcasino.json": { type: "static" }, "/reviews/fortunepandacasino.json": { type: "static" }, "/reviews/freshcasino.json": { type: "static" }, "/reviews/funbetcasino.json": { type: "static" }, "/reviews/gamacasino.json": { type: "static" }, "/reviews/gamblezencasino.json": { type: "static" }, "/reviews/gamdomcasino.json": { type: "static" }, "/reviews/gamixcasino.json": { type: "static" }, "/reviews/gangstacasino.json": { type: "static" }, "/reviews/gate777casino.json": { type: "static" }, "/reviews/gembetcasino.json": { type: "static" }, "/reviews/geniejackpotcasino.json": { type: "static" }, "/reviews/getslotscasino.json": { type: "static" }, "/reviews/gizbocasino.json": { type: "static" }, "/reviews/godbunnycasino.json": { type: "static" }, "/reviews/goldencrowncasino.json": { type: "static" }, "/reviews/goldenpandacasino.json": { type: "static" }, "/reviews/goldenstarcasino.json": { type: "static" }, "/reviews/goodmancasino.json": { type: "static" }, "/reviews/goralbetcasino.json": { type: "static" }, "/reviews/gospincasino.json": { type: "static" }, "/reviews/grandwincasino.json": { type: "static" }, "/reviews/greatspincasino.json": { type: "static" }, "/reviews/gudarcasino.json": { type: "static" }, "/reviews/gunsbetcasino.json": { type: "static" }, "/reviews/gxmblecasino.json": { type: "static" }, "/reviews/happyhugocasino.json": { type: "static" }, "/reviews/happyslotscasino.json": { type: "static" }, "/reviews/happyspinscasino.json": { type: "static" }, "/reviews/hazcasino.json": { type: "static" }, "/reviews/hellspincasino.json": { type: "static" }, "/reviews/herospincasino.json": { type: "static" }, "/reviews/hiperwincasino.json": { type: "static" }, "/reviews/horuscasino.json": { type: "static" }, "/reviews/hotslotscasino.json": { type: "static" }, "/reviews/icebetcasino.json": { type: "static" }, "/reviews/icecasino.json": { type: "static" }, "/reviews/impressariocasino.json": { type: "static" }, "/reviews/index.json": { type: "static" }, "/reviews/ivibetcasino.json": { type: "static" }, "/reviews/iwildcasino.json": { type: "static" }, "/reviews/izzicasino.json": { type: "static" }, "/reviews/jackbitcasino.json": { type: "static" }, "/reviews/jackburstcasino.json": { type: "static" }, "/reviews/jackpotfrenzycasino.json": { type: "static" }, "/reviews/jackpotgurucasino.json": { type: "static" }, "/reviews/jackpotycasino.json": { type: "static" }, "/reviews/jacktopcasino.json": { type: "static" }, "/reviews/jeetcitycasino.json": { type: "static" }, "/reviews/jetcasino.json": { type: "static" }, "/reviews/joker8casino.json": { type: "static" }, "/reviews/joocasino.json": { type: "static" }, "/reviews/joyacasino.json": { type: "static" }, "/reviews/jozzcasino.json": { type: "static" }, "/reviews/jupicasino.json": { type: "static" }, "/reviews/katsubetcasino.json": { type: "static" }, "/reviews/kaulanacasino.json": { type: "static" }, "/reviews/kingamocasino.json": { type: "static" }, "/reviews/kingbillycasino.json": { type: "static" }, "/reviews/kingdomcasino.json": { type: "static" }, "/reviews/kingswincasino.json": { type: "static" }, "/reviews/kirgocasino.json": { type: "static" }, "/reviews/koicasino.json": { type: "static" }, "/reviews/kriptycasino.json": { type: "static" }, "/reviews/kryptosinocasino.json": { type: "static" }, "/reviews/lamabetcasino.json": { type: "static" }, "/reviews/legianocasino.json": { type: "static" }, "/reviews/legzocasino.json": { type: "static" }, "/reviews/lemoncasino.json": { type: "static" }, "/reviews/leonbetcasino.json": { type: "static" }, "/reviews/letsluckycasino.json": { type: "static" }, "/reviews/levelupcasino.json": { type: "static" }, "/reviews/lexcasino.json": { type: "static" }, "/reviews/lilibetcasino.json": { type: "static" }, "/reviews/loftcasino.json": { type: "static" }, "/reviews/lokicasino.json": { type: "static" }, "/reviews/lucky7evencasino.json": { type: "static" }, "/reviews/luckychoocasino.json": { type: "static" }, "/reviews/luckycircuscasino.json": { type: "static" }, "/reviews/luckycryptocasino.json": { type: "static" }, "/reviews/luckydayscasino.json": { type: "static" }, "/reviews/luckydreamscasino.json": { type: "static" }, "/reviews/luckyelfcasino.json": { type: "static" }, "/reviews/luckyhourcasino.json": { type: "static" }, "/reviews/luckyhuntercasino.json": { type: "static" }, "/reviews/luckykongcasino.json": { type: "static" }, "/reviews/luckynuggetcasino.json": { type: "static" }, "/reviews/luckyreelscasino.json": { type: "static" }, "/reviews/luckyspinscasino.json": { type: "static" }, "/reviews/luckystarcasino.json": { type: "static" }, "/reviews/luckystartcasino.json": { type: "static" }, "/reviews/luckyvibecasino.json": { type: "static" }, "/reviews/luckywhalecasino.json": { type: "static" }, "/reviews/luckywinscasino.json": { type: "static" }, "/reviews/lukkicasino.json": { type: "static" }, "/reviews/lunubetcasino.json": { type: "static" }, "/reviews/marathonbetcasino.json": { type: "static" }, "/reviews/marsbetcasino.json": { type: "static" }, "/reviews/mbitcasino.json": { type: "static" }, "/reviews/megadicecasino.json": { type: "static" }, "/reviews/megaparicasino.json": { type: "static" }, "/reviews/megarichcasino.json": { type: "static" }, "/reviews/merlincasino.json": { type: "static" }, "/reviews/metaspinscryptocasino.json": { type: "static" }, "/reviews/miraxcasino.json": { type: "static" }, "/reviews/monixbetcasino.json": { type: "static" }, "/reviews/monrocasino.json": { type: "static" }, "/reviews/montecryptoscasino.json": { type: "static" }, "/reviews/moonwincasino.json": { type: "static" }, "/reviews/mrbitcasino.json": { type: "static" }, "/reviews/mrpachocasino.json": { type: "static" }, "/reviews/mystakecasino.json": { type: "static" }, "/reviews/n1betcasino.json": { type: "static" }, "/reviews/nalucasino.json": { type: "static" }, "/reviews/nationalcasino.json": { type: "static" }, "/reviews/needforspincasino.json": { type: "static" }, "/reviews/neon54casino.json": { type: "static" }, "/reviews/neospincasino.json": { type: "static" }, "/reviews/ninlaycasino.json": { type: "static" }, "/reviews/nitrobetcasino.json": { type: "static" }, "/reviews/nolimitbetcasino.json": { type: "static" }, "/reviews/nominicasino.json": { type: "static" }, "/reviews/norgesspillcasino.json": { type: "static" }, "/reviews/nummuscasino.json": { type: "static" }, "/reviews/ohmyspinscasino.json": { type: "static" }, "/reviews/ohmyzinocasino.json": { type: "static" }, "/reviews/olympiacasino.json": { type: "static" }, "/reviews/omnislotscasino.json": { type: "static" }, "/reviews/oneduncasino.json": { type: "static" }, "/reviews/onluckcasino.json": { type: "static" }, "/reviews/orbetcasino.json": { type: "static" }, "/reviews/oshcasino.json": { type: "static" }, "/reviews/oshicasino.json": { type: "static" }, "/reviews/ovitoonscasino.json": { type: "static" }, "/reviews/palmslotscasino.json": { type: "static" }, "/reviews/pin-upcasino.json": { type: "static" }, "/reviews/pinnaclecasino.json": { type: "static" }, "/reviews/piratespotcasino.json": { type: "static" }, "/reviews/plangamescasino.json": { type: "static" }, "/reviews/playfinacasino.json": { type: "static" }, "/reviews/playfortunacasino.json": { type: "static" }, "/reviews/playmojocasino.json": { type: "static" }, "/reviews/playmoolacasino.json": { type: "static" }, "/reviews/playouwincasino.json": { type: "static" }, "/reviews/pledoocasino.json": { type: "static" }, "/reviews/powerbet777casino.json": { type: "static" }, "/reviews/powerupcasino.json": { type: "static" }, "/reviews/primebetzcasino.json": { type: "static" }, "/reviews/prontobetcasino.json": { type: "static" }, "/reviews/pumacasino.json": { type: "static" }, "/reviews/punterzcasino.json": { type: "static" }, "/reviews/queencasino.json": { type: "static" }, "/reviews/quickslotcasino.json": { type: "static" }, "/reviews/rakebitcasino.json": { type: "static" }, "/reviews/rakoocasino.json": { type: "static" }, "/reviews/razecasino.json": { type: "static" }, "/reviews/razedcasino.json": { type: "static" }, "/reviews/reddicecasino.json": { type: "static" }, "/reviews/redstarcasino.json": { type: "static" }, "/reviews/reloadbetcasino.json": { type: "static" }, "/reviews/respincasino.json": { type: "static" }, "/reviews/retrobetcasino.json": { type: "static" }, "/reviews/richardcasino.json": { type: "static" }, "/reviews/riobetcasino.json": { type: "static" }, "/reviews/rivalocasino.json": { type: "static" }, "/reviews/rivieracasino.json": { type: "static" }, "/reviews/rizzcasino.json": { type: "static" }, "/reviews/rocketplaycasino.json": { type: "static" }, "/reviews/rocketspincasino.json": { type: "static" }, "/reviews/rocketwincasino.json": { type: "static" }, "/reviews/rockwincasino.json": { type: "static" }, "/reviews/rollettocasino.json": { type: "static" }, "/reviews/rollingslotscasino.json": { type: "static" }, "/reviews/rollinocasino.json": { type: "static" }, "/reviews/rollxocasino.json": { type: "static" }, "/reviews/roolicasino.json": { type: "static" }, "/reviews/roosterbetcasino.json": { type: "static" }, "/reviews/royalgamecasino.json": { type: "static" }, "/reviews/royalstarscasino.json": { type: "static" }, "/reviews/royspinscasino.json": { type: "static" }, "/reviews/run4wincasino.json": { type: "static" }, "/reviews/sapphirebetcasino.json": { type: "static" }, "/reviews/shambalacasino.json": { type: "static" }, "/reviews/shangrilacasino.json": { type: "static" }, "/reviews/sherbetcasino.json": { type: "static" }, "/reviews/shotzcasino.json": { type: "static" }, "/reviews/silverplaycasino.json": { type: "static" }, "/reviews/sirwincasino.json": { type: "static" }, "/reviews/skycrowncasino.json": { type: "static" }, "/reviews/slotacasino.json": { type: "static" }, "/reviews/slotboxcasino.json": { type: "static" }, "/reviews/sloterracasino.json": { type: "static" }, "/reviews/slotlordscasino.json": { type: "static" }, "/reviews/slotmancasino.json": { type: "static" }, "/reviews/slotozencasino.json": { type: "static" }, "/reviews/slotparadisecasino.json": { type: "static" }, "/reviews/slotscitycasino.json": { type: "static" }, "/reviews/slotsflixcasino.json": { type: "static" }, "/reviews/slotsgallerycasino.json": { type: "static" }, "/reviews/slotticacasino.json": { type: "static" }, "/reviews/slottojamcasino.json": { type: "static" }, "/reviews/slottywaycasino.json": { type: "static" }, "/reviews/slotumcasino.json": { type: "static" }, "/reviews/slotvibecasino.json": { type: "static" }, "/reviews/smokacecasino.json": { type: "static" }, "/reviews/snatchcasino.json": { type: "static" }, "/reviews/solcasino.json": { type: "static" }, "/reviews/solisbetcasino.json": { type: "static" }, "/reviews/sombrerospinscasino.json": { type: "static" }, "/reviews/spacelillycasino.json": { type: "static" }, "/reviews/spadesqueencasino.json": { type: "static" }, "/reviews/spinariumcasino.json": { type: "static" }, "/reviews/spinarocasino.json": { type: "static" }, "/reviews/spinawaycasino.json": { type: "static" }, "/reviews/spinbetcasino.json": { type: "static" }, "/reviews/spinbettercasino.json": { type: "static" }, "/reviews/spinbitcasino.json": { type: "static" }, "/reviews/spinchcasino.json": { type: "static" }, "/reviews/spinfevercasino.json": { type: "static" }, "/reviews/spinightcasino.json": { type: "static" }, "/reviews/spinjocasino.json": { type: "static" }, "/reviews/spinlinecasino.json": { type: "static" }, "/reviews/spinsamuraicasino.json": { type: "static" }, "/reviews/spinsbrocasino.json": { type: "static" }, "/reviews/spinspacecasino.json": { type: "static" }, "/reviews/spinsupcasino.json": { type: "static" }, "/reviews/spinsycasino.json": { type: "static" }, "/reviews/spinybetcasino.json": { type: "static" }, "/reviews/spiritcasino.json": { type: "static" }, "/reviews/sportazacasino.json": { type: "static" }, "/reviews/sportunacasino.json": { type: "static" }, "/reviews/stakeprixcasino.json": { type: "static" }, "/reviews/stardacasino.json": { type: "static" }, "/reviews/staxinocasino.json": { type: "static" }, "/reviews/stelariocasino.json": { type: "static" }, "/reviews/stupidcasino.json": { type: "static" }, "/reviews/sunplaycasino.json": { type: "static" }, "/reviews/supacasicasino.json": { type: "static" }, "/reviews/superbosscasino.json": { type: "static" }, "/reviews/svenbetcasino.json": { type: "static" }, "/reviews/syndicatecasino.json": { type: "static" }, "/reviews/theclubhousecasino.json": { type: "static" }, "/reviews/thunderpickcasino.json": { type: "static" }, "/reviews/tikitakacasino.json": { type: "static" }, "/reviews/tiktakbetcasino.json": { type: "static" }, "/reviews/tivitbetcasino.json": { type: "static" }, "/reviews/tombrichescasino.json": { type: "static" }, "/reviews/tonybetcasino.json": { type: "static" }, "/reviews/treasurespinscasino.json": { type: "static" }, "/reviews/trinocasino.json": { type: "static" }, "/reviews/trip2vipcasino.json": { type: "static" }, "/reviews/tripscasino.json": { type: "static" }, "/reviews/trivelabetcasino.json": { type: "static" }, "/reviews/trustdicecasino.json": { type: "static" }, "/reviews/tsarscasino.json": { type: "static" }, "/reviews/universalslotscasino.json": { type: "static" }, "/reviews/unlimcasino.json": { type: "static" }, "/reviews/vasycasino.json": { type: "static" }, "/reviews/vavadacasino.json": { type: "static" }, "/reviews/vavecasino.json": { type: "static" }, "/reviews/vegasinocasino.json": { type: "static" }, "/reviews/vegasnowcasino.json": { type: "static" }, "/reviews/vegazcasino.json": { type: "static" }, "/reviews/velobetcasino.json": { type: "static" }, "/reviews/vibecasino.json": { type: "static" }, "/reviews/voltslotcasino.json": { type: "static" }, "/reviews/voodoocasino.json": { type: "static" }, "/reviews/vulkanvegascasino.json": { type: "static" }, "/reviews/wantedwincasino.json": { type: "static" }, "/reviews/wasinocasino.json": { type: "static" }, "/reviews/wazambacasino.json": { type: "static" }, "/reviews/wazbeecasino.json": { type: "static" }, "/reviews/wcasinoonline.json": { type: "static" }, "/reviews/weisscasino.json": { type: "static" }, "/reviews/wellecasino.json": { type: "static" }, "/reviews/weltbetcasino.json": { type: "static" }, "/reviews/whamoocasino.json": { type: "static" }, "/reviews/wildsinocasino.json": { type: "static" }, "/reviews/wildtornadocasino.json": { type: "static" }, "/reviews/winawincasino.json": { type: "static" }, "/reviews/windettacasino.json": { type: "static" }, "/reviews/wingagacasino.json": { type: "static" }, "/reviews/winlegendscasino.json": { type: "static" }, "/reviews/winmakercasino.json": { type: "static" }, "/reviews/winningcasino.json": { type: "static" }, "/reviews/winscorecasino.json": { type: "static" }, "/reviews/winspiritcasino.json": { type: "static" }, "/reviews/winsroyalcasino.json": { type: "static" }, "/reviews/winstoriacasino.json": { type: "static" }, "/reviews/wintomatocasino.json": { type: "static" }, "/reviews/wintopiacasino.json": { type: "static" }, "/reviews/winwincasino.json": { type: "static" }, "/reviews/wirwettencasino.json": { type: "static" }, "/reviews/wishcasino.json": { type: "static" }, "/reviews/wizebetscasino.json": { type: "static" }, "/reviews/wolfbetcasino.json": { type: "static" }, "/reviews/wolfycasino.json": { type: "static" }, "/reviews/wonacocasino.json": { type: "static" }, "/reviews/wsmcasino.json": { type: "static" }, "/reviews/wunderwinscasino.json": { type: "static" }, "/reviews/x7casino.json": { type: "static" }, "/reviews/yojucasino.json": { type: "static" }, "/reviews/zenbettingcasino.json": { type: "static" }, "/reviews/zinkracasino.json": { type: "static" }, "/reviews/zoomecasino.json": { type: "static" }, "/reviews/zotabetcasino.json": { type: "static" }, "/vercel.svg": { type: "static" }, "/window.svg": { type: "static" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/all-casinos": { type: "override", path: "/all-casinos.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/index": { type: "override", path: "/index.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/": { type: "override", path: "/index.html", headers: { "content-type": "text/html; charset=utf-8" } } };
});
var q = N((Bs, V) => {
  "use strict";
  r();
  y();
  g();
  function f(s, t) {
    s = String(s || "").trim();
    let a = s, i, n = "";
    if (/^[^a-zA-Z\\\s]/.test(s)) {
      i = s[0];
      let o = s.lastIndexOf(i);
      n += s.substring(o + 1), s = s.substring(1, o);
    }
    let e = 0;
    return s = ys(s, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let p = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!p)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let l = o.substring(p[0].length, o.length - 1);
        return t && (t[e] = p[1]), e++, `(${l})`;
      }
      return o.substring(0, 3) === "(?:" || e++, o;
    }), s = s.replace(/\[:([^:]+):\]/g, (o, p) => f.characterClasses[p] || o), new f.PCRE(s, n, a, n, i);
  }
  __name(f, "f");
  __name2(f, "f");
  function ys(s, t) {
    let a = 0, i = 0, n = false;
    for (let c = 0; c < s.length; c++) {
      let e = s[c];
      if (n) {
        n = false;
        continue;
      }
      switch (e) {
        case "(":
          i === 0 && (a = c), i++;
          break;
        case ")":
          if (i > 0 && (i--, i === 0)) {
            let o = c + 1, p = a === 0 ? "" : s.substring(0, a), l = s.substring(o), u = String(t(s.substring(a, o)));
            s = p + u + l, c = a;
          }
          break;
        case "\\":
          n = true;
          break;
        default:
          break;
      }
    }
    return s;
  }
  __name(ys, "ys");
  __name2(ys, "ys");
  (function(s) {
    class t extends RegExp {
      constructor(i, n, c, e, o) {
        super(i, n), this.pcrePattern = c, this.pcreFlags = e, this.delimiter = o;
      }
    }
    __name(t, "t");
    __name2(t, "t");
    s.PCRE = t, s.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(f || (f = {}));
  f.prototype = f.PCRE.prototype;
  V.exports = f;
});
var X = N((O) => {
  "use strict";
  r();
  y();
  g();
  O.parse = ks;
  O.serialize = xs;
  var js = Object.prototype.toString, C = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function ks(s, t) {
    if (typeof s != "string")
      throw new TypeError("argument str must be a string");
    for (var a = {}, i = t || {}, n = i.decode || Rs, c = 0; c < s.length; ) {
      var e = s.indexOf("=", c);
      if (e === -1)
        break;
      var o = s.indexOf(";", c);
      if (o === -1)
        o = s.length;
      else if (o < e) {
        c = s.lastIndexOf(";", e - 1) + 1;
        continue;
      }
      var p = s.slice(c, e).trim();
      if (a[p] === void 0) {
        var l = s.slice(e + 1, o).trim();
        l.charCodeAt(0) === 34 && (l = l.slice(1, -1)), a[p] = Ss(l, n);
      }
      c = o + 1;
    }
    return a;
  }
  __name(ks, "ks");
  __name2(ks, "ks");
  function xs(s, t, a) {
    var i = a || {}, n = i.encode || Ps;
    if (typeof n != "function")
      throw new TypeError("option encode is invalid");
    if (!C.test(s))
      throw new TypeError("argument name is invalid");
    var c = n(t);
    if (c && !C.test(c))
      throw new TypeError("argument val is invalid");
    var e = s + "=" + c;
    if (i.maxAge != null) {
      var o = i.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      e += "; Max-Age=" + Math.floor(o);
    }
    if (i.domain) {
      if (!C.test(i.domain))
        throw new TypeError("option domain is invalid");
      e += "; Domain=" + i.domain;
    }
    if (i.path) {
      if (!C.test(i.path))
        throw new TypeError("option path is invalid");
      e += "; Path=" + i.path;
    }
    if (i.expires) {
      var p = i.expires;
      if (!_s(p) || isNaN(p.valueOf()))
        throw new TypeError("option expires is invalid");
      e += "; Expires=" + p.toUTCString();
    }
    if (i.httpOnly && (e += "; HttpOnly"), i.secure && (e += "; Secure"), i.priority) {
      var l = typeof i.priority == "string" ? i.priority.toLowerCase() : i.priority;
      switch (l) {
        case "low":
          e += "; Priority=Low";
          break;
        case "medium":
          e += "; Priority=Medium";
          break;
        case "high":
          e += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (i.sameSite) {
      var u = typeof i.sameSite == "string" ? i.sameSite.toLowerCase() : i.sameSite;
      switch (u) {
        case true:
          e += "; SameSite=Strict";
          break;
        case "lax":
          e += "; SameSite=Lax";
          break;
        case "strict":
          e += "; SameSite=Strict";
          break;
        case "none":
          e += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return e;
  }
  __name(xs, "xs");
  __name2(xs, "xs");
  function Rs(s) {
    return s.indexOf("%") !== -1 ? decodeURIComponent(s) : s;
  }
  __name(Rs, "Rs");
  __name2(Rs, "Rs");
  function Ps(s) {
    return encodeURIComponent(s);
  }
  __name(Ps, "Ps");
  __name2(Ps, "Ps");
  function _s(s) {
    return js.call(s) === "[object Date]" || s instanceof Date;
  }
  __name(_s, "_s");
  __name2(_s, "_s");
  function Ss(s, t) {
    try {
      return t(s);
    } catch {
      return s;
    }
  }
  __name(Ss, "Ss");
  __name2(Ss, "Ss");
});
r();
y();
g();
r();
y();
g();
r();
y();
g();
var k = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
r();
y();
g();
r();
y();
g();
r();
y();
g();
r();
y();
g();
var F = U(q());
function _(s, t, a) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let i = a ? "" : "i", n = [];
  return { match: (0, F.default)(`%${s}%${i}`, n).exec(t), captureGroupKeys: n };
}
__name(_, "_");
__name2(_, "_");
function x(s, t, a, { namedOnly: i } = {}) {
  return s.replace(/\$([a-zA-Z0-9_]+)/g, (n, c) => {
    let e = a.indexOf(c);
    return i && e === -1 ? n : (e === -1 ? t[parseInt(c, 10)] : t[e + 1]) || "";
  });
}
__name(x, "x");
__name2(x, "x");
function T(s, { url: t, cookies: a, headers: i, routeDest: n }) {
  switch (s.type) {
    case "host":
      return { valid: t.hostname === s.value };
    case "header":
      return s.value !== void 0 ? M(s.value, i.get(s.key), n) : { valid: i.has(s.key) };
    case "cookie": {
      let c = a[s.key];
      return c && s.value !== void 0 ? M(s.value, c, n) : { valid: c !== void 0 };
    }
    case "query":
      return s.value !== void 0 ? M(s.value, t.searchParams.get(s.key), n) : { valid: t.searchParams.has(s.key) };
  }
}
__name(T, "T");
__name2(T, "T");
function M(s, t, a) {
  let { match: i, captureGroupKeys: n } = _(s, t);
  return a && i && n.length ? { valid: !!i, newRouteDest: x(a, i, n, { namedOnly: true }) } : { valid: !!i };
}
__name(M, "M");
__name2(M, "M");
r();
y();
g();
function $(s) {
  let t = new Headers(s.headers);
  return s.cf && (t.set("x-vercel-ip-city", encodeURIComponent(s.cf.city)), t.set("x-vercel-ip-country", s.cf.country), t.set("x-vercel-ip-country-region", s.cf.regionCode), t.set("x-vercel-ip-latitude", s.cf.latitude), t.set("x-vercel-ip-longitude", s.cf.longitude)), t.set("x-vercel-sc-host", k), new Request(s, { headers: t });
}
__name($, "$");
__name2($, "$");
r();
y();
g();
function b(s, t, a) {
  let i = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [n, c] of i) {
    let e = n.toLowerCase(), o = a?.match ? x(c, a.match, a.captureGroupKeys) : c;
    e === "set-cookie" ? s.append(e, o) : s.set(e, o);
  }
}
__name(b, "b");
__name2(b, "b");
function R(s) {
  return /^https?:\/\//.test(s);
}
__name(R, "R");
__name2(R, "R");
function m(s, t) {
  for (let [a, i] of t.entries()) {
    let n = /^nxtP(.+)$/.exec(a), c = /^nxtI(.+)$/.exec(a);
    n?.[1] ? (s.set(a, i), s.set(n[1], i)) : c?.[1] ? s.set(c[1], i.replace(/(\(\.+\))+/, "")) : (!s.has(a) || !!i && !s.getAll(a).includes(i)) && s.append(a, i);
  }
}
__name(m, "m");
__name2(m, "m");
function I(s, t) {
  let a = new URL(t, s.url);
  return m(a.searchParams, new URL(s.url).searchParams), a.pathname = a.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(a, s);
}
__name(I, "I");
__name2(I, "I");
function P(s) {
  return new Response(s.body, s);
}
__name(P, "P");
__name2(P, "P");
function L(s) {
  return s.split(",").map((t) => {
    let [a, i] = t.split(";"), n = parseFloat((i ?? "q=1").replace(/q *= */gi, ""));
    return [a.trim(), isNaN(n) ? 1 : n];
  }).sort((t, a) => a[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
__name(L, "L");
__name2(L, "L");
r();
y();
g();
function A(s) {
  switch (s) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
__name(A, "A");
__name2(A, "A");
async function S(s, { request: t, assetsFetcher: a, ctx: i }, { path: n, searchParams: c }) {
  let e, o = new URL(t.url);
  m(o.searchParams, c);
  let p = new Request(o, t);
  try {
    switch (s?.type) {
      case "function":
      case "middleware": {
        let l = await import(s.entrypoint);
        try {
          e = await l.default(p, i);
        } catch (u) {
          let v = u;
          throw v.name === "TypeError" && v.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${s.entrypoint})`) : u;
        }
        break;
      }
      case "override": {
        e = P(await a.fetch(I(p, s.path ?? n))), s.headers && b(e.headers, s.headers);
        break;
      }
      case "static": {
        e = await a.fetch(I(p, n));
        break;
      }
      default:
        e = new Response("Not Found", { status: 404 });
    }
  } catch (l) {
    return console.error(l), new Response("Internal Server Error", { status: 500 });
  }
  return P(e);
}
__name(S, "S");
__name2(S, "S");
function D(s, t) {
  let a = "^//?(?:", i = ")/(.*)$";
  return !s.startsWith(a) || !s.endsWith(i) ? false : s.slice(a.length, -i.length).split("|").every((c) => t.has(c));
}
__name(D, "D");
__name2(D, "D");
r();
y();
g();
function gs(s, { protocol: t, hostname: a, port: i, pathname: n }) {
  return !(t && s.protocol.replace(/:$/, "") !== t || !new RegExp(a).test(s.hostname) || i && !new RegExp(i).test(s.port) || n && !new RegExp(n).test(s.pathname));
}
__name(gs, "gs");
__name2(gs, "gs");
function ls(s, t) {
  if (s.method !== "GET")
    return;
  let { origin: a, searchParams: i } = new URL(s.url), n = i.get("url"), c = Number.parseInt(i.get("w") ?? "", 10), e = Number.parseInt(i.get("q") ?? "75", 10);
  if (!n || Number.isNaN(c) || Number.isNaN(e) || !t?.sizes?.includes(c) || e < 0 || e > 100)
    return;
  let o = new URL(n, a);
  if (o.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let p = n.startsWith("//"), l = n.startsWith("/") && !p;
  if (!l && !t?.domains?.includes(o.hostname) && !t?.remotePatterns?.find((j) => gs(o, j)))
    return;
  let u = s.headers.get("Accept") ?? "", v = t?.formats?.find((j) => u.includes(j))?.replace("image/", "");
  return { isRelative: l, imageUrl: o, options: { width: c, quality: e, format: v } };
}
__name(ls, "ls");
__name2(ls, "ls");
function us(s, t, a) {
  let i = new Headers();
  if (a?.contentSecurityPolicy && i.set("Content-Security-Policy", a.contentSecurityPolicy), a?.contentDispositionType) {
    let c = t.pathname.split("/").pop(), e = c ? `${a.contentDispositionType}; filename="${c}"` : a.contentDispositionType;
    i.set("Content-Disposition", e);
  }
  s.headers.has("Cache-Control") || i.set("Cache-Control", `public, max-age=${a?.minimumCacheTTL ?? 60}`);
  let n = P(s);
  return b(n.headers, i), n;
}
__name(us, "us");
__name2(us, "us");
async function B(s, { buildOutput: t, assetsFetcher: a, imagesConfig: i }) {
  let n = ls(s, i);
  if (!n)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: c, imageUrl: e } = n, p = await (c && e.pathname in t ? a.fetch.bind(a) : fetch)(e);
  return us(p, e, i);
}
__name(B, "B");
__name2(B, "B");
r();
y();
g();
r();
y();
g();
var ws = "x-vercel-cache-tags";
var ds = "x-next-cache-soft-tags";
var hs = Symbol.for("__cloudflare-request-context__");
async function K(s) {
  let t = `https://${k}/v1/suspense-cache/`;
  if (!s.url.startsWith(t))
    return null;
  try {
    let a = new URL(s.url), i = await vs();
    if (a.pathname === "/v1/suspense-cache/revalidate") {
      let c = a.searchParams.get("tags")?.split(",") ?? [];
      for (let e of c)
        await i.revalidateTag(e);
      return new Response(null, { status: 200 });
    }
    let n = a.pathname.replace("/v1/suspense-cache/", "");
    if (!n.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (s.method) {
      case "GET": {
        let c = W(s, ds), e = await i.get(n, { softTags: c });
        return e ? new Response(JSON.stringify(e.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (e.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let c = globalThis[hs], e = /* @__PURE__ */ __name2(async () => {
          let o = await s.json();
          o.data.tags === void 0 && (o.tags ??= W(s, ws) ?? []), await i.set(n, o);
        }, "e");
        return c ? c.ctx.waitUntil(e()) : await e(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (a) {
    return console.error(a), new Response("Error handling cache request", { status: 500 });
  }
}
__name(K, "K");
__name2(K, "K");
async function vs() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? G("kv") : G("cache-api");
}
__name(vs, "vs");
__name2(vs, "vs");
async function G(s) {
  let t = await import(`./__next-on-pages-dist__/cache/${s}.js`);
  return new t.default();
}
__name(G, "G");
__name2(G, "G");
function W(s, t) {
  return s.headers.get(t)?.split(",")?.filter(Boolean);
}
__name(W, "W");
__name2(W, "W");
function Z() {
  globalThis[J] || (bs(), globalThis[J] = true);
}
__name(Z, "Z");
__name2(Z, "Z");
function bs() {
  let s = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let a = new Request(...t), i = await ms(a);
    return i || (i = await K(a), i) ? i : (fs(a), s(a));
  };
}
__name(bs, "bs");
__name2(bs, "bs");
async function ms(s) {
  if (s.url.startsWith("blob:"))
    try {
      let a = (await import(`./__next-on-pages-dist__/assets/${new URL(s.url).pathname}.bin`)).default, i = { async arrayBuffer() {
        return a;
      }, get body() {
        return new ReadableStream({ start(n) {
          let c = Buffer.from(a);
          n.enqueue(c), n.close();
        } });
      }, async text() {
        return Buffer.from(a).toString();
      }, async json() {
        let n = Buffer.from(a);
        return JSON.stringify(n.toString());
      }, async blob() {
        return new Blob(a);
      } };
      return i.clone = () => ({ ...i }), i;
    } catch {
    }
  return null;
}
__name(ms, "ms");
__name2(ms, "ms");
function fs(s) {
  s.headers.has("user-agent") || s.headers.set("user-agent", "Next.js Middleware");
}
__name(fs, "fs");
__name2(fs, "fs");
var J = Symbol.for("next-on-pages fetch patch");
r();
y();
g();
var Q = U(X());
var z = /* @__PURE__ */ __name2(class {
  constructor(t, a, i, n, c) {
    this.routes = t;
    this.output = a;
    this.reqCtx = i;
    this.url = new URL(i.request.url), this.cookies = (0, Q.parse)(i.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), m(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = c?.find((e) => e.domain === this.url.hostname), this.locales = new Set(n.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: a, checkIntercept: i }) {
    let n = _(t.src, this.path, t.caseSensitive);
    if (!n.match || t.methods && !t.methods.map((e) => e.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let c = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((e) => {
      let o = T(e, c);
      return o.newRouteDest && (c.routeDest = o.newRouteDest), !o.valid;
    }) && !t.missing?.find((e) => T(e, c).valid) && !(a && t.status !== this.status)) {
      if (i && t.dest) {
        let e = /\/(\(\.+\))+/, o = e.test(t.dest), p = e.test(this.path);
        if (o && !p)
          return;
      }
      return { routeMatch: n, routeDest: c.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let a = "x-middleware-override-headers", i = t.headers.get(a);
    if (i) {
      let p = new Set(i.split(",").map((l) => l.trim()));
      for (let l of p.keys()) {
        let u = `x-middleware-request-${l}`, v = t.headers.get(u);
        this.reqCtx.request.headers.get(l) !== v && (v ? this.reqCtx.request.headers.set(l, v) : this.reqCtx.request.headers.delete(l)), t.headers.delete(u);
      }
      t.headers.delete(a);
    }
    let n = "x-middleware-rewrite", c = t.headers.get(n);
    if (c) {
      let p = new URL(c, this.url), l = this.url.hostname !== p.hostname;
      this.path = l ? `${p}` : p.pathname, m(this.searchParams, p.searchParams), t.headers.delete(n);
    }
    let e = "x-middleware-next";
    t.headers.get(e) ? t.headers.delete(e) : !c && !t.headers.has("location") ? (this.body = t.body, this.status = t.status) : t.headers.has("location") && t.status >= 300 && t.status < 400 && (this.status = t.status), b(this.reqCtx.request.headers, t.headers), b(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let a = t && this.output[t];
    if (!a || a.type !== "middleware")
      return this.status = 500, false;
    let i = await S(a, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), i.status === 500 ? (this.status = i.status, false) : (this.processMiddlewareResp(i), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, a, i) {
    !t.headers || (b(this.headers.normal, t.headers, { match: a, captureGroupKeys: i }), t.important && b(this.headers.important, t.headers, { match: a, captureGroupKeys: i }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, a, i) {
    if (!t.dest)
      return this.path;
    let n = this.path, c = t.dest;
    this.wildcardMatch && /\$wildcard/.test(c) && (c = c.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = x(c, a, i);
    let e = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(n), p = /^\/__index\.prefetch\.rsc$/i.test(n);
    e && !o && !p && (this.path = n);
    let l = /\.rsc$/i.test(this.path), u = /\.prefetch\.rsc$/i.test(this.path), v = this.path in this.output;
    l && !u && !v && (this.path = this.path.replace(/\.rsc/i, ""));
    let j = new URL(this.path, this.url);
    return m(this.searchParams, j.searchParams), R(this.path) || (this.path = j.pathname), n;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: i, cookie: n } } = t, c = n && this.cookies[n], e = L(c ?? ""), o = L(this.reqCtx.request.headers.get("accept-language") ?? ""), u = [...e, ...o].map((v) => i[v]).filter(Boolean)[0];
    if (u) {
      !this.path.startsWith(u) && (this.headers.normal.set("location", u), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, a) {
    return !this.locales || a !== "miss" ? t : D(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, a) {
    let i = this.getLocaleFriendlyRoute(a, t), { routeMatch: n, routeDest: c } = this.checkRouteMatch(i, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, e = { ...i, dest: c };
    if (!n?.match || e.middlewarePath && this.middlewareInvoked.includes(e.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: p } = n;
    if (this.applyRouteOverrides(e), this.applyLocaleRedirects(e), !await this.runRouteMiddleware(e.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(e, o, p), this.applyRouteStatus(e);
    let u = this.applyRouteDest(e, o, p);
    if (e.check && !R(this.path))
      if (u === this.path) {
        if (t !== "miss")
          return this.checkPhase(A(t));
        this.status = 404;
      } else if (t === "miss") {
        if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return !e.continue || e.status && e.status >= 300 && e.status <= 399 ? "done" : "next";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let a = true;
    for (let c of this.routes[t]) {
      let e = await this.checkRoute(t, c);
      if (e === "error")
        return "error";
      if (e === "done") {
        a = false;
        break;
      }
    }
    if (t === "hit" || R(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let c of this.locales) {
        let e = new RegExp(`/${c}(/.*)`), p = this.path.match(e)?.[1];
        if (p && p in this.output) {
          this.path = p;
          break;
        }
      }
    let i = this.path in this.output;
    if (!i && this.path.endsWith("/")) {
      let c = this.path.replace(/\/$/, "");
      i = c in this.output, i && (this.path = c);
    }
    if (t === "miss" && !i) {
      let c = !this.status || this.status < 400;
      this.status = c ? 404 : this.status;
    }
    let n = "miss";
    return i || t === "miss" || t === "error" ? n = "hit" : a && (n = A(t)), this.checkPhase(n);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let a = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), a;
  }
}, "z");
async function Y(s, t, a, i) {
  let n = new z(t.routes, a, s, i, t.wildcard), c = await ss(n);
  return Cs(s, c, a);
}
__name(Y, "Y");
__name2(Y, "Y");
async function ss(s, t = "none", a = false) {
  return await s.run(t) === "error" || !a && s.status && s.status >= 400 ? ss(s, "error", true) : { path: s.path, status: s.status, headers: s.headers, searchParams: s.searchParams, body: s.body };
}
__name(ss, "ss");
__name2(ss, "ss");
async function Cs(s, { path: t = "/404", status: a, headers: i, searchParams: n, body: c }, e) {
  let o = i.normal.get("location");
  if (o) {
    if (o !== i.middlewareLocation) {
      let u = [...n.keys()].length ? `?${n.toString()}` : "";
      i.normal.set("location", `${o ?? "/"}${u}`);
    }
    return new Response(null, { status: a, headers: i.normal });
  }
  let p;
  if (c !== void 0)
    p = new Response(c, { status: a });
  else if (R(t)) {
    let u = new URL(t);
    m(u.searchParams, n), p = await fetch(u, s.request);
  } else
    p = await S(e[t], s, { path: t, status: a, headers: i, searchParams: n });
  let l = i.normal;
  return b(l, p.headers), b(l, i.important), p = new Response(p.body, { ...p, status: a || p.status, headers: l }), p;
}
__name(Cs, "Cs");
__name2(Cs, "Cs");
r();
y();
g();
function ts() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: zs };
}
__name(ts, "ts");
__name2(ts, "ts");
function zs(s) {
  let t = globalThis.__nextOnPagesRoutesIsolation._map.get(s);
  if (t)
    return t;
  let a = Es();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(s, a), a;
}
__name(zs, "zs");
__name2(zs, "zs");
function Es() {
  let s = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: (t, a) => s.has(a) ? s.get(a) : Reflect.get(globalThis, a), set: (t, a, i) => Ms.has(a) ? Reflect.set(globalThis, a, i) : (s.set(a, i), true) });
}
__name(Es, "Es");
__name2(Es, "Es");
var Ms = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var di = { async fetch(s, t, a) {
  ts(), Z();
  let i = await __ALSes_PROMISE__;
  if (!i) {
    let e = new URL(s.url), o = await t.ASSETS.fetch(`${e.protocol}//${e.host}/cdn-cgi/errors/no-nodejs_compat.html`), p = o.ok ? o.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(p, { status: 503 });
  }
  let { envAsyncLocalStorage: n, requestContextAsyncLocalStorage: c } = i;
  return n.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: k }, async () => c.run({ env: t, ctx: a, cf: s.cf }, async () => {
    if (new URL(s.url).pathname.startsWith("/_next/image"))
      return B(s, { buildOutput: d, assetsFetcher: t.ASSETS, imagesConfig: w.images });
    let o = $(s);
    return Y({ request: o, ctx: a, assetsFetcher: t.ASSETS }, w, d, h);
  }));
} };

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-Orbm0I/g2275u6glrq.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.13.7.", include: ["/*"], exclude: ["/_next/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env4, context3) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env4.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (di.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return di.fetch(request, env4, context3);
      }
    }
    return env4.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env4, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env4);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env4, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env4);
  } catch (e) {
    const error4 = reduceError(e);
    return Response.json(error4, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-nCRDaN/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env4, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env4, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env4, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env4, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-nCRDaN/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env4, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env4, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env4, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env4, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env4, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env4, ctx) => {
      this.env = env4;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=g2275u6glrq.js.map
