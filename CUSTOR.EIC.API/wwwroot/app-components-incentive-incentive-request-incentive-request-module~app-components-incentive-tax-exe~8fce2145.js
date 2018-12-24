(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-incentive-incentive-request-incentive-request-module~app-components-incentive-tax-exe~8fce2145"],{

/***/ "./node_modules/rxjs/index.js":
/*!************************************!*\
  !*** ./node_modules/rxjs/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* Observable */
var Observable_1 = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.Observable = Observable_1.Observable;
var ConnectableObservable_1 = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/internal/observable/ConnectableObservable.js");
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var groupBy_1 = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/internal/operators/groupBy.js");
exports.GroupedObservable = groupBy_1.GroupedObservable;
var observable_1 = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.observable = observable_1.observable;
/* Subjects */
var Subject_1 = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
exports.Subject = Subject_1.Subject;
var BehaviorSubject_1 = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ReplaySubject_1 = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var AsyncSubject_1 = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
/* Schedulers */
var asap_1 = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/internal/scheduler/asap.js");
exports.asapScheduler = asap_1.asap;
var async_1 = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
exports.asyncScheduler = async_1.async;
var queue_1 = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
exports.queueScheduler = queue_1.queue;
var animationFrame_1 = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/internal/scheduler/animationFrame.js");
exports.animationFrameScheduler = animationFrame_1.animationFrame;
var VirtualTimeScheduler_1 = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js");
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
exports.VirtualAction = VirtualTimeScheduler_1.VirtualAction;
var Scheduler_1 = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
exports.Scheduler = Scheduler_1.Scheduler;
/* Subscription */
var Subscription_1 = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
exports.Subscriber = Subscriber_1.Subscriber;
/* Notification */
var Notification_1 = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/internal/Notification.js");
exports.Notification = Notification_1.Notification;
/* Utils */
var pipe_1 = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
exports.pipe = pipe_1.pipe;
var noop_1 = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.noop = noop_1.noop;
var identity_1 = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/internal/util/identity.js");
exports.identity = identity_1.identity;
var isObservable_1 = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/internal/util/isObservable.js");
exports.isObservable = isObservable_1.isObservable;
/* Error types */
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var EmptyError_1 = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/internal/util/EmptyError.js");
exports.EmptyError = EmptyError_1.EmptyError;
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var UnsubscriptionError_1 = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var TimeoutError_1 = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/internal/util/TimeoutError.js");
exports.TimeoutError = TimeoutError_1.TimeoutError;
/* Static observable creation exports */
var bindCallback_1 = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/internal/observable/bindCallback.js");
exports.bindCallback = bindCallback_1.bindCallback;
var bindNodeCallback_1 = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/internal/observable/bindNodeCallback.js");
exports.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
var combineLatest_1 = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
exports.combineLatest = combineLatest_1.combineLatest;
var concat_1 = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
exports.concat = concat_1.concat;
var defer_1 = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/internal/observable/defer.js");
exports.defer = defer_1.defer;
var empty_1 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.empty = empty_1.empty;
var forkJoin_1 = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/internal/observable/forkJoin.js");
exports.forkJoin = forkJoin_1.forkJoin;
var from_1 = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
exports.from = from_1.from;
var fromEvent_1 = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
exports.fromEvent = fromEvent_1.fromEvent;
var fromEventPattern_1 = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/internal/observable/fromEventPattern.js");
exports.fromEventPattern = fromEventPattern_1.fromEventPattern;
var generate_1 = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/internal/observable/generate.js");
exports.generate = generate_1.generate;
var iif_1 = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/internal/observable/iif.js");
exports.iif = iif_1.iif;
var interval_1 = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
exports.interval = interval_1.interval;
var merge_1 = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/internal/observable/merge.js");
exports.merge = merge_1.merge;
var never_1 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.never = never_1.never;
var of_1 = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
exports.of = of_1.of;
var onErrorResumeNext_1 = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js");
exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
var pairs_1 = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/internal/observable/pairs.js");
exports.pairs = pairs_1.pairs;
var race_1 = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/internal/observable/race.js");
exports.race = race_1.race;
var range_1 = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/internal/observable/range.js");
exports.range = range_1.range;
var throwError_1 = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
exports.throwError = throwError_1.throwError;
var timer_1 = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
exports.timer = timer_1.timer;
var using_1 = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/internal/observable/using.js");
exports.using = using_1.using;
var zip_1 = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/internal/observable/zip.js");
exports.zip = zip_1.zip;
/* Constants */
var empty_2 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.EMPTY = empty_2.EMPTY;
var never_2 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.NEVER = never_2.NEVER;
/* Config */
var config_1 = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/internal/config.js");
exports.config = config_1.config;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindCallback.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindCallback.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
// tslint:enable:max-line-length
/**
 * Converts a callback API to a function that returns an Observable.
 *
 * <span class="informal">Give it a function `f` of type `f(x, callback)` and
 * it will return a function `g` that when called as `g(x)` will output an
 * Observable.</span>
 *
 * `bindCallback` is not an operator because its input and output are not
 * Observables. The input is a function `func` with some parameters, the
 * last parameter must be a callback function that `func` calls when it is
 * done.
 *
 * The output of `bindCallback` is a function that takes the same parameters
 * as `func`, except the last one (the callback). When the output function
 * is called with arguments it will return an Observable. If function `func`
 * calls its callback with one argument the Observable will emit that value.
 * If on the other hand the callback is called with multiple values the resulting
 * Observable will emit an array with said values as arguments.
 *
 * It is very important to remember that input function `func` is not called
 * when the output function is, but rather when the Observable returned by the output
 * function is subscribed. This means if `func` makes an AJAX request, that request
 * will be made every time someone subscribes to the resulting Observable, but not before.
 *
 * The last optional parameter - {@link Scheduler} - can be used to control when the call
 * to `func` happens after someone subscribes to Observable, as well as when results
 * passed to callback will be emitted. By default, the subscription to  an Observable calls `func`
 * synchronously, but using `Scheduler.async` as the last parameter will defer the call to `func`,
 * just like wrapping the call in `setTimeout` with a timeout of `0` would. If you use the async Scheduler
 * and call `subscribe` on the output Observable all function calls that are currently executing
 * will end before `func` is invoked.
 *
 * By default results passed to the callback are emitted immediately after `func` invokes the callback.
 * In particular, if the callback is called synchronously the subscription of the resulting Observable
 * will call the `next` function synchronously as well.  If you want to defer that call,
 * you may use `Scheduler.async` just as before.  This means that by using `Scheduler.async` you can
 * ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.
 *
 * Note that the Observable created by the output function will always emit a single value
 * and then complete immediately. If `func` calls the callback multiple times, values from subsequent
 * calls will not appear in the stream. If you need to listen for multiple calls,
 *  you probably want to use {@link fromEvent} or {@link fromEventPattern} instead.
 *
 * If `func` depends on some context (`this` property) and is not already bound the context of `func`
 * will be the context that the output function has at call time. In particular, if `func`
 * is called as a method of some objec and if `func` is not already bound, in order to preserve the context
 * it is recommended that the context of the output function is set to that object as well.
 *
 * If the input function calls its callback in the "node style" (i.e. first argument to callback is
 * optional error parameter signaling whether the call failed or not), {@link bindNodeCallback}
 * provides convenient error handling and probably is a better choice.
 * `bindCallback` will treat such functions the same as any other and error parameters
 * (whether passed or not) will always be interpreted as regular callback argument.
 *
 *
 * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
 * // Suppose we have jQuery.getJSON('/my/url', callback)
 * var getJSONAsObservable = bindCallback(jQuery.getJSON);
 * var result = getJSONAsObservable('/my/url');
 * result.subscribe(x => console.log(x), e => console.error(e));
 *
 *
 * @example <caption>Receive an array of arguments passed to a callback</caption>
 * someFunction((a, b, c) => {
 *   console.log(a); // 5
 *   console.log(b); // 'some string'
 *   console.log(c); // {someProperty: 'someValue'}
 * });
 *
 * const boundSomeFunction = bindCallback(someFunction);
 * boundSomeFunction().subscribe(values => {
 *   console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
 * });
 *
 *
 * @example <caption>Compare behaviour with and without async Scheduler</caption>
 * function iCallMyCallbackSynchronously(cb) {
 *   cb();
 * }
 *
 * const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
 * const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);
 *
 * boundSyncFn().subscribe(() => console.log('I was sync!'));
 * boundAsyncFn().subscribe(() => console.log('I was async!'));
 * console.log('This happened...');
 *
 * // Logs:
 * // I was sync!
 * // This happened...
 * // I was async!
 *
 *
 * @example <caption>Use bindCallback on an object method</caption>
 * const boundMethod = bindCallback(someObject.methodWithCallback);
 * boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
 * .subscribe(subscriber);
 *
 *
 * @see {@link bindNodeCallback}
 * @see {@link from}
 * @see {@link fromPromise}
 *
 * @param {function} func A function with a callback as the last parameter.
 * @param {Scheduler} [scheduler] The scheduler on which to schedule the
 * callbacks.
 * @return {function(...params: *): Observable} A function which returns the
 * Observable that delivers the same values the callback would deliver.
 * @name bindCallback
 */
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            // DEPRECATED PATH
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new Observable_1.Observable(function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        subject.error(err);
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
exports.bindCallback = bindCallback;
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindNodeCallback.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindNodeCallback.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
/**
 * Converts a Node.js-style callback API to a function that returns an
 * Observable.
 *
 * <span class="informal">It's just like {@link bindCallback}, but the
 * callback is expected to be of type `callback(error, result)`.</span>
 *
 * `bindNodeCallback` is not an operator because its input and output are not
 * Observables. The input is a function `func` with some parameters, but the
 * last parameter must be a callback function that `func` calls when it is
 * done. The callback function is expected to follow Node.js conventions,
 * where the first argument to the callback is an error object, signaling
 * whether call was successful. If that object is passed to callback, it means
 * something went wrong.
 *
 * The output of `bindNodeCallback` is a function that takes the same
 * parameters as `func`, except the last one (the callback). When the output
 * function is called with arguments, it will return an Observable.
 * If `func` calls its callback with error parameter present, Observable will
 * error with that value as well. If error parameter is not passed, Observable will emit
 * second parameter. If there are more parameters (third and so on),
 * Observable will emit an array with all arguments, except first error argument.
 *
 * Note that `func` will not be called at the same time output function is,
 * but rather whenever resulting Observable is subscribed. By default call to
 * `func` will happen synchronously after subscription, but that can be changed
 * with proper {@link Scheduler} provided as optional third parameter. Scheduler
 * can also control when values from callback will be emitted by Observable.
 * To find out more, check out documentation for {@link bindCallback}, where
 * Scheduler works exactly the same.
 *
 * As in {@link bindCallback}, context (`this` property) of input function will be set to context
 * of returned function, when it is called.
 *
 * After Observable emits value, it will complete immediately. This means
 * even if `func` calls callback again, values from second and consecutive
 * calls will never appear on the stream. If you need to handle functions
 * that call callbacks multiple times, check out {@link fromEvent} or
 * {@link fromEventPattern} instead.
 *
 * Note that `bindNodeCallback` can be used in non-Node.js environments as well.
 * "Node.js-style" callbacks are just a convention, so if you write for
 * browsers or any other environment and API you use implements that callback style,
 * `bindNodeCallback` can be safely used on that API functions as well.
 *
 * Remember that Error object passed to callback does not have to be an instance
 * of JavaScript built-in `Error` object. In fact, it does not even have to an object.
 * Error parameter of callback function is interpreted as "present", when value
 * of that parameter is truthy. It could be, for example, non-zero number, non-empty
 * string or boolean `true`. In all of these cases resulting Observable would error
 * with that value. This means usually regular style callbacks will fail very often when
 * `bindNodeCallback` is used. If your Observable errors much more often then you
 * would expect, check if callback really is called in Node.js-style and, if not,
 * switch to {@link bindCallback} instead.
 *
 * Note that even if error parameter is technically present in callback, but its value
 * is falsy, it still won't appear in array emitted by Observable.
 *
 *
 * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
 * import * as fs from 'fs';
 * var readFileAsObservable = bindNodeCallback(fs.readFile);
 * var result = readFileAsObservable('./roadNames.txt', 'utf8');
 * result.subscribe(x => console.log(x), e => console.error(e));
 *
 *
 * @example <caption>Use on function calling callback with multiple arguments</caption>
 * someFunction((err, a, b) => {
 *   console.log(err); // null
 *   console.log(a); // 5
 *   console.log(b); // "some string"
 * });
 * var boundSomeFunction = bindNodeCallback(someFunction);
 * boundSomeFunction()
 * .subscribe(value => {
 *   console.log(value); // [5, "some string"]
 * });
 *
 * @example <caption>Use on function calling callback in regular style</caption>
 * someFunction(a => {
 *   console.log(a); // 5
 * });
 * var boundSomeFunction = bindNodeCallback(someFunction);
 * boundSomeFunction()
 * .subscribe(
 *   value => {}             // never gets called
 *   err => console.log(err) // 5
 * );
 *
 *
 * @see {@link bindCallback}
 * @see {@link from}
 * @see {@link fromPromise}
 *
 * @param {function} func Function with a Node.js-style callback as the last parameter.
 * @param {Scheduler} [scheduler] The scheduler on which to schedule the
 * callbacks.
 * @return {function(...params: *): Observable} A function which returns the
 * Observable that delivers the same values the Node.js callback would
 * deliver.
 * @name bindNodeCallback
 */
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            // DEPRECATED PATH
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new Observable_1.Observable(function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        subject.error(err);
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
exports.bindNodeCallback = bindNodeCallback;
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/forkJoin.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/forkJoin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* tslint:enable:max-line-length */
/**
 * Joins last values emitted by passed Observables.
 *
 * <span class="informal">Wait for Observables to complete and then combine last values they emitted.</span>
 *
 * <img src="./img/forkJoin.png" width="100%">
 *
 * `forkJoin` is an operator that takes any number of Observables which can be passed either as an array
 * or directly as arguments. If no input Observables are provided, resulting stream will complete
 * immediately.
 *
 * `forkJoin` will wait for all passed Observables to complete and then it will emit an array with last
 * values from corresponding Observables. So if you pass `n` Observables to the operator, resulting
 * array will have `n` values, where first value is the last thing emitted by the first Observable,
 * second value is the last thing emitted by the second Observable and so on. That means `forkJoin` will
 * not emit more than once and it will complete after that. If you need to emit combined values not only
 * at the end of lifecycle of passed Observables, but also throughout it, try out {@link combineLatest}
 * or {@link zip} instead.
 *
 * In order for resulting array to have the same length as the number of input Observables, whenever any of
 * that Observables completes without emitting any value, `forkJoin` will complete at that moment as well
 * and it will not emit anything either, even if it already has some last values from other Observables.
 * Conversely, if there is an Observable that never completes, `forkJoin` will never complete as well,
 * unless at any point some other Observable completes without emitting value, which brings us back to
 * the previous case. Overall, in order for `forkJoin` to emit a value, all Observables passed as arguments
 * have to emit something at least once and complete.
 *
 * If any input Observable errors at some point, `forkJoin` will error as well and all other Observables
 * will be immediately unsubscribed.
 *
 * Optionally `forkJoin` accepts project function, that will be called with values which normally
 * would land in emitted array. Whatever is returned by project function, will appear in output
 * Observable instead. This means that default project can be thought of as a function that takes
 * all its arguments and puts them into an array. Note that project function will be called only
 * when output Observable is supposed to emit a result.
 *
 * @example <caption>Use forkJoin with operator emitting immediately</caption>
 * import { forkJoin, of } from 'rxjs';
 *
 * const observable = forkJoin(
 *   of(1, 2, 3, 4),
 *   of(5, 6, 7, 8)
 * );
 * observable.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('This is how it ends!')
 * );
 *
 * // Logs:
 * // [4, 8]
 * // "This is how it ends!"
 *
 *
 * @example <caption>Use forkJoin with operator emitting after some time</caption>
 * import { forkJoin, interval } from 'rxjs';
 * import { take } from 'rxjs/operators';
 *
 * const observable = forkJoin(
 *   interval(1000).pipe(take(3)), // emit 0, 1, 2 every second and complete
 *   interval(500).pipe(take(4)) // emit 0, 1, 2, 3 every half a second and complete
 * );
 * observable.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('This is how it ends!')
 * );
 *
 * // Logs:
 * // [2, 3] after 3 seconds
 * // "This is how it ends!" immediately after
 *
 *
 * @example <caption>Use forkJoin with project function</caption>
 * import { jorkJoin, interval } from 'rxjs';
 * import { take } from 'rxjs/operators';
 *
 * const observable = forkJoin(
 *   interval(1000).pipe(take(3)), // emit 0, 1, 2 every second and complete
 *   interval(500).pipe(take(4)), // emit 0, 1, 2, 3 every half a second and complete
 *   (n, m) => n + m
 * );
 * observable.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('This is how it ends!')
 * );
 *
 * // Logs:
 * // 5 after 3 seconds
 * // "This is how it ends!" immediately after
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 *
 * @param {...ObservableInput} sources Any number of Observables provided either as an array or as an arguments
 * passed directly to the operator.
 * @param {function} [project] Function that takes values emitted by input Observables and returns value
 * that will appear in resulting Observable instead of default array.
 * @return {Observable} Observable emitting either an array of last values emitted by passed Observables
 * or value from project function.
 */
function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var resultSelector;
    if (typeof sources[sources.length - 1] === 'function') {
        // DEPRECATED PATH
        resultSelector = sources.pop();
    }
    // if the first and only other argument is an array
    // assume it's been called with `forkJoin([obs1, obs2, obs3])`
    if (sources.length === 1 && isArray_1.isArray(sources[0])) {
        sources = sources[0];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    if (resultSelector) {
        // DEPRECATED PATH
        return forkJoin(sources).pipe(map_1.map(function (args) { return resultSelector.apply(void 0, args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        return new ForkJoinSubscriber(subscriber, sources);
    });
}
exports.forkJoin = forkJoin;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ForkJoinSubscriber = /** @class */ (function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources) {
        var _this = _super.call(this, destination) || this;
        _this.sources = sources;
        _this.completed = 0;
        _this.haveValues = 0;
        var len = sources.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = subscribeToResult_1.subscribeToResult(_this, source, null, i);
            if (innerSubscription) {
                _this.add(innerSubscription);
            }
        }
        return _this;
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var _a = this, destination = _a.destination, haveValues = _a.haveValues, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            destination.next(values);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEvent.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEvent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var toString = Object.prototype.toString;
/* tslint:enable:max-line-length */
/**
 * Creates an Observable that emits events of a specific type coming from the
 * given event target.
 *
 * <span class="informal">Creates an Observable from DOM events, or Node.js
 * EventEmitter events or others.</span>
 *
 * <img src="./img/fromEvent.png" width="100%">
 *
 * `fromEvent` accepts as a first argument event target, which is an object with methods
 * for registering event handler functions. As a second argument it takes string that indicates
 * type of event we want to listen for. `fromEvent` supports selected types of event targets,
 * which are described in detail below. If your event target does not match any of the ones listed,
 * you should use {@link fromEventPattern}, which can be used on arbitrary APIs.
 * When it comes to APIs supported by `fromEvent`, their methods for adding and removing event
 * handler functions have different names, but they all accept a string describing event type
 * and function itself, which will be called whenever said event happens.
 *
 * Every time resulting Observable is subscribed, event handler function will be registered
 * to event target on given event type. When that event fires, value
 * passed as a first argument to registered function will be emitted by output Observable.
 * When Observable is unsubscribed, function will be unregistered from event target.
 *
 * Note that if event target calls registered function with more than one argument, second
 * and following arguments will not appear in resulting stream. In order to get access to them,
 * you can pass to `fromEvent` optional project function, which will be called with all arguments
 * passed to event handler. Output Observable will then emit value returned by project function,
 * instead of the usual value.
 *
 * Remember that event targets listed below are checked via duck typing. It means that
 * no matter what kind of object you have and no matter what environment you work in,
 * you can safely use `fromEvent` on that object if it exposes described methods (provided
 * of course they behave as was described above). So for example if Node.js library exposes
 * event target which has the same method names as DOM EventTarget, `fromEvent` is still
 * a good choice.
 *
 * If the API you use is more callback then event handler oriented (subscribed
 * callback function fires only once and thus there is no need to manually
 * unregister it), you should use {@link bindCallback} or {@link bindNodeCallback}
 * instead.
 *
 * `fromEvent` supports following types of event targets:
 *
 * **DOM EventTarget**
 *
 * This is an object with `addEventListener` and `removeEventListener` methods.
 *
 * In the browser, `addEventListener` accepts - apart from event type string and event
 * handler function arguments - optional third parameter, which is either an object or boolean,
 * both used for additional configuration how and when passed function will be called. When
 * `fromEvent` is used with event target of that type, you can provide this values
 * as third parameter as well.
 *
 * **Node.js EventEmitter**
 *
 * An object with `addListener` and `removeListener` methods.
 *
 * **JQuery-style event target**
 *
 * An object with `on` and `off` methods
 *
 * **DOM NodeList**
 *
 * List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.
 *
 * Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes
 * it contains and install event handler function in every of them. When returned Observable
 * is unsubscribed, function will be removed from all Nodes.
 *
 * **DOM HtmlCollection**
 *
 * Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is
 * installed and removed in each of elements.
 *
 *
 * @example <caption>Emits clicks happening on the DOM document</caption>
 * var clicks = fromEvent(document, 'click');
 * clicks.subscribe(x => console.log(x));
 *
 * // Results in:
 * // MouseEvent object logged to console every time a click
 * // occurs on the document.
 *
 *
 * @example <caption>Use addEventListener with capture option</caption>
 * var clicksInDocument = fromEvent(document, 'click', true); // note optional configuration parameter
 *                                                                          // which will be passed to addEventListener
 * var clicksInDiv = fromEvent(someDivInDocument, 'click');
 *
 * clicksInDocument.subscribe(() => console.log('document'));
 * clicksInDiv.subscribe(() => console.log('div'));
 *
 * // By default events bubble UP in DOM tree, so normally
 * // when we would click on div in document
 * // "div" would be logged first and then "document".
 * // Since we specified optional `capture` option, document
 * // will catch event when it goes DOWN DOM tree, so console
 * // will log "document" and then "div".
 *
 * @see {@link bindCallback}
 * @see {@link bindNodeCallback}
 * @see {@link fromEventPattern}
 *
 * @param {FromEventTarget<T>} target The DOM EventTarget, Node.js
 * EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to.
 * @param {string} eventName The event name of interest, being emitted by the
 * `target`.
 * @param {EventListenerOptions} [options] Options to pass through to addEventListener
 * @return {Observable<T>}
 * @name fromEvent
 */
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        // DEPRECATED PATH
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        // DEPRECATED PATH
        return fromEvent(target, eventName, options).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
exports.fromEvent = fromEvent;
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEventPattern.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEventPattern.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* tslint:enable:max-line-length */
/**
 * Creates an Observable from an API based on addHandler/removeHandler
 * functions.
 *
 * <span class="informal">Converts any addHandler/removeHandler API to an
 * Observable.</span>
 *
 * <img src="./img/fromEventPattern.png" width="100%">
 *
 * Creates an Observable by using the `addHandler` and `removeHandler`
 * functions to add and remove the handlers. The `addHandler` is
 * called when the output Observable is subscribed, and `removeHandler` is
 * called when the Subscription is unsubscribed.
 *
 * @example <caption>Emits clicks happening on the DOM document</caption>
 * function addClickHandler(handler) {
 *   document.addEventListener('click', handler);
 * }
 *
 * function removeClickHandler(handler) {
 *   document.removeEventListener('click', handler);
 * }
 *
 * var clicks = fromEventPattern(
 *   addClickHandler,
 *   removeClickHandler
 * );
 * clicks.subscribe(x => console.log(x));
 *
 * @see {@link from}
 * @see {@link fromEvent}
 *
 * @param {function(handler: Function): any} addHandler A function that takes
 * a `handler` function as argument and attaches it somehow to the actual
 * source of events.
 * @param {function(handler: Function, signal?: any): void} [removeHandler] An optional function that
 * takes a `handler` function as argument and removes it in case it was
 * previously attached using `addHandler`. if addHandler returns signal to teardown when remove,
 * removeHandler function will forward it.
 * @return {Observable<T>}
 * @name fromEventPattern
 */
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        // DEPRECATED PATH
        return fromEventPattern(addHandler, removeHandler).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!isFunction_1.isFunction(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
exports.fromEventPattern = fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/generate.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/generate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || identity_1.identity;
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = identity_1.identity;
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new Observable_1.Observable(function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
exports.generate = generate;
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/iif.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/iif.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defer_1 = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/internal/observable/defer.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
/**
 * Decides at subscription time which Observable will actually be subscribed.
 *
 * <span class="informal">`If` statement for Observables.</span>
 *
 * `if` accepts a condition function and two Observables. When
 * an Observable returned by the operator is subscribed, condition function will be called.
 * Based on what boolean it returns at that moment, consumer will subscribe either to
 * the first Observable (if condition was true) or to the second (if condition was false). Condition
 * function may also not return anything - in that case condition will be evaluated as false and
 * second Observable will be subscribed.
 *
 * Note that Observables for both cases (true and false) are optional. If condition points to an Observable that
 * was left undefined, resulting stream will simply complete immediately. That allows you to, rather
 * then controlling which Observable will be subscribed, decide at runtime if consumer should have access
 * to given Observable or not.
 *
 * If you have more complex logic that requires decision between more than two Observables, {@link defer}
 * will probably be a better choice. Actually `if` can be easily implemented with {@link defer}
 * and exists only for convenience and readability reasons.
 *
 *
 * @example <caption>Change at runtime which Observable will be subscribed</caption>
 * let subscribeToFirst;
 * const firstOrSecond = Rx.Observable.if(
 *   () => subscribeToFirst,
 *   Rx.Observable.of('first'),
 *   Rx.Observable.of('second')
 * );
 *
 * subscribeToFirst = true;
 * firstOrSecond.subscribe(value => console.log(value));
 *
 * // Logs:
 * // "first"
 *
 * subscribeToFirst = false;
 * firstOrSecond.subscribe(value => console.log(value));
 *
 * // Logs:
 * // "second"
 *
 *
 * @example <caption>Control an access to an Observable</caption>
 * let accessGranted;
 * const observableIfYouHaveAccess = Rx.Observable.if(
 *   () => accessGranted,
 *   Rx.Observable.of('It seems you have an access...') // Note that only one Observable is passed to the operator.
 * );
 *
 * accessGranted = true;
 * observableIfYouHaveAccess.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('The end')
 * );
 *
 * // Logs:
 * // "It seems you have an access..."
 * // "The end"
 *
 * accessGranted = false;
 * observableIfYouHaveAccess.subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('The end')
 * );
 *
 * // Logs:
 * // "The end"
 *
 * @see {@link defer}
 *
 * @param {function(): boolean} condition Condition which Observable should be chosen.
 * @param {Observable} [trueObservable] An Observable that will be subscribed if condition is true.
 * @param {Observable} [falseObservable] An Observable that will be subscribed if condition is false.
 * @return {Observable} Either first or second Observable, depending on condition.
 * @static true
 * @name iif
 * @owner Observable
 */
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) { trueResult = empty_1.EMPTY; }
    if (falseResult === void 0) { falseResult = empty_1.EMPTY; }
    return defer_1.defer(function () { return condition() ? trueResult : falseResult; });
}
exports.iif = iif;
//# sourceMappingURL=iif.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/interval.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/interval.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
/**
 * Creates an Observable that emits sequential numbers every specified
 * interval of time, on a specified IScheduler.
 *
 * <span class="informal">Emits incremental numbers periodically in time.
 * </span>
 *
 * <img src="./img/interval.png" width="100%">
 *
 * `interval` returns an Observable that emits an infinite sequence of
 * ascending integers, with a constant interval of time of your choosing
 * between those emissions. The first emission is not sent immediately, but
 * only after the first period has passed. By default, this operator uses the
 * `async` IScheduler to provide a notion of time, but you may pass any
 * IScheduler to it.
 *
 * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
 * var numbers = Rx.Observable.interval(1000);
 * numbers.subscribe(x => console.log(x));
 *
 * @see {@link timer}
 * @see {@link delay}
 *
 * @param {number} [period=0] The interval size in milliseconds (by default)
 * or the time unit determined by the scheduler's clock.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
 * the emission of values, and providing a notion of "time".
 * @return {Observable} An Observable that emits a sequential number each time
 * interval.
 * @static true
 * @name interval
 * @owner Observable
 */
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (!isNumeric_1.isNumeric(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
exports.interval = interval;
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/never.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/never.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var noop_1 = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/internal/util/noop.js");
/**
 * An Observable that emits no items to the Observer and never completes.
 *
 * <img src="./img/never.png" width="100%">
 *
 * A simple Observable that emits neither values nor errors nor the completion
 * notification. It can be used for testing purposes or for composing with other
 * Observables. Please note that by never emitting a complete notification, this
 * Observable keeps the subscription from being disposed automatically.
 * Subscriptions need to be manually disposed.
 *
 * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
 * function info() {
 *   console.log('Will not be called');
 * }
 * var result = NEVER.startWith(7);
 * result.subscribe(x => console.log(x), info, info);
 *
 * @see {@link create}
 * @see {@link EMPTY}
 * @see {@link of}
 * @see {@link throwError}
 */
exports.NEVER = new Observable_1.Observable(noop_1.noop);
/**
 * @deprecated Deprecated in favor of using NEVER constant.
 */
function never() {
    return exports.NEVER;
}
exports.never = never;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/onErrorResumeNext.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` Will subscribe to each observable source it is provided, in order.
 * If the source it's subscribed to emits an error or completes, it will move to the next source
 * without error.
 *
 * If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link EMPTY}.
 *
 * `onErrorResumeNext` is basically {@link concat}, only it will continue, even if one of its
 * sources emits an error.
 *
 * Note that there is no way to handle any errors thrown by sources via the resuult of
 * `onErrorResumeNext`. If you want to handle errors thrown in any given source, you can
 * always use the {@link catchError} operator on them before passing them into `onErrorResumeNext`.
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * import { onErrorResumeNext, of } from 'rxjs/create';
 * import { map } from 'rxjs/operators';
 *
 * onErrorResumeNext(
 *  of(1, 2, 3, 0).pipe(
 *    map(x => {
 *      if (x === 0) throw Error();
 *      return 10 / x;
 *    })
 *  ),
 *  of(1, 2, 3),
 * )
 * .subscribe(
 *   val => console.log(val),
 *   err => console.log(err),          // Will never be called.
 *   () => console.log('done')
 * );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "done"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} sources Observables (or anything that *is* observable) passed either directly or as an array.
 * @return {Observable} An Observable that concatenates all sources, one after the other,
 * ignoring all errors, such that any error causes it to move on to the next source.
 */
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && isArray_1.isArray(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new Observable_1.Observable(function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return from_1.from(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/pairs.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/pairs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
/**
 * Convert an object into an observable sequence of [key, value] pairs
 * using an optional IScheduler to enumerate the object.
 *
 * @example <caption>Converts a javascript object to an Observable</caption>
 * var obj = {
 *   foo: 42,
 *   bar: 56,
 *   baz: 78
 * };
 *
 * var source = Rx.Observable.pairs(obj);
 *
 * var subscription = source.subscribe(
 *   function (x) {
 *     console.log('Next: %s', x);
 *   },
 *   function (err) {
 *     console.log('Error: %s', err);
 *   },
 *   function () {
 *     console.log('Completed');
 *   });
 *
 * @param {Object} obj The object to inspect and turn into an
 * Observable sequence.
 * @param {Scheduler} [scheduler] An optional IScheduler to run the
 * enumeration of the input sequence on.
 * @returns {(Observable<[string, T]>)} An observable sequence of
 * [key, value] pairs from the object.
 */
function pairs(obj, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new Subscription_1.Subscription();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
exports.pairs = pairs;
/** @internal */
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
exports.dispatch = dispatch;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/range.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/range.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
/**
 * Creates an Observable that emits a sequence of numbers within a specified
 * range.
 *
 * <span class="informal">Emits a sequence of numbers in a range.</span>
 *
 * <img src="./img/range.png" width="100%">
 *
 * `range` operator emits a range of sequential integers, in order, where you
 * select the `start` of the range and its `length`. By default, uses no
 * IScheduler and just delivers the notifications synchronously, but may use
 * an optional IScheduler to regulate those deliveries.
 *
 * @example <caption>Emits the numbers 1 to 10</caption>
 * var numbers = Rx.Observable.range(1, 10);
 * numbers.subscribe(x => console.log(x));
 *
 * @see {@link timer}
 * @see {@link interval}
 *
 * @param {number} [start=0] The value of the first integer in the sequence.
 * @param {number} [count=0] The number of sequential integers to generate.
 * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
 * the emissions of the notifications.
 * @return {Observable} An Observable of numbers that emits a finite range of
 * sequential integers.
 * @static true
 * @name range
 * @owner Observable
 */
function range(start, count, scheduler) {
    if (start === void 0) { start = 0; }
    if (count === void 0) { count = 0; }
    return new Observable_1.Observable(function (subscriber) {
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
exports.range = range;
/** @internal */
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
exports.dispatch = dispatch;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/using.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/using.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js"); // from from from! LAWL
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
/**
 * Creates an Observable that uses a resource which will be disposed at the same time as the Observable.
 *
 * <span class="informal">Use it when you catch yourself cleaning up after an Observable.</span>
 *
 * `using` is a factory operator, which accepts two functions. First function returns a disposable resource.
 * It can be an arbitrary object that implements `unsubscribe` method. Second function will be injected with
 * that object and should return an Observable. That Observable can use resource object during its execution.
 * Both functions passed to `using` will be called every time someone subscribes - neither an Observable nor
 * resource object will be shared in any way between subscriptions.
 *
 * When Observable returned by `using` is subscribed, Observable returned from the second function will be subscribed
 * as well. All its notifications (nexted values, completion and error events) will be emitted unchanged by the output
 * Observable. If however someone unsubscribes from the Observable or source Observable completes or errors by itself,
 * the `unsubscribe` method on resource object will be called. This can be used to do any necessary clean up, which
 * otherwise would have to be handled by hand. Note that complete or error notifications are not emitted when someone
 * cancels subscription to an Observable via `unsubscribe`, so `using` can be used as a hook, allowing you to make
 * sure that all resources which need to exist during an Observable execution will be disposed at appropriate time.
 *
 * @see {@link defer}
 *
 * @param {function(): ISubscription} resourceFactory A function which creates any resource object
 * that implements `unsubscribe` method.
 * @param {function(resource: ISubscription): Observable<T>} observableFactory A function which
 * creates an Observable, that can use injected resource object.
 * @return {Observable<T>} An Observable that behaves the same as Observable returned by `observableFactory`, but
 * which - when completed, errored or unsubscribed - will also call `unsubscribe` on created resource object.
 */
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? from_1.from(result) : empty_1.EMPTY;
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = /** @class */ (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AnimationFrameScheduler = /** @class */ (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var VirtualTimeScheduler = /** @class */ (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = /** @class */ (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        // If an action is rescheduled, we save allocations by mutating its state,
        // pushing it to the end of the scheduler queue, and recycling the action.
        // But since the VirtualTimeScheduler is used for testing, VirtualActions
        // must be immutable so they can be inspected later.
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/animationFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/animationFrame.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationFrameAction_1 = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js");
var AnimationFrameScheduler_1 = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js");
/**
 *
 * Animation Frame Scheduler
 *
 * <span class="informal">Perform task when `window.requestAnimationFrame` would fire</span>
 *
 * When `animationFrame` scheduler is used with delay, it will fall back to {@link async} scheduler
 * behaviour.
 *
 * Without delay, `animationFrame` scheduler can be used to create smooth browser animations.
 * It makes sure scheduled task will happen just before next browser content repaint,
 * thus performing animations as efficiently as possible.
 *
 * @example <caption>Schedule div height animation</caption>
 * const div = document.querySelector('.some-div');
 *
 * Rx.Scheduler.animationFrame.schedule(function(height) {
 *   div.style.height = height + "px";
 *
 *   this.schedule(height + 1);  // `this` references currently executing Action,
 *                               // which we reschedule with new state
 * }, 0, 0);
 *
 * // You will see .some-div element growing in height
 *
 *
 * @static true
 * @name animationFrame
 * @owner Scheduler
 */
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObservable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObservable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
/**
 * Tests to see if the object is an RxJS {@link Observable}
 * @param obj the object to test
 */
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
exports.isObservable = isObservable;
//# sourceMappingURL=isObservable.js.map

/***/ })

}]);
//# sourceMappingURL=app-components-incentive-incentive-request-incentive-request-module~app-components-incentive-tax-exe~8fce2145.js.map