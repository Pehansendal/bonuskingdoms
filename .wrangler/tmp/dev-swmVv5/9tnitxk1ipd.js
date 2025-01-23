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

// .wrangler/tmp/pages-Gughrb/bundledWorker-0.21155604215442003.mjs
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
var et = Object.create;
var L = Object.defineProperty;
var it = Object.getOwnPropertyDescriptor;
var ct = Object.getOwnPropertyNames;
var at = Object.getPrototypeOf;
var ot = Object.prototype.hasOwnProperty;
var N = /* @__PURE__ */ __name2((t, s) => () => (t && (s = t(t = 0)), s), "N");
var A = /* @__PURE__ */ __name2((t, s) => () => (s || t((s = { exports: {} }).exports, s), s.exports), "A");
var nt = /* @__PURE__ */ __name2((t, s, i, e) => {
  if (s && typeof s == "object" || typeof s == "function")
    for (let a of ct(s))
      !ot.call(t, a) && a !== i && L(t, a, { get: () => s[a], enumerable: !(e = it(s, a)) || e.enumerable });
  return t;
}, "nt");
var O = /* @__PURE__ */ __name2((t, s, i) => (i = t != null ? et(at(t)) : {}, nt(s || !t || !t.__esModule ? L(i, "default", { value: t, enumerable: true }) : i, t)), "O");
var h;
var r = N(() => {
  h = { collectedLocales: [] };
});
var b;
var y = N(() => {
  b = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/_next/data/KDEKbytnoIc0_XEtXykM\\-/(.*).json$", dest: "/$1", override: true, continue: true, has: [{ type: "header", key: "x-nextjs-data" }] }, { src: "^/index(?:/)?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/", override: true, continue: true }, { continue: true, src: "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/admin(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(.json)?[\\/#\\?]?$", missing: [{ type: "header", key: "x-prerender-revalidate", value: "ddc4c2580f4d5cc5663f375b6ce13c8a" }], middlewarePath: "src/middleware", middlewareRawSrc: ["/admin/:path*"], override: true }, { src: "^/$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/KDEKbytnoIc0_XEtXykM-/index.json", continue: true, override: true }, { src: "^/((?!_next/)(?:.*[^/]|.*))/?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/KDEKbytnoIc0_XEtXykM-/$1.json", continue: true, override: true }, { src: "^/?$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }], filesystem: [{ src: "^/_next/data/KDEKbytnoIc0_XEtXykM\\-/(.*).json$", dest: "/$1", continue: true, has: [{ type: "header", key: "x-nextjs-data" }] }, { src: "^/index(?:/)?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/", continue: true }, { src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/(.+)/\\.prefetch\\.rsc$", dest: "/$1.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/KDEKbytnoIc0_XEtXykM-/index.json", continue: true }, { src: "^/((?!_next/)(?:.*[^/]|.*))/?$", has: [{ type: "header", key: "x-nextjs-data" }], dest: "/_next/data/KDEKbytnoIc0_XEtXykM-/$1.json", continue: true }, { src: "^/_next/data/KDEKbytnoIc0_XEtXykM\\-/crypto\\-casinos/(?<nxtPslug>[^/]+?)(?:/)?.json$", dest: "/crypto-casinos/[slug]?nxtPslug=$nxtPslug" }, { src: "^/crypto\\-casinos/(?<nxtPslug>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/crypto-casinos/[slug].rsc?nxtPslug=$nxtPslug" }, { src: "^/crypto\\-casinos/(?<nxtPslug>[^/]+?)(?:/)?$", dest: "/crypto-casinos/[slug]?nxtPslug=$nxtPslug" }, { src: "^/_next/data/KDEKbytnoIc0_XEtXykM\\-/(.*).json$", headers: { "x-nextjs-matched-path": "/$1" }, continue: true, override: true }, { src: "^/_next/data/KDEKbytnoIc0_XEtXykM\\-/(.*).json$", dest: "__next_data_catchall" }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|KDEKbytnoIc0_XEtXykM\\-)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index(?:/)?$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*?)(?:/)?$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" }, "__next_data_catchall.json": { path: "__next_data_catchall", contentType: "application/json" } }, framework: { version: "14.1.0" }, crons: [] };
});
var g;
var _ = N(() => {
  g = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/Bonus kingdoms logo liten.png": { type: "static" }, "/__next_data_catchall.json": { type: "override", path: "/__next_data_catchall.json", headers: { "content-type": "application/json" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/KDEKbytnoIc0_XEtXykM-/_buildManifest.js": { type: "static" }, "/_next/static/KDEKbytnoIc0_XEtXykM-/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/212.a6d77743b0e2dd21.js": { type: "static" }, "/_next/static/chunks/250-aad1a1b52dbe7fee.js": { type: "static" }, "/_next/static/chunks/411-e2b298e9657f3085.js": { type: "static" }, "/_next/static/chunks/429-f9d7eb3c7b269fd4.js": { type: "static" }, "/_next/static/chunks/703-da39d6e00a94da59.js": { type: "static" }, "/_next/static/chunks/726-477afc90790a22b7.js": { type: "static" }, "/_next/static/chunks/768-5c69dc27807397f3.js": { type: "static" }, "/_next/static/chunks/app/admin/page-5c240395f7f9e749.js": { type: "static" }, "/_next/static/chunks/app/all-casinos/page-163bf3c9954d7029.js": { type: "static" }, "/_next/static/chunks/app/crypto-casinos/[slug]/page-5f349811c17000e8.js": { type: "static" }, "/_next/static/chunks/app/how-bonuses-work/page-65b899ccb960f045.js": { type: "static" }, "/_next/static/chunks/app/layout-e6185c2aa432cd48.js": { type: "static" }, "/_next/static/chunks/app/not-found-c2b2ec6da88e0ffe.js": { type: "static" }, "/_next/static/chunks/app/page-663a2deea550f548.js": { type: "static" }, "/_next/static/chunks/eeac573e-8e218f1055a71691.js": { type: "static" }, "/_next/static/chunks/fd9d1056-3039abef2ca2f0f7.js": { type: "static" }, "/_next/static/chunks/framework-f66176bb897dc684.js": { type: "static" }, "/_next/static/chunks/main-app-7766ad019418a77a.js": { type: "static" }, "/_next/static/chunks/main-de3634f5f5b881d9.js": { type: "static" }, "/_next/static/chunks/pages/_app-75f6107b0260711c.js": { type: "static" }, "/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js": { type: "static" }, "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js": { type: "static" }, "/_next/static/chunks/webpack-853d349f82d8a528.js": { type: "static" }, "/_next/static/css/9fc789568e7c8354.css": { type: "static" }, "/_next/static/media/26a46d62cd723877-s.woff2": { type: "static" }, "/_next/static/media/55c55f0601d81cf3-s.woff2": { type: "static" }, "/_next/static/media/581909926a08bbc8-s.woff2": { type: "static" }, "/_next/static/media/6d93bde91c0c2823-s.woff2": { type: "static" }, "/_next/static/media/97e0cb1ae144a2a9-s.woff2": { type: "static" }, "/_next/static/media/a34f9d1faa5f3315-s.p.woff2": { type: "static" }, "/_next/static/media/df0a9ae256c0569c-s.woff2": { type: "static" }, "/bk-logo-stor.png": { type: "static" }, "/bonus-kingdoms-logo.png": { type: "static" }, "/casino_logos/11croco_casino.webp": { type: "static" }, "/casino_logos/1go_casino.webp": { type: "static" }, "/casino_logos/1red_casino.webp": { type: "static" }, "/casino_logos/1xslots_casino.webp": { type: "static" }, "/casino_logos/20bet_casino.webp": { type: "static" }, "/casino_logos/21_bets_casino.webp": { type: "static" }, "/casino_logos/21bit_casino.webp": { type: "static" }, "/casino_logos/22bet_casino.webp": { type: "static" }, "/casino_logos/24casino.webp": { type: "static" }, "/casino_logos/24slots_casino.webp": { type: "static" }, "/casino_logos/30bet_casino.webp": { type: "static" }, "/casino_logos/321crypto_casino.webp": { type: "static" }, "/casino_logos/4kasino_casino.webp": { type: "static" }, "/casino_logos/500_casino.webp": { type: "static" }, "/casino_logos/50_crowns_casino.webp": { type: "static" }, "/casino_logos/55bet_casino.webp": { type: "static" }, "/casino_logos/5gringos_casino.webp": { type: "static" }, "/casino_logos/7signs_casino.webp": { type: "static" }, "/casino_logos/888starz_casino.webp": { type: "static" }, "/casino_logos/8xwins_casino.webp": { type: "static" }, "/casino_logos/airbet_casino.webp": { type: "static" }, "/casino_logos/alf_casino.webp": { type: "static" }, "/casino_logos/allspins_casino.webp": { type: "static" }, "/casino_logos/allstarz_casino.webp": { type: "static" }, "/casino_logos/amerio_bet_casino.webp": { type: "static" }, "/casino_logos/anarchy_casino.webp": { type: "static" }, "/casino_logos/aplay_casino.webp": { type: "static" }, "/casino_logos/arcanebet_casino.webp": { type: "static" }, "/casino_logos/artcasino.webp": { type: "static" }, "/casino_logos/asino_casino.webp": { type: "static" }, "/casino_logos/auf_casino.webp": { type: "static" }, "/casino_logos/avocasino.webp": { type: "static" }, "/casino_logos/axecasino.webp": { type: "static" }, "/casino_logos/bankonbet_casino.webp": { type: "static" }, "/casino_logos/bdmbet_casino.webp": { type: "static" }, "/casino_logos/beastino_casino.webp": { type: "static" }, "/casino_logos/bet_it_all_casino.webp": { type: "static" }, "/casino_logos/betandplay_casino.webp": { type: "static" }, "/casino_logos/betandyou_casino.webp": { type: "static" }, "/casino_logos/betbeast_casino.webp": { type: "static" }, "/casino_logos/betcg_casino.webp": { type: "static" }, "/casino_logos/betchain_casino.webp": { type: "static" }, "/casino_logos/betcoin_casino.webp": { type: "static" }, "/casino_logos/beteum_casino.webp": { type: "static" }, "/casino_logos/betfinal_casino.webp": { type: "static" }, "/casino_logos/betflare_casino.webp": { type: "static" }, "/casino_logos/betfree_casino.webp": { type: "static" }, "/casino_logos/betify_casino.webp": { type: "static" }, "/casino_logos/betifyme_casino.webp": { type: "static" }, "/casino_logos/betmartini_casino.webp": { type: "static" }, "/casino_logos/betnox_casino.webp": { type: "static" }, "/casino_logos/betonred_casino.webp": { type: "static" }, "/casino_logos/betovix_casino.webp": { type: "static" }, "/casino_logos/betovo_casino.webp": { type: "static" }, "/casino_logos/betroom24_casino.webp": { type: "static" }, "/casino_logos/betrunner_casino.webp": { type: "static" }, "/casino_logos/betsofa_casino.webp": { type: "static" }, "/casino_logos/betsomnia_casino.webp": { type: "static" }, "/casino_logos/betssen_casino.webp": { type: "static" }, "/casino_logos/betswap_casino.webp": { type: "static" }, "/casino_logos/betti_casino.webp": { type: "static" }, "/casino_logos/bettilt_casino.webp": { type: "static" }, "/casino_logos/betybet_casino.webp": { type: "static" }, "/casino_logos/betzard_casino.webp": { type: "static" }, "/casino_logos/betzino_casino.webp": { type: "static" }, "/casino_logos/billy_billion_casino.webp": { type: "static" }, "/casino_logos/billybets_casino.webp": { type: "static" }, "/casino_logos/bingo_cafe_casino.webp": { type: "static" }, "/casino_logos/bitcoin_casino.webp": { type: "static" }, "/casino_logos/bitcoin_games_casino.webp": { type: "static" }, "/casino_logos/bitkingz_casino.webp": { type: "static" }, "/casino_logos/bitsler_casino.webp": { type: "static" }, "/casino_logos/bizzo_casino.webp": { type: "static" }, "/casino_logos/bk8_casino.webp": { type: "static" }, "/casino_logos/black_lion_casino.webp": { type: "static" }, "/casino_logos/blitz-bet_casino.webp": { type: "static" }, "/casino_logos/blueleo_casino.webp": { type: "static" }, "/casino_logos/boaboa_casino.webp": { type: "static" }, "/casino_logos/boho_casino.webp": { type: "static" }, "/casino_logos/bombastic_casino.webp": { type: "static" }, "/casino_logos/bonanzino_casino.webp": { type: "static" }, "/casino_logos/bongo_casino.webp": { type: "static" }, "/casino_logos/booi_casino.webp": { type: "static" }, "/casino_logos/boomerang-bet_casino.webp": { type: "static" }, "/casino_logos/boomerang_casino.webp": { type: "static" }, "/casino_logos/brango_casino.webp": { type: "static" }, "/casino_logos/brazino777_casino.webp": { type: "static" }, "/casino_logos/brucebet_casino.webp": { type: "static" }, "/casino_logos/bull_casino.webp": { type: "static" }, "/casino_logos/bullsbet_casino.webp": { type: "static" }, "/casino_logos/burancasino.webp": { type: "static" }, "/casino_logos/buumi_casino.webp": { type: "static" }, "/casino_logos/cadabrus_casino.webp": { type: "static" }, "/casino_logos/cadoola_casino.webp": { type: "static" }, "/casino_logos/caibo_casino.webp": { type: "static" }, "/casino_logos/casabet_casino.webp": { type: "static" }, "/casino_logos/cashwin_casino.webp": { type: "static" }, "/casino_logos/casinado_casino.webp": { type: "static" }, "/casino_logos/casino_friday.webp": { type: "static" }, "/casino_logos/casino_infinity.webp": { type: "static" }, "/casino_logos/casino_mustang.webp": { type: "static" }, "/casino_logos/casino_orca.webp": { type: "static" }, "/casino_logos/casino_rocket.webp": { type: "static" }, "/casino_logos/casino_together.webp": { type: "static" }, "/casino_logos/casinobello.webp": { type: "static" }, "/casino_logos/casinobet_casino.webp": { type: "static" }, "/casino_logos/casinoin.webp": { type: "static" }, "/casino_logos/casinojax.webp": { type: "static" }, "/casino_logos/casinoly_casino.webp": { type: "static" }, "/casino_logos/casinonic_casino.webp": { type: "static" }, "/casino_logos/casinosecret.webp": { type: "static" }, "/casino_logos/casinostriker.webp": { type: "static" }, "/casino_logos/casinova_casino.webp": { type: "static" }, "/casino_logos/casinovibes.webp": { type: "static" }, "/casino_logos/casinozer_casino.webp": { type: "static" }, "/casino_logos/casiny_casino.webp": { type: "static" }, "/casino_logos/casoo_casino.webp": { type: "static" }, "/casino_logos/cazimbo_casino.webp": { type: "static" }, "/casino_logos/chipstars_casino.webp": { type: "static" }, "/casino_logos/cleopatra_casino.webp": { type: "static" }, "/casino_logos/club_riches_casino.webp": { type: "static" }, "/casino_logos/cobra_casino.webp": { type: "static" }, "/casino_logos/coins_game_casino.webp": { type: "static" }, "/casino_logos/conquestador_casino.webp": { type: "static" }, "/casino_logos/coolzino_casino.webp": { type: "static" }, "/casino_logos/cosmicslot_casino.webp": { type: "static" }, "/casino_logos/cosmobet_casino.webp": { type: "static" }, "/casino_logos/cosmoswin_casino.webp": { type: "static" }, "/casino_logos/crashino_casino.webp": { type: "static" }, "/casino_logos/crocoslots_casino.webp": { type: "static" }, "/casino_logos/crownslots_casino.webp": { type: "static" }, "/casino_logos/crusino_casino.webp": { type: "static" }, "/casino_logos/cryptoboss_casino.webp": { type: "static" }, "/casino_logos/cryptoleo_casino.webp": { type: "static" }, "/casino_logos/cryptorush_casino.webp": { type: "static" }, "/casino_logos/cryptowild_casino.webp": { type: "static" }, "/casino_logos/dailyspins_casino.webp": { type: "static" }, "/casino_logos/dazardbet_casino.webp": { type: "static" }, "/casino_logos/dedprz_casino.webp": { type: "static" }, "/casino_logos/del_oro_casino.webp": { type: "static" }, "/casino_logos/divas_luck_casino.webp": { type: "static" }, "/casino_logos/drift_casino.webp": { type: "static" }, "/casino_logos/drip_casino.webp": { type: "static" }, "/casino_logos/dundeeslots_casino.webp": { type: "static" }, "/casino_logos/emucasino.webp": { type: "static" }, "/casino_logos/epicbet_casino.webp": { type: "static" }, "/casino_logos/excitewin_casino.webp": { type: "static" }, "/casino_logos/fairspin_casino.webp": { type: "static" }, "/casino_logos/fansport_casino.webp": { type: "static" }, "/casino_logos/fatpanda_casino.webp": { type: "static" }, "/casino_logos/fatpirate_casino.webp": { type: "static" }, "/casino_logos/felixspin_casino.webp": { type: "static" }, "/casino_logos/fezbet_casino.webp": { type: "static" }, "/casino_logos/flappy_casino.webp": { type: "static" }, "/casino_logos/flukyone_casino.webp": { type: "static" }, "/casino_logos/flush_casino.webp": { type: "static" }, "/casino_logos/fortune_panda_casino.webp": { type: "static" }, "/casino_logos/fortunejack_casino.webp": { type: "static" }, "/casino_logos/fresh_casino.webp": { type: "static" }, "/casino_logos/fruits4real_casino.webp": { type: "static" }, "/casino_logos/funbet_casino.webp": { type: "static" }, "/casino_logos/gamblezen_casino.webp": { type: "static" }, "/casino_logos/gamdom_casino.webp": { type: "static" }, "/casino_logos/gamix_casino.webp": { type: "static" }, "/casino_logos/gangsta_casino.webp": { type: "static" }, "/casino_logos/gate777_casino.webp": { type: "static" }, "/casino_logos/gembet_casino.webp": { type: "static" }, "/casino_logos/genie_jackpot_casino.webp": { type: "static" }, "/casino_logos/getslots_casino.webp": { type: "static" }, "/casino_logos/ggbet_casino.webp": { type: "static" }, "/casino_logos/gizbo_casino.webp": { type: "static" }, "/casino_logos/godbunny_casino.webp": { type: "static" }, "/casino_logos/golden_crown_casino.webp": { type: "static" }, "/casino_logos/golden_panda_casino.webp": { type: "static" }, "/casino_logos/golden_star_casino.webp": { type: "static" }, "/casino_logos/goldspin_casino.webp": { type: "static" }, "/casino_logos/gomblingo_casino.webp": { type: "static" }, "/casino_logos/goodman_casino.webp": { type: "static" }, "/casino_logos/goralbet_casino.webp": { type: "static" }, "/casino_logos/gospin_casino.webp": { type: "static" }, "/casino_logos/grandwin_casino.webp": { type: "static" }, "/casino_logos/greatspin_casino.webp": { type: "static" }, "/casino_logos/greatwin_casino.webp": { type: "static" }, "/casino_logos/gunsbet_casino.webp": { type: "static" }, "/casino_logos/gxmble_casino.webp": { type: "static" }, "/casino_logos/happyhugo_casino.webp": { type: "static" }, "/casino_logos/happyslots_casino.webp": { type: "static" }, "/casino_logos/happyspins_casino.webp": { type: "static" }, "/casino_logos/haz_casino.webp": { type: "static" }, "/casino_logos/heats_casino.webp": { type: "static" }, "/casino_logos/helabet_casino.webp": { type: "static" }, "/casino_logos/hellspin_casino.webp": { type: "static" }, "/casino_logos/herospin_casino.webp": { type: "static" }, "/casino_logos/hexabet_casino.webp": { type: "static" }, "/casino_logos/hiperwin_casino.webp": { type: "static" }, "/casino_logos/hitnspin_casino.webp": { type: "static" }, "/casino_logos/horus_casino.webp": { type: "static" }, "/casino_logos/hotslots_casino.webp": { type: "static" }, "/casino_logos/hugewin_casino.webp": { type: "static" }, "/casino_logos/hugo_casino.webp": { type: "static" }, "/casino_logos/icebet_casino.webp": { type: "static" }, "/casino_logos/immerion_casino.webp": { type: "static" }, "/casino_logos/impressario_casino.webp": { type: "static" }, "/casino_logos/ivibet_casino.webp": { type: "static" }, "/casino_logos/iwild_casino.webp": { type: "static" }, "/casino_logos/izzi_casino.webp": { type: "static" }, "/casino_logos/jackbit_casino.webp": { type: "static" }, "/casino_logos/jackburst_casino.webp": { type: "static" }, "/casino_logos/jackpot_guru_casino.webp": { type: "static" }, "/casino_logos/jackpotfrenzy_casino.webp": { type: "static" }, "/casino_logos/jackpoty_casino.webp": { type: "static" }, "/casino_logos/jacktop_casino.webp": { type: "static" }, "/casino_logos/jeetcity_casino.webp": { type: "static" }, "/casino_logos/jet_casino.webp": { type: "static" }, "/casino_logos/jettbet_casino.webp": { type: "static" }, "/casino_logos/johnvegascasino.webp": { type: "static" }, "/casino_logos/joker8_casino.webp": { type: "static" }, "/casino_logos/joo_casino.webp": { type: "static" }, "/casino_logos/joya_casino.webp": { type: "static" }, "/casino_logos/joycasino.webp": { type: "static" }, "/casino_logos/jozz_casino.webp": { type: "static" }, "/casino_logos/jupi_casino.webp": { type: "static" }, "/casino_logos/justcasino.webp": { type: "static" }, "/casino_logos/jvspinbet_casino.webp": { type: "static" }, "/casino_logos/katsubet_casino.webp": { type: "static" }, "/casino_logos/kaulana_casino.webp": { type: "static" }, "/casino_logos/kikobet_casino.webp": { type: "static" }, "/casino_logos/kinbet_casino.webp": { type: "static" }, "/casino_logos/king_billy_casino.webp": { type: "static" }, "/casino_logos/kingamo_casino.webp": { type: "static" }, "/casino_logos/kingdom_casino.webp": { type: "static" }, "/casino_logos/kingmaker_casino.webp": { type: "static" }, "/casino_logos/kingswin_casino.webp": { type: "static" }, "/casino_logos/kirgo_casino.webp": { type: "static" }, "/casino_logos/koi_casino.webp": { type: "static" }, "/casino_logos/kripty_casino.webp": { type: "static" }, "/casino_logos/kryptosino_casino.webp": { type: "static" }, "/casino_logos/lamabet_casino.webp": { type: "static" }, "/casino_logos/legiano_casino.webp": { type: "static" }, "/casino_logos/legzo_casino.webp": { type: "static" }, "/casino_logos/lemon_casino.webp": { type: "static" }, "/casino_logos/leon_bet_casino.webp": { type: "static" }, "/casino_logos/letslucky_casino.webp": { type: "static" }, "/casino_logos/levelup_casino.webp": { type: "static" }, "/casino_logos/lex_casino.webp": { type: "static" }, "/casino_logos/librabet_casino.webp": { type: "static" }, "/casino_logos/lilibet_casino.webp": { type: "static" }, "/casino_logos/loft_casino.webp": { type: "static" }, "/casino_logos/loki_casino.webp": { type: "static" }, "/casino_logos/lucky7even_casino.webp": { type: "static" }, "/casino_logos/lucky_circus_casino.webp": { type: "static" }, "/casino_logos/lucky_crypto_casino.webp": { type: "static" }, "/casino_logos/lucky_dreams_casino.webp": { type: "static" }, "/casino_logos/lucky_elf_casino.webp": { type: "static" }, "/casino_logos/lucky_hunter_casino.webp": { type: "static" }, "/casino_logos/lucky_koala_casino.webp": { type: "static" }, "/casino_logos/lucky_ones_casino.webp": { type: "static" }, "/casino_logos/lucky_spins_casino.webp": { type: "static" }, "/casino_logos/lucky_vibe_casino.webp": { type: "static" }, "/casino_logos/lucky_whale_casino.webp": { type: "static" }, "/casino_logos/luckybay_casino.webp": { type: "static" }, "/casino_logos/luckychoo_casino.webp": { type: "static" }, "/casino_logos/luckyhand_casino.webp": { type: "static" }, "/casino_logos/luckyhour_casino.webp": { type: "static" }, "/casino_logos/luckykong_casino.webp": { type: "static" }, "/casino_logos/luckyreels_casino.webp": { type: "static" }, "/casino_logos/luckystar_casino.webp": { type: "static" }, "/casino_logos/luckystart_casino.webp": { type: "static" }, "/casino_logos/luckywins_casino.webp": { type: "static" }, "/casino_logos/lucys_casino.webp": { type: "static" }, "/casino_logos/lukki_casino.webp": { type: "static" }, "/casino_logos/lunubet_casino.webp": { type: "static" }, "/casino_logos/lyracasino.webp": { type: "static" }, "/casino_logos/malinacasino.webp": { type: "static" }, "/casino_logos/manga_casino.webp": { type: "static" }, "/casino_logos/marsbet_casino.webp": { type: "static" }, "/casino_logos/mbit_casino.webp": { type: "static" }, "/casino_logos/mega_dice_casino.webp": { type: "static" }, "/casino_logos/megapari_casino.webp": { type: "static" }, "/casino_logos/megarich_casino.webp": { type: "static" }, "/casino_logos/merlin_casino.webp": { type: "static" }, "/casino_logos/metaspins_crypto_casino.webp": { type: "static" }, "/casino_logos/mirax_casino.webp": { type: "static" }, "/casino_logos/moicasino.webp": { type: "static" }, "/casino_logos/mondcasino.webp": { type: "static" }, "/casino_logos/monixbet_casino.webp": { type: "static" }, "/casino_logos/monro_casino.webp": { type: "static" }, "/casino_logos/moonwin_casino.webp": { type: "static" }, "/casino_logos/mr_bit_casino.webp": { type: "static" }, "/casino_logos/mrpacho_casino.webp": { type: "static" }, "/casino_logos/mystake_casino.webp": { type: "static" }, "/casino_logos/n1bet_casino.webp": { type: "static" }, "/casino_logos/nalu_casino.webp": { type: "static" }, "/casino_logos/national_casino.webp": { type: "static" }, "/casino_logos/needforspin_casino.webp": { type: "static" }, "/casino_logos/neon54_casino.webp": { type: "static" }, "/casino_logos/neospin_casino.webp": { type: "static" }, "/casino_logos/ninlay_casino.webp": { type: "static" }, "/casino_logos/nitrobet_casino.webp": { type: "static" }, "/casino_logos/niyvi_casino.webp": { type: "static" }, "/casino_logos/nolimitbet_casino.webp": { type: "static" }, "/casino_logos/nomini_casino.webp": { type: "static" }, "/casino_logos/norgesspill_casino.webp": { type: "static" }, "/casino_logos/nuggetslots_casino.webp": { type: "static" }, "/casino_logos/nummus_casino.webp": { type: "static" }, "/casino_logos/ohmyspins_casino.webp": { type: "static" }, "/casino_logos/ohmyzino_casino.webp": { type: "static" }, "/casino_logos/olympia_casino.webp": { type: "static" }, "/casino_logos/olympusbet_casino.webp": { type: "static" }, "/casino_logos/omni_slots_casino.webp": { type: "static" }, "/casino_logos/onedun_casino.webp": { type: "static" }, "/casino_logos/onluck_casino.webp": { type: "static" }, "/casino_logos/osh_casino.webp": { type: "static" }, "/casino_logos/oshi_casino.webp": { type: "static" }, "/casino_logos/palmslots_casino.webp": { type: "static" }, "/casino_logos/pan-casino.webp": { type: "static" }, "/casino_logos/pin-up_casino.webp": { type: "static" }, "/casino_logos/pinnacle_casino.webp": { type: "static" }, "/casino_logos/pirate_spot_casino.webp": { type: "static" }, "/casino_logos/plangames_casino.webp": { type: "static" }, "/casino_logos/playfina_casino.webp": { type: "static" }, "/casino_logos/playfortuna_casino.webp": { type: "static" }, "/casino_logos/playio_casino.webp": { type: "static" }, "/casino_logos/playmojo_casino.webp": { type: "static" }, "/casino_logos/playmoola_casino.webp": { type: "static" }, "/casino_logos/playouwin_casino.webp": { type: "static" }, "/casino_logos/playzilla_casino.webp": { type: "static" }, "/casino_logos/pledoo_casino.webp": { type: "static" }, "/casino_logos/powbet_casino.webp": { type: "static" }, "/casino_logos/powerbet777_casino.webp": { type: "static" }, "/casino_logos/powerup_casino.webp": { type: "static" }, "/casino_logos/primebetz_casino.webp": { type: "static" }, "/casino_logos/prontobet_casino.webp": { type: "static" }, "/casino_logos/puma_casino.webp": { type: "static" }, "/casino_logos/punterz_casino.webp": { type: "static" }, "/casino_logos/queen_casino.webp": { type: "static" }, "/casino_logos/queenspins_casino.webp": { type: "static" }, "/casino_logos/quickslot_casino.webp": { type: "static" }, "/casino_logos/rakebit_casino.webp": { type: "static" }, "/casino_logos/rakoo_casino.webp": { type: "static" }, "/casino_logos/raze_casino.webp": { type: "static" }, "/casino_logos/readycasino.webp": { type: "static" }, "/casino_logos/red_dice_casino.webp": { type: "static" }, "/casino_logos/reel_crypto_casino.webp": { type: "static" }, "/casino_logos/reloadbet_casino.webp": { type: "static" }, "/casino_logos/respin_casino.webp": { type: "static" }, "/casino_logos/retro_bet_casino.webp": { type: "static" }, "/casino_logos/richard_casino.webp": { type: "static" }, "/casino_logos/rickycasino.webp": { type: "static" }, "/casino_logos/riobet_casino.webp": { type: "static" }, "/casino_logos/ritzo_casino.webp": { type: "static" }, "/casino_logos/riviera_casino.webp": { type: "static" }, "/casino_logos/rizz_casino.webp": { type: "static" }, "/casino_logos/robocat_casino.webp": { type: "static" }, "/casino_logos/rocketplay_casino.webp": { type: "static" }, "/casino_logos/rocketwin_casino.webp": { type: "static" }, "/casino_logos/rockwin_casino.webp": { type: "static" }, "/casino_logos/rolletto_casino.webp": { type: "static" }, "/casino_logos/rolling_slots_casino.webp": { type: "static" }, "/casino_logos/rollino_casino.webp": { type: "static" }, "/casino_logos/rollxo_casino.webp": { type: "static" }, "/casino_logos/rooli_casino.webp": { type: "static" }, "/casino_logos/rooster_bet_casino.webp": { type: "static" }, "/casino_logos/royal_stars_casino.webp": { type: "static" }, "/casino_logos/royalgame_casino.webp": { type: "static" }, "/casino_logos/royspins_casino.webp": { type: "static" }, "/casino_logos/run4win_casino.webp": { type: "static" }, "/casino_logos/sapphirebet_casino.webp": { type: "static" }, "/casino_logos/shambala_casino.webp": { type: "static" }, "/casino_logos/shangri_la_casino.webp": { type: "static" }, "/casino_logos/sherbet_casino.webp": { type: "static" }, "/casino_logos/shotz_casino.webp": { type: "static" }, "/casino_logos/silverplay_casino.webp": { type: "static" }, "/casino_logos/sirwin_casino.webp": { type: "static" }, "/casino_logos/skycrown_casino.webp": { type: "static" }, "/casino_logos/slota_casino.webp": { type: "static" }, "/casino_logos/slotbox_casino.webp": { type: "static" }, "/casino_logos/sloterra_casino.webp": { type: "static" }, "/casino_logos/slotexo_casino.webp": { type: "static" }, "/casino_logos/slotit_casino.webp": { type: "static" }, "/casino_logos/slotlords_casino.webp": { type: "static" }, "/casino_logos/slotman_casino.webp": { type: "static" }, "/casino_logos/slotozen_casino.webp": { type: "static" }, "/casino_logos/slotparadise_casino.webp": { type: "static" }, "/casino_logos/slots_city_casino.webp": { type: "static" }, "/casino_logos/slots_gallery_casino.webp": { type: "static" }, "/casino_logos/slotsflix_casino.webp": { type: "static" }, "/casino_logos/slotspalace_casino.webp": { type: "static" }, "/casino_logos/slottica_casino.webp": { type: "static" }, "/casino_logos/slottojam_casino.webp": { type: "static" }, "/casino_logos/slottyway_casino.webp": { type: "static" }, "/casino_logos/slotum_casino.webp": { type: "static" }, "/casino_logos/slotuna_casino.webp": { type: "static" }, "/casino_logos/slotvibe_casino.webp": { type: "static" }, "/casino_logos/smokace_casino.webp": { type: "static" }, "/casino_logos/snatch_casino.webp": { type: "static" }, "/casino_logos/sol_casino.webp": { type: "static" }, "/casino_logos/solisbet_casino.webp": { type: "static" }, "/casino_logos/sombrero_spins_casino.webp": { type: "static" }, "/casino_logos/space_lilly_casino.webp": { type: "static" }, "/casino_logos/spades_queen_casino.webp": { type: "static" }, "/casino_logos/spellwin_casino.webp": { type: "static" }, "/casino_logos/spin_away_casino.webp": { type: "static" }, "/casino_logos/spin_samurai_casino.webp": { type: "static" }, "/casino_logos/spinarium_casino.webp": { type: "static" }, "/casino_logos/spinaro_casino.webp": { type: "static" }, "/casino_logos/spinbet_casino.webp": { type: "static" }, "/casino_logos/spinbetter_casino.webp": { type: "static" }, "/casino_logos/spinbit_casino.webp": { type: "static" }, "/casino_logos/spinch_casino.webp": { type: "static" }, "/casino_logos/spinfever_casino.webp": { type: "static" }, "/casino_logos/spinight_casino.webp": { type: "static" }, "/casino_logos/spinjo_casino.webp": { type: "static" }, "/casino_logos/spinline_casino.webp": { type: "static" }, "/casino_logos/spinnalot_casino.webp": { type: "static" }, "/casino_logos/spinrollz_casino.webp": { type: "static" }, "/casino_logos/spinsbro_casino.webp": { type: "static" }, "/casino_logos/spinspace_casino.webp": { type: "static" }, "/casino_logos/spinsup_casino.webp": { type: "static" }, "/casino_logos/spinsy_casino.webp": { type: "static" }, "/casino_logos/spinybet_casino.webp": { type: "static" }, "/casino_logos/spirit_casino.webp": { type: "static" }, "/casino_logos/sportaza_casino.webp": { type: "static" }, "/casino_logos/sportuna_casino.webp": { type: "static" }, "/casino_logos/stakeprix_casino.webp": { type: "static" }, "/casino_logos/starda_casino.webp": { type: "static" }, "/casino_logos/staxino_casino.webp": { type: "static" }, "/casino_logos/staycasino.webp": { type: "static" }, "/casino_logos/stelario_casino.webp": { type: "static" }, "/casino_logos/stupid_casino.webp": { type: "static" }, "/casino_logos/sultanbet_casino.webp": { type: "static" }, "/casino_logos/sunplay_casino.webp": { type: "static" }, "/casino_logos/superboss_casino.webp": { type: "static" }, "/casino_logos/sushi_casino.webp": { type: "static" }, "/casino_logos/syndicate_casino.webp": { type: "static" }, "/casino_logos/the_clubhouse_casino.webp": { type: "static" }, "/casino_logos/thorcasino.webp": { type: "static" }, "/casino_logos/thunderpick_casino.webp": { type: "static" }, "/casino_logos/tiki_casino.webp": { type: "static" }, "/casino_logos/tikitaka_casino.webp": { type: "static" }, "/casino_logos/tiktak_bet_casino.webp": { type: "static" }, "/casino_logos/tivitbet_casino.webp": { type: "static" }, "/casino_logos/tomb_riches_casino.webp": { type: "static" }, "/casino_logos/tonybet_casino.webp": { type: "static" }, "/casino_logos/tornadobet_casino.webp": { type: "static" }, "/casino_logos/treasure_spins_casino.webp": { type: "static" }, "/casino_logos/trino_casino.webp": { type: "static" }, "/casino_logos/trip2vip_casino.webp": { type: "static" }, "/casino_logos/trips_casino.webp": { type: "static" }, "/casino_logos/trivelabet_casino.webp": { type: "static" }, "/casino_logos/trustdice_casino.webp": { type: "static" }, "/casino_logos/tsars_casino.webp": { type: "static" }, "/casino_logos/twin_casino.webp": { type: "static" }, "/casino_logos/unlim_casino.webp": { type: "static" }, "/casino_logos/vasy_casino.webp": { type: "static" }, "/casino_logos/vavada_casino.webp": { type: "static" }, "/casino_logos/vave_casino.webp": { type: "static" }, "/casino_logos/vegas_now_casino.webp": { type: "static" }, "/casino_logos/vegasino_casino.webp": { type: "static" }, "/casino_logos/vegaz_casino.webp": { type: "static" }, "/casino_logos/velobet_casino.webp": { type: "static" }, "/casino_logos/vinyl_casino.webp": { type: "static" }, "/casino_logos/viperwin_casino.webp": { type: "static" }, "/casino_logos/voltslot_casino.webp": { type: "static" }, "/casino_logos/voodoo_casino.webp": { type: "static" }, "/casino_logos/vulkanvegas_casino.webp": { type: "static" }, "/casino_logos/wanted_win_casino.webp": { type: "static" }, "/casino_logos/wasino_casino.webp": { type: "static" }, "/casino_logos/wazamba_casino.webp": { type: "static" }, "/casino_logos/wazbee_casino.webp": { type: "static" }, "/casino_logos/weiss_casino.webp": { type: "static" }, "/casino_logos/welle_casino.webp": { type: "static" }, "/casino_logos/whamoo_casino.webp": { type: "static" }, "/casino_logos/wild_tokyo_casino.webp": { type: "static" }, "/casino_logos/wild_tornado_casino.webp": { type: "static" }, "/casino_logos/wildsino_casino.webp": { type: "static" }, "/casino_logos/winawin_casino.webp": { type: "static" }, "/casino_logos/windetta_casino.webp": { type: "static" }, "/casino_logos/wingaga_casino.webp": { type: "static" }, "/casino_logos/winlegends_casino.webp": { type: "static" }, "/casino_logos/winmaker_casino.webp": { type: "static" }, "/casino_logos/winning_casino.webp": { type: "static" }, "/casino_logos/winsane_casino.webp": { type: "static" }, "/casino_logos/winscore_casino.webp": { type: "static" }, "/casino_logos/winshark_casino.webp": { type: "static" }, "/casino_logos/winspirit_casino.webp": { type: "static" }, "/casino_logos/winsroyal_casino.webp": { type: "static" }, "/casino_logos/winstoria_casino.webp": { type: "static" }, "/casino_logos/wintomato_casino.webp": { type: "static" }, "/casino_logos/wintopia_casino.webp": { type: "static" }, "/casino_logos/winwin_casino.webp": { type: "static" }, "/casino_logos/wir_wetten_casino.webp": { type: "static" }, "/casino_logos/wish_casino.webp": { type: "static" }, "/casino_logos/wizebets_casino.webp": { type: "static" }, "/casino_logos/wolfy_casino.webp": { type: "static" }, "/casino_logos/wonaco_casino.webp": { type: "static" }, "/casino_logos/wsm_casino.webp": { type: "static" }, "/casino_logos/wunderwins_casino.webp": { type: "static" }, "/casino_logos/x7_casino.webp": { type: "static" }, "/casino_logos/yoju_casino.webp": { type: "static" }, "/casino_logos/zenbetting_casino.webp": { type: "static" }, "/casino_logos/zencasino.webp": { type: "static" }, "/casino_logos/zinkra_casino.webp": { type: "static" }, "/casino_logos/zipcasino.webp": { type: "static" }, "/casino_logos/zoome_casino.webp": { type: "static" }, "/casino_logos/zotabet_casino.webp": { type: "static" }, "/casinos/10betcasino.png": { type: "static" }, "/casinos/11crococasino.png": { type: "static" }, "/casinos/12playcasino.png": { type: "static" }, "/casinos/1betcasino.png": { type: "static" }, "/casinos/1gocasino.png": { type: "static" }, "/casinos/1redcasino.png": { type: "static" }, "/casinos/1wincasino.png": { type: "static" }, "/casinos/1xbetcasino.png": { type: "static" }, "/casinos/1xslotscasino.png": { type: "static" }, "/casinos/20betcasino.png": { type: "static" }, "/casinos/21betscasino.png": { type: "static" }, "/casinos/21betsiocasino.png": { type: "static" }, "/casinos/21bitcasino.png": { type: "static" }, "/casinos/21dukescasino.png": { type: "static" }, "/casinos/22betcasino.png": { type: "static" }, "/casinos/24casino.png": { type: "static" }, "/casinos/24slotscasino.png": { type: "static" }, "/casinos/30betcasino.png": { type: "static" }, "/casinos/31betcomcasino.png": { type: "static" }, "/casinos/321cryptocasino.png": { type: "static" }, "/casinos/3dicecasino.png": { type: "static" }, "/casinos/4kasinocasino.png": { type: "static" }, "/casinos/500casino.png": { type: "static" }, "/casinos/50crownscasino.png": { type: "static" }, "/casinos/55betcasino.png": { type: "static" }, "/casinos/5gringoscasino.png": { type: "static" }, "/casinos/77spinscasino.png": { type: "static" }, "/casinos/7bitcasino.png": { type: "static" }, "/casinos/7reelscasino.png": { type: "static" }, "/casinos/7signscasino.png": { type: "static" }, "/casinos/888starzcasino.png": { type: "static" }, "/casinos/8xwinscasino.png": { type: "static" }, "/casinos/9winzcasino.png": { type: "static" }, "/casinos/airbetcasino.png": { type: "static" }, "/casinos/alexandercasino.png": { type: "static" }, "/casinos/alfcasino.png": { type: "static" }, "/casinos/allrightcasino.png": { type: "static" }, "/casinos/allslotscasino.png": { type: "static" }, "/casinos/allspinscasino.png": { type: "static" }, "/casinos/allstarzcasino.png": { type: "static" }, "/casinos/ameriobetcasino.png": { type: "static" }, "/casinos/amunracasino.png": { type: "static" }, "/casinos/anarchycasino.png": { type: "static" }, "/casinos/aplaycasino.png": { type: "static" }, "/casinos/arcanebetcasino.png": { type: "static" }, "/casinos/artcasino.png": { type: "static" }, "/casinos/asinocasino.png": { type: "static" }, "/casinos/aufcasino.png": { type: "static" }, "/casinos/avocasino.png": { type: "static" }, "/casinos/awbitcasino.png": { type: "static" }, "/casinos/axecasino.png": { type: "static" }, "/casinos/badshahcriccasino.png": { type: "static" }, "/casinos/bahigocasino.png": { type: "static" }, "/casinos/bankonbetcasino.png": { type: "static" }, "/casinos/banzaibet.png": { type: "static" }, "/casinos/baterybetcasino.png": { type: "static" }, "/casinos/baterywincasino.png": { type: "static" }, "/casinos/bcgamecasino.png": { type: "static" }, "/casinos/bdmbetcasino.png": { type: "static" }, "/casinos/beastinocasino.png": { type: "static" }, "/casinos/bellavegascasino.png": { type: "static" }, "/casinos/bet24starcasino.png": { type: "static" }, "/casinos/betadorcasino.png": { type: "static" }, "/casinos/betandplaycasino.png": { type: "static" }, "/casinos/betandyoucasino.png": { type: "static" }, "/casinos/betbeastcasino.png": { type: "static" }, "/casinos/betboomcasino.png": { type: "static" }, "/casinos/betcgcasino.png": { type: "static" }, "/casinos/betchaincasino.png": { type: "static" }, "/casinos/betcoincasino.png": { type: "static" }, "/casinos/beteumcasino.png": { type: "static" }, "/casinos/betfinalcasino.png": { type: "static" }, "/casinos/betflarecasino.png": { type: "static" }, "/casinos/betfreecasino.png": { type: "static" }, "/casinos/betfurycasino.png": { type: "static" }, "/casinos/betgrwcasino.png": { type: "static" }, "/casinos/betibetcasino.png": { type: "static" }, "/casinos/betifycasino.png": { type: "static" }, "/casinos/betifymecasino.png": { type: "static" }, "/casinos/betitallcasino.png": { type: "static" }, "/casinos/betmartinicasino.png": { type: "static" }, "/casinos/betmastercasino.png": { type: "static" }, "/casinos/betmaximuscasino.png": { type: "static" }, "/casinos/betnoxcasino.png": { type: "static" }, "/casinos/betobetcasino.png": { type: "static" }, "/casinos/betonlinecasino.png": { type: "static" }, "/casinos/betonredcasino.png": { type: "static" }, "/casinos/betovixcasino.png": { type: "static" }, "/casinos/betovocasino.png": { type: "static" }, "/casinos/betpandaiocasino.png": { type: "static" }, "/casinos/betplayscasino.png": { type: "static" }, "/casinos/betroom24casino.png": { type: "static" }, "/casinos/betrunnercasino.png": { type: "static" }, "/casinos/betsiocasino.png": { type: "static" }, "/casinos/betsofacasino.png": { type: "static" }, "/casinos/betsomniacasino.png": { type: "static" }, "/casinos/betssencasino.png": { type: "static" }, "/casinos/betswapcasino.png": { type: "static" }, "/casinos/betticasino.png": { type: "static" }, "/casinos/bettiltcasino.png": { type: "static" }, "/casinos/betwinnercasino.png": { type: "static" }, "/casinos/betybetcasino.png": { type: "static" }, "/casinos/betzardcasino.png": { type: "static" }, "/casinos/betzinocasino.png": { type: "static" }, "/casinos/billybetscasino.png": { type: "static" }, "/casinos/billybillioncasino.png": { type: "static" }, "/casinos/bingocafecasino.png": { type: "static" }, "/casinos/bingolinercasino.png": { type: "static" }, "/casinos/bitbet24casino.png": { type: "static" }, "/casinos/bitcasinoio.png": { type: "static" }, "/casinos/bitcoincasino.png": { type: "static" }, "/casinos/bitcoincomgamescasino.png": { type: "static" }, "/casinos/bitcoingamescasino.png": { type: "static" }, "/casinos/bitdreamscasino.png": { type: "static" }, "/casinos/bitkingzcasino.png": { type: "static" }, "/casinos/bitslercasino.png": { type: "static" }, "/casinos/bitstarzcasino.png": { type: "static" }, "/casinos/bitstrikeiocasino.png": { type: "static" }, "/casinos/bitvegasiocasino.png": { type: "static" }, "/casinos/bizzocasino.png": { type: "static" }, "/casinos/bk8casino.png": { type: "static" }, "/casinos/blackdiamondcasino.png": { type: "static" }, "/casinos/blacklioncasino.png": { type: "static" }, "/casinos/blacklotuscasino.png": { type: "static" }, "/casinos/blazecasino.png": { type: "static" }, "/casinos/blitz-betcasino.png": { type: "static" }, "/casinos/blizzcasino.png": { type: "static" }, "/casinos/bluechipcasino.png": { type: "static" }, "/casinos/blueleocasino.png": { type: "static" }, "/casinos/bluffbetcasino.png": { type: "static" }, "/casinos/bmbetcasino.png": { type: "static" }, "/casinos/boaboacasino.png": { type: "static" }, "/casinos/bodogcasino.png": { type: "static" }, "/casinos/bohocasino.png": { type: "static" }, "/casinos/bombasticcasino.png": { type: "static" }, "/casinos/bonanzinocasino.png": { type: "static" }, "/casinos/bongocasino.png": { type: "static" }, "/casinos/bonscasino.png": { type: "static" }, "/casinos/booicasino.png": { type: "static" }, "/casinos/boomerang-betcasino.png": { type: "static" }, "/casinos/boomerang-betiocasino.png": { type: "static" }, "/casinos/boomerangcasino.png": { type: "static" }, "/casinos/box24casino.png": { type: "static" }, "/casinos/brangocasino.png": { type: "static" }, "/casinos/brazino777casino.png": { type: "static" }, "/casinos/brucebetcasino.png": { type: "static" }, "/casinos/bspiniocasino.png": { type: "static" }, "/casinos/btc365casino.png": { type: "static" }, "/casinos/bullcasino.png": { type: "static" }, "/casinos/bullrunbetscasino.png": { type: "static" }, "/casinos/bullsbetcasino.png": { type: "static" }, "/casinos/burancasino.png": { type: "static" }, "/casinos/burningbetcasino.png": { type: "static" }, "/casinos/buumicasino.png": { type: "static" }, "/casinos/cabarinocasino.png": { type: "static" }, "/casinos/cadabruscasino.png": { type: "static" }, "/casinos/cadoolacasino.png": { type: "static" }, "/casinos/caibocasino.png": { type: "static" }, "/casinos/campeonbetcasino.png": { type: "static" }, "/casinos/captaincookscasino.png": { type: "static" }, "/casinos/casabetcasino.png": { type: "static" }, "/casinos/cashedcasino.png": { type: "static" }, "/casinos/cashwincasino.png": { type: "static" }, "/casinos/casibeecasino.png": { type: "static" }, "/casinos/casinadocasino.png": { type: "static" }, "/casinos/casiniacasino.png": { type: "static" }, "/casinos/casinoadrenaline.png": { type: "static" }, "/casinos/casinobello.png": { type: "static" }, "/casinos/casinobetcasino.png": { type: "static" }, "/casinos/casinochan.png": { type: "static" }, "/casinos/casinodays.png": { type: "static" }, "/casinos/casinoestrella.png": { type: "static" }, "/casinos/casinoextra.png": { type: "static" }, "/casinos/casinoextreme.png": { type: "static" }, "/casinos/casinofriday.png": { type: "static" }, "/casinos/casinoin.png": { type: "static" }, "/casinos/casinoinfinity.png": { type: "static" }, "/casinos/casinojax.png": { type: "static" }, "/casinos/casinolycasino.png": { type: "static" }, "/casinos/casinomidas.png": { type: "static" }, "/casinos/casinomoons.png": { type: "static" }, "/casinos/casinomustang.png": { type: "static" }, "/casinos/casinoniccasino.png": { type: "static" }, "/casinos/casinoorca.png": { type: "static" }, "/casinos/casinorocket.png": { type: "static" }, "/casinos/casinosecret.png": { type: "static" }, "/casinos/casinosky.png": { type: "static" }, "/casinos/casinostarsio.png": { type: "static" }, "/casinos/casinostriker.png": { type: "static" }, "/casinos/casinotogether.png": { type: "static" }, "/casinos/casinovacasino.png": { type: "static" }, "/casinos/casinovibes.png": { type: "static" }, "/casinos/casinox.png": { type: "static" }, "/casinos/casinozercasino.png": { type: "static" }, "/casinos/casinycasino.png": { type: "static" }, "/casinos/casitabicasino.png": { type: "static" }, "/casinos/casoocasino.png": { type: "static" }, "/casinos/catcasino.png": { type: "static" }, "/casinos/caz-wincasino.png": { type: "static" }, "/casinos/cazimbocasino.png": { type: "static" }, "/casinos/chancerbetcasino.png": { type: "static" }, "/casinos/cherryspinscasino.png": { type: "static" }, "/casinos/chipstarscasino.png": { type: "static" }, "/casinos/cleopatracasino.png": { type: "static" }, "/casinos/cloudbetcasino.png": { type: "static" }, "/casinos/clubrichescasino.png": { type: "static" }, "/casinos/cobracasino.png": { type: "static" }, "/casinos/coinplaycasino.png": { type: "static" }, "/casinos/coinsgamecasino.png": { type: "static" }, "/casinos/comeoncasino.png": { type: "static" }, "/casinos/conquestadorcasino.png": { type: "static" }, "/casinos/coolzinocasino.png": { type: "static" }, "/casinos/corgislotcasino.png": { type: "static" }, "/casinos/cosmicslotcasino.png": { type: "static" }, "/casinos/cosmobetcasino.png": { type: "static" }, "/casinos/cosmoswincasino.png": { type: "static" }, "/casinos/crashinocasino.png": { type: "static" }, "/casinos/cricbabacasino.png": { type: "static" }, "/casinos/crocoslotscasino.png": { type: "static" }, "/casinos/crownplaycasino.png": { type: "static" }, "/casinos/crownslotscasino.png": { type: "static" }, "/casinos/crusinocasino.png": { type: "static" }, "/casinos/cryptobosscasino(1).png": { type: "static" }, "/casinos/cryptobosscasino.png": { type: "static" }, "/casinos/cryptogamesiocasino.png": { type: "static" }, "/casinos/cryptoleocasino.png": { type: "static" }, "/casinos/cryptorinocasino.png": { type: "static" }, "/casinos/cryptorushcasino.png": { type: "static" }, "/casinos/cryptoslotscasino.png": { type: "static" }, "/casinos/cryptowildcasino.png": { type: "static" }, "/casinos/cyberbetcasino.png": { type: "static" }, "/casinos/dachbetcasino.png": { type: "static" }, "/casinos/daddycasino.png": { type: "static" }, "/casinos/dailyspinscasino.png": { type: "static" }, "/casinos/dazardbetcasino.png": { type: "static" }, "/casinos/dazardcasino.png": { type: "static" }, "/casinos/dedprzcasino.png": { type: "static" }, "/casinos/delorocasino.png": { type: "static" }, "/casinos/dingdingdingcasino.png": { type: "static" }, "/casinos/divasluckcasino.png": { type: "static" }, "/casinos/dolfwincasino.png": { type: "static" }, "/casinos/dollycasino.png": { type: "static" }, "/casinos/dreambetcasino.png": { type: "static" }, "/casinos/dreamwinscasino.png": { type: "static" }, "/casinos/driftcasino.png": { type: "static" }, "/casinos/dripcasino.png": { type: "static" }, "/casinos/dublinbetcasino.png": { type: "static" }, "/casinos/dublzcasino.png": { type: "static" }, "/casinos/duckdicecasino.png": { type: "static" }, "/casinos/duelbitscasino.png": { type: "static" }, "/casinos/dundeeslotscasino.png": { type: "static" }, "/casinos/emirbetcasino.png": { type: "static" }, "/casinos/empireiocasino.png": { type: "static" }, "/casinos/emucasino.png": { type: "static" }, "/casinos/epicbetcasino.png": { type: "static" }, "/casinos/everumcasino.png": { type: "static" }, "/casinos/evobetcasino.png": { type: "static" }, "/casinos/evoiocasino.png": { type: "static" }, "/casinos/excitewincasino.png": { type: "static" }, "/casinos/extravegascasino.png": { type: "static" }, "/casinos/f12betcasino.png": { type: "static" }, "/casinos/fairspincasino.png": { type: "static" }, "/casinos/fansportcasino.png": { type: "static" }, "/casinos/fatbosscasino.png": { type: "static" }, "/casinos/fatfruitcasino.png": { type: "static" }, "/casinos/fatpandacasino.png": { type: "static" }, "/casinos/fatpiratecasino.png": { type: "static" }, "/casinos/fcmooncasino.png": { type: "static" }, "/casinos/felixspincasino.png": { type: "static" }, "/casinos/fezbetcasino.png": { type: "static" }, "/casinos/fgfoxcasino.png": { type: "static" }, "/casinos/firespincasino.png": { type: "static" }, "/casinos/flamingcasino.png": { type: "static" }, "/casinos/flappycasino.png": { type: "static" }, "/casinos/flukyonecasino.png": { type: "static" }, "/casinos/flushcasino.png": { type: "static" }, "/casinos/fortunejackcasino.png": { type: "static" }, "/casinos/fortunepandacasino.png": { type: "static" }, "/casinos/fortuneplaycasino.png": { type: "static" }, "/casinos/freedomcasino.png": { type: "static" }, "/casinos/freespincasino.png": { type: "static" }, "/casinos/freshbetcasino.png": { type: "static" }, "/casinos/freshcasino.png": { type: "static" }, "/casinos/fruits4realcasino.png": { type: "static" }, "/casinos/frumzicasino.png": { type: "static" }, "/casinos/funbetcasino.png": { type: "static" }, "/casinos/futureplaycasino.png": { type: "static" }, "/casinos/futuriticasino.png": { type: "static" }, "/casinos/galaxybetcasino.png": { type: "static" }, "/casinos/gamacasino.png": { type: "static" }, "/casinos/gamblezencasino.png": { type: "static" }, "/casinos/gamdomcasino.png": { type: "static" }, "/casinos/gamixbetcasino.png": { type: "static" }, "/casinos/gamixcasino.png": { type: "static" }, "/casinos/gangstacasino.png": { type: "static" }, "/casinos/gate777casino.png": { type: "static" }, "/casinos/gembetcasino.png": { type: "static" }, "/casinos/geniejackpotcasino.png": { type: "static" }, "/casinos/genieplaycasino.png": { type: "static" }, "/casinos/getluckycasino.png": { type: "static" }, "/casinos/getslotscasino.png": { type: "static" }, "/casinos/ggbetcasino.png": { type: "static" }, "/casinos/gizbocasino.png": { type: "static" }, "/casinos/godbunnycasino.png": { type: "static" }, "/casinos/goldenbetcasino.png": { type: "static" }, "/casinos/goldencrowncasino.png": { type: "static" }, "/casinos/goldenpandacasino.png": { type: "static" }, "/casinos/goldenstarcasino.png": { type: "static" }, "/casinos/goldentigercasino.png": { type: "static" }, "/casinos/goldspincasino.png": { type: "static" }, "/casinos/gomblingocasino.png": { type: "static" }, "/casinos/goodmancasino.png": { type: "static" }, "/casinos/goralbetcasino.png": { type: "static" }, "/casinos/gospincasino.png": { type: "static" }, "/casinos/grandwincasino.png": { type: "static" }, "/casinos/gransinocasino.png": { type: "static" }, "/casinos/greatspincasino.png": { type: "static" }, "/casinos/greatwincasino.png": { type: "static" }, "/casinos/greenspinbetcasino.png": { type: "static" }, "/casinos/gudarcasino.png": { type: "static" }, "/casinos/gunsbetcasino.png": { type: "static" }, "/casinos/gxmblecasino.png": { type: "static" }, "/casinos/happyhugocasino.png": { type: "static" }, "/casinos/happyslotscasino.png": { type: "static" }, "/casinos/happyspinscasino.png": { type: "static" }, "/casinos/hashluckycasino.png": { type: "static" }, "/casinos/hazcasino.png": { type: "static" }, "/casinos/heatscasino.png": { type: "static" }, "/casinos/helabetcasino.png": { type: "static" }, "/casinos/hellspincasino.png": { type: "static" }, "/casinos/heroibetcasino.png": { type: "static" }, "/casinos/herospincasino.png": { type: "static" }, "/casinos/hexabetcasino.png": { type: "static" }, "/casinos/highrollercasino.png": { type: "static" }, "/casinos/hillocasino.png": { type: "static" }, "/casinos/hiperwincasino.png": { type: "static" }, "/casinos/hitnspincasino.png": { type: "static" }, "/casinos/horuscasino.png": { type: "static" }, "/casinos/hotbetcasino.png": { type: "static" }, "/casinos/hotslotscasino.png": { type: "static" }, "/casinos/houseofspadescasino.png": { type: "static" }, "/casinos/hugewincasino.png": { type: "static" }, "/casinos/hugocasino.png": { type: "static" }, "/casinos/icebetcasino.png": { type: "static" }, "/casinos/icecasino.png": { type: "static" }, "/casinos/immerioncasino.png": { type: "static" }, "/casinos/impressariocasino.png": { type: "static" }, "/casinos/inetbetcasino.png": { type: "static" }, "/casinos/instantcasino.png": { type: "static" }, "/casinos/instaspincasino.png": { type: "static" }, "/casinos/ivibetcasino.png": { type: "static" }, "/casinos/iwildcasino.png": { type: "static" }, "/casinos/izzicasino.png": { type: "static" }, "/casinos/jackbitcasino.png": { type: "static" }, "/casinos/jackburstcasino.png": { type: "static" }, "/casinos/jackmillioncasino.png": { type: "static" }, "/casinos/jackpotcitycasino.png": { type: "static" }, "/casinos/jackpotfrenzycasino.png": { type: "static" }, "/casinos/jackpotgurucasino.png": { type: "static" }, "/casinos/jackpotycasino.png": { type: "static" }, "/casinos/jacktopcasino.png": { type: "static" }, "/casinos/jeetcitycasino.png": { type: "static" }, "/casinos/jetcasino.png": { type: "static" }, "/casinos/jettbetcasino.png": { type: "static" }, "/casinos/joefortunecasino.png": { type: "static" }, "/casinos/johnvegascasino.png": { type: "static" }, "/casinos/joker8casino.png": { type: "static" }, "/casinos/joocasino.png": { type: "static" }, "/casinos/joyacasino.png": { type: "static" }, "/casinos/joycasino.png": { type: "static" }, "/casinos/jozzcasino.png": { type: "static" }, "/casinos/jupicasino(1).png": { type: "static" }, "/casinos/jupicasino.png": { type: "static" }, "/casinos/jupiterclubcasino.png": { type: "static" }, "/casinos/justbitcasino.png": { type: "static" }, "/casinos/justcasino.png": { type: "static" }, "/casinos/justcasinoio.png": { type: "static" }, "/casinos/jvspinbetcasino(1).png": { type: "static" }, "/casinos/jvspinbetcasino.png": { type: "static" }, "/casinos/k8iocasino.png": { type: "static" }, "/casinos/kascasino.png": { type: "static" }, "/casinos/katsubetcasino.png": { type: "static" }, "/casinos/kaulanacasino.png": { type: "static" }, "/casinos/kikobetcasino.png": { type: "static" }, "/casinos/kinbetcasino.png": { type: "static" }, "/casinos/kingamocasino.png": { type: "static" }, "/casinos/kingbillycasino.png": { type: "static" }, "/casinos/kingdomcasino.png": { type: "static" }, "/casinos/kingmakercasino.png": { type: "static" }, "/casinos/kingswincasino.png": { type: "static" }, "/casinos/kirgocasino.png": { type: "static" }, "/casinos/koicasino.png": { type: "static" }, "/casinos/kriptycasino.png": { type: "static" }, "/casinos/kruunacasino.png": { type: "static" }, "/casinos/kryptosinocasino.png": { type: "static" }, "/casinos/lakepalacecasino.png": { type: "static" }, "/casinos/lamabetcasino.png": { type: "static" }, "/casinos/legianocasino.png": { type: "static" }, "/casinos/legzocasino.png": { type: "static" }, "/casinos/lemoncasino.png": { type: "static" }, "/casinos/leonbetcasino.png": { type: "static" }, "/casinos/letsgocasino.png": { type: "static" }, "/casinos/letsluckycasino.png": { type: "static" }, "/casinos/levelupcasino.png": { type: "static" }, "/casinos/lexcasino.png": { type: "static" }, "/casinos/librabetcasino.png": { type: "static" }, "/casinos/lilibetcasino.png": { type: "static" }, "/casinos/lionslotscasino.png": { type: "static" }, "/casinos/lionspincasino.png": { type: "static" }, "/casinos/livecasinoio.png": { type: "static" }, "/casinos/locowincasino.png": { type: "static" }, "/casinos/loftcasino(1).png": { type: "static" }, "/casinos/loftcasino.png": { type: "static" }, "/casinos/lokicasino.png": { type: "static" }, "/casinos/lopebetcasino.png": { type: "static" }, "/casinos/lotusasiacasino.png": { type: "static" }, "/casinos/lucky31casino.png": { type: "static" }, "/casinos/lucky7evencasino.png": { type: "static" }, "/casinos/luckybaycasino.png": { type: "static" }, "/casinos/luckybirdcasino.png": { type: "static" }, "/casinos/luckyblockcasino.png": { type: "static" }, "/casinos/luckychoocasino.png": { type: "static" }, "/casinos/luckycircuscasino.png": { type: "static" }, "/casinos/luckycreekcasino.png": { type: "static" }, "/casinos/luckycryptocasino.png": { type: "static" }, "/casinos/luckydayscasino.png": { type: "static" }, "/casinos/luckydreamscasino.png": { type: "static" }, "/casinos/luckyelfcasino.png": { type: "static" }, "/casinos/luckyhandcasino.png": { type: "static" }, "/casinos/luckyhourcasino.png": { type: "static" }, "/casinos/luckyhuntercasino.png": { type: "static" }, "/casinos/luckykoalacasino.png": { type: "static" }, "/casinos/luckykongcasino.png": { type: "static" }, "/casinos/luckynuggetcasino.png": { type: "static" }, "/casinos/luckyonescasino.png": { type: "static" }, "/casinos/luckyreelscasino.png": { type: "static" }, "/casinos/luckyspinscasino.png": { type: "static" }, "/casinos/luckystarcasino.png": { type: "static" }, "/casinos/luckystartcasino.png": { type: "static" }, "/casinos/luckyvibecasino.png": { type: "static" }, "/casinos/luckywhalecasino.png": { type: "static" }, "/casinos/luckywinscasino.png": { type: "static" }, "/casinos/lucyscasino.png": { type: "static" }, "/casinos/lukkicasino.png": { type: "static" }, "/casinos/lunubetcasino.png": { type: "static" }, "/casinos/luxurycasino.png": { type: "static" }, "/casinos/lyracasino.png": { type: "static" }, "/casinos/lysticasino.png": { type: "static" }, "/casinos/macaucasino.png": { type: "static" }, "/casinos/magicalspincasino.png": { type: "static" }, "/casinos/malinacasino.png": { type: "static" }, "/casinos/mangacasino.png": { type: "static" }, "/casinos/marathonbetcasino.png": { type: "static" }, "/casinos/marsbetcasino.png": { type: "static" }, "/casinos/mbitcasino.png": { type: "static" }, "/casinos/megadicecasino.png": { type: "static" }, "/casinos/megaparicasino.png": { type: "static" }, "/casinos/megarichcasino.png": { type: "static" }, "/casinos/megaslotiocasino.png": { type: "static" }, "/casinos/melbetcasino.png": { type: "static" }, "/casinos/merlincasino.png": { type: "static" }, "/casinos/metaspinscryptocasino.png": { type: "static" }, "/casinos/metawincasino.png": { type: "static" }, "/casinos/miamiclubcasino.png": { type: "static" }, "/casinos/midasluckcasino.png": { type: "static" }, "/casinos/miraxcasino.png": { type: "static" }, "/casinos/mobilebet.png": { type: "static" }, "/casinos/moicasino.png": { type: "static" }, "/casinos/mondcasino.png": { type: "static" }, "/casinos/monixbetcasino.png": { type: "static" }, "/casinos/monrocasino.png": { type: "static" }, "/casinos/montecryptoscasino.png": { type: "static" }, "/casinos/moonwincasino.png": { type: "static" }, "/casinos/mostbetcasino.png": { type: "static" }, "/casinos/mrbetcasino.png": { type: "static" }, "/casinos/mrbitcasino.png": { type: "static" }, "/casinos/mrpachocasino.png": { type: "static" }, "/casinos/mundoapostascasino.png": { type: "static" }, "/casinos/mychancecasino.png": { type: "static" }, "/casinos/mystakecasino.png": { type: "static" }, "/casinos/n1betcasino.png": { type: "static" }, "/casinos/nalucasino.png": { type: "static" }, "/casinos/nationalcasino.png": { type: "static" }, "/casinos/needforspincasino.png": { type: "static" }, "/casinos/neon54casino.png": { type: "static" }, "/casinos/neospincasino.png": { type: "static" }, "/casinos/ninlaycasino(1).png": { type: "static" }, "/casinos/ninlaycasino.png": { type: "static" }, "/casinos/nitrobetcasino(1).png": { type: "static" }, "/casinos/nitrobetcasino.png": { type: "static" }, "/casinos/niyvicasino.png": { type: "static" }, "/casinos/nolimitbetcasino.png": { type: "static" }, "/casinos/nominicasino.png": { type: "static" }, "/casinos/nopeincasino.png": { type: "static" }, "/casinos/norgesspillcasino.png": { type: "static" }, "/casinos/novajackpotcasino.png": { type: "static" }, "/casinos/nuggetslotscasino.png": { type: "static" }, "/casinos/nummuscasino.png": { type: "static" }, "/casinos/odds96casino.png": { type: "static" }, "/casinos/ohmyspinscasino.png": { type: "static" }, "/casinos/ohmyzinocasino.png": { type: "static" }, "/casinos/olympiacasino.png": { type: "static" }, "/casinos/olympusbetcasino.png": { type: "static" }, "/casinos/omnislotscasino.png": { type: "static" }, "/casinos/oneduncasino.png": { type: "static" }, "/casinos/onluckcasino.png": { type: "static" }, "/casinos/onwincasino.png": { type: "static" }, "/casinos/orbetcasino.png": { type: "static" }, "/casinos/oshcasino.png": { type: "static" }, "/casinos/oshicasino.png": { type: "static" }, "/casinos/ovitoonscasino.png": { type: "static" }, "/casinos/pachipachicasino.png": { type: "static" }, "/casinos/pairadicecasino.png": { type: "static" }, "/casinos/palmcasino.png": { type: "static" }, "/casinos/palmslotscasino.png": { type: "static" }, "/casinos/pan-casino.png": { type: "static" }, "/casinos/parimatchcasino.png": { type: "static" }, "/casinos/parimatchwincasino.png": { type: "static" }, "/casinos/paripesacasino.png": { type: "static" }, "/casinos/pin-upcasino.png": { type: "static" }, "/casinos/pinnaclecasino.png": { type: "static" }, "/casinos/piratespotcasino.png": { type: "static" }, "/casinos/plangamescasino.png": { type: "static" }, "/casinos/platincasino.png": { type: "static" }, "/casinos/playamocasino(1).png": { type: "static" }, "/casinos/playamocasino.png": { type: "static" }, "/casinos/playbetiocasino.png": { type: "static" }, "/casinos/playboomcasino.png": { type: "static" }, "/casinos/playfastcasino.png": { type: "static" }, "/casinos/playfinacasino.png": { type: "static" }, "/casinos/playfortunacasino.png": { type: "static" }, "/casinos/playiocasino.png": { type: "static" }, "/casinos/playmojocasino.png": { type: "static" }, "/casinos/playmoolacasino.png": { type: "static" }, "/casinos/playouwincasino.png": { type: "static" }, "/casinos/playzillacasino.png": { type: "static" }, "/casinos/pledoocasino.png": { type: "static" }, "/casinos/pokies2gocasino.png": { type: "static" }, "/casinos/polestarcasino.png": { type: "static" }, "/casinos/possucasino.png": { type: "static" }, "/casinos/powbetcasino.png": { type: "static" }, "/casinos/powerbet777casino(1).png": { type: "static" }, "/casinos/powerbet777casino.png": { type: "static" }, "/casinos/powerplaycasino.png": { type: "static" }, "/casinos/powerupcasino.png": { type: "static" }, "/casinos/pribetcasino.png": { type: "static" }, "/casinos/primebetzcasino.png": { type: "static" }, "/casinos/prontobetcasino.png": { type: "static" }, "/casinos/pumacasino.png": { type: "static" }, "/casinos/punterzcasino.png": { type: "static" }, "/casinos/purewincasino.png": { type: "static" }, "/casinos/queencasino.png": { type: "static" }, "/casinos/queenspinscasino.png": { type: "static" }, "/casinos/quickslotcasino.png": { type: "static" }, "/casinos/quickwincasino.png": { type: "static" }, "/casinos/rabonacasino.png": { type: "static" }, "/casinos/ragingbullcasino.png": { type: "static" }, "/casinos/rajabetscasino.png": { type: "static" }, "/casinos/rakebitcasino.png": { type: "static" }, "/casinos/rakoocasino.png": { type: "static" }, "/casinos/ramenbetcasino.png": { type: "static" }, "/casinos/razecasino.png": { type: "static" }, "/casinos/razedcasino.png": { type: "static" }, "/casinos/readycasino.png": { type: "static" }, "/casinos/realspincasino.png": { type: "static" }, "/casinos/reddicecasino.png": { type: "static" }, "/casinos/reddogcasino.png": { type: "static" }, "/casinos/redstarcasino.png": { type: "static" }, "/casinos/reelcryptocasino.png": { type: "static" }, "/casinos/reloadbetcasino.png": { type: "static" }, "/casinos/respincasino.png": { type: "static" }, "/casinos/retrobetcasino.png": { type: "static" }, "/casinos/revolutioncasino.png": { type: "static" }, "/casinos/richardcasino.png": { type: "static" }, "/casinos/richcasino.png": { type: "static" }, "/casinos/rickycasino.png": { type: "static" }, "/casinos/riobetcasino.png": { type: "static" }, "/casinos/ritzocasino.png": { type: "static" }, "/casinos/rivalocasino.png": { type: "static" }, "/casinos/rivieracasino.png": { type: "static" }, "/casinos/rizzcasino.png": { type: "static" }, "/casinos/robocatcasino.png": { type: "static" }, "/casinos/robycasino.png": { type: "static" }, "/casinos/rocketplaycasino.png": { type: "static" }, "/casinos/rocketspincasino.png": { type: "static" }, "/casinos/rocketwincasino.png": { type: "static" }, "/casinos/rockwincasino.png": { type: "static" }, "/casinos/rojabetcasino.png": { type: "static" }, "/casinos/rokucasino.png": { type: "static" }, "/casinos/rollersiocasino.png": { type: "static" }, "/casinos/rollettocasino.png": { type: "static" }, "/casinos/rollingslotscasino.png": { type: "static" }, "/casinos/rollinocasino.png": { type: "static" }, "/casinos/rollxocasino.png": { type: "static" }, "/casinos/romancasino.png": { type: "static" }, "/casinos/roobetcasino.png": { type: "static" }, "/casinos/roolicasino.png": { type: "static" }, "/casinos/roosterbetcasino.png": { type: "static" }, "/casinos/royalgamecasino.png": { type: "static" }, "/casinos/royalstarscasino.png": { type: "static" }, "/casinos/royalvegascasino.png": { type: "static" }, "/casinos/royspinscasino.png": { type: "static" }, "/casinos/run4wincasino.png": { type: "static" }, "/casinos/sapphirebetcasino.png": { type: "static" }, "/casinos/scatterhallcasino.png": { type: "static" }, "/casinos/scorpioncasino.png": { type: "static" }, "/casinos/senseigamecasino.png": { type: "static" }, "/casinos/sgcasino.png": { type: "static" }, "/casinos/shambalacasino.png": { type: "static" }, "/casinos/shangrilacasino.png": { type: "static" }, "/casinos/sherbetcasino.png": { type: "static" }, "/casinos/shinobibetcasino.png": { type: "static" }, "/casinos/shotzcasino.png": { type: "static" }, "/casinos/shufflecasino.png": { type: "static" }, "/casinos/silverplaycasino.png": { type: "static" }, "/casinos/simsinoscasino.png": { type: "static" }, "/casinos/sirwincasino.png": { type: "static" }, "/casinos/skycrowncasino.png": { type: "static" }, "/casinos/slotacasino.png": { type: "static" }, "/casinos/slotboxcasino.png": { type: "static" }, "/casinos/sloterracasino.png": { type: "static" }, "/casinos/slotexocasino.png": { type: "static" }, "/casinos/slotitcasino.png": { type: "static" }, "/casinos/slotlandcasino.png": { type: "static" }, "/casinos/slotlordscasino.png": { type: "static" }, "/casinos/slotmafiacasino.png": { type: "static" }, "/casinos/slotmancasino.png": { type: "static" }, "/casinos/slotmonstercasino.png": { type: "static" }, "/casinos/slotocashcasino.png": { type: "static" }, "/casinos/slotozencasino.png": { type: "static" }, "/casinos/slotparadisecasino.png": { type: "static" }, "/casinos/slotscitycasino.png": { type: "static" }, "/casinos/slotsflixcasino.png": { type: "static" }, "/casinos/slotsgallerycasino.png": { type: "static" }, "/casinos/slotsinccasino.png": { type: "static" }, "/casinos/slotsminescasino.png": { type: "static" }, "/casinos/slotspalacecasino.png": { type: "static" }, "/casinos/slotticacasino.png": { type: "static" }, "/casinos/slotticasino.png": { type: "static" }, "/casinos/slottojamcasino.png": { type: "static" }, "/casinos/slottywaycasino.png": { type: "static" }, "/casinos/slotumcasino.png": { type: "static" }, "/casinos/slotunacasino.png": { type: "static" }, "/casinos/slotvibecasino.png": { type: "static" }, "/casinos/smokacecasino.png": { type: "static" }, "/casinos/snatchcasino.png": { type: "static" }, "/casinos/solcasino.png": { type: "static" }, "/casinos/solisbetcasino.png": { type: "static" }, "/casinos/sombrerospinscasino.png": { type: "static" }, "/casinos/spacelillycasino.png": { type: "static" }, "/casinos/spadesqueencasino.png": { type: "static" }, "/casinos/spartanslotscasino.png": { type: "static" }, "/casinos/spellwincasino.png": { type: "static" }, "/casinos/spin247casino.png": { type: "static" }, "/casinos/spinangacasino.png": { type: "static" }, "/casinos/spinariumcasino.png": { type: "static" }, "/casinos/spinarocasino.png": { type: "static" }, "/casinos/spinawaycasino.png": { type: "static" }, "/casinos/spinbetcasino.png": { type: "static" }, "/casinos/spinbettercasino.png": { type: "static" }, "/casinos/spinbitcasino.png": { type: "static" }, "/casinos/spinchcasino.png": { type: "static" }, "/casinos/spinfestcasino.png": { type: "static" }, "/casinos/spinfevercasino.png": { type: "static" }, "/casinos/spinightcasino.png": { type: "static" }, "/casinos/spinjocasino.png": { type: "static" }, "/casinos/spinlinecasino.png": { type: "static" }, "/casinos/spinnalotcasino.png": { type: "static" }, "/casinos/spinrollzcasino.png": { type: "static" }, "/casinos/spinsambacasino.png": { type: "static" }, "/casinos/spinsamuraicasino.png": { type: "static" }, "/casinos/spinsbrocasino.png": { type: "static" }, "/casinos/spinspacecasino.png": { type: "static" }, "/casinos/spinsupcasino.png": { type: "static" }, "/casinos/spinsycasino.png": { type: "static" }, "/casinos/spinybetcasino.png": { type: "static" }, "/casinos/spiritcasino.png": { type: "static" }, "/casinos/sportazacasino.png": { type: "static" }, "/casinos/sportsbetiocasino.png": { type: "static" }, "/casinos/sportsbettingcasino.png": { type: "static" }, "/casinos/sportunacasino.png": { type: "static" }, "/casinos/stakecasino.png": { type: "static" }, "/casinos/stakeprixcasino.png": { type: "static" }, "/casinos/stakewiniocasino.png": { type: "static" }, "/casinos/stardacasino.png": { type: "static" }, "/casinos/staxinocasino.png": { type: "static" }, "/casinos/staycasino.png": { type: "static" }, "/casinos/stelariocasino.png": { type: "static" }, "/casinos/stupidcasino.png": { type: "static" }, "/casinos/sugarcasino.png": { type: "static" }, "/casinos/sultanbetcasino.png": { type: "static" }, "/casinos/sunplaycasino.png": { type: "static" }, "/casinos/supacasicasino.png": { type: "static" }, "/casinos/supacasiiocasino.png": { type: "static" }, "/casinos/superbosscasino.png": { type: "static" }, "/casinos/sushicasino.png": { type: "static" }, "/casinos/svenbetcasino.png": { type: "static" }, "/casinos/swipercasino.png": { type: "static" }, "/casinos/syndicatecasino.png": { type: "static" }, "/casinos/talismaniacasino.png": { type: "static" }, "/casinos/thebescasino.png": { type: "static" }, "/casinos/theclubhousecasino.png": { type: "static" }, "/casinos/thepokiesnetcasino.png": { type: "static" }, "/casinos/thorcasino.png": { type: "static" }, "/casinos/thunderpickcasino.png": { type: "static" }, "/casinos/tikicasino.png": { type: "static" }, "/casinos/tikitakacasino.png": { type: "static" }, "/casinos/tiktakbetcasino(1).png": { type: "static" }, "/casinos/tiktakbetcasino.png": { type: "static" }, "/casinos/tivitbetcasino.png": { type: "static" }, "/casinos/tombrichescasino.png": { type: "static" }, "/casinos/tonybetcasino.png": { type: "static" }, "/casinos/tornadobetcasino.png": { type: "static" }, "/casinos/treasuremilecasino.png": { type: "static" }, "/casinos/treasurespinscasino.png": { type: "static" }, "/casinos/trinocasino.png": { type: "static" }, "/casinos/trip2vipcasino.png": { type: "static" }, "/casinos/tripscasino.png": { type: "static" }, "/casinos/trivelabetcasino.png": { type: "static" }, "/casinos/trustdicecasino.png": { type: "static" }, "/casinos/tsarscasino.png": { type: "static" }, "/casinos/tuskcasino.png": { type: "static" }, "/casinos/twincasino.png": { type: "static" }, "/casinos/universalslotscasino.png": { type: "static" }, "/casinos/unlimcasino.png": { type: "static" }, "/casinos/vasycasino.png": { type: "static" }, "/casinos/vavadacasino.png": { type: "static" }, "/casinos/vavecasino.png": { type: "static" }, "/casinos/vbetcasino.png": { type: "static" }, "/casinos/vegasinocasino.png": { type: "static" }, "/casinos/vegaslegacycasino.png": { type: "static" }, "/casinos/vegasnowcasino.png": { type: "static" }, "/casinos/vegazcasino.png": { type: "static" }, "/casinos/velobetcasino.png": { type: "static" }, "/casinos/verdecasino.png": { type: "static" }, "/casinos/vibecasino.png": { type: "static" }, "/casinos/vidavegascasino.png": { type: "static" }, "/casinos/vinylcasino.png": { type: "static" }, "/casinos/viperwincasino.png": { type: "static" }, "/casinos/vipslots.png": { type: "static" }, "/casinos/voltslotcasino.png": { type: "static" }, "/casinos/voodoocasino.png": { type: "static" }, "/casinos/vulkanbetcasino.png": { type: "static" }, "/casinos/vulkanvegascasino.png": { type: "static" }, "/casinos/wantedwincasino.png": { type: "static" }, "/casinos/wasinocasino.png": { type: "static" }, "/casinos/wazambacasino.png": { type: "static" }, "/casinos/wazbeecasino.png": { type: "static" }, "/casinos/wazobetcasino.png": { type: "static" }, "/casinos/wcasinoonline.png": { type: "static" }, "/casinos/weisscasino.png": { type: "static" }, "/casinos/wellecasino.png": { type: "static" }, "/casinos/weltbetcasino.png": { type: "static" }, "/casinos/westcasino.png": { type: "static" }, "/casinos/wettenlivecasino.png": { type: "static" }, "/casinos/whamoocasino.png": { type: "static" }, "/casinos/wikibetcasino.png": { type: "static" }, "/casinos/wikiluckcasino.png": { type: "static" }, "/casinos/wildfortuneiocasino.png": { type: "static" }, "/casinos/wildiocasino.png": { type: "static" }, "/casinos/wildsinocasino.png": { type: "static" }, "/casinos/wildtokyocasino.png": { type: "static" }, "/casinos/wildtornadocasino.png": { type: "static" }, "/casinos/willscasino.png": { type: "static" }, "/casinos/winadaycasino.png": { type: "static" }, "/casinos/winawincasino.png": { type: "static" }, "/casinos/windettacasino.png": { type: "static" }, "/casinos/wingagacasino.png": { type: "static" }, "/casinos/winlegendscasino.png": { type: "static" }, "/casinos/winmakercasino.png": { type: "static" }, "/casinos/winningcasino.png": { type: "static" }, "/casinos/winningdayscasino.png": { type: "static" }, "/casinos/winsanecasino.png": { type: "static" }, "/casinos/winscorecasino.png": { type: "static" }, "/casinos/winsharkcasino.png": { type: "static" }, "/casinos/winspiritcasino.png": { type: "static" }, "/casinos/winsroyalcasino.png": { type: "static" }, "/casinos/winstoriacasino.png": { type: "static" }, "/casinos/wintomatocasino.png": { type: "static" }, "/casinos/wintopiacasino.png": { type: "static" }, "/casinos/winwardcasino.png": { type: "static" }, "/casinos/winwincasino.png": { type: "static" }, "/casinos/winziocasino.png": { type: "static" }, "/casinos/wirwettencasino.png": { type: "static" }, "/casinos/wishcasino.png": { type: "static" }, "/casinos/wizebetscasino.png": { type: "static" }, "/casinos/wolfbetcasino.png": { type: "static" }, "/casinos/wolfycasino.png": { type: "static" }, "/casinos/wonacocasino.png": { type: "static" }, "/casinos/woocasino.png": { type: "static" }, "/casinos/wsmcasino.png": { type: "static" }, "/casinos/wunderwinscasino.png": { type: "static" }, "/casinos/x7casino.png": { type: "static" }, "/casinos/yaycasino.png": { type: "static" }, "/casinos/ybetscasino.png": { type: "static" }, "/casinos/yojucasino.png": { type: "static" }, "/casinos/yonibetcasino(1).png": { type: "static" }, "/casinos/yonibetcasino.png": { type: "static" }, "/casinos/yukongoldcasino.png": { type: "static" }, "/casinos/zenbettingcasino.png": { type: "static" }, "/casinos/zencasino.png": { type: "static" }, "/casinos/zetcasino.png": { type: "static" }, "/casinos/zeuswincasino.png": { type: "static" }, "/casinos/zinkracasino.png": { type: "static" }, "/casinos/zipcasino.png": { type: "static" }, "/casinos/zodiacbetcasino.png": { type: "static" }, "/casinos/zodiaccasino.png": { type: "static" }, "/casinos/zolobetcasino.png": { type: "static" }, "/casinos/zoomecasino.png": { type: "static" }, "/casinos/zotabetcasino.png": { type: "static" }, "/cons/11croco_casino.txt": { type: "static" }, "/cons/1go_casino.txt": { type: "static" }, "/cons/1red_casino.txt": { type: "static" }, "/cons/1xslots_casino.txt": { type: "static" }, "/cons/20bet_casino.txt": { type: "static" }, "/cons/21_bets_casino.txt": { type: "static" }, "/cons/21bit_casino.txt": { type: "static" }, "/cons/22bet_casino.txt": { type: "static" }, "/cons/24casino.txt": { type: "static" }, "/cons/24slots_casino.txt": { type: "static" }, "/cons/30bet_casino.txt": { type: "static" }, "/cons/321crypto_casino.txt": { type: "static" }, "/cons/4kasino_casino.txt": { type: "static" }, "/cons/500_casino.txt": { type: "static" }, "/cons/50_crowns_casino.txt": { type: "static" }, "/cons/55bet_casino.txt": { type: "static" }, "/cons/5gringos_casino.txt": { type: "static" }, "/cons/7signs_casino.txt": { type: "static" }, "/cons/888starz_casino.txt": { type: "static" }, "/cons/8xwins_casino.txt": { type: "static" }, "/cons/airbet_casino.txt": { type: "static" }, "/cons/alf_casino.txt": { type: "static" }, "/cons/allspins_casino.txt": { type: "static" }, "/cons/allstarz_casino.txt": { type: "static" }, "/cons/amerio_bet_casino.txt": { type: "static" }, "/cons/anarchy_casino.txt": { type: "static" }, "/cons/aplay_casino.txt": { type: "static" }, "/cons/arcanebet_casino.txt": { type: "static" }, "/cons/artcasino.txt": { type: "static" }, "/cons/asino_casino.txt": { type: "static" }, "/cons/auf_casino.txt": { type: "static" }, "/cons/avocasino.txt": { type: "static" }, "/cons/axecasino.txt": { type: "static" }, "/cons/bankonbet_casino.txt": { type: "static" }, "/cons/bdmbet_casino.txt": { type: "static" }, "/cons/beastino_casino.txt": { type: "static" }, "/cons/bet_it_all_casino.txt": { type: "static" }, "/cons/betandplay_casino.txt": { type: "static" }, "/cons/betandyou_casino.txt": { type: "static" }, "/cons/betbeast_casino.txt": { type: "static" }, "/cons/betcg_casino.txt": { type: "static" }, "/cons/betchain_casino.txt": { type: "static" }, "/cons/betcoin_casino.txt": { type: "static" }, "/cons/beteum_casino.txt": { type: "static" }, "/cons/betfinal_casino.txt": { type: "static" }, "/cons/betflare_casino.txt": { type: "static" }, "/cons/betfree_casino.txt": { type: "static" }, "/cons/betify_casino.txt": { type: "static" }, "/cons/betifyme_casino.txt": { type: "static" }, "/cons/betmartini_casino.txt": { type: "static" }, "/cons/betnox_casino.txt": { type: "static" }, "/cons/betonred_casino.txt": { type: "static" }, "/cons/betovix_casino.txt": { type: "static" }, "/cons/betovo_casino.txt": { type: "static" }, "/cons/betroom24_casino.txt": { type: "static" }, "/cons/betrunner_casino.txt": { type: "static" }, "/cons/betsofa_casino.txt": { type: "static" }, "/cons/betsomnia_casino.txt": { type: "static" }, "/cons/betssen_casino.txt": { type: "static" }, "/cons/betswap_casino.txt": { type: "static" }, "/cons/betti_casino.txt": { type: "static" }, "/cons/bettilt_casino.txt": { type: "static" }, "/cons/betybet_casino.txt": { type: "static" }, "/cons/betzard_casino.txt": { type: "static" }, "/cons/betzino_casino.txt": { type: "static" }, "/cons/billy_billion_casino.txt": { type: "static" }, "/cons/billybets_casino.txt": { type: "static" }, "/cons/bingo_cafe_casino.txt": { type: "static" }, "/cons/bitcoin_casino.txt": { type: "static" }, "/cons/bitcoin_games_casino.txt": { type: "static" }, "/cons/bitkingz_casino.txt": { type: "static" }, "/cons/bitsler_casino.txt": { type: "static" }, "/cons/bizzo_casino.txt": { type: "static" }, "/cons/bk8_casino.txt": { type: "static" }, "/cons/black_lion_casino.txt": { type: "static" }, "/cons/blitz-bet_casino.txt": { type: "static" }, "/cons/blueleo_casino.txt": { type: "static" }, "/cons/boaboa_casino.txt": { type: "static" }, "/cons/boho_casino.txt": { type: "static" }, "/cons/bombastic_casino.txt": { type: "static" }, "/cons/bonanzino_casino.txt": { type: "static" }, "/cons/bongo_casino.txt": { type: "static" }, "/cons/booi_casino.txt": { type: "static" }, "/cons/boomerang-bet_casino.txt": { type: "static" }, "/cons/boomerang_casino.txt": { type: "static" }, "/cons/brango_casino.txt": { type: "static" }, "/cons/brazino777_casino.txt": { type: "static" }, "/cons/brucebet_casino.txt": { type: "static" }, "/cons/bull_casino.txt": { type: "static" }, "/cons/bullsbet_casino.txt": { type: "static" }, "/cons/burancasino.txt": { type: "static" }, "/cons/buumi_casino.txt": { type: "static" }, "/cons/cadabrus_casino.txt": { type: "static" }, "/cons/cadoola_casino.txt": { type: "static" }, "/cons/caibo_casino.txt": { type: "static" }, "/cons/casabet_casino.txt": { type: "static" }, "/cons/cashwin_casino.txt": { type: "static" }, "/cons/casinado_casino.txt": { type: "static" }, "/cons/casino_friday.txt": { type: "static" }, "/cons/casino_infinity.txt": { type: "static" }, "/cons/casino_mustang.txt": { type: "static" }, "/cons/casino_orca.txt": { type: "static" }, "/cons/casino_rocket.txt": { type: "static" }, "/cons/casino_together.txt": { type: "static" }, "/cons/casinobello.txt": { type: "static" }, "/cons/casinobet_casino.txt": { type: "static" }, "/cons/casinoin.txt": { type: "static" }, "/cons/casinojax.txt": { type: "static" }, "/cons/casinoly_casino.txt": { type: "static" }, "/cons/casinonic_casino.txt": { type: "static" }, "/cons/casinosecret.txt": { type: "static" }, "/cons/casinostriker.txt": { type: "static" }, "/cons/casinova_casino.txt": { type: "static" }, "/cons/casinovibes.txt": { type: "static" }, "/cons/casinozer_casino.txt": { type: "static" }, "/cons/casiny_casino.txt": { type: "static" }, "/cons/casoo_casino.txt": { type: "static" }, "/cons/cazimbo_casino.txt": { type: "static" }, "/cons/chipstars_casino.txt": { type: "static" }, "/cons/cleopatra_casino.txt": { type: "static" }, "/cons/club_riches_casino.txt": { type: "static" }, "/cons/cobra_casino.txt": { type: "static" }, "/cons/coins_game_casino.txt": { type: "static" }, "/cons/conquestador_casino.txt": { type: "static" }, "/cons/coolzino_casino.txt": { type: "static" }, "/cons/cosmicslot_casino.txt": { type: "static" }, "/cons/cosmobet_casino.txt": { type: "static" }, "/cons/cosmoswin_casino.txt": { type: "static" }, "/cons/crashino_casino.txt": { type: "static" }, "/cons/crocoslots_casino.txt": { type: "static" }, "/cons/crownslots_casino.txt": { type: "static" }, "/cons/crusino_casino.txt": { type: "static" }, "/cons/cryptoboss_casino.txt": { type: "static" }, "/cons/cryptoleo_casino.txt": { type: "static" }, "/cons/cryptorush_casino.txt": { type: "static" }, "/cons/cryptowild_casino.txt": { type: "static" }, "/cons/dailyspins_casino.txt": { type: "static" }, "/cons/dazardbet_casino.txt": { type: "static" }, "/cons/dedprz_casino.txt": { type: "static" }, "/cons/del_oro_casino.txt": { type: "static" }, "/cons/divas_luck_casino.txt": { type: "static" }, "/cons/drift_casino.txt": { type: "static" }, "/cons/drip_casino.txt": { type: "static" }, "/cons/dundeeslots_casino.txt": { type: "static" }, "/cons/emucasino.txt": { type: "static" }, "/cons/epicbet_casino.txt": { type: "static" }, "/cons/excitewin_casino.txt": { type: "static" }, "/cons/fairspin_casino.txt": { type: "static" }, "/cons/fansport_casino.txt": { type: "static" }, "/cons/fatpanda_casino.txt": { type: "static" }, "/cons/fatpirate_casino.txt": { type: "static" }, "/cons/felixspin_casino.txt": { type: "static" }, "/cons/fezbet_casino.txt": { type: "static" }, "/cons/flappy_casino.txt": { type: "static" }, "/cons/flukyone_casino.txt": { type: "static" }, "/cons/flush_casino.txt": { type: "static" }, "/cons/fortune_panda_casino.txt": { type: "static" }, "/cons/fortunejack_casino.txt": { type: "static" }, "/cons/fresh_casino.txt": { type: "static" }, "/cons/fruits4real_casino.txt": { type: "static" }, "/cons/funbet_casino.txt": { type: "static" }, "/cons/gamblezen_casino.txt": { type: "static" }, "/cons/gamdom_casino.txt": { type: "static" }, "/cons/gamix_casino.txt": { type: "static" }, "/cons/gangsta_casino.txt": { type: "static" }, "/cons/gate777_casino.txt": { type: "static" }, "/cons/gembet_casino.txt": { type: "static" }, "/cons/genie_jackpot_casino.txt": { type: "static" }, "/cons/getslots_casino.txt": { type: "static" }, "/cons/ggbet_casino.txt": { type: "static" }, "/cons/gizbo_casino.txt": { type: "static" }, "/cons/godbunny_casino.txt": { type: "static" }, "/cons/golden_crown_casino.txt": { type: "static" }, "/cons/golden_panda_casino.txt": { type: "static" }, "/cons/golden_star_casino.txt": { type: "static" }, "/cons/goldspin_casino.txt": { type: "static" }, "/cons/gomblingo_casino.txt": { type: "static" }, "/cons/goodman_casino.txt": { type: "static" }, "/cons/goralbet_casino.txt": { type: "static" }, "/cons/gospin_casino.txt": { type: "static" }, "/cons/grandwin_casino.txt": { type: "static" }, "/cons/greatspin_casino.txt": { type: "static" }, "/cons/greatwin_casino.txt": { type: "static" }, "/cons/gunsbet_casino.txt": { type: "static" }, "/cons/gxmble_casino.txt": { type: "static" }, "/cons/happyhugo_casino.txt": { type: "static" }, "/cons/happyslots_casino.txt": { type: "static" }, "/cons/happyspins_casino.txt": { type: "static" }, "/cons/haz_casino.txt": { type: "static" }, "/cons/heats_casino.txt": { type: "static" }, "/cons/helabet_casino.txt": { type: "static" }, "/cons/hellspin_casino.txt": { type: "static" }, "/cons/herospin_casino.txt": { type: "static" }, "/cons/hexabet_casino.txt": { type: "static" }, "/cons/hiperwin_casino.txt": { type: "static" }, "/cons/hitnspin_casino.txt": { type: "static" }, "/cons/horus_casino.txt": { type: "static" }, "/cons/hotslots_casino.txt": { type: "static" }, "/cons/hugewin_casino.txt": { type: "static" }, "/cons/hugo_casino.txt": { type: "static" }, "/cons/icebet_casino.txt": { type: "static" }, "/cons/immerion_casino.txt": { type: "static" }, "/cons/impressario_casino.txt": { type: "static" }, "/cons/ivibet_casino.txt": { type: "static" }, "/cons/iwild_casino.txt": { type: "static" }, "/cons/izzi_casino.txt": { type: "static" }, "/cons/jackbit_casino.txt": { type: "static" }, "/cons/jackburst_casino.txt": { type: "static" }, "/cons/jackpot_guru_casino.txt": { type: "static" }, "/cons/jackpotfrenzy_casino.txt": { type: "static" }, "/cons/jackpoty_casino.txt": { type: "static" }, "/cons/jacktop_casino.txt": { type: "static" }, "/cons/jeetcity_casino.txt": { type: "static" }, "/cons/jet_casino.txt": { type: "static" }, "/cons/jettbet_casino.txt": { type: "static" }, "/cons/johnvegascasino.txt": { type: "static" }, "/cons/joker8_casino.txt": { type: "static" }, "/cons/joo_casino.txt": { type: "static" }, "/cons/joya_casino.txt": { type: "static" }, "/cons/joycasino.txt": { type: "static" }, "/cons/jozz_casino.txt": { type: "static" }, "/cons/jupi_casino.txt": { type: "static" }, "/cons/justcasino.txt": { type: "static" }, "/cons/jvspinbet_casino.txt": { type: "static" }, "/cons/katsubet_casino.txt": { type: "static" }, "/cons/kaulana_casino.txt": { type: "static" }, "/cons/kikobet_casino.txt": { type: "static" }, "/cons/kinbet_casino.txt": { type: "static" }, "/cons/king_billy_casino.txt": { type: "static" }, "/cons/kingamo_casino.txt": { type: "static" }, "/cons/kingdom_casino.txt": { type: "static" }, "/cons/kingmaker_casino.txt": { type: "static" }, "/cons/kingswin_casino.txt": { type: "static" }, "/cons/kirgo_casino.txt": { type: "static" }, "/cons/koi_casino.txt": { type: "static" }, "/cons/kripty_casino.txt": { type: "static" }, "/cons/kryptosino_casino.txt": { type: "static" }, "/cons/lamabet_casino.txt": { type: "static" }, "/cons/legiano_casino.txt": { type: "static" }, "/cons/legzo_casino.txt": { type: "static" }, "/cons/lemon_casino.txt": { type: "static" }, "/cons/leon_bet_casino.txt": { type: "static" }, "/cons/letslucky_casino.txt": { type: "static" }, "/cons/levelup_casino.txt": { type: "static" }, "/cons/lex_casino.txt": { type: "static" }, "/cons/librabet_casino.txt": { type: "static" }, "/cons/lilibet_casino.txt": { type: "static" }, "/cons/loft_casino.txt": { type: "static" }, "/cons/loki_casino.txt": { type: "static" }, "/cons/lucky7even_casino.txt": { type: "static" }, "/cons/lucky_circus_casino.txt": { type: "static" }, "/cons/lucky_crypto_casino.txt": { type: "static" }, "/cons/lucky_dreams_casino.txt": { type: "static" }, "/cons/lucky_elf_casino.txt": { type: "static" }, "/cons/lucky_hunter_casino.txt": { type: "static" }, "/cons/lucky_koala_casino.txt": { type: "static" }, "/cons/lucky_ones_casino.txt": { type: "static" }, "/cons/lucky_spins_casino.txt": { type: "static" }, "/cons/lucky_vibe_casino.txt": { type: "static" }, "/cons/lucky_whale_casino.txt": { type: "static" }, "/cons/luckybay_casino.txt": { type: "static" }, "/cons/luckychoo_casino.txt": { type: "static" }, "/cons/luckyhand_casino.txt": { type: "static" }, "/cons/luckyhour_casino.txt": { type: "static" }, "/cons/luckykong_casino.txt": { type: "static" }, "/cons/luckyreels_casino.txt": { type: "static" }, "/cons/luckystar_casino.txt": { type: "static" }, "/cons/luckystart_casino.txt": { type: "static" }, "/cons/luckywins_casino.txt": { type: "static" }, "/cons/lucys_casino.txt": { type: "static" }, "/cons/lukki_casino.txt": { type: "static" }, "/cons/lunubet_casino.txt": { type: "static" }, "/cons/lyracasino.txt": { type: "static" }, "/cons/malinacasino.txt": { type: "static" }, "/cons/manga_casino.txt": { type: "static" }, "/cons/marsbet_casino.txt": { type: "static" }, "/cons/mbit_casino.txt": { type: "static" }, "/cons/mega_dice_casino.txt": { type: "static" }, "/cons/megapari_casino.txt": { type: "static" }, "/cons/megarich_casino.txt": { type: "static" }, "/cons/merlin_casino.txt": { type: "static" }, "/cons/metaspins_crypto_casino.txt": { type: "static" }, "/cons/mirax_casino.txt": { type: "static" }, "/cons/moicasino.txt": { type: "static" }, "/cons/mondcasino.txt": { type: "static" }, "/cons/monixbet_casino.txt": { type: "static" }, "/cons/monro_casino.txt": { type: "static" }, "/cons/moonwin_casino.txt": { type: "static" }, "/cons/mr_bit_casino.txt": { type: "static" }, "/cons/mrpacho_casino.txt": { type: "static" }, "/cons/mystake_casino.txt": { type: "static" }, "/cons/n1bet_casino.txt": { type: "static" }, "/cons/nalu_casino.txt": { type: "static" }, "/cons/national_casino.txt": { type: "static" }, "/cons/needforspin_casino.txt": { type: "static" }, "/cons/neon54_casino.txt": { type: "static" }, "/cons/neospin_casino.txt": { type: "static" }, "/cons/ninlay_casino.txt": { type: "static" }, "/cons/nitrobet_casino.txt": { type: "static" }, "/cons/niyvi_casino.txt": { type: "static" }, "/cons/nolimitbet_casino.txt": { type: "static" }, "/cons/nomini_casino.txt": { type: "static" }, "/cons/norgesspill_casino.txt": { type: "static" }, "/cons/nuggetslots_casino.txt": { type: "static" }, "/cons/nummus_casino.txt": { type: "static" }, "/cons/ohmyspins_casino.txt": { type: "static" }, "/cons/ohmyzino_casino.txt": { type: "static" }, "/cons/olympia_casino.txt": { type: "static" }, "/cons/olympusbet_casino.txt": { type: "static" }, "/cons/omni_slots_casino.txt": { type: "static" }, "/cons/onedun_casino.txt": { type: "static" }, "/cons/onluck_casino.txt": { type: "static" }, "/cons/osh_casino.txt": { type: "static" }, "/cons/oshi_casino.txt": { type: "static" }, "/cons/palmslots_casino.txt": { type: "static" }, "/cons/pan-casino.txt": { type: "static" }, "/cons/pin-up_casino.txt": { type: "static" }, "/cons/pinnacle_casino.txt": { type: "static" }, "/cons/pirate_spot_casino.txt": { type: "static" }, "/cons/plangames_casino.txt": { type: "static" }, "/cons/playfina_casino.txt": { type: "static" }, "/cons/playfortuna_casino.txt": { type: "static" }, "/cons/playio_casino.txt": { type: "static" }, "/cons/playmojo_casino.txt": { type: "static" }, "/cons/playmoola_casino.txt": { type: "static" }, "/cons/playouwin_casino.txt": { type: "static" }, "/cons/playzilla_casino.txt": { type: "static" }, "/cons/pledoo_casino.txt": { type: "static" }, "/cons/powbet_casino.txt": { type: "static" }, "/cons/powerbet777_casino.txt": { type: "static" }, "/cons/powerup_casino.txt": { type: "static" }, "/cons/primebetz_casino.txt": { type: "static" }, "/cons/prontobet_casino.txt": { type: "static" }, "/cons/puma_casino.txt": { type: "static" }, "/cons/punterz_casino.txt": { type: "static" }, "/cons/queen_casino.txt": { type: "static" }, "/cons/queenspins_casino.txt": { type: "static" }, "/cons/quickslot_casino.txt": { type: "static" }, "/cons/rakebit_casino.txt": { type: "static" }, "/cons/rakoo_casino.txt": { type: "static" }, "/cons/raze_casino.txt": { type: "static" }, "/cons/readycasino.txt": { type: "static" }, "/cons/red_dice_casino.txt": { type: "static" }, "/cons/reel_crypto_casino.txt": { type: "static" }, "/cons/reloadbet_casino.txt": { type: "static" }, "/cons/respin_casino.txt": { type: "static" }, "/cons/retro_bet_casino.txt": { type: "static" }, "/cons/richard_casino.txt": { type: "static" }, "/cons/rickycasino.txt": { type: "static" }, "/cons/riobet_casino.txt": { type: "static" }, "/cons/ritzo_casino.txt": { type: "static" }, "/cons/riviera_casino.txt": { type: "static" }, "/cons/rizz_casino.txt": { type: "static" }, "/cons/robocat_casino.txt": { type: "static" }, "/cons/rocketplay_casino.txt": { type: "static" }, "/cons/rocketwin_casino.txt": { type: "static" }, "/cons/rockwin_casino.txt": { type: "static" }, "/cons/rolletto_casino.txt": { type: "static" }, "/cons/rolling_slots_casino.txt": { type: "static" }, "/cons/rollino_casino.txt": { type: "static" }, "/cons/rollxo_casino.txt": { type: "static" }, "/cons/rooli_casino.txt": { type: "static" }, "/cons/rooster_bet_casino.txt": { type: "static" }, "/cons/royal_stars_casino.txt": { type: "static" }, "/cons/royalgame_casino.txt": { type: "static" }, "/cons/royspins_casino.txt": { type: "static" }, "/cons/run4win_casino.txt": { type: "static" }, "/cons/sapphirebet_casino.txt": { type: "static" }, "/cons/shambala_casino.txt": { type: "static" }, "/cons/shangri_la_casino.txt": { type: "static" }, "/cons/sherbet_casino.txt": { type: "static" }, "/cons/shotz_casino.txt": { type: "static" }, "/cons/silverplay_casino.txt": { type: "static" }, "/cons/sirwin_casino.txt": { type: "static" }, "/cons/skycrown_casino.txt": { type: "static" }, "/cons/slota_casino.txt": { type: "static" }, "/cons/slotbox_casino.txt": { type: "static" }, "/cons/sloterra_casino.txt": { type: "static" }, "/cons/slotexo_casino.txt": { type: "static" }, "/cons/slotit_casino.txt": { type: "static" }, "/cons/slotlords_casino.txt": { type: "static" }, "/cons/slotman_casino.txt": { type: "static" }, "/cons/slotozen_casino.txt": { type: "static" }, "/cons/slotparadise_casino.txt": { type: "static" }, "/cons/slots_city_casino.txt": { type: "static" }, "/cons/slots_gallery_casino.txt": { type: "static" }, "/cons/slotsflix_casino.txt": { type: "static" }, "/cons/slotspalace_casino.txt": { type: "static" }, "/cons/slottica_casino.txt": { type: "static" }, "/cons/slottojam_casino.txt": { type: "static" }, "/cons/slottyway_casino.txt": { type: "static" }, "/cons/slotum_casino.txt": { type: "static" }, "/cons/slotuna_casino.txt": { type: "static" }, "/cons/slotvibe_casino.txt": { type: "static" }, "/cons/smokace_casino.txt": { type: "static" }, "/cons/snatch_casino.txt": { type: "static" }, "/cons/sol_casino.txt": { type: "static" }, "/cons/solisbet_casino.txt": { type: "static" }, "/cons/sombrero_spins_casino.txt": { type: "static" }, "/cons/spades_queen_casino.txt": { type: "static" }, "/cons/spellwin_casino.txt": { type: "static" }, "/cons/spin_away_casino.txt": { type: "static" }, "/cons/spin_samurai_casino.txt": { type: "static" }, "/cons/spinarium_casino.txt": { type: "static" }, "/cons/spinaro_casino.txt": { type: "static" }, "/cons/spinbet_casino.txt": { type: "static" }, "/cons/spinbetter_casino.txt": { type: "static" }, "/cons/spinbit_casino.txt": { type: "static" }, "/cons/spinch_casino.txt": { type: "static" }, "/cons/spinfever_casino.txt": { type: "static" }, "/cons/spinight_casino.txt": { type: "static" }, "/cons/spinjo_casino.txt": { type: "static" }, "/cons/spinline_casino.txt": { type: "static" }, "/cons/spinnalot_casino.txt": { type: "static" }, "/cons/spinrollz_casino.txt": { type: "static" }, "/cons/spinsbro_casino.txt": { type: "static" }, "/cons/spinspace_casino.txt": { type: "static" }, "/cons/spinsup_casino.txt": { type: "static" }, "/cons/spinsy_casino.txt": { type: "static" }, "/cons/spinybet_casino.txt": { type: "static" }, "/cons/spirit_casino.txt": { type: "static" }, "/cons/sportaza_casino.txt": { type: "static" }, "/cons/sportuna_casino.txt": { type: "static" }, "/cons/stakeprix_casino.txt": { type: "static" }, "/cons/starda_casino.txt": { type: "static" }, "/cons/staxino_casino.txt": { type: "static" }, "/cons/staycasino.txt": { type: "static" }, "/cons/stelario_casino.txt": { type: "static" }, "/cons/stupid_casino.txt": { type: "static" }, "/cons/sultanbet_casino.txt": { type: "static" }, "/cons/sunplay_casino.txt": { type: "static" }, "/cons/superboss_casino.txt": { type: "static" }, "/cons/sushi_casino.txt": { type: "static" }, "/cons/syndicate_casino.txt": { type: "static" }, "/cons/the_clubhouse_casino.txt": { type: "static" }, "/cons/thorcasino.txt": { type: "static" }, "/cons/thunderpick_casino.txt": { type: "static" }, "/cons/tiki_casino.txt": { type: "static" }, "/cons/tikitaka_casino.txt": { type: "static" }, "/cons/tiktak_bet_casino.txt": { type: "static" }, "/cons/tivitbet_casino.txt": { type: "static" }, "/cons/tomb_riches_casino.txt": { type: "static" }, "/cons/tonybet_casino.txt": { type: "static" }, "/cons/tornadobet_casino.txt": { type: "static" }, "/cons/treasure_spins_casino.txt": { type: "static" }, "/cons/trino_casino.txt": { type: "static" }, "/cons/trip2vip_casino.txt": { type: "static" }, "/cons/trips_casino.txt": { type: "static" }, "/cons/trivelabet_casino.txt": { type: "static" }, "/cons/trustdice_casino.txt": { type: "static" }, "/cons/tsars_casino.txt": { type: "static" }, "/cons/twin_casino.txt": { type: "static" }, "/cons/unlim_casino.txt": { type: "static" }, "/cons/vasy_casino.txt": { type: "static" }, "/cons/vavada_casino.txt": { type: "static" }, "/cons/vave_casino.txt": { type: "static" }, "/cons/vegas_now_casino.txt": { type: "static" }, "/cons/vegasino_casino.txt": { type: "static" }, "/cons/vegaz_casino.txt": { type: "static" }, "/cons/velobet_casino.txt": { type: "static" }, "/cons/vinyl_casino.txt": { type: "static" }, "/cons/viperwin_casino.txt": { type: "static" }, "/cons/voltslot_casino.txt": { type: "static" }, "/cons/voodoo_casino.txt": { type: "static" }, "/cons/vulkanvegas_casino.txt": { type: "static" }, "/cons/wanted_win_casino.txt": { type: "static" }, "/cons/wasino_casino.txt": { type: "static" }, "/cons/wazamba_casino.txt": { type: "static" }, "/cons/wazbee_casino.txt": { type: "static" }, "/cons/weiss_casino.txt": { type: "static" }, "/cons/welle_casino.txt": { type: "static" }, "/cons/whamoo_casino.txt": { type: "static" }, "/cons/wild_tokyo_casino.txt": { type: "static" }, "/cons/wild_tornado_casino.txt": { type: "static" }, "/cons/wildsino_casino.txt": { type: "static" }, "/cons/winawin_casino.txt": { type: "static" }, "/cons/windetta_casino.txt": { type: "static" }, "/cons/wingaga_casino.txt": { type: "static" }, "/cons/winlegends_casino.txt": { type: "static" }, "/cons/winmaker_casino.txt": { type: "static" }, "/cons/winning_casino.txt": { type: "static" }, "/cons/winsane_casino.txt": { type: "static" }, "/cons/winscore_casino.txt": { type: "static" }, "/cons/winshark_casino.txt": { type: "static" }, "/cons/winspirit_casino.txt": { type: "static" }, "/cons/winsroyal_casino.txt": { type: "static" }, "/cons/winstoria_casino.txt": { type: "static" }, "/cons/wintomato_casino.txt": { type: "static" }, "/cons/wintopia_casino.txt": { type: "static" }, "/cons/winwin_casino.txt": { type: "static" }, "/cons/wir_wetten_casino.txt": { type: "static" }, "/cons/wish_casino.txt": { type: "static" }, "/cons/wizebets_casino.txt": { type: "static" }, "/cons/wolfy_casino.txt": { type: "static" }, "/cons/wonaco_casino.txt": { type: "static" }, "/cons/wsm_casino.txt": { type: "static" }, "/cons/wunderwins_casino.txt": { type: "static" }, "/cons/x7_casino.txt": { type: "static" }, "/cons/yoju_casino.txt": { type: "static" }, "/cons/zenbetting_casino.txt": { type: "static" }, "/cons/zencasino.txt": { type: "static" }, "/cons/zinkra_casino.txt": { type: "static" }, "/cons/zipcasino.txt": { type: "static" }, "/cons/zoome_casino.txt": { type: "static" }, "/cons/zotabet_casino.txt": { type: "static" }, "/crypto/bitcoin.svg": { type: "static" }, "/crypto/bnb.svg": { type: "static" }, "/crypto/cardano.svg": { type: "static" }, "/crypto/celo.svg": { type: "static" }, "/crypto/dogecoin.svg": { type: "static" }, "/crypto/ethereum.svg": { type: "static" }, "/crypto/litecoin.svg": { type: "static" }, "/crypto/monero.svg": { type: "static" }, "/crypto/tether.svg": { type: "static" }, "/crypto/theta.svg": { type: "static" }, "/crypto/xrp.svg": { type: "static" }, "/data/affiliates/casinos.json": { type: "static" }, "/data/affiliates/example-casino.json": { type: "static" }, "/data/route.json": { type: "static" }, "/dramtic_crypto.webp": { type: "static" }, "/file.svg": { type: "static" }, "/globe.svg": { type: "static" }, "/next.svg": { type: "static" }, "/nyliste_bonus_processed.csv": { type: "static" }, "/nyliste_bonus_processed_screenshots.csv": { type: "static" }, "/pros/11croco_casino.txt": { type: "static" }, "/pros/1go_casino.txt": { type: "static" }, "/pros/1red_casino.txt": { type: "static" }, "/pros/1xslots_casino.txt": { type: "static" }, "/pros/20bet_casino.txt": { type: "static" }, "/pros/21_bets_casino.txt": { type: "static" }, "/pros/21bit_casino.txt": { type: "static" }, "/pros/22bet_casino.txt": { type: "static" }, "/pros/24casino.txt": { type: "static" }, "/pros/24slots_casino.txt": { type: "static" }, "/pros/30bet_casino.txt": { type: "static" }, "/pros/321crypto_casino.txt": { type: "static" }, "/pros/4kasino_casino.txt": { type: "static" }, "/pros/500_casino.txt": { type: "static" }, "/pros/50_crowns_casino.txt": { type: "static" }, "/pros/55bet_casino.txt": { type: "static" }, "/pros/5gringos_casino.txt": { type: "static" }, "/pros/7signs_casino.txt": { type: "static" }, "/pros/888starz_casino.txt": { type: "static" }, "/pros/8xwins_casino.txt": { type: "static" }, "/pros/airbet_casino.txt": { type: "static" }, "/pros/alf_casino.txt": { type: "static" }, "/pros/allspins_casino.txt": { type: "static" }, "/pros/allstarz_casino.txt": { type: "static" }, "/pros/amerio_bet_casino.txt": { type: "static" }, "/pros/anarchy_casino.txt": { type: "static" }, "/pros/aplay_casino.txt": { type: "static" }, "/pros/arcanebet_casino.txt": { type: "static" }, "/pros/artcasino.txt": { type: "static" }, "/pros/asino_casino.txt": { type: "static" }, "/pros/auf_casino.txt": { type: "static" }, "/pros/avocasino.txt": { type: "static" }, "/pros/axecasino.txt": { type: "static" }, "/pros/bankonbet_casino.txt": { type: "static" }, "/pros/bdmbet_casino.txt": { type: "static" }, "/pros/beastino_casino.txt": { type: "static" }, "/pros/bet_it_all_casino.txt": { type: "static" }, "/pros/betandplay_casino.txt": { type: "static" }, "/pros/betandyou_casino.txt": { type: "static" }, "/pros/betbeast_casino.txt": { type: "static" }, "/pros/betcg_casino.txt": { type: "static" }, "/pros/betchain_casino.txt": { type: "static" }, "/pros/betcoin_casino.txt": { type: "static" }, "/pros/beteum_casino.txt": { type: "static" }, "/pros/betfinal_casino.txt": { type: "static" }, "/pros/betflare_casino.txt": { type: "static" }, "/pros/betfree_casino.txt": { type: "static" }, "/pros/betify_casino.txt": { type: "static" }, "/pros/betifyme_casino.txt": { type: "static" }, "/pros/betmartini_casino.txt": { type: "static" }, "/pros/betnox_casino.txt": { type: "static" }, "/pros/betonred_casino.txt": { type: "static" }, "/pros/betovix_casino.txt": { type: "static" }, "/pros/betovo_casino.txt": { type: "static" }, "/pros/betroom24_casino.txt": { type: "static" }, "/pros/betrunner_casino.txt": { type: "static" }, "/pros/betsofa_casino.txt": { type: "static" }, "/pros/betsomnia_casino.txt": { type: "static" }, "/pros/betssen_casino.txt": { type: "static" }, "/pros/betswap_casino.txt": { type: "static" }, "/pros/betti_casino.txt": { type: "static" }, "/pros/bettilt_casino.txt": { type: "static" }, "/pros/betybet_casino.txt": { type: "static" }, "/pros/betzard_casino.txt": { type: "static" }, "/pros/betzino_casino.txt": { type: "static" }, "/pros/billy_billion_casino.txt": { type: "static" }, "/pros/billybets_casino.txt": { type: "static" }, "/pros/bingo_cafe_casino.txt": { type: "static" }, "/pros/bitcoin_casino.txt": { type: "static" }, "/pros/bitcoin_games_casino.txt": { type: "static" }, "/pros/bitkingz_casino.txt": { type: "static" }, "/pros/bitsler_casino.txt": { type: "static" }, "/pros/bizzo_casino.txt": { type: "static" }, "/pros/bk8_casino.txt": { type: "static" }, "/pros/black_lion_casino.txt": { type: "static" }, "/pros/blitz-bet_casino.txt": { type: "static" }, "/pros/blueleo_casino.txt": { type: "static" }, "/pros/boaboa_casino.txt": { type: "static" }, "/pros/boho_casino.txt": { type: "static" }, "/pros/bombastic_casino.txt": { type: "static" }, "/pros/bonanzino_casino.txt": { type: "static" }, "/pros/bongo_casino.txt": { type: "static" }, "/pros/booi_casino.txt": { type: "static" }, "/pros/boomerang-bet_casino.txt": { type: "static" }, "/pros/boomerang_casino.txt": { type: "static" }, "/pros/brango_casino.txt": { type: "static" }, "/pros/brazino777_casino.txt": { type: "static" }, "/pros/brucebet_casino.txt": { type: "static" }, "/pros/bull_casino.txt": { type: "static" }, "/pros/bullsbet_casino.txt": { type: "static" }, "/pros/burancasino.txt": { type: "static" }, "/pros/buumi_casino.txt": { type: "static" }, "/pros/cadabrus_casino.txt": { type: "static" }, "/pros/cadoola_casino.txt": { type: "static" }, "/pros/caibo_casino.txt": { type: "static" }, "/pros/casabet_casino.txt": { type: "static" }, "/pros/cashwin_casino.txt": { type: "static" }, "/pros/casinado_casino.txt": { type: "static" }, "/pros/casino_friday.txt": { type: "static" }, "/pros/casino_infinity.txt": { type: "static" }, "/pros/casino_mustang.txt": { type: "static" }, "/pros/casino_orca.txt": { type: "static" }, "/pros/casino_rocket.txt": { type: "static" }, "/pros/casino_together.txt": { type: "static" }, "/pros/casinobello.txt": { type: "static" }, "/pros/casinobet_casino.txt": { type: "static" }, "/pros/casinoin.txt": { type: "static" }, "/pros/casinojax.txt": { type: "static" }, "/pros/casinoly_casino.txt": { type: "static" }, "/pros/casinonic_casino.txt": { type: "static" }, "/pros/casinosecret.txt": { type: "static" }, "/pros/casinostriker.txt": { type: "static" }, "/pros/casinova_casino.txt": { type: "static" }, "/pros/casinovibes.txt": { type: "static" }, "/pros/casinozer_casino.txt": { type: "static" }, "/pros/casiny_casino.txt": { type: "static" }, "/pros/casoo_casino.txt": { type: "static" }, "/pros/cazimbo_casino.txt": { type: "static" }, "/pros/chipstars_casino.txt": { type: "static" }, "/pros/cleopatra_casino.txt": { type: "static" }, "/pros/club_riches_casino.txt": { type: "static" }, "/pros/cobra_casino.txt": { type: "static" }, "/pros/coins_game_casino.txt": { type: "static" }, "/pros/conquestador_casino.txt": { type: "static" }, "/pros/coolzino_casino.txt": { type: "static" }, "/pros/cosmicslot_casino.txt": { type: "static" }, "/pros/cosmobet_casino.txt": { type: "static" }, "/pros/cosmoswin_casino.txt": { type: "static" }, "/pros/crashino_casino.txt": { type: "static" }, "/pros/crocoslots_casino.txt": { type: "static" }, "/pros/crownslots_casino.txt": { type: "static" }, "/pros/crusino_casino.txt": { type: "static" }, "/pros/cryptoboss_casino.txt": { type: "static" }, "/pros/cryptoleo_casino.txt": { type: "static" }, "/pros/cryptorush_casino.txt": { type: "static" }, "/pros/cryptowild_casino.txt": { type: "static" }, "/pros/dailyspins_casino.txt": { type: "static" }, "/pros/dazardbet_casino.txt": { type: "static" }, "/pros/dedprz_casino.txt": { type: "static" }, "/pros/del_oro_casino.txt": { type: "static" }, "/pros/divas_luck_casino.txt": { type: "static" }, "/pros/drift_casino.txt": { type: "static" }, "/pros/drip_casino.txt": { type: "static" }, "/pros/dundeeslots_casino.txt": { type: "static" }, "/pros/emucasino.txt": { type: "static" }, "/pros/epicbet_casino.txt": { type: "static" }, "/pros/excitewin_casino.txt": { type: "static" }, "/pros/fairspin_casino.txt": { type: "static" }, "/pros/fansport_casino.txt": { type: "static" }, "/pros/fatpanda_casino.txt": { type: "static" }, "/pros/fatpirate_casino.txt": { type: "static" }, "/pros/felixspin_casino.txt": { type: "static" }, "/pros/fezbet_casino.txt": { type: "static" }, "/pros/flappy_casino.txt": { type: "static" }, "/pros/flukyone_casino.txt": { type: "static" }, "/pros/flush_casino.txt": { type: "static" }, "/pros/fortune_panda_casino.txt": { type: "static" }, "/pros/fortunejack_casino.txt": { type: "static" }, "/pros/fresh_casino.txt": { type: "static" }, "/pros/fruits4real_casino.txt": { type: "static" }, "/pros/funbet_casino.txt": { type: "static" }, "/pros/gamblezen_casino.txt": { type: "static" }, "/pros/gamdom_casino.txt": { type: "static" }, "/pros/gamix_casino.txt": { type: "static" }, "/pros/gangsta_casino.txt": { type: "static" }, "/pros/gate777_casino.txt": { type: "static" }, "/pros/gembet_casino.txt": { type: "static" }, "/pros/genie_jackpot_casino.txt": { type: "static" }, "/pros/getslots_casino.txt": { type: "static" }, "/pros/ggbet_casino.txt": { type: "static" }, "/pros/gizbo_casino.txt": { type: "static" }, "/pros/godbunny_casino.txt": { type: "static" }, "/pros/golden_crown_casino.txt": { type: "static" }, "/pros/golden_panda_casino.txt": { type: "static" }, "/pros/golden_star_casino.txt": { type: "static" }, "/pros/goldspin_casino.txt": { type: "static" }, "/pros/gomblingo_casino.txt": { type: "static" }, "/pros/goodman_casino.txt": { type: "static" }, "/pros/goralbet_casino.txt": { type: "static" }, "/pros/gospin_casino.txt": { type: "static" }, "/pros/grandwin_casino.txt": { type: "static" }, "/pros/greatspin_casino.txt": { type: "static" }, "/pros/greatwin_casino.txt": { type: "static" }, "/pros/gunsbet_casino.txt": { type: "static" }, "/pros/gxmble_casino.txt": { type: "static" }, "/pros/happyhugo_casino.txt": { type: "static" }, "/pros/happyslots_casino.txt": { type: "static" }, "/pros/happyspins_casino.txt": { type: "static" }, "/pros/haz_casino.txt": { type: "static" }, "/pros/heats_casino.txt": { type: "static" }, "/pros/helabet_casino.txt": { type: "static" }, "/pros/hellspin_casino.txt": { type: "static" }, "/pros/herospin_casino.txt": { type: "static" }, "/pros/hexabet_casino.txt": { type: "static" }, "/pros/hiperwin_casino.txt": { type: "static" }, "/pros/hitnspin_casino.txt": { type: "static" }, "/pros/horus_casino.txt": { type: "static" }, "/pros/hotslots_casino.txt": { type: "static" }, "/pros/hugewin_casino.txt": { type: "static" }, "/pros/hugo_casino.txt": { type: "static" }, "/pros/icebet_casino.txt": { type: "static" }, "/pros/immerion_casino.txt": { type: "static" }, "/pros/impressario_casino.txt": { type: "static" }, "/pros/ivibet_casino.txt": { type: "static" }, "/pros/iwild_casino.txt": { type: "static" }, "/pros/izzi_casino.txt": { type: "static" }, "/pros/jackbit_casino.txt": { type: "static" }, "/pros/jackburst_casino.txt": { type: "static" }, "/pros/jackpot_guru_casino.txt": { type: "static" }, "/pros/jackpotfrenzy_casino.txt": { type: "static" }, "/pros/jackpoty_casino.txt": { type: "static" }, "/pros/jacktop_casino.txt": { type: "static" }, "/pros/jeetcity_casino.txt": { type: "static" }, "/pros/jet_casino.txt": { type: "static" }, "/pros/jettbet_casino.txt": { type: "static" }, "/pros/johnvegascasino.txt": { type: "static" }, "/pros/joker8_casino.txt": { type: "static" }, "/pros/joo_casino.txt": { type: "static" }, "/pros/joya_casino.txt": { type: "static" }, "/pros/joycasino.txt": { type: "static" }, "/pros/jozz_casino.txt": { type: "static" }, "/pros/jupi_casino.txt": { type: "static" }, "/pros/justcasino.txt": { type: "static" }, "/pros/jvspinbet_casino.txt": { type: "static" }, "/pros/katsubet_casino.txt": { type: "static" }, "/pros/kaulana_casino.txt": { type: "static" }, "/pros/kikobet_casino.txt": { type: "static" }, "/pros/kinbet_casino.txt": { type: "static" }, "/pros/king_billy_casino.txt": { type: "static" }, "/pros/kingamo_casino.txt": { type: "static" }, "/pros/kingdom_casino.txt": { type: "static" }, "/pros/kingmaker_casino.txt": { type: "static" }, "/pros/kingswin_casino.txt": { type: "static" }, "/pros/kirgo_casino.txt": { type: "static" }, "/pros/koi_casino.txt": { type: "static" }, "/pros/kripty_casino.txt": { type: "static" }, "/pros/kryptosino_casino.txt": { type: "static" }, "/pros/lamabet_casino.txt": { type: "static" }, "/pros/legiano_casino.txt": { type: "static" }, "/pros/legzo_casino.txt": { type: "static" }, "/pros/lemon_casino.txt": { type: "static" }, "/pros/leon_bet_casino.txt": { type: "static" }, "/pros/letslucky_casino.txt": { type: "static" }, "/pros/levelup_casino.txt": { type: "static" }, "/pros/lex_casino.txt": { type: "static" }, "/pros/librabet_casino.txt": { type: "static" }, "/pros/lilibet_casino.txt": { type: "static" }, "/pros/loft_casino.txt": { type: "static" }, "/pros/loki_casino.txt": { type: "static" }, "/pros/lucky7even_casino.txt": { type: "static" }, "/pros/lucky_circus_casino.txt": { type: "static" }, "/pros/lucky_crypto_casino.txt": { type: "static" }, "/pros/lucky_dreams_casino.txt": { type: "static" }, "/pros/lucky_elf_casino.txt": { type: "static" }, "/pros/lucky_hunter_casino.txt": { type: "static" }, "/pros/lucky_koala_casino.txt": { type: "static" }, "/pros/lucky_ones_casino.txt": { type: "static" }, "/pros/lucky_spins_casino.txt": { type: "static" }, "/pros/lucky_vibe_casino.txt": { type: "static" }, "/pros/lucky_whale_casino.txt": { type: "static" }, "/pros/luckybay_casino.txt": { type: "static" }, "/pros/luckychoo_casino.txt": { type: "static" }, "/pros/luckyhand_casino.txt": { type: "static" }, "/pros/luckyhour_casino.txt": { type: "static" }, "/pros/luckykong_casino.txt": { type: "static" }, "/pros/luckyreels_casino.txt": { type: "static" }, "/pros/luckystar_casino.txt": { type: "static" }, "/pros/luckystart_casino.txt": { type: "static" }, "/pros/luckywins_casino.txt": { type: "static" }, "/pros/lucys_casino.txt": { type: "static" }, "/pros/lukki_casino.txt": { type: "static" }, "/pros/lunubet_casino.txt": { type: "static" }, "/pros/lyracasino.txt": { type: "static" }, "/pros/malinacasino.txt": { type: "static" }, "/pros/manga_casino.txt": { type: "static" }, "/pros/marsbet_casino.txt": { type: "static" }, "/pros/mbit_casino.txt": { type: "static" }, "/pros/mega_dice_casino.txt": { type: "static" }, "/pros/megapari_casino.txt": { type: "static" }, "/pros/megarich_casino.txt": { type: "static" }, "/pros/merlin_casino.txt": { type: "static" }, "/pros/metaspins_crypto_casino.txt": { type: "static" }, "/pros/mirax_casino.txt": { type: "static" }, "/pros/moicasino.txt": { type: "static" }, "/pros/mondcasino.txt": { type: "static" }, "/pros/monixbet_casino.txt": { type: "static" }, "/pros/monro_casino.txt": { type: "static" }, "/pros/moonwin_casino.txt": { type: "static" }, "/pros/mr_bit_casino.txt": { type: "static" }, "/pros/mrpacho_casino.txt": { type: "static" }, "/pros/mystake_casino.txt": { type: "static" }, "/pros/n1bet_casino.txt": { type: "static" }, "/pros/nalu_casino.txt": { type: "static" }, "/pros/national_casino.txt": { type: "static" }, "/pros/needforspin_casino.txt": { type: "static" }, "/pros/neon54_casino.txt": { type: "static" }, "/pros/neospin_casino.txt": { type: "static" }, "/pros/ninlay_casino.txt": { type: "static" }, "/pros/nitrobet_casino.txt": { type: "static" }, "/pros/niyvi_casino.txt": { type: "static" }, "/pros/nolimitbet_casino.txt": { type: "static" }, "/pros/nomini_casino.txt": { type: "static" }, "/pros/norgesspill_casino.txt": { type: "static" }, "/pros/nuggetslots_casino.txt": { type: "static" }, "/pros/nummus_casino.txt": { type: "static" }, "/pros/ohmyspins_casino.txt": { type: "static" }, "/pros/ohmyzino_casino.txt": { type: "static" }, "/pros/olympia_casino.txt": { type: "static" }, "/pros/olympusbet_casino.txt": { type: "static" }, "/pros/omni_slots_casino.txt": { type: "static" }, "/pros/onedun_casino.txt": { type: "static" }, "/pros/onluck_casino.txt": { type: "static" }, "/pros/osh_casino.txt": { type: "static" }, "/pros/oshi_casino.txt": { type: "static" }, "/pros/palmslots_casino.txt": { type: "static" }, "/pros/pan-casino.txt": { type: "static" }, "/pros/pin-up_casino.txt": { type: "static" }, "/pros/pinnacle_casino.txt": { type: "static" }, "/pros/pirate_spot_casino.txt": { type: "static" }, "/pros/plangames_casino.txt": { type: "static" }, "/pros/playfina_casino.txt": { type: "static" }, "/pros/playfortuna_casino.txt": { type: "static" }, "/pros/playio_casino.txt": { type: "static" }, "/pros/playmojo_casino.txt": { type: "static" }, "/pros/playmoola_casino.txt": { type: "static" }, "/pros/playouwin_casino.txt": { type: "static" }, "/pros/playzilla_casino.txt": { type: "static" }, "/pros/pledoo_casino.txt": { type: "static" }, "/pros/powbet_casino.txt": { type: "static" }, "/pros/powerbet777_casino.txt": { type: "static" }, "/pros/powerup_casino.txt": { type: "static" }, "/pros/primebetz_casino.txt": { type: "static" }, "/pros/prontobet_casino.txt": { type: "static" }, "/pros/puma_casino.txt": { type: "static" }, "/pros/punterz_casino.txt": { type: "static" }, "/pros/queen_casino.txt": { type: "static" }, "/pros/queenspins_casino.txt": { type: "static" }, "/pros/quickslot_casino.txt": { type: "static" }, "/pros/rakebit_casino.txt": { type: "static" }, "/pros/rakoo_casino.txt": { type: "static" }, "/pros/raze_casino.txt": { type: "static" }, "/pros/readycasino.txt": { type: "static" }, "/pros/red_dice_casino.txt": { type: "static" }, "/pros/reel_crypto_casino.txt": { type: "static" }, "/pros/reloadbet_casino.txt": { type: "static" }, "/pros/respin_casino.txt": { type: "static" }, "/pros/retro_bet_casino.txt": { type: "static" }, "/pros/richard_casino.txt": { type: "static" }, "/pros/rickycasino.txt": { type: "static" }, "/pros/riobet_casino.txt": { type: "static" }, "/pros/ritzo_casino.txt": { type: "static" }, "/pros/riviera_casino.txt": { type: "static" }, "/pros/rizz_casino.txt": { type: "static" }, "/pros/robocat_casino.txt": { type: "static" }, "/pros/rocketplay_casino.txt": { type: "static" }, "/pros/rocketwin_casino.txt": { type: "static" }, "/pros/rockwin_casino.txt": { type: "static" }, "/pros/rolletto_casino.txt": { type: "static" }, "/pros/rolling_slots_casino.txt": { type: "static" }, "/pros/rollino_casino.txt": { type: "static" }, "/pros/rollxo_casino.txt": { type: "static" }, "/pros/rooli_casino.txt": { type: "static" }, "/pros/rooster_bet_casino.txt": { type: "static" }, "/pros/royal_stars_casino.txt": { type: "static" }, "/pros/royalgame_casino.txt": { type: "static" }, "/pros/royspins_casino.txt": { type: "static" }, "/pros/run4win_casino.txt": { type: "static" }, "/pros/sapphirebet_casino.txt": { type: "static" }, "/pros/shambala_casino.txt": { type: "static" }, "/pros/shangri_la_casino.txt": { type: "static" }, "/pros/sherbet_casino.txt": { type: "static" }, "/pros/shotz_casino.txt": { type: "static" }, "/pros/silverplay_casino.txt": { type: "static" }, "/pros/sirwin_casino.txt": { type: "static" }, "/pros/skycrown_casino.txt": { type: "static" }, "/pros/slota_casino.txt": { type: "static" }, "/pros/slotbox_casino.txt": { type: "static" }, "/pros/sloterra_casino.txt": { type: "static" }, "/pros/slotexo_casino.txt": { type: "static" }, "/pros/slotit_casino.txt": { type: "static" }, "/pros/slotlords_casino.txt": { type: "static" }, "/pros/slotman_casino.txt": { type: "static" }, "/pros/slotozen_casino.txt": { type: "static" }, "/pros/slotparadise_casino.txt": { type: "static" }, "/pros/slots_city_casino.txt": { type: "static" }, "/pros/slots_gallery_casino.txt": { type: "static" }, "/pros/slotsflix_casino.txt": { type: "static" }, "/pros/slotspalace_casino.txt": { type: "static" }, "/pros/slottica_casino.txt": { type: "static" }, "/pros/slottojam_casino.txt": { type: "static" }, "/pros/slottyway_casino.txt": { type: "static" }, "/pros/slotum_casino.txt": { type: "static" }, "/pros/slotuna_casino.txt": { type: "static" }, "/pros/slotvibe_casino.txt": { type: "static" }, "/pros/smokace_casino.txt": { type: "static" }, "/pros/snatch_casino.txt": { type: "static" }, "/pros/sol_casino.txt": { type: "static" }, "/pros/solisbet_casino.txt": { type: "static" }, "/pros/sombrero_spins_casino.txt": { type: "static" }, "/pros/space_lilly_casino.txt": { type: "static" }, "/pros/spades_queen_casino.txt": { type: "static" }, "/pros/spellwin_casino.txt": { type: "static" }, "/pros/spin_away_casino.txt": { type: "static" }, "/pros/spin_samurai_casino.txt": { type: "static" }, "/pros/spinarium_casino.txt": { type: "static" }, "/pros/spinaro_casino.txt": { type: "static" }, "/pros/spinbet_casino.txt": { type: "static" }, "/pros/spinbetter_casino.txt": { type: "static" }, "/pros/spinbit_casino.txt": { type: "static" }, "/pros/spinch_casino.txt": { type: "static" }, "/pros/spinfever_casino.txt": { type: "static" }, "/pros/spinight_casino.txt": { type: "static" }, "/pros/spinjo_casino.txt": { type: "static" }, "/pros/spinline_casino.txt": { type: "static" }, "/pros/spinnalot_casino.txt": { type: "static" }, "/pros/spinrollz_casino.txt": { type: "static" }, "/pros/spinsbro_casino.txt": { type: "static" }, "/pros/spinspace_casino.txt": { type: "static" }, "/pros/spinsup_casino.txt": { type: "static" }, "/pros/spinsy_casino.txt": { type: "static" }, "/pros/spinybet_casino.txt": { type: "static" }, "/pros/spirit_casino.txt": { type: "static" }, "/pros/sportaza_casino.txt": { type: "static" }, "/pros/sportuna_casino.txt": { type: "static" }, "/pros/stakeprix_casino.txt": { type: "static" }, "/pros/starda_casino.txt": { type: "static" }, "/pros/staxino_casino.txt": { type: "static" }, "/pros/staycasino.txt": { type: "static" }, "/pros/stelario_casino.txt": { type: "static" }, "/pros/stupid_casino.txt": { type: "static" }, "/pros/sultanbet_casino.txt": { type: "static" }, "/pros/sunplay_casino.txt": { type: "static" }, "/pros/superboss_casino.txt": { type: "static" }, "/pros/sushi_casino.txt": { type: "static" }, "/pros/syndicate_casino.txt": { type: "static" }, "/pros/the_clubhouse_casino.txt": { type: "static" }, "/pros/thorcasino.txt": { type: "static" }, "/pros/thunderpick_casino.txt": { type: "static" }, "/pros/tiki_casino.txt": { type: "static" }, "/pros/tikitaka_casino.txt": { type: "static" }, "/pros/tiktak_bet_casino.txt": { type: "static" }, "/pros/tivitbet_casino.txt": { type: "static" }, "/pros/tomb_riches_casino.txt": { type: "static" }, "/pros/tonybet_casino.txt": { type: "static" }, "/pros/tornadobet_casino.txt": { type: "static" }, "/pros/treasure_spins_casino.txt": { type: "static" }, "/pros/trino_casino.txt": { type: "static" }, "/pros/trip2vip_casino.txt": { type: "static" }, "/pros/trips_casino.txt": { type: "static" }, "/pros/trivelabet_casino.txt": { type: "static" }, "/pros/trustdice_casino.txt": { type: "static" }, "/pros/tsars_casino.txt": { type: "static" }, "/pros/twin_casino.txt": { type: "static" }, "/pros/unlim_casino.txt": { type: "static" }, "/pros/vasy_casino.txt": { type: "static" }, "/pros/vavada_casino.txt": { type: "static" }, "/pros/vave_casino.txt": { type: "static" }, "/pros/vegas_now_casino.txt": { type: "static" }, "/pros/vegasino_casino.txt": { type: "static" }, "/pros/vegaz_casino.txt": { type: "static" }, "/pros/velobet_casino.txt": { type: "static" }, "/pros/vinyl_casino.txt": { type: "static" }, "/pros/viperwin_casino.txt": { type: "static" }, "/pros/voltslot_casino.txt": { type: "static" }, "/pros/voodoo_casino.txt": { type: "static" }, "/pros/vulkanvegas_casino.txt": { type: "static" }, "/pros/wanted_win_casino.txt": { type: "static" }, "/pros/wasino_casino.txt": { type: "static" }, "/pros/wazamba_casino.txt": { type: "static" }, "/pros/wazbee_casino.txt": { type: "static" }, "/pros/weiss_casino.txt": { type: "static" }, "/pros/welle_casino.txt": { type: "static" }, "/pros/whamoo_casino.txt": { type: "static" }, "/pros/wild_tokyo_casino.txt": { type: "static" }, "/pros/wild_tornado_casino.txt": { type: "static" }, "/pros/wildsino_casino.txt": { type: "static" }, "/pros/winawin_casino.txt": { type: "static" }, "/pros/windetta_casino.txt": { type: "static" }, "/pros/wingaga_casino.txt": { type: "static" }, "/pros/winlegends_casino.txt": { type: "static" }, "/pros/winmaker_casino.txt": { type: "static" }, "/pros/winning_casino.txt": { type: "static" }, "/pros/winsane_casino.txt": { type: "static" }, "/pros/winscore_casino.txt": { type: "static" }, "/pros/winshark_casino.txt": { type: "static" }, "/pros/winspirit_casino.txt": { type: "static" }, "/pros/winsroyal_casino.txt": { type: "static" }, "/pros/winstoria_casino.txt": { type: "static" }, "/pros/wintomato_casino.txt": { type: "static" }, "/pros/winwin_casino.txt": { type: "static" }, "/pros/wir_wetten_casino.txt": { type: "static" }, "/pros/wish_casino.txt": { type: "static" }, "/pros/wizebets_casino.txt": { type: "static" }, "/pros/wolfy_casino.txt": { type: "static" }, "/pros/wonaco_casino.txt": { type: "static" }, "/pros/wsm_casino.txt": { type: "static" }, "/pros/wunderwins_casino.txt": { type: "static" }, "/pros/x7_casino.txt": { type: "static" }, "/pros/yoju_casino.txt": { type: "static" }, "/pros/zenbetting_casino.txt": { type: "static" }, "/pros/zencasino.txt": { type: "static" }, "/pros/zinkra_casino.txt": { type: "static" }, "/pros/zipcasino.txt": { type: "static" }, "/pros/zoome_casino.txt": { type: "static" }, "/pros/zotabet_casino.txt": { type: "static" }, "/review/11croco_casino.txt": { type: "static" }, "/review/1go_casino.txt": { type: "static" }, "/review/1red_casino.txt": { type: "static" }, "/review/1xslots_casino.txt": { type: "static" }, "/review/20bet_casino.txt": { type: "static" }, "/review/21_bets_casino.txt": { type: "static" }, "/review/21bit_casino.txt": { type: "static" }, "/review/22bet_casino.txt": { type: "static" }, "/review/24casino.txt": { type: "static" }, "/review/24slots_casino.txt": { type: "static" }, "/review/30bet_casino.txt": { type: "static" }, "/review/321crypto_casino.txt": { type: "static" }, "/review/4kasino_casino.txt": { type: "static" }, "/review/500_casino.txt": { type: "static" }, "/review/50_crowns_casino.txt": { type: "static" }, "/review/55bet_casino.txt": { type: "static" }, "/review/5gringos_casino.txt": { type: "static" }, "/review/7signs_casino.txt": { type: "static" }, "/review/888starz_casino.txt": { type: "static" }, "/review/8xwins_casino.txt": { type: "static" }, "/review/airbet_casino.txt": { type: "static" }, "/review/alf_casino.txt": { type: "static" }, "/review/allspins_casino.txt": { type: "static" }, "/review/allstarz_casino.txt": { type: "static" }, "/review/amerio_bet_casino.txt": { type: "static" }, "/review/anarchy_casino.txt": { type: "static" }, "/review/aplay_casino.txt": { type: "static" }, "/review/arcanebet_casino.txt": { type: "static" }, "/review/artcasino.txt": { type: "static" }, "/review/asino_casino.txt": { type: "static" }, "/review/auf_casino.txt": { type: "static" }, "/review/avocasino.txt": { type: "static" }, "/review/axecasino.txt": { type: "static" }, "/review/bankonbet_casino.txt": { type: "static" }, "/review/bdmbet_casino.txt": { type: "static" }, "/review/beastino_casino.txt": { type: "static" }, "/review/bet_it_all_casino.txt": { type: "static" }, "/review/betandplay_casino.txt": { type: "static" }, "/review/betandyou_casino.txt": { type: "static" }, "/review/betbeast_casino.txt": { type: "static" }, "/review/betcg_casino.txt": { type: "static" }, "/review/betchain_casino.txt": { type: "static" }, "/review/betcoin_casino.txt": { type: "static" }, "/review/beteum_casino.txt": { type: "static" }, "/review/betfinal_casino.txt": { type: "static" }, "/review/betflare_casino.txt": { type: "static" }, "/review/betfree_casino.txt": { type: "static" }, "/review/betify_casino.txt": { type: "static" }, "/review/betifyme_casino.txt": { type: "static" }, "/review/betmartini_casino.txt": { type: "static" }, "/review/betnox_casino.txt": { type: "static" }, "/review/betonred_casino.txt": { type: "static" }, "/review/betovix_casino.txt": { type: "static" }, "/review/betovo_casino.txt": { type: "static" }, "/review/betroom24_casino.txt": { type: "static" }, "/review/betrunner_casino.txt": { type: "static" }, "/review/betsofa_casino.txt": { type: "static" }, "/review/betsomnia_casino.txt": { type: "static" }, "/review/betssen_casino.txt": { type: "static" }, "/review/betswap_casino.txt": { type: "static" }, "/review/betti_casino.txt": { type: "static" }, "/review/bettilt_casino.txt": { type: "static" }, "/review/betybet_casino.txt": { type: "static" }, "/review/betzard_casino.txt": { type: "static" }, "/review/betzino_casino.txt": { type: "static" }, "/review/billy_billion_casino.txt": { type: "static" }, "/review/billybets_casino.txt": { type: "static" }, "/review/bingo_cafe_casino.txt": { type: "static" }, "/review/bitcoin_casino.txt": { type: "static" }, "/review/bitcoin_games_casino.txt": { type: "static" }, "/review/bitkingz_casino.txt": { type: "static" }, "/review/bitsler_casino.txt": { type: "static" }, "/review/bizzo_casino.txt": { type: "static" }, "/review/bk8_casino.txt": { type: "static" }, "/review/black_lion_casino.txt": { type: "static" }, "/review/blitz-bet_casino.txt": { type: "static" }, "/review/blueleo_casino.txt": { type: "static" }, "/review/boaboa_casino.txt": { type: "static" }, "/review/boho_casino.txt": { type: "static" }, "/review/bombastic_casino.txt": { type: "static" }, "/review/bonanzino_casino.txt": { type: "static" }, "/review/bongo_casino.txt": { type: "static" }, "/review/booi_casino.txt": { type: "static" }, "/review/boomerang-bet_casino.txt": { type: "static" }, "/review/boomerang_casino.txt": { type: "static" }, "/review/brango_casino.txt": { type: "static" }, "/review/brazino777_casino.txt": { type: "static" }, "/review/brucebet_casino.txt": { type: "static" }, "/review/bull_casino.txt": { type: "static" }, "/review/bullsbet_casino.txt": { type: "static" }, "/review/burancasino.txt": { type: "static" }, "/review/buumi_casino.txt": { type: "static" }, "/review/cadabrus_casino.txt": { type: "static" }, "/review/cadoola_casino.txt": { type: "static" }, "/review/caibo_casino.txt": { type: "static" }, "/review/casabet_casino.txt": { type: "static" }, "/review/cashwin_casino.txt": { type: "static" }, "/review/casinado_casino.txt": { type: "static" }, "/review/casino_friday.txt": { type: "static" }, "/review/casino_infinity.txt": { type: "static" }, "/review/casino_mustang.txt": { type: "static" }, "/review/casino_orca.txt": { type: "static" }, "/review/casino_rocket.txt": { type: "static" }, "/review/casino_together.txt": { type: "static" }, "/review/casinobello.txt": { type: "static" }, "/review/casinobet_casino.txt": { type: "static" }, "/review/casinoin.txt": { type: "static" }, "/review/casinojax.txt": { type: "static" }, "/review/casinoly_casino.txt": { type: "static" }, "/review/casinonic_casino.txt": { type: "static" }, "/review/casinosecret.txt": { type: "static" }, "/review/casinostriker.txt": { type: "static" }, "/review/casinova_casino.txt": { type: "static" }, "/review/casinovibes.txt": { type: "static" }, "/review/casinozer_casino.txt": { type: "static" }, "/review/casiny_casino.txt": { type: "static" }, "/review/casoo_casino.txt": { type: "static" }, "/review/cazimbo_casino.txt": { type: "static" }, "/review/chipstars_casino.txt": { type: "static" }, "/review/cleopatra_casino.txt": { type: "static" }, "/review/club_riches_casino.txt": { type: "static" }, "/review/cobra_casino.txt": { type: "static" }, "/review/coins_game_casino.txt": { type: "static" }, "/review/conquestador_casino.txt": { type: "static" }, "/review/coolzino_casino.txt": { type: "static" }, "/review/cosmicslot_casino.txt": { type: "static" }, "/review/cosmobet_casino.txt": { type: "static" }, "/review/cosmoswin_casino.txt": { type: "static" }, "/review/crashino_casino.txt": { type: "static" }, "/review/crocoSlots_casino.md": { type: "static" }, "/review/crocoSlots_casino.txt": { type: "static" }, "/review/crocoslots_casino.txt": { type: "static" }, "/review/crownslots_casino.txt": { type: "static" }, "/review/crusino_casino.txt": { type: "static" }, "/review/cryptoboss_casino.txt": { type: "static" }, "/review/cryptoleo_casino.txt": { type: "static" }, "/review/cryptorush_casino.txt": { type: "static" }, "/review/cryptowild_casino.txt": { type: "static" }, "/review/dailyspins_casino.txt": { type: "static" }, "/review/dazardbet_casino.txt": { type: "static" }, "/review/dedprz_casino.txt": { type: "static" }, "/review/del_oro_casino.txt": { type: "static" }, "/review/divas_luck_casino.txt": { type: "static" }, "/review/drift_casino.txt": { type: "static" }, "/review/drip_casino.txt": { type: "static" }, "/review/dundeeslots_casino.txt": { type: "static" }, "/review/emucasino.txt": { type: "static" }, "/review/epicbet_casino.txt": { type: "static" }, "/review/excitewin_casino.txt": { type: "static" }, "/review/fairspin_casino.txt": { type: "static" }, "/review/fansport_casino.txt": { type: "static" }, "/review/fatpanda_casino.txt": { type: "static" }, "/review/fatpirate_casino.txt": { type: "static" }, "/review/felixspin_casino.txt": { type: "static" }, "/review/fezbet_casino.txt": { type: "static" }, "/review/flappy_casino.txt": { type: "static" }, "/review/flukyone_casino.txt": { type: "static" }, "/review/flush_casino.txt": { type: "static" }, "/review/fortune_panda_casino.txt": { type: "static" }, "/review/fortunejack_casino.txt": { type: "static" }, "/review/fresh_casino.txt": { type: "static" }, "/review/fruits4real_casino.txt": { type: "static" }, "/review/funbet_casino.txt": { type: "static" }, "/review/gamblezen_casino.txt": { type: "static" }, "/review/gamdom_casino.txt": { type: "static" }, "/review/gamix_casino.txt": { type: "static" }, "/review/gangsta_casino.txt": { type: "static" }, "/review/gate777_casino.txt": { type: "static" }, "/review/gembet_casino.txt": { type: "static" }, "/review/genie_jackpot_casino.txt": { type: "static" }, "/review/getslots_casino.txt": { type: "static" }, "/review/ggbet_casino.txt": { type: "static" }, "/review/gizbo_casino.txt": { type: "static" }, "/review/godbunny_casino.txt": { type: "static" }, "/review/golden_crown_casino.txt": { type: "static" }, "/review/golden_panda_casino.txt": { type: "static" }, "/review/golden_star_casino.txt": { type: "static" }, "/review/goldspin_casino.txt": { type: "static" }, "/review/gomblingo_casino.txt": { type: "static" }, "/review/goodman_casino.txt": { type: "static" }, "/review/goralbet_casino.txt": { type: "static" }, "/review/gospin_casino.txt": { type: "static" }, "/review/grandwin_casino.txt": { type: "static" }, "/review/greatspin_casino.txt": { type: "static" }, "/review/greatwin_casino.txt": { type: "static" }, "/review/gunsbet_casino.txt": { type: "static" }, "/review/gxmble_casino.txt": { type: "static" }, "/review/happyhugo_casino.txt": { type: "static" }, "/review/happyslots_casino.txt": { type: "static" }, "/review/happyspins_casino.txt": { type: "static" }, "/review/haz_casino.txt": { type: "static" }, "/review/heats_casino.txt": { type: "static" }, "/review/helabet_casino.txt": { type: "static" }, "/review/hellspin_casino.txt": { type: "static" }, "/review/herospin_casino.txt": { type: "static" }, "/review/hexabet_casino.txt": { type: "static" }, "/review/hiperwin_casino.txt": { type: "static" }, "/review/hitnspin_casino.txt": { type: "static" }, "/review/horus_casino.txt": { type: "static" }, "/review/hotslots_casino.txt": { type: "static" }, "/review/hugewin_casino.txt": { type: "static" }, "/review/hugo_casino.txt": { type: "static" }, "/review/icebet_casino.txt": { type: "static" }, "/review/immerion_casino.txt": { type: "static" }, "/review/impressario_casino.txt": { type: "static" }, "/review/ivibet_casino.txt": { type: "static" }, "/review/iwild_casino.txt": { type: "static" }, "/review/izzi_casino.txt": { type: "static" }, "/review/jackbit_casino.txt": { type: "static" }, "/review/jackburst_casino.txt": { type: "static" }, "/review/jackpot_guru_casino.txt": { type: "static" }, "/review/jackpotfrenzy_casino.txt": { type: "static" }, "/review/jackpoty_casino.txt": { type: "static" }, "/review/jacktop_casino.txt": { type: "static" }, "/review/jeetcity_casino.txt": { type: "static" }, "/review/jet_casino.txt": { type: "static" }, "/review/jettbet_casino.txt": { type: "static" }, "/review/johnvegascasino.txt": { type: "static" }, "/review/joker8_casino.txt": { type: "static" }, "/review/joo_casino.txt": { type: "static" }, "/review/joya_casino.txt": { type: "static" }, "/review/joycasino.txt": { type: "static" }, "/review/jozz_casino.txt": { type: "static" }, "/review/jupi_casino.txt": { type: "static" }, "/review/justcasino.txt": { type: "static" }, "/review/jvspinbet_casino.txt": { type: "static" }, "/review/katsubet_casino.txt": { type: "static" }, "/review/kaulana_casino.txt": { type: "static" }, "/review/kikobet_casino.txt": { type: "static" }, "/review/kinbet_casino.txt": { type: "static" }, "/review/king_billy_casino.txt": { type: "static" }, "/review/kingamo_casino.txt": { type: "static" }, "/review/kingdom_casino.txt": { type: "static" }, "/review/kingmaker_casino.txt": { type: "static" }, "/review/kingswin_casino.txt": { type: "static" }, "/review/kirgo_casino.txt": { type: "static" }, "/review/koi_casino.txt": { type: "static" }, "/review/kripty_casino.txt": { type: "static" }, "/review/kryptosino_casino.txt": { type: "static" }, "/review/lamabet_casino.txt": { type: "static" }, "/review/legiano_casino.txt": { type: "static" }, "/review/legzo_casino.txt": { type: "static" }, "/review/lemon_casino.txt": { type: "static" }, "/review/leon_bet_casino.txt": { type: "static" }, "/review/letslucky_casino.txt": { type: "static" }, "/review/levelup_casino.txt": { type: "static" }, "/review/lex_casino.txt": { type: "static" }, "/review/librabet_casino.txt": { type: "static" }, "/review/lilibet_casino.txt": { type: "static" }, "/review/loft_casino.txt": { type: "static" }, "/review/loki_casino.txt": { type: "static" }, "/review/lucky7even_casino.txt": { type: "static" }, "/review/lucky_circus_casino.txt": { type: "static" }, "/review/lucky_crypto_casino.txt": { type: "static" }, "/review/lucky_dreams_casino.txt": { type: "static" }, "/review/lucky_elf_casino.txt": { type: "static" }, "/review/lucky_hunter_casino.txt": { type: "static" }, "/review/lucky_koala_casino.txt": { type: "static" }, "/review/lucky_ones_casino.txt": { type: "static" }, "/review/lucky_spins_casino.txt": { type: "static" }, "/review/lucky_vibe_casino.txt": { type: "static" }, "/review/lucky_whale_casino.txt": { type: "static" }, "/review/luckybay_casino.txt": { type: "static" }, "/review/luckychoo_casino.txt": { type: "static" }, "/review/luckyhand_casino.txt": { type: "static" }, "/review/luckyhour_casino.txt": { type: "static" }, "/review/luckykong_casino.txt": { type: "static" }, "/review/luckyreels_casino.txt": { type: "static" }, "/review/luckystar_casino.txt": { type: "static" }, "/review/luckystart_casino.txt": { type: "static" }, "/review/luckywins_casino.txt": { type: "static" }, "/review/lucys_casino.txt": { type: "static" }, "/review/lukki_casino.txt": { type: "static" }, "/review/lunubet_casino.txt": { type: "static" }, "/review/lyracasino.txt": { type: "static" }, "/review/malinacasino.txt": { type: "static" }, "/review/manga_casino.txt": { type: "static" }, "/review/marsbet_casino.txt": { type: "static" }, "/review/mbit_casino.txt": { type: "static" }, "/review/mega_dice_casino.txt": { type: "static" }, "/review/megapari_casino.txt": { type: "static" }, "/review/megarich_casino.txt": { type: "static" }, "/review/merlin_casino.txt": { type: "static" }, "/review/metaspins_crypto_casino.txt": { type: "static" }, "/review/mirax_casino.txt": { type: "static" }, "/review/moicasino.txt": { type: "static" }, "/review/mondcasino.txt": { type: "static" }, "/review/monixbet_casino.txt": { type: "static" }, "/review/monro_casino.txt": { type: "static" }, "/review/moonwin_casino.txt": { type: "static" }, "/review/mr_bit_casino.txt": { type: "static" }, "/review/mrpacho_casino.txt": { type: "static" }, "/review/mystake_casino.txt": { type: "static" }, "/review/n1bet_casino.txt": { type: "static" }, "/review/nalu_casino.txt": { type: "static" }, "/review/national_casino.txt": { type: "static" }, "/review/needforspin_casino.txt": { type: "static" }, "/review/neon54_casino.txt": { type: "static" }, "/review/neospin_casino.txt": { type: "static" }, "/review/ninlay_casino.txt": { type: "static" }, "/review/nitrobet_casino.txt": { type: "static" }, "/review/niyvi_casino.txt": { type: "static" }, "/review/nolimitbet_casino.txt": { type: "static" }, "/review/nomini_casino.txt": { type: "static" }, "/review/norgesspill_casino.txt": { type: "static" }, "/review/nuggetslots_casino.txt": { type: "static" }, "/review/nummus_casino.txt": { type: "static" }, "/review/ohmyspins_casino.txt": { type: "static" }, "/review/ohmyzino_casino.txt": { type: "static" }, "/review/olympia_casino.txt": { type: "static" }, "/review/olympusbet_casino.txt": { type: "static" }, "/review/omni_slots_casino.txt": { type: "static" }, "/review/onedun_casino.txt": { type: "static" }, "/review/onluck_casino.txt": { type: "static" }, "/review/osh_casino.txt": { type: "static" }, "/review/oshi_casino.txt": { type: "static" }, "/review/palmslots_casino.txt": { type: "static" }, "/review/pan-casino.txt": { type: "static" }, "/review/pin-up_casino.txt": { type: "static" }, "/review/pinnacle_casino.txt": { type: "static" }, "/review/pirate_spot_casino.txt": { type: "static" }, "/review/plangames_casino.txt": { type: "static" }, "/review/playfina_casino.txt": { type: "static" }, "/review/playfortuna_casino.txt": { type: "static" }, "/review/playio_casino.txt": { type: "static" }, "/review/playmojo_casino.txt": { type: "static" }, "/review/playmoola_casino.txt": { type: "static" }, "/review/playouwin_casino.txt": { type: "static" }, "/review/playzilla_casino.txt": { type: "static" }, "/review/pledoo_casino.txt": { type: "static" }, "/review/powbet_casino.txt": { type: "static" }, "/review/powerbet777_casino.txt": { type: "static" }, "/review/powerup_casino.txt": { type: "static" }, "/review/primebetz_casino.txt": { type: "static" }, "/review/prontobet_casino.txt": { type: "static" }, "/review/puma_casino.txt": { type: "static" }, "/review/punterz_casino.txt": { type: "static" }, "/review/queen_casino.txt": { type: "static" }, "/review/queenspins_casino.txt": { type: "static" }, "/review/quickslot_casino.txt": { type: "static" }, "/review/rakebit_casino.txt": { type: "static" }, "/review/rakoo_casino.txt": { type: "static" }, "/review/raze_casino.txt": { type: "static" }, "/review/readycasino.txt": { type: "static" }, "/review/red_dice_casino.txt": { type: "static" }, "/review/reel_crypto_casino.txt": { type: "static" }, "/review/reloadbet_casino.txt": { type: "static" }, "/review/respin_casino.txt": { type: "static" }, "/review/retro_bet_casino.txt": { type: "static" }, "/review/richard_casino.txt": { type: "static" }, "/review/rickycasino.txt": { type: "static" }, "/review/riobet_casino.txt": { type: "static" }, "/review/ritzo_casino.txt": { type: "static" }, "/review/riviera_casino.txt": { type: "static" }, "/review/rizz_casino.txt": { type: "static" }, "/review/robocat_casino.txt": { type: "static" }, "/review/rocketplay_casino.txt": { type: "static" }, "/review/rocketwin_casino.txt": { type: "static" }, "/review/rockwin_casino.txt": { type: "static" }, "/review/rolletto_casino.txt": { type: "static" }, "/review/rolling_slots_casino.txt": { type: "static" }, "/review/rollino_casino.txt": { type: "static" }, "/review/rollxo_casino.txt": { type: "static" }, "/review/rooli_casino.txt": { type: "static" }, "/review/rooster_bet_casino.txt": { type: "static" }, "/review/royal_stars_casino.txt": { type: "static" }, "/review/royalgame_casino.txt": { type: "static" }, "/review/royspins_casino.txt": { type: "static" }, "/review/run4win_casino.txt": { type: "static" }, "/review/sapphirebet_casino.txt": { type: "static" }, "/review/shambala_casino.txt": { type: "static" }, "/review/shangri_la_casino.txt": { type: "static" }, "/review/sherbet_casino.txt": { type: "static" }, "/review/shotz_casino.txt": { type: "static" }, "/review/silverplay_casino.txt": { type: "static" }, "/review/sirwin_casino.txt": { type: "static" }, "/review/skycrown_casino.txt": { type: "static" }, "/review/slota_casino.txt": { type: "static" }, "/review/slotbox_casino.txt": { type: "static" }, "/review/sloterra_casino.txt": { type: "static" }, "/review/slotexo_casino.txt": { type: "static" }, "/review/slotit_casino.txt": { type: "static" }, "/review/slotlords_casino.txt": { type: "static" }, "/review/slotman_casino.txt": { type: "static" }, "/review/slotozen_casino.txt": { type: "static" }, "/review/slotparadise_casino.txt": { type: "static" }, "/review/slots_city_casino.txt": { type: "static" }, "/review/slots_gallery_casino.txt": { type: "static" }, "/review/slotsflix_casino.txt": { type: "static" }, "/review/slotspalace_casino.txt": { type: "static" }, "/review/slottica_casino.txt": { type: "static" }, "/review/slottojam_casino.txt": { type: "static" }, "/review/slottyway_casino.txt": { type: "static" }, "/review/slotum_casino.txt": { type: "static" }, "/review/slotuna_casino.txt": { type: "static" }, "/review/slotvibe_casino.txt": { type: "static" }, "/review/smokace_casino.txt": { type: "static" }, "/review/snatch_casino.txt": { type: "static" }, "/review/sol_casino.txt": { type: "static" }, "/review/solisbet_casino.txt": { type: "static" }, "/review/sombrero_spins_casino.txt": { type: "static" }, "/review/space_lilly_casino.txt": { type: "static" }, "/review/spades_queen_casino.txt": { type: "static" }, "/review/spellwin_casino.txt": { type: "static" }, "/review/spin_away_casino.txt": { type: "static" }, "/review/spin_samurai_casino.txt": { type: "static" }, "/review/spinarium_casino.txt": { type: "static" }, "/review/spinaro_casino.txt": { type: "static" }, "/review/spinbet_casino.txt": { type: "static" }, "/review/spinbetter_casino.txt": { type: "static" }, "/review/spinbit_casino.txt": { type: "static" }, "/review/spinch_casino.txt": { type: "static" }, "/review/spinfever_casino.txt": { type: "static" }, "/review/spinight_casino.txt": { type: "static" }, "/review/spinjo_casino.txt": { type: "static" }, "/review/spinline_casino.txt": { type: "static" }, "/review/spinnalot_casino.txt": { type: "static" }, "/review/spinrollz_casino.txt": { type: "static" }, "/review/spinsbro_casino.txt": { type: "static" }, "/review/spinspace_casino.txt": { type: "static" }, "/review/spinsup_casino.txt": { type: "static" }, "/review/spinsy_casino.txt": { type: "static" }, "/review/spinybet_casino.txt": { type: "static" }, "/review/spirit_casino.txt": { type: "static" }, "/review/sportaza_casino.txt": { type: "static" }, "/review/sportuna_casino.txt": { type: "static" }, "/review/stakeprix_casino.txt": { type: "static" }, "/review/starda_casino.txt": { type: "static" }, "/review/staxino_casino.txt": { type: "static" }, "/review/staycasino.txt": { type: "static" }, "/review/stelario_casino.txt": { type: "static" }, "/review/stupid_casino.txt": { type: "static" }, "/review/sultanbet_casino.txt": { type: "static" }, "/review/sunplay_casino.txt": { type: "static" }, "/review/superboss_casino.txt": { type: "static" }, "/review/sushi_casino.txt": { type: "static" }, "/review/syndicate_casino.txt": { type: "static" }, "/review/the_clubhouse_casino.txt": { type: "static" }, "/review/thorcasino.txt": { type: "static" }, "/review/thunderpick_casino.txt": { type: "static" }, "/review/tiki_casino.txt": { type: "static" }, "/review/tikitaka_casino.txt": { type: "static" }, "/review/tiktak_bet_casino.txt": { type: "static" }, "/review/tivitbet_casino.txt": { type: "static" }, "/review/tomb_riches_casino.txt": { type: "static" }, "/review/tonybet_casino.txt": { type: "static" }, "/review/tornadobet_casino.txt": { type: "static" }, "/review/treasure_spins_casino.txt": { type: "static" }, "/review/trino_casino.txt": { type: "static" }, "/review/trip2vip_casino.txt": { type: "static" }, "/review/trips_casino.txt": { type: "static" }, "/review/trivelabet_casino.txt": { type: "static" }, "/review/trustdice_casino.txt": { type: "static" }, "/review/tsars_casino.txt": { type: "static" }, "/review/twin_casino.txt": { type: "static" }, "/review/unlim_casino.txt": { type: "static" }, "/review/vasy_casino.txt": { type: "static" }, "/review/vavada_casino.txt": { type: "static" }, "/review/vave_casino.txt": { type: "static" }, "/review/vegas_now_casino.txt": { type: "static" }, "/review/vegasino_casino.txt": { type: "static" }, "/review/vegaz_casino.txt": { type: "static" }, "/review/velobet_casino.txt": { type: "static" }, "/review/vinyl_casino.txt": { type: "static" }, "/review/viperwin_casino.txt": { type: "static" }, "/review/voltslot_casino.txt": { type: "static" }, "/review/voodoo_casino.txt": { type: "static" }, "/review/vulkanvegas_casino.txt": { type: "static" }, "/review/wanted_win_casino.txt": { type: "static" }, "/review/wasino_casino.txt": { type: "static" }, "/review/wazamba_casino.txt": { type: "static" }, "/review/wazbee_casino.txt": { type: "static" }, "/review/weiss_casino.txt": { type: "static" }, "/review/welle_casino.txt": { type: "static" }, "/review/whamoo_casino.txt": { type: "static" }, "/review/wild_tokyo_casino.txt": { type: "static" }, "/review/wild_tornado_casino.txt": { type: "static" }, "/review/wildsino_casino.txt": { type: "static" }, "/review/winawin_casino.txt": { type: "static" }, "/review/windetta_casino.txt": { type: "static" }, "/review/wingaga_casino.txt": { type: "static" }, "/review/winlegends_casino.txt": { type: "static" }, "/review/winmaker_casino.txt": { type: "static" }, "/review/winning_casino.txt": { type: "static" }, "/review/winsane_casino.txt": { type: "static" }, "/review/winscore_casino.txt": { type: "static" }, "/review/winshark_casino.txt": { type: "static" }, "/review/winspirit_casino.txt": { type: "static" }, "/review/winsroyal_casino.txt": { type: "static" }, "/review/winstoria_casino.txt": { type: "static" }, "/review/wintomato_casino.txt": { type: "static" }, "/review/winwin_casino.txt": { type: "static" }, "/review/wir_wetten_casino.txt": { type: "static" }, "/review/wish_casino.txt": { type: "static" }, "/review/wizebets_casino.txt": { type: "static" }, "/review/wolfy_casino.txt": { type: "static" }, "/review/wonaco_casino.txt": { type: "static" }, "/review/wsm_casino.txt": { type: "static" }, "/review/wunderwins_casino.txt": { type: "static" }, "/review/x7_casino.txt": { type: "static" }, "/review/yoju_casino.txt": { type: "static" }, "/review/zenbetting_casino.txt": { type: "static" }, "/review/zencasino.txt": { type: "static" }, "/review/zinkra_casino.txt": { type: "static" }, "/review/zipcasino.txt": { type: "static" }, "/review/zoome_casino.txt": { type: "static" }, "/review/zotabet_casino.txt": { type: "static" }, "/screenshots/1xslot_com_screenshot.webp": { type: "static" }, "/screenshots/20bet_com_screenshot.webp": { type: "static" }, "/screenshots/21bets_com_screenshot.webp": { type: "static" }, "/screenshots/22bet_com_screenshot.webp": { type: "static" }, "/screenshots/24slots_com_screenshot.webp": { type: "static" }, "/screenshots/4kasino_com_screenshot.webp": { type: "static" }, "/screenshots/500_casino_screenshot.webp": { type: "static" }, "/screenshots/7signs_com_screenshot.webp": { type: "static" }, "/screenshots/888starz_bet_screenshot.webp": { type: "static" }, "/screenshots/8xwins_com_screenshot.webp": { type: "static" }, "/screenshots/airbet_io_screenshot.webp": { type: "static" }, "/screenshots/alfcasino_com_screenshot.webp": { type: "static" }, "/screenshots/allspins_com_screenshot.webp": { type: "static" }, "/screenshots/amerio_bet_screenshot.webp": { type: "static" }, "/screenshots/anarchycasino_com_screenshot.webp": { type: "static" }, "/screenshots/aplaycasino_com_screenshot.webp": { type: "static" }, "/screenshots/aufcasino_com_screenshot.webp": { type: "static" }, "/screenshots/avocasino_com_screenshot.webp": { type: "static" }, "/screenshots/bankonbet_com_screenshot.webp": { type: "static" }, "/screenshots/bdmbet_com_screenshot.webp": { type: "static" }, "/screenshots/beastino_com_screenshot.webp": { type: "static" }, "/screenshots/betandyou_com_screenshot.webp": { type: "static" }, "/screenshots/beteum_com_screenshot.webp": { type: "static" }, "/screenshots/betflare_io_screenshot.webp": { type: "static" }, "/screenshots/betfree_com_screenshot.webp": { type: "static" }, "/screenshots/betify_com_screenshot.webp": { type: "static" }, "/screenshots/betonred_com_screenshot.webp": { type: "static" }, "/screenshots/betovix_com_screenshot.webp": { type: "static" }, "/screenshots/betsomnia_com_screenshot.webp": { type: "static" }, "/screenshots/betswap_gg_screenshot.webp": { type: "static" }, "/screenshots/betybet_com_screenshot.webp": { type: "static" }, "/screenshots/betzard_com_screenshot.webp": { type: "static" }, "/screenshots/billybets_com_screenshot.webp": { type: "static" }, "/screenshots/bizzocasino_com_screenshot.webp": { type: "static" }, "/screenshots/blitz-bet_com_screenshot.webp": { type: "static" }, "/screenshots/blueleo_com_screenshot.webp": { type: "static" }, "/screenshots/boaboa_com_screenshot.webp": { type: "static" }, "/screenshots/bombastic_com_screenshot.webp": { type: "static" }, "/screenshots/bongo_gg_screenshot.webp": { type: "static" }, "/screenshots/booi_com_screenshot.webp": { type: "static" }, "/screenshots/boomerang-casino_com_screenshot.webp": { type: "static" }, "/screenshots/boomerang_bet_screenshot.webp": { type: "static" }, "/screenshots/brazino777_com_screenshot.webp": { type: "static" }, "/screenshots/bruce_bet_screenshot.webp": { type: "static" }, "/screenshots/bullsbet_io_screenshot.webp": { type: "static" }, "/screenshots/burancasino_com_screenshot.webp": { type: "static" }, "/screenshots/cadoola_com_screenshot.webp": { type: "static" }, "/screenshots/casabet_io_screenshot.png": { type: "static" }, "/screenshots/casinado_com_screenshot.webp": { type: "static" }, "/screenshots/casino_n1bet_com_screenshot.webp": { type: "static" }, "/screenshots/casinobrango_com_screenshot.webp": { type: "static" }, "/screenshots/casinoin_io_screenshot.webp": { type: "static" }, "/screenshots/casinoinfinity_com_screenshot.webp": { type: "static" }, "/screenshots/casinoly_com_screenshot.webp": { type: "static" }, "/screenshots/casinova_com_screenshot.webp": { type: "static" }, "/screenshots/casinozer_com_screenshot.webp": { type: "static" }, "/screenshots/chipstars_bet_screenshot.webp": { type: "static" }, "/screenshots/coins_game_screenshot.webp": { type: "static" }, "/screenshots/conquestador_com_screenshot.webp": { type: "static" }, "/screenshots/coolzino_com_screenshot.webp": { type: "static" }, "/screenshots/cosmicslot_com_screenshot.webp": { type: "static" }, "/screenshots/crownslots_com_screenshot.webp": { type: "static" }, "/screenshots/cryptobosscasino_com_screenshot.webp": { type: "static" }, "/screenshots/cryptoleo_com_screenshot.webp": { type: "static" }, "/screenshots/cryptorush_com_screenshot.webp": { type: "static" }, "/screenshots/dailyspins_com_screenshot.webp": { type: "static" }, "/screenshots/dazardbet_com_screenshot.webp": { type: "static" }, "/screenshots/delorocasino_com_screenshot.webp": { type: "static" }, "/screenshots/divasluckcasino_com_screenshot.webp": { type: "static" }, "/screenshots/driftcasino_com_screenshot.webp": { type: "static" }, "/screenshots/drip_casino_screenshot.webp": { type: "static" }, "/screenshots/fan-sport_io_screenshot.webp": { type: "static" }, "/screenshots/fatpandacasino_com_screenshot.webp": { type: "static" }, "/screenshots/fatpirate_com_screenshot.webp": { type: "static" }, "/screenshots/felixspin_com_screenshot.webp": { type: "static" }, "/screenshots/fezbet_com_screenshot.webp": { type: "static" }, "/screenshots/flappycasino_com_screenshot.webp": { type: "static" }, "/screenshots/flush_com_screenshot.webp": { type: "static" }, "/screenshots/fortunejack_com_screenshot.webp": { type: "static" }, "/screenshots/fresh_casino_screenshot.webp": { type: "static" }, "/screenshots/fruits4real_com_screenshot.webp": { type: "static" }, "/screenshots/funbet_com_screenshot.webp": { type: "static" }, "/screenshots/gamblezen_com_screenshot.webp": { type: "static" }, "/screenshots/gamdom_com_screenshot.webp": { type: "static" }, "/screenshots/games_bitcoin_com_screenshot.webp": { type: "static" }, "/screenshots/gamix_vip_screenshot.webp": { type: "static" }, "/screenshots/gangsta_casino_screenshot.webp": { type: "static" }, "/screenshots/gem_bet_screenshot.webp": { type: "static" }, "/screenshots/geniejackpot_com_screenshot.webp": { type: "static" }, "/screenshots/gg_bet_screenshot.webp": { type: "static" }, "/screenshots/gizbo_casino_screenshot.webp": { type: "static" }, "/screenshots/goldenstar-casino_com_screenshot.webp": { type: "static" }, "/screenshots/gomblingo_com_screenshot.webp": { type: "static" }, "/screenshots/goralbet_com_screenshot.webp": { type: "static" }, "/screenshots/grandwin_com_screenshot.webp": { type: "static" }, "/screenshots/greatwin_com_screenshot.webp": { type: "static" }, "/screenshots/gxmble_com_screenshot.webp": { type: "static" }, "/screenshots/happyslots_com_screenshot.webp": { type: "static" }, "/screenshots/helabet_com_screenshot.webp": { type: "static" }, "/screenshots/hellspin_com_screenshot.webp": { type: "static" }, "/screenshots/hexabet_io_screenshot.webp": { type: "static" }, "/screenshots/hitnspin_com_screenshot.webp": { type: "static" }, "/screenshots/hotslots_io_screenshot.webp": { type: "static" }, "/screenshots/hugewin_com_screenshot.webp": { type: "static" }, "/screenshots/hugocasino_com_screenshot.webp": { type: "static" }, "/screenshots/icebet_casino_screenshot.webp": { type: "static" }, "/screenshots/immerion_com_screenshot.png": { type: "static" }, "/screenshots/ivibet_com_screenshot.webp": { type: "static" }, "/screenshots/iwildcasino_com_screenshot.webp": { type: "static" }, "/screenshots/izzicasino_com_screenshot.webp": { type: "static" }, "/screenshots/jackbit_com_screenshot.webp": { type: "static" }, "/screenshots/jacktop_com_screenshot.webp": { type: "static" }, "/screenshots/jet_casino_screenshot.webp": { type: "static" }, "/screenshots/jettbet_com_screenshot.webp": { type: "static" }, "/screenshots/joker8_com_screenshot.webp": { type: "static" }, "/screenshots/joya_casino_screenshot.webp": { type: "static" }, "/screenshots/joycasino_com_screenshot.webp": { type: "static" }, "/screenshots/jozz_com_screenshot.webp": { type: "static" }, "/screenshots/jupicasino_com_screenshot.webp": { type: "static" }, "/screenshots/jvspin_com_screenshot.webp": { type: "static" }, "/screenshots/kaulanacasino_com_screenshot.webp": { type: "static" }, "/screenshots/kinbet_com_screenshot.webp": { type: "static" }, "/screenshots/kingmaker_com_screenshot.webp": { type: "static" }, "/screenshots/kirgo_com_screenshot.webp": { type: "static" }, "/screenshots/legzo_casino_screenshot.webp": { type: "static" }, "/screenshots/lemon_casino_screenshot.webp": { type: "static" }, "/screenshots/leon_bet_screenshot.webp": { type: "static" }, "/screenshots/lex_casino_screenshot.webp": { type: "static" }, "/screenshots/luckychoo_com_screenshot.webp": { type: "static" }, "/screenshots/luckycircus_com_screenshot.webp": { type: "static" }, "/screenshots/luckyhour_com_screenshot.webp": { type: "static" }, "/screenshots/luckykoala_com_screenshot.webp": { type: "static" }, "/screenshots/luckykong_com_screenshot.webp": { type: "static" }, "/screenshots/lucyscasino_com_screenshot.webp": { type: "static" }, "/screenshots/lunubet_com_screenshot.webp": { type: "static" }, "/screenshots/malinacasino_com_screenshot.webp": { type: "static" }, "/screenshots/megapari_com_screenshot.webp": { type: "static" }, "/screenshots/megarich_com_screenshot.webp": { type: "static" }, "/screenshots/metaspins_com_screenshot.webp": { type: "static" }, "/screenshots/monixbet_com_screenshot.webp": { type: "static" }, "/screenshots/monro_casino_screenshot.webp": { type: "static" }, "/screenshots/mrpacho_com_screenshot.webp": { type: "static" }, "/screenshots/mystake_com_screenshot.webp": { type: "static" }, "/screenshots/nalucasino_io_screenshot.webp": { type: "static" }, "/screenshots/nationalcasino_com_screenshot.webp": { type: "static" }, "/screenshots/needforspin_com_screenshot.webp": { type: "static" }, "/screenshots/neon54_com_screenshot.webp": { type: "static" }, "/screenshots/ninlay_com_screenshot.webp": { type: "static" }, "/screenshots/niyvi_com_screenshot.png": { type: "static" }, "/screenshots/nummus_casino_screenshot.webp": { type: "static" }, "/screenshots/ohmyspins_com_screenshot.webp": { type: "static" }, "/screenshots/ohmyzino_com_screenshot.webp": { type: "static" }, "/screenshots/olympusbet_com_screenshot.webp": { type: "static" }, "/screenshots/onedun_com_screenshot.webp": { type: "static" }, "/screenshots/oshcasino_com_screenshot.webp": { type: "static" }, "/screenshots/oshi_io_screenshot.webp": { type: "static" }, "/screenshots/palmslots_com_screenshot.webp": { type: "static" }, "/screenshots/pan-casino_com_screenshot.webp": { type: "static" }, "/screenshots/piratespot_com_screenshot.webp": { type: "static" }, "/screenshots/plangames_com_screenshot.webp": { type: "static" }, "/screenshots/playfortuna_com_screenshot.webp": { type: "static" }, "/screenshots/playio_com_screenshot.webp": { type: "static" }, "/screenshots/playmoola_com_screenshot.webp": { type: "static" }, "/screenshots/pledoo_com_screenshot.webp": { type: "static" }, "/screenshots/powbet_com_screenshot.webp": { type: "static" }, "/screenshots/powerupcasino_com_screenshot.webp": { type: "static" }, "/screenshots/primebetz_com_screenshot.webp": { type: "static" }, "/screenshots/rakebit_com_screenshot.webp": { type: "static" }, "/screenshots/rakoocasino_com_screenshot.webp": { type: "static" }, "/screenshots/riobet_com_screenshot.webp": { type: "static" }, "/screenshots/ritzo_com_screenshot.webp": { type: "static" }, "/screenshots/rizzcasino_com_screenshot.webp": { type: "static" }, "/screenshots/robocat_com_screenshot.webp": { type: "static" }, "/screenshots/rocketplay_com_screenshot.webp": { type: "static" }, "/screenshots/rockwin_io_screenshot.webp": { type: "static" }, "/screenshots/rolletto_com_screenshot.webp": { type: "static" }, "/screenshots/rollingslots_com_screenshot.webp": { type: "static" }, "/screenshots/rollino_co_screenshot.webp": { type: "static" }, "/screenshots/sapphirebet_com_screenshot.webp": { type: "static" }, "/screenshots/shambalacasino_com_screenshot.webp": { type: "static" }, "/screenshots/shangrila_com_screenshot.webp": { type: "static" }, "/screenshots/sherbet_com_screenshot.webp": { type: "static" }, "/screenshots/silverplay_com_screenshot.webp": { type: "static" }, "/screenshots/sirwin_com_screenshot.webp": { type: "static" }, "/screenshots/slota_casino_screenshot.webp": { type: "static" }, "/screenshots/sloterra_com_screenshot.webp": { type: "static" }, "/screenshots/slotexo_com_screenshot.webp": { type: "static" }, "/screenshots/slotscity_com_screenshot.webp": { type: "static" }, "/screenshots/slotsgallery_com_screenshot.webp": { type: "static" }, "/screenshots/slotspalace_com_screenshot.webp": { type: "static" }, "/screenshots/slottica_com_screenshot.webp": { type: "static" }, "/screenshots/slottojam_com_screenshot.webp": { type: "static" }, "/screenshots/slottyway_com_screenshot.webp": { type: "static" }, "/screenshots/slotuna_com_screenshot.webp": { type: "static" }, "/screenshots/smokace_com_screenshot.webp": { type: "static" }, "/screenshots/snatchcasino_com_screenshot.webp": { type: "static" }, "/screenshots/sol_casino_screenshot.webp": { type: "static" }, "/screenshots/solisbet_com_screenshot.webp": { type: "static" }, "/screenshots/sombrerospins_io_screenshot.webp": { type: "static" }, "/screenshots/spellwin_com_screenshot.webp": { type: "static" }, "/screenshots/spinarium_com_screenshot.webp": { type: "static" }, "/screenshots/spinaway_com_screenshot.webp": { type: "static" }, "/screenshots/spinbetter_com_screenshot.webp": { type: "static" }, "/screenshots/spinight_com_screenshot.webp": { type: "static" }, "/screenshots/spinline_com_screenshot.webp": { type: "static" }, "/screenshots/spinnalot_com_screenshot.webp": { type: "static" }, "/screenshots/spinrollz_com_screenshot.webp": { type: "static" }, "/screenshots/spinsbro_com_screenshot.webp": { type: "static" }, "/screenshots/spinsy_com_screenshot.webp": { type: "static" }, "/screenshots/spinybet_com_screenshot.webp": { type: "static" }, "/screenshots/sportaza_com_screenshot.webp": { type: "static" }, "/screenshots/sportuna_com_screenshot.webp": { type: "static" }, "/screenshots/starda_casino_screenshot.webp": { type: "static" }, "/screenshots/staxino_com_screenshot.webp": { type: "static" }, "/screenshots/stelario_com_screenshot.webp": { type: "static" }, "/screenshots/sunplay_casino_screenshot.webp": { type: "static" }, "/screenshots/superboss_com_screenshot.webp": { type: "static" }, "/screenshots/syndicatecasino_club_screenshot.webp": { type: "static" }, "/screenshots/theclubhousecasino_com_screenshot.webp": { type: "static" }, "/screenshots/theluckycrypto_com_screenshot.webp": { type: "static" }, "/screenshots/thunderpick_io_screenshot.webp": { type: "static" }, "/screenshots/tikicasino_com_screenshot.webp": { type: "static" }, "/screenshots/tikitaka_com_screenshot.webp": { type: "static" }, "/screenshots/tiktakbet_com_screenshot.webp": { type: "static" }, "/screenshots/tivitbet_app_screenshot.webp": { type: "static" }, "/screenshots/tombriches_com_screenshot.webp": { type: "static" }, "/screenshots/tonybet_com_screenshot.webp": { type: "static" }, "/screenshots/treasurespins_com_screenshot.webp": { type: "static" }, "/screenshots/trinocasino_com_screenshot.webp": { type: "static" }, "/screenshots/trip2vip_com_screenshot.webp": { type: "static" }, "/screenshots/trustdice_win_screenshot.webp": { type: "static" }, "/screenshots/twin_com_screenshot.webp": { type: "static" }, "/screenshots/unlimcasino_com_screenshot.webp": { type: "static" }, "/screenshots/vave_com_screenshot.webp": { type: "static" }, "/screenshots/vegasino_com_screenshot.webp": { type: "static" }, "/screenshots/velobet_com_screenshot.webp": { type: "static" }, "/screenshots/vinylcasino_com_screenshot.webp": { type: "static" }, "/screenshots/viperwin_com_screenshot.webp": { type: "static" }, "/screenshots/voltslot_com_screenshot.webp": { type: "static" }, "/screenshots/wazamba_com_screenshot.webp": { type: "static" }, "/screenshots/weiss_bet_screenshot.webp": { type: "static" }, "/screenshots/whamoo_com_screenshot.webp": { type: "static" }, "/screenshots/wildsino_com_screenshot.webp": { type: "static" }, "/screenshots/wildtokyo_com_screenshot.webp": { type: "static" }, "/screenshots/windetta_com_screenshot.webp": { type: "static" }, "/screenshots/wingaga_com_screenshot.webp": { type: "static" }, "/screenshots/winlegends_com_screenshot.webp": { type: "static" }, "/screenshots/winscore_com_screenshot.webp": { type: "static" }, "/screenshots/winshark_com_screenshot.webp": { type: "static" }, "/screenshots/winspirit_com_screenshot.webp": { type: "static" }, "/screenshots/winsroyal_com_screenshot.webp": { type: "static" }, "/screenshots/winstoria_com_screenshot.webp": { type: "static" }, "/screenshots/wintomato_com_screenshot.webp": { type: "static" }, "/screenshots/winwin_bet_screenshot.webp": { type: "static" }, "/screenshots/wizebets_com_screenshot.webp": { type: "static" }, "/screenshots/wonaco_com_screenshot.webp": { type: "static" }, "/screenshots/wunderwins_com_screenshot.webp": { type: "static" }, "/screenshots/www_11croco_com_screenshot.webp": { type: "static" }, "/screenshots/www_21bit_com_screenshot.webp": { type: "static" }, "/screenshots/www_30bet_com_screenshot.webp": { type: "static" }, "/screenshots/www_321cryptocasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_55bet_com_screenshot.webp": { type: "static" }, "/screenshots/www_allstarzcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_arcanebet_com_screenshot.webp": { type: "static" }, "/screenshots/www_artcasino_io_screenshot.webp": { type: "static" }, "/screenshots/www_asino_com_screenshot.webp": { type: "static" }, "/screenshots/www_axecasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_bet-nox_com_screenshot.webp": { type: "static" }, "/screenshots/www_betandplay_com_screenshot.webp": { type: "static" }, "/screenshots/www_betcasinogames_com_screenshot.webp": { type: "static" }, "/screenshots/www_betchain_com_screenshot.webp": { type: "static" }, "/screenshots/www_betcoin_ag_screenshot.webp": { type: "static" }, "/screenshots/www_betfinal_com_screenshot.webp": { type: "static" }, "/screenshots/www_betifyme_com_screenshot.webp": { type: "static" }, "/screenshots/www_betmartini_com_screenshot.webp": { type: "static" }, "/screenshots/www_betovo_com_screenshot.webp": { type: "static" }, "/screenshots/www_betroom24_com_screenshot.webp": { type: "static" }, "/screenshots/www_betrunner_com_screenshot.webp": { type: "static" }, "/screenshots/www_betsofa_com_screenshot.webp": { type: "static" }, "/screenshots/www_betssen_com_screenshot.webp": { type: "static" }, "/screenshots/www_betti_com_screenshot.webp": { type: "static" }, "/screenshots/www_betzino_com_screenshot.webp": { type: "static" }, "/screenshots/www_billybillion_com_screenshot.webp": { type: "static" }, "/screenshots/www_bingocafe_com_screenshot.webp": { type: "static" }, "/screenshots/www_bitcoincasino_io_screenshot.webp": { type: "static" }, "/screenshots/www_bitkingz_com_screenshot.webp": { type: "static" }, "/screenshots/www_bitsler_com_screenshot.webp": { type: "static" }, "/screenshots/www_bk8win8_com_screenshot.webp": { type: "static" }, "/screenshots/www_blacklioncasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_bohocasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_bonanzino_com_screenshot.webp": { type: "static" }, "/screenshots/www_bullcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_buumi_com_screenshot.webp": { type: "static" }, "/screenshots/www_caibo_fun_screenshot.webp": { type: "static" }, "/screenshots/www_cashwin_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinobello_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinobet_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinofriday_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinojax_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinomustang_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinonic_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinoorca_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinorocket_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinosecret_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinostriker_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinotogether_com_screenshot.webp": { type: "static" }, "/screenshots/www_casinovibes_com_screenshot.webp": { type: "static" }, "/screenshots/www_casiny_com_screenshot.webp": { type: "static" }, "/screenshots/www_casoo_com_screenshot.webp": { type: "static" }, "/screenshots/www_cleopatracasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_clubriches_com_screenshot.webp": { type: "static" }, "/screenshots/www_cobracasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_cosmobet_com_screenshot.webp": { type: "static" }, "/screenshots/www_cosmoswin_com_screenshot.webp": { type: "static" }, "/screenshots/www_crashino_com_screenshot.webp": { type: "static" }, "/screenshots/www_crocoslots_com_screenshot.webp": { type: "static" }, "/screenshots/www_crusino_com_screenshot.webp": { type: "static" }, "/screenshots/www_cryptowild_com_screenshot.webp": { type: "static" }, "/screenshots/www_dedprz_com_screenshot.webp": { type: "static" }, "/screenshots/www_emucasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_epicbet_com_screenshot.webp": { type: "static" }, "/screenshots/www_flukyone_com_screenshot.webp": { type: "static" }, "/screenshots/www_fortunepanda_com_screenshot.webp": { type: "static" }, "/screenshots/www_gate777_com_screenshot.webp": { type: "static" }, "/screenshots/www_godbunny_com_screenshot.webp": { type: "static" }, "/screenshots/www_goldencrowncasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_goldenpanda_com_screenshot.webp": { type: "static" }, "/screenshots/www_gospin_io_screenshot.webp": { type: "static" }, "/screenshots/www_greatspin_com_screenshot.webp": { type: "static" }, "/screenshots/www_gunsbet_com_screenshot.webp": { type: "static" }, "/screenshots/www_happyhugocasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_happyspins_com_screenshot.webp": { type: "static" }, "/screenshots/www_hazcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_heatscasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_horuscasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_impressariocasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_jackpoty_com_screenshot.webp": { type: "static" }, "/screenshots/www_jeetcity_com_screenshot.webp": { type: "static" }, "/screenshots/www_johnvegascasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_joocasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_justcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_katsubet_com_screenshot.webp": { type: "static" }, "/screenshots/www_kikobet_com_screenshot.webp": { type: "static" }, "/screenshots/www_kingamo_com_screenshot.webp": { type: "static" }, "/screenshots/www_kingdomcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_kingswin_com_screenshot.webp": { type: "static" }, "/screenshots/www_koicasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_kripty_com_screenshot.webp": { type: "static" }, "/screenshots/www_kryptosino_com_screenshot.webp": { type: "static" }, "/screenshots/www_lamabet_com_screenshot.webp": { type: "static" }, "/screenshots/www_letslucky_com_screenshot.webp": { type: "static" }, "/screenshots/www_librabet_com_screenshot.webp": { type: "static" }, "/screenshots/www_lilibet_com_screenshot.webp": { type: "static" }, "/screenshots/www_lokicasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_lucky7even_com_screenshot.webp": { type: "static" }, "/screenshots/www_luckybay_io_screenshot.webp": { type: "static" }, "/screenshots/www_luckyhunter_com_screenshot.webp": { type: "static" }, "/screenshots/www_luckyones_com_screenshot.webp": { type: "static" }, "/screenshots/www_luckyreels_io_screenshot.webp": { type: "static" }, "/screenshots/www_luckystar_io_screenshot.webp": { type: "static" }, "/screenshots/www_luckystart_com_screenshot.webp": { type: "static" }, "/screenshots/www_luckyvibe_com_screenshot.webp": { type: "static" }, "/screenshots/www_luckywhalecasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_luckywins_com_screenshot.webp": { type: "static" }, "/screenshots/www_lukki_com_screenshot.webp": { type: "static" }, "/screenshots/www_lyracasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_mangacasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_marsbet_com_screenshot.webp": { type: "static" }, "/screenshots/www_mbitcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_megadice_com_screenshot.webp": { type: "static" }, "/screenshots/www_merlincasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_moicasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_mondcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_moonwin_com_screenshot.webp": { type: "static" }, "/screenshots/www_mrbit_com_screenshot.webp": { type: "static" }, "/screenshots/www_neospin_com_screenshot.webp": { type: "static" }, "/screenshots/www_nolimitbet_com_screenshot.webp": { type: "static" }, "/screenshots/www_norgesspill_com_screenshot.webp": { type: "static" }, "/screenshots/www_nuggetslots_com_screenshot.webp": { type: "static" }, "/screenshots/www_olympia_casino_screenshot.webp": { type: "static" }, "/screenshots/www_omnislots_com_screenshot.webp": { type: "static" }, "/screenshots/www_onluck_com_screenshot.webp": { type: "static" }, "/screenshots/www_pin-up_world_screenshot.webp": { type: "static" }, "/screenshots/www_pinnacle_com_screenshot.webp": { type: "static" }, "/screenshots/www_playfina_com_screenshot.webp": { type: "static" }, "/screenshots/www_playmojo_com_screenshot.webp": { type: "static" }, "/screenshots/www_playouwin_com_screenshot.webp": { type: "static" }, "/screenshots/www_powerbet777_com_screenshot.webp": { type: "static" }, "/screenshots/www_prontobet_com_screenshot.webp": { type: "static" }, "/screenshots/www_pumacasino_io_screenshot.webp": { type: "static" }, "/screenshots/www_punterz_com_screenshot.webp": { type: "static" }, "/screenshots/www_queenspins_com_screenshot.webp": { type: "static" }, "/screenshots/www_quickslot_com_screenshot.webp": { type: "static" }, "/screenshots/www_readycasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_reddice_com_screenshot.webp": { type: "static" }, "/screenshots/www_reelcrypto_com_screenshot.webp": { type: "static" }, "/screenshots/www_reloadbet_com_screenshot.webp": { type: "static" }, "/screenshots/www_retrobet_com_screenshot.webp": { type: "static" }, "/screenshots/www_richardcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_rickycasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_rivieracasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_rocketwin_io_screenshot.webp": { type: "static" }, "/screenshots/www_rollxo_com_screenshot.webp": { type: "static" }, "/screenshots/www_rooli_com_screenshot.webp": { type: "static" }, "/screenshots/www_rooster_bet_screenshot.webp": { type: "static" }, "/screenshots/www_royalstarscasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_royspins_com_screenshot.webp": { type: "static" }, "/screenshots/www_run4win_com_screenshot.webp": { type: "static" }, "/screenshots/www_shotz_com_screenshot.webp": { type: "static" }, "/screenshots/www_skycrown_com_screenshot.webp": { type: "static" }, "/screenshots/www_slotbox_com_screenshot.webp": { type: "static" }, "/screenshots/www_slotit_com_screenshot.webp": { type: "static" }, "/screenshots/www_slotlords_com_screenshot.webp": { type: "static" }, "/screenshots/www_slotman_com_screenshot.webp": { type: "static" }, "/screenshots/www_slotozen_com_screenshot.webp": { type: "static" }, "/screenshots/www_slotparadise_com_screenshot.webp": { type: "static" }, "/screenshots/www_slotum_com_screenshot.webp": { type: "static" }, "/screenshots/www_slotvibe_com_screenshot.webp": { type: "static" }, "/screenshots/www_spadesqueen_com_screenshot.webp": { type: "static" }, "/screenshots/www_spinbet_com_screenshot.webp": { type: "static" }, "/screenshots/www_spinbit_com_screenshot.webp": { type: "static" }, "/screenshots/www_spinch_com_screenshot.webp": { type: "static" }, "/screenshots/www_spinfever_com_screenshot.webp": { type: "static" }, "/screenshots/www_spinjo_com_screenshot.webp": { type: "static" }, "/screenshots/www_spinsamurai_com_screenshot.webp": { type: "static" }, "/screenshots/www_spinspace_io_screenshot.webp": { type: "static" }, "/screenshots/www_spinsup_com_screenshot.webp": { type: "static" }, "/screenshots/www_stakeprix_com_screenshot.webp": { type: "static" }, "/screenshots/www_staycasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_stupidcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_sultanbet_com_screenshot.webp": { type: "static" }, "/screenshots/www_thorcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_tornadobet_com_screenshot.webp": { type: "static" }, "/screenshots/www_tripscasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_trivelabet_com_screenshot.webp": { type: "static" }, "/screenshots/www_tsars_com_screenshot.webp": { type: "static" }, "/screenshots/www_vasycasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_vavada_com_screenshot.webp": { type: "static" }, "/screenshots/www_vegasnow_com_screenshot.webp": { type: "static" }, "/screenshots/www_vegazcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_voodoo_casino_screenshot.webp": { type: "static" }, "/screenshots/www_wantedwin_com_screenshot.webp": { type: "static" }, "/screenshots/www_wazbee_casino_screenshot.webp": { type: "static" }, "/screenshots/www_welle_casino_screenshot.webp": { type: "static" }, "/screenshots/www_wildtornado_casino_screenshot.webp": { type: "static" }, "/screenshots/www_winawin_com_screenshot.webp": { type: "static" }, "/screenshots/www_winning_io_screenshot.webp": { type: "static" }, "/screenshots/www_wirwetten_com_screenshot.webp": { type: "static" }, "/screenshots/www_wishcasino_io_screenshot.webp": { type: "static" }, "/screenshots/www_wolfycasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_wsmcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_zenbetting_com_screenshot.webp": { type: "static" }, "/screenshots/www_zencasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_zipcasino_com_screenshot.webp": { type: "static" }, "/screenshots/www_zotabet_com_screenshot.webp": { type: "static" }, "/screenshots/x7casino_com_screenshot.webp": { type: "static" }, "/screenshots/yoju_casino_screenshot.webp": { type: "static" }, "/screenshots/zinkra_com_screenshot.webp": { type: "static" }, "/screenshots/zoome_casino_screenshot.webp": { type: "static" }, "/vercel.svg": { type: "static" }, "/window.svg": { type: "static" }, "/api/rebuild": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/rebuild.func.js" }, "/api/rebuild.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/rebuild.func.js" }, "/crypto-casinos/[slug]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/crypto-casinos/[slug].func.js" }, "/crypto-casinos/[slug].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/crypto-casinos/[slug].func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/__next_data_catchall": { type: "override", path: "/__next_data_catchall.json", headers: { "content-type": "application/json" } }, "/admin.html": { type: "override", path: "/admin.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/admin/layout,_N_T_/admin/page,_N_T_/admin", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/admin": { type: "override", path: "/admin.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/admin/layout,_N_T_/admin/page,_N_T_/admin", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/admin.rsc": { type: "override", path: "/admin.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/admin/layout,_N_T_/admin/page,_N_T_/admin", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url", "content-type": "text/x-component" } }, "/all-casinos.html": { type: "override", path: "/all-casinos.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/all-casinos/layout,_N_T_/all-casinos/page,_N_T_/all-casinos", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/all-casinos": { type: "override", path: "/all-casinos.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/all-casinos/layout,_N_T_/all-casinos/page,_N_T_/all-casinos", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/all-casinos.rsc": { type: "override", path: "/all-casinos.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/all-casinos/layout,_N_T_/all-casinos/page,_N_T_/all-casinos", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url", "content-type": "text/x-component" } }, "/favicon.ico": { type: "override", path: "/favicon.ico", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/how-bonuses-work.html": { type: "override", path: "/how-bonuses-work.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/how-bonuses-work/layout,_N_T_/how-bonuses-work/page,_N_T_/how-bonuses-work", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/how-bonuses-work": { type: "override", path: "/how-bonuses-work.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/how-bonuses-work/layout,_N_T_/how-bonuses-work/page,_N_T_/how-bonuses-work", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/how-bonuses-work.rsc": { type: "override", path: "/how-bonuses-work.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/how-bonuses-work/layout,_N_T_/how-bonuses-work/page,_N_T_/how-bonuses-work", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url", "content-type": "text/x-component" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url", "content-type": "text/x-component" } }, "src/middleware": { type: "middleware", entrypoint: "__next-on-pages-dist__/functions/src/middleware.func.js" } };
});
var V = A((Bt, H) => {
  "use strict";
  r();
  y();
  _();
  function d(t, s) {
    t = String(t || "").trim();
    let i = t, e, a = "";
    if (/^[^a-zA-Z\\\s]/.test(t)) {
      e = t[0];
      let n = t.lastIndexOf(e);
      a += t.substring(n + 1), t = t.substring(1, n);
    }
    let c = 0;
    return t = yt(t, (n) => {
      if (/^\(\?[P<']/.test(n)) {
        let p = /^\(\?P?[<']([^>']+)[>']/.exec(n);
        if (!p)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(n)}`);
        let w = n.substring(p[0].length, n.length - 1);
        return s && (s[c] = p[1]), c++, `(${w})`;
      }
      return n.substring(0, 3) === "(?:" || c++, n;
    }), t = t.replace(/\[:([^:]+):\]/g, (n, p) => d.characterClasses[p] || n), new d.PCRE(t, a, i, a, e);
  }
  __name(d, "d");
  __name2(d, "d");
  function yt(t, s) {
    let i = 0, e = 0, a = false;
    for (let o = 0; o < t.length; o++) {
      let c = t[o];
      if (a) {
        a = false;
        continue;
      }
      switch (c) {
        case "(":
          e === 0 && (i = o), e++;
          break;
        case ")":
          if (e > 0 && (e--, e === 0)) {
            let n = o + 1, p = i === 0 ? "" : t.substring(0, i), w = t.substring(n), l = String(s(t.substring(i, n)));
            t = p + l + w, o = i;
          }
          break;
        case "\\":
          a = true;
          break;
        default:
          break;
      }
    }
    return t;
  }
  __name(yt, "yt");
  __name2(yt, "yt");
  (function(t) {
    class s extends RegExp {
      constructor(e, a, o, c, n) {
        super(e, a), this.pcrePattern = o, this.pcreFlags = c, this.delimiter = n;
      }
    }
    __name(s, "s");
    __name2(s, "s");
    t.PCRE = s, t.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(d || (d = {}));
  d.prototype = d.PCRE.prototype;
  H.exports = d;
});
var Z = A((U) => {
  "use strict";
  r();
  y();
  _();
  U.parse = ft;
  U.serialize = kt;
  var vt = Object.prototype.toString, S = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function ft(t, s) {
    if (typeof t != "string")
      throw new TypeError("argument str must be a string");
    for (var i = {}, e = s || {}, a = e.decode || zt, o = 0; o < t.length; ) {
      var c = t.indexOf("=", o);
      if (c === -1)
        break;
      var n = t.indexOf(";", o);
      if (n === -1)
        n = t.length;
      else if (n < c) {
        o = t.lastIndexOf(";", c - 1) + 1;
        continue;
      }
      var p = t.slice(o, c).trim();
      if (i[p] === void 0) {
        var w = t.slice(c + 1, n).trim();
        w.charCodeAt(0) === 34 && (w = w.slice(1, -1)), i[p] = Pt(w, a);
      }
      o = n + 1;
    }
    return i;
  }
  __name(ft, "ft");
  __name2(ft, "ft");
  function kt(t, s, i) {
    var e = i || {}, a = e.encode || Rt;
    if (typeof a != "function")
      throw new TypeError("option encode is invalid");
    if (!S.test(t))
      throw new TypeError("argument name is invalid");
    var o = a(s);
    if (o && !S.test(o))
      throw new TypeError("argument val is invalid");
    var c = t + "=" + o;
    if (e.maxAge != null) {
      var n = e.maxAge - 0;
      if (isNaN(n) || !isFinite(n))
        throw new TypeError("option maxAge is invalid");
      c += "; Max-Age=" + Math.floor(n);
    }
    if (e.domain) {
      if (!S.test(e.domain))
        throw new TypeError("option domain is invalid");
      c += "; Domain=" + e.domain;
    }
    if (e.path) {
      if (!S.test(e.path))
        throw new TypeError("option path is invalid");
      c += "; Path=" + e.path;
    }
    if (e.expires) {
      var p = e.expires;
      if (!jt(p) || isNaN(p.valueOf()))
        throw new TypeError("option expires is invalid");
      c += "; Expires=" + p.toUTCString();
    }
    if (e.httpOnly && (c += "; HttpOnly"), e.secure && (c += "; Secure"), e.priority) {
      var w = typeof e.priority == "string" ? e.priority.toLowerCase() : e.priority;
      switch (w) {
        case "low":
          c += "; Priority=Low";
          break;
        case "medium":
          c += "; Priority=Medium";
          break;
        case "high":
          c += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (e.sameSite) {
      var l = typeof e.sameSite == "string" ? e.sameSite.toLowerCase() : e.sameSite;
      switch (l) {
        case true:
          c += "; SameSite=Strict";
          break;
        case "lax":
          c += "; SameSite=Lax";
          break;
        case "strict":
          c += "; SameSite=Strict";
          break;
        case "none":
          c += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return c;
  }
  __name(kt, "kt");
  __name2(kt, "kt");
  function zt(t) {
    return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
  }
  __name(zt, "zt");
  __name2(zt, "zt");
  function Rt(t) {
    return encodeURIComponent(t);
  }
  __name(Rt, "Rt");
  __name2(Rt, "Rt");
  function jt(t) {
    return vt.call(t) === "[object Date]" || t instanceof Date;
  }
  __name(jt, "jt");
  __name2(jt, "jt");
  function Pt(t, s) {
    try {
      return s(t);
    } catch {
      return t;
    }
  }
  __name(Pt, "Pt");
  __name2(Pt, "Pt");
});
r();
y();
_();
r();
y();
_();
r();
y();
_();
var f = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
r();
y();
_();
r();
y();
_();
r();
y();
_();
r();
y();
_();
var $ = O(V());
function j(t, s, i) {
  if (s == null)
    return { match: null, captureGroupKeys: [] };
  let e = i ? "" : "i", a = [];
  return { match: (0, $.default)(`%${t}%${e}`, a).exec(s), captureGroupKeys: a };
}
__name(j, "j");
__name2(j, "j");
function k(t, s, i, { namedOnly: e } = {}) {
  return t.replace(/\$([a-zA-Z0-9_]+)/g, (a, o) => {
    let c = i.indexOf(o);
    return e && c === -1 ? a : (c === -1 ? s[parseInt(o, 10)] : s[c + 1]) || "";
  });
}
__name(k, "k");
__name2(k, "k");
function E(t, { url: s, cookies: i, headers: e, routeDest: a }) {
  switch (t.type) {
    case "host":
      return { valid: s.hostname === t.value };
    case "header":
      return t.value !== void 0 ? C(t.value, e.get(t.key), a) : { valid: e.has(t.key) };
    case "cookie": {
      let o = i[t.key];
      return o && t.value !== void 0 ? C(t.value, o, a) : { valid: o !== void 0 };
    }
    case "query":
      return t.value !== void 0 ? C(t.value, s.searchParams.get(t.key), a) : { valid: s.searchParams.has(t.key) };
  }
}
__name(E, "E");
__name2(E, "E");
function C(t, s, i) {
  let { match: e, captureGroupKeys: a } = j(t, s);
  return i && e && a.length ? { valid: !!e, newRouteDest: k(i, e, a, { namedOnly: true }) } : { valid: !!e };
}
__name(C, "C");
__name2(C, "C");
r();
y();
_();
function F(t) {
  let s = new Headers(t.headers);
  return t.cf && (s.set("x-vercel-ip-city", encodeURIComponent(t.cf.city)), s.set("x-vercel-ip-country", t.cf.country), s.set("x-vercel-ip-country-region", t.cf.regionCode), s.set("x-vercel-ip-latitude", t.cf.latitude), s.set("x-vercel-ip-longitude", t.cf.longitude)), s.set("x-vercel-sc-host", f), new Request(t, { headers: s });
}
__name(F, "F");
__name2(F, "F");
r();
y();
_();
function u(t, s, i) {
  let e = s instanceof Headers ? s.entries() : Object.entries(s);
  for (let [a, o] of e) {
    let c = a.toLowerCase(), n = i?.match ? k(o, i.match, i.captureGroupKeys) : o;
    c === "set-cookie" ? t.append(c, n) : t.set(c, n);
  }
}
__name(u, "u");
__name2(u, "u");
function z(t) {
  return /^https?:\/\//.test(t);
}
__name(z, "z");
__name2(z, "z");
function m(t, s) {
  for (let [i, e] of s.entries()) {
    let a = /^nxtP(.+)$/.exec(i), o = /^nxtI(.+)$/.exec(i);
    a?.[1] ? (t.set(i, e), t.set(a[1], e)) : o?.[1] ? t.set(o[1], e.replace(/(\(\.+\))+/, "")) : (!t.has(i) || !!e && !t.getAll(i).includes(e)) && t.append(i, e);
  }
}
__name(m, "m");
__name2(m, "m");
function M(t, s) {
  let i = new URL(s, t.url);
  return m(i.searchParams, new URL(t.url).searchParams), i.pathname = i.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(i, t);
}
__name(M, "M");
__name2(M, "M");
function R(t) {
  return new Response(t.body, t);
}
__name(R, "R");
__name2(R, "R");
function I(t) {
  return t.split(",").map((s) => {
    let [i, e] = s.split(";"), a = parseFloat((e ?? "q=1").replace(/q *= */gi, ""));
    return [i.trim(), isNaN(a) ? 1 : a];
  }).sort((s, i) => i[1] - s[1]).map(([s]) => s === "*" || s === "" ? [] : s).flat();
}
__name(I, "I");
__name2(I, "I");
r();
y();
_();
function q(t) {
  switch (t) {
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
__name(q, "q");
__name2(q, "q");
async function P(t, { request: s, assetsFetcher: i, ctx: e }, { path: a, searchParams: o }) {
  let c, n = new URL(s.url);
  m(n.searchParams, o);
  let p = new Request(n, s);
  try {
    switch (t?.type) {
      case "function":
      case "middleware": {
        let w = await import(t.entrypoint);
        try {
          c = await w.default(p, e);
        } catch (l) {
          let x = l;
          throw x.name === "TypeError" && x.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${t.entrypoint})`) : l;
        }
        break;
      }
      case "override": {
        c = R(await i.fetch(M(p, t.path ?? a))), t.headers && u(c.headers, t.headers);
        break;
      }
      case "static": {
        c = await i.fetch(M(p, a));
        break;
      }
      default:
        c = new Response("Not Found", { status: 404 });
    }
  } catch (w) {
    return console.error(w), new Response("Internal Server Error", { status: 500 });
  }
  return R(c);
}
__name(P, "P");
__name2(P, "P");
function D(t, s) {
  let i = "^//?(?:", e = ")/(.*)$";
  return !t.startsWith(i) || !t.endsWith(e) ? false : t.slice(i.length, -e.length).split("|").every((o) => s.has(o));
}
__name(D, "D");
__name2(D, "D");
r();
y();
_();
function _t(t, { protocol: s, hostname: i, port: e, pathname: a }) {
  return !(s && t.protocol.replace(/:$/, "") !== s || !new RegExp(i).test(t.hostname) || e && !new RegExp(e).test(t.port) || a && !new RegExp(a).test(t.pathname));
}
__name(_t, "_t");
__name2(_t, "_t");
function wt(t, s) {
  if (t.method !== "GET")
    return;
  let { origin: i, searchParams: e } = new URL(t.url), a = e.get("url"), o = Number.parseInt(e.get("w") ?? "", 10), c = Number.parseInt(e.get("q") ?? "75", 10);
  if (!a || Number.isNaN(o) || Number.isNaN(c) || !s?.sizes?.includes(o) || c < 0 || c > 100)
    return;
  let n = new URL(a, i);
  if (n.pathname.endsWith(".svg") && !s?.dangerouslyAllowSVG)
    return;
  let p = a.startsWith("//"), w = a.startsWith("/") && !p;
  if (!w && !s?.domains?.includes(n.hostname) && !s?.remotePatterns?.find((v) => _t(n, v)))
    return;
  let l = t.headers.get("Accept") ?? "", x = s?.formats?.find((v) => l.includes(v))?.replace("image/", "");
  return { isRelative: w, imageUrl: n, options: { width: o, quality: c, format: x } };
}
__name(wt, "wt");
__name2(wt, "wt");
function lt(t, s, i) {
  let e = new Headers();
  if (i?.contentSecurityPolicy && e.set("Content-Security-Policy", i.contentSecurityPolicy), i?.contentDispositionType) {
    let o = s.pathname.split("/").pop(), c = o ? `${i.contentDispositionType}; filename="${o}"` : i.contentDispositionType;
    e.set("Content-Disposition", c);
  }
  t.headers.has("Cache-Control") || e.set("Cache-Control", `public, max-age=${i?.minimumCacheTTL ?? 60}`);
  let a = R(t);
  return u(a.headers, e), a;
}
__name(lt, "lt");
__name2(lt, "lt");
async function B(t, { buildOutput: s, assetsFetcher: i, imagesConfig: e }) {
  let a = wt(t, e);
  if (!a)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: o, imageUrl: c } = a, p = await (o && c.pathname in s ? i.fetch.bind(i) : fetch)(c);
  return lt(p, c, e);
}
__name(B, "B");
__name2(B, "B");
r();
y();
_();
r();
y();
_();
var bt = "x-vercel-cache-tags";
var gt = "x-next-cache-soft-tags";
var ht = Symbol.for("__cloudflare-request-context__");
async function W(t) {
  let s = `https://${f}/v1/suspense-cache/`;
  if (!t.url.startsWith(s))
    return null;
  try {
    let i = new URL(t.url), e = await xt();
    if (i.pathname === "/v1/suspense-cache/revalidate") {
      let o = i.searchParams.get("tags")?.split(",") ?? [];
      for (let c of o)
        await e.revalidateTag(c);
      return new Response(null, { status: 200 });
    }
    let a = i.pathname.replace("/v1/suspense-cache/", "");
    if (!a.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (t.method) {
      case "GET": {
        let o = G(t, gt), c = await e.get(a, { softTags: o });
        return c ? new Response(JSON.stringify(c.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (c.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let o = globalThis[ht], c = /* @__PURE__ */ __name2(async () => {
          let n = await t.json();
          n.data.tags === void 0 && (n.tags ??= G(t, bt) ?? []), await e.set(a, n);
        }, "c");
        return o ? o.ctx.waitUntil(c()) : await c(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (i) {
    return console.error(i), new Response("Error handling cache request", { status: 500 });
  }
}
__name(W, "W");
__name2(W, "W");
async function xt() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? K("kv") : K("cache-api");
}
__name(xt, "xt");
__name2(xt, "xt");
async function K(t) {
  let s = await import(`./__next-on-pages-dist__/cache/${t}.js`);
  return new s.default();
}
__name(K, "K");
__name2(K, "K");
function G(t, s) {
  return t.headers.get(s)?.split(",")?.filter(Boolean);
}
__name(G, "G");
__name2(G, "G");
function X() {
  globalThis[J] || (ut(), globalThis[J] = true);
}
__name(X, "X");
__name2(X, "X");
function ut() {
  let t = globalThis.fetch;
  globalThis.fetch = async (...s) => {
    let i = new Request(...s), e = await mt(i);
    return e || (e = await W(i), e) ? e : (dt(i), t(i));
  };
}
__name(ut, "ut");
__name2(ut, "ut");
async function mt(t) {
  if (t.url.startsWith("blob:"))
    try {
      let i = (await import(`./__next-on-pages-dist__/assets/${new URL(t.url).pathname}.bin`)).default, e = { async arrayBuffer() {
        return i;
      }, get body() {
        return new ReadableStream({ start(a) {
          let o = Buffer.from(i);
          a.enqueue(o), a.close();
        } });
      }, async text() {
        return Buffer.from(i).toString();
      }, async json() {
        let a = Buffer.from(i);
        return JSON.stringify(a.toString());
      }, async blob() {
        return new Blob(i);
      } };
      return e.clone = () => ({ ...e }), e;
    } catch {
    }
  return null;
}
__name(mt, "mt");
__name2(mt, "mt");
function dt(t) {
  t.headers.has("user-agent") || t.headers.set("user-agent", "Next.js Middleware");
}
__name(dt, "dt");
__name2(dt, "dt");
var J = Symbol.for("next-on-pages fetch patch");
r();
y();
_();
var Q = O(Z());
var T = /* @__PURE__ */ __name2(class {
  constructor(s, i, e, a, o) {
    this.routes = s;
    this.output = i;
    this.reqCtx = e;
    this.url = new URL(e.request.url), this.cookies = (0, Q.parse)(e.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), m(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = o?.find((c) => c.domain === this.url.hostname), this.locales = new Set(a.collectedLocales);
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
  checkRouteMatch(s, { checkStatus: i, checkIntercept: e }) {
    let a = j(s.src, this.path, s.caseSensitive);
    if (!a.match || s.methods && !s.methods.map((c) => c.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let o = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: s.dest };
    if (!s.has?.find((c) => {
      let n = E(c, o);
      return n.newRouteDest && (o.routeDest = n.newRouteDest), !n.valid;
    }) && !s.missing?.find((c) => E(c, o).valid) && !(i && s.status !== this.status)) {
      if (e && s.dest) {
        let c = /\/(\(\.+\))+/, n = c.test(s.dest), p = c.test(this.path);
        if (n && !p)
          return;
      }
      return { routeMatch: a, routeDest: o.routeDest };
    }
  }
  processMiddlewareResp(s) {
    let i = "x-middleware-override-headers", e = s.headers.get(i);
    if (e) {
      let p = new Set(e.split(",").map((w) => w.trim()));
      for (let w of p.keys()) {
        let l = `x-middleware-request-${w}`, x = s.headers.get(l);
        this.reqCtx.request.headers.get(w) !== x && (x ? this.reqCtx.request.headers.set(w, x) : this.reqCtx.request.headers.delete(w)), s.headers.delete(l);
      }
      s.headers.delete(i);
    }
    let a = "x-middleware-rewrite", o = s.headers.get(a);
    if (o) {
      let p = new URL(o, this.url), w = this.url.hostname !== p.hostname;
      this.path = w ? `${p}` : p.pathname, m(this.searchParams, p.searchParams), s.headers.delete(a);
    }
    let c = "x-middleware-next";
    s.headers.get(c) ? s.headers.delete(c) : !o && !s.headers.has("location") ? (this.body = s.body, this.status = s.status) : s.headers.has("location") && s.status >= 300 && s.status < 400 && (this.status = s.status), u(this.reqCtx.request.headers, s.headers), u(this.headers.normal, s.headers), this.headers.middlewareLocation = s.headers.get("location");
  }
  async runRouteMiddleware(s) {
    if (!s)
      return true;
    let i = s && this.output[s];
    if (!i || i.type !== "middleware")
      return this.status = 500, false;
    let e = await P(i, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(s), e.status === 500 ? (this.status = e.status, false) : (this.processMiddlewareResp(e), true);
  }
  applyRouteOverrides(s) {
    !s.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(s, i, e) {
    !s.headers || (u(this.headers.normal, s.headers, { match: i, captureGroupKeys: e }), s.important && u(this.headers.important, s.headers, { match: i, captureGroupKeys: e }));
  }
  applyRouteStatus(s) {
    !s.status || (this.status = s.status);
  }
  applyRouteDest(s, i, e) {
    if (!s.dest)
      return this.path;
    let a = this.path, o = s.dest;
    this.wildcardMatch && /\$wildcard/.test(o) && (o = o.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = k(o, i, e);
    let c = /\/index\.rsc$/i.test(this.path), n = /^\/(?:index)?$/i.test(a), p = /^\/__index\.prefetch\.rsc$/i.test(a);
    c && !n && !p && (this.path = a);
    let w = /\.rsc$/i.test(this.path), l = /\.prefetch\.rsc$/i.test(this.path), x = this.path in this.output;
    w && !l && !x && (this.path = this.path.replace(/\.rsc/i, ""));
    let v = new URL(this.path, this.url);
    return m(this.searchParams, v.searchParams), z(this.path) || (this.path = v.pathname), a;
  }
  applyLocaleRedirects(s) {
    if (!s.locale?.redirect || !/^\^(.)*$/.test(s.src) && s.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: e, cookie: a } } = s, o = a && this.cookies[a], c = I(o ?? ""), n = I(this.reqCtx.request.headers.get("accept-language") ?? ""), l = [...c, ...n].map((x) => e[x]).filter(Boolean)[0];
    if (l) {
      !this.path.startsWith(l) && (this.headers.normal.set("location", l), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(s, i) {
    return !this.locales || i !== "miss" ? s : D(s.src, this.locales) ? { ...s, src: s.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : s;
  }
  async checkRoute(s, i) {
    let e = this.getLocaleFriendlyRoute(i, s), { routeMatch: a, routeDest: o } = this.checkRouteMatch(e, { checkStatus: s === "error", checkIntercept: s === "rewrite" }) ?? {}, c = { ...e, dest: o };
    if (!a?.match || c.middlewarePath && this.middlewareInvoked.includes(c.middlewarePath))
      return "skip";
    let { match: n, captureGroupKeys: p } = a;
    if (this.applyRouteOverrides(c), this.applyLocaleRedirects(c), !await this.runRouteMiddleware(c.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(c, n, p), this.applyRouteStatus(c);
    let l = this.applyRouteDest(c, n, p);
    if (c.check && !z(this.path))
      if (l === this.path) {
        if (s !== "miss")
          return this.checkPhase(q(s));
        this.status = 404;
      } else if (s === "miss") {
        if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return !c.continue || c.status && c.status >= 300 && c.status <= 399 ? "done" : "next";
  }
  async checkPhase(s) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let i = true;
    for (let o of this.routes[s]) {
      let c = await this.checkRoute(s, o);
      if (c === "error")
        return "error";
      if (c === "done") {
        i = false;
        break;
      }
    }
    if (s === "hit" || z(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (s === "none")
      for (let o of this.locales) {
        let c = new RegExp(`/${o}(/.*)`), p = this.path.match(c)?.[1];
        if (p && p in this.output) {
          this.path = p;
          break;
        }
      }
    let e = this.path in this.output;
    if (!e && this.path.endsWith("/")) {
      let o = this.path.replace(/\/$/, "");
      e = o in this.output, e && (this.path = o);
    }
    if (s === "miss" && !e) {
      let o = !this.status || this.status < 400;
      this.status = o ? 404 : this.status;
    }
    let a = "miss";
    return e || s === "miss" || s === "error" ? a = "hit" : i && (a = q(s)), this.checkPhase(a);
  }
  async run(s = "none") {
    this.checkPhaseCounter = 0;
    let i = await this.checkPhase(s);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), i;
  }
}, "T");
async function Y(t, s, i, e) {
  let a = new T(s.routes, i, t, e, s.wildcard), o = await tt(a);
  return St(t, o, i);
}
__name(Y, "Y");
__name2(Y, "Y");
async function tt(t, s = "none", i = false) {
  return await t.run(s) === "error" || !i && t.status && t.status >= 400 ? tt(t, "error", true) : { path: t.path, status: t.status, headers: t.headers, searchParams: t.searchParams, body: t.body };
}
__name(tt, "tt");
__name2(tt, "tt");
async function St(t, { path: s = "/404", status: i, headers: e, searchParams: a, body: o }, c) {
  let n = e.normal.get("location");
  if (n) {
    if (n !== e.middlewareLocation) {
      let l = [...a.keys()].length ? `?${a.toString()}` : "";
      e.normal.set("location", `${n ?? "/"}${l}`);
    }
    return new Response(null, { status: i, headers: e.normal });
  }
  let p;
  if (o !== void 0)
    p = new Response(o, { status: i });
  else if (z(s)) {
    let l = new URL(s);
    m(l.searchParams, a), p = await fetch(l, t.request);
  } else
    p = await P(c[s], t, { path: s, status: i, headers: e, searchParams: a });
  let w = e.normal;
  return u(w, p.headers), u(w, e.important), p = new Response(p.body, { ...p, status: i || p.status, headers: w }), p;
}
__name(St, "St");
__name2(St, "St");
r();
y();
_();
function st() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: Tt };
}
__name(st, "st");
__name2(st, "st");
function Tt(t) {
  let s = globalThis.__nextOnPagesRoutesIsolation._map.get(t);
  if (s)
    return s;
  let i = Nt();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(t, i), i;
}
__name(Tt, "Tt");
__name2(Tt, "Tt");
function Nt() {
  let t = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: (s, i) => t.has(i) ? t.get(i) : Reflect.get(globalThis, i), set: (s, i, e) => Ct.has(i) ? Reflect.set(globalThis, i, e) : (t.set(i, e), true) });
}
__name(Nt, "Nt");
__name2(Nt, "Nt");
var Ct = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var ge = { async fetch(t, s, i) {
  st(), X();
  let e = await __ALSes_PROMISE__;
  if (!e) {
    let c = new URL(t.url), n = await s.ASSETS.fetch(`${c.protocol}//${c.host}/cdn-cgi/errors/no-nodejs_compat.html`), p = n.ok ? n.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(p, { status: 503 });
  }
  let { envAsyncLocalStorage: a, requestContextAsyncLocalStorage: o } = e;
  return a.run({ ...s, NODE_ENV: "production", SUSPENSE_CACHE_URL: f }, async () => o.run({ env: s, ctx: i, cf: t.cf }, async () => {
    if (new URL(t.url).pathname.startsWith("/_next/image"))
      return B(t, { buildOutput: g, assetsFetcher: s.ASSETS, imagesConfig: b.images });
    let n = F(t);
    return Y({ request: n, ctx: i, assetsFetcher: s.ASSETS }, b, g, h);
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

// .wrangler/tmp/pages-Gughrb/9tnitxk1ipd.js
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
        if (ge.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return ge.fetch(request, env4, context3);
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

// .wrangler/tmp/bundle-V6siDO/middleware-insertion-facade.js
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

// .wrangler/tmp/bundle-V6siDO/middleware-loader.entry.ts
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
//# sourceMappingURL=9tnitxk1ipd.js.map
