"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTP_STATUS;
(function (HTTP_STATUS) {
    // Information responses
    HTTP_STATUS[HTTP_STATUS["CONTINUE"] = 100] = "CONTINUE";
    HTTP_STATUS[HTTP_STATUS["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HTTP_STATUS[HTTP_STATUS["PROCESSING"] = 102] = "PROCESSING";
    HTTP_STATUS[HTTP_STATUS["EARLY_HINTS"] = 103] = "EARLY_HINTS";
    // Successful responses
    HTTP_STATUS[HTTP_STATUS["OK"] = 200] = "OK";
    HTTP_STATUS[HTTP_STATUS["CREATED"] = 201] = "CREATED";
    HTTP_STATUS[HTTP_STATUS["ACCEPTED"] = 202] = "ACCEPTED";
    HTTP_STATUS[HTTP_STATUS["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HTTP_STATUS[HTTP_STATUS["NO_CONTENT"] = 204] = "NO_CONTENT";
    HTTP_STATUS[HTTP_STATUS["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HTTP_STATUS[HTTP_STATUS["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HTTP_STATUS[HTTP_STATUS["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HTTP_STATUS[HTTP_STATUS["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    HTTP_STATUS[HTTP_STATUS["IM_USED"] = 226] = "IM_USED";
    HTTP_STATUS[HTTP_STATUS["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HTTP_STATUS[HTTP_STATUS["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    // Redirection messages
    HTTP_STATUS[HTTP_STATUS["FOUND"] = 302] = "FOUND";
    HTTP_STATUS[HTTP_STATUS["SEE_OTHER"] = 303] = "SEE_OTHER";
    HTTP_STATUS[HTTP_STATUS["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HTTP_STATUS[HTTP_STATUS["USE_PROXY"] = 305] = "USE_PROXY";
    HTTP_STATUS[HTTP_STATUS["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HTTP_STATUS[HTTP_STATUS["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    // Client error responses
    HTTP_STATUS[HTTP_STATUS["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_STATUS[HTTP_STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTP_STATUS[HTTP_STATUS["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HTTP_STATUS[HTTP_STATUS["FORBIDDEN"] = 403] = "FORBIDDEN";
    HTTP_STATUS[HTTP_STATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_STATUS[HTTP_STATUS["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HTTP_STATUS[HTTP_STATUS["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HTTP_STATUS[HTTP_STATUS["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HTTP_STATUS[HTTP_STATUS["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HTTP_STATUS[HTTP_STATUS["CONFLICT"] = 409] = "CONFLICT";
    HTTP_STATUS[HTTP_STATUS["GONE"] = 410] = "GONE";
    HTTP_STATUS[HTTP_STATUS["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HTTP_STATUS[HTTP_STATUS["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HTTP_STATUS[HTTP_STATUS["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HTTP_STATUS[HTTP_STATUS["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HTTP_STATUS[HTTP_STATUS["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HTTP_STATUS[HTTP_STATUS["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    HTTP_STATUS[HTTP_STATUS["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HTTP_STATUS[HTTP_STATUS["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    HTTP_STATUS[HTTP_STATUS["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HTTP_STATUS[HTTP_STATUS["LOCKED"] = 423] = "LOCKED";
    HTTP_STATUS[HTTP_STATUS["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HTTP_STATUS[HTTP_STATUS["TOO_EARLY"] = 425] = "TOO_EARLY";
    HTTP_STATUS[HTTP_STATUS["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    HTTP_STATUS[HTTP_STATUS["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HTTP_STATUS[HTTP_STATUS["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HTTP_STATUS[HTTP_STATUS["UNASSIGNED"] = 420] = "UNASSIGNED";
    HTTP_STATUS[HTTP_STATUS["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    HTTP_STATUS[HTTP_STATUS["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    // Server error responses
    HTTP_STATUS[HTTP_STATUS["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HTTP_STATUS[HTTP_STATUS["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HTTP_STATUS[HTTP_STATUS["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HTTP_STATUS[HTTP_STATUS["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HTTP_STATUS[HTTP_STATUS["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HTTP_STATUS[HTTP_STATUS["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HTTP_STATUS[HTTP_STATUS["VARIANT_ALSO_NEGOCIATES"] = 506] = "VARIANT_ALSO_NEGOCIATES";
    HTTP_STATUS[HTTP_STATUS["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HTTP_STATUS[HTTP_STATUS["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    HTTP_STATUS[HTTP_STATUS["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    HTTP_STATUS[HTTP_STATUS["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(HTTP_STATUS = exports.HTTP_STATUS || (exports.HTTP_STATUS = {}));
var ucFirst = function (word) { return "" + word.slice(0, 1) + word.slice(1).toLowerCase(); };
var getTextRepresentation = function (code, status) {
    // First word is uppercase
    if (code === 200 || code === 226 || code == 414 || code === 505) {
        return code + " " + status.split('_').map(function (w, i) {
            if (i === 0) {
                return w.toUpperCase();
            }
            return ucFirst(w);
        }).join(' ');
    }
    // First join is a -
    if (code === 203 || code === 207) {
        return status.split('_').map(ucFirst).reduce(function (response, word, index) {
            if (index === 1) {
                return response + "-" + word;
            }
            return response + " " + word;
        }, "" + code);
    }
    return code + " " + status.split('_').map(ucFirst).join(' ');
};
exports.getStatus = function (code) {
    for (var status_1 in HTTP_STATUS) {
        if (parseInt(HTTP_STATUS[status_1], 10) === code) {
            return getTextRepresentation(code, status_1);
        }
    }
    return null;
};
exports.getCode = function (status) {
    for (var key in HTTP_STATUS) {
        if (status.toUpperCase() === key) {
            return parseInt(HTTP_STATUS[key], 10);
        }
    }
    return null;
};
