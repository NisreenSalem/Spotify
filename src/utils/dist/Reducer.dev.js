"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var _Contants = require("./Contants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylistId: '0qABW869o7INRzy6YspyS9',
  currentPlaying: null,
  playerState: false,
  selectedPlaylist: null
};
exports.initialState = initialState;

var Reducer = function Reducer(state, action) {
  switch (action.type) {
    case _Contants.reducerCases.SET_TOKEN:
      return _objectSpread({}, state, {
        token: action.token
      });

    case _Contants.reducerCases.SET_USER:
      return _objectSpread({}, state, {
        userInfo: action.userInfo
      });

    case _Contants.reducerCases.SET_PLAYLISTS:
      return _objectSpread({}, state, {
        playlists: action.playlists
      });

    case _Contants.reducerCases.SET_PLAYING:
      return _objectSpread({}, state, {
        currentPlaying: action.currentPlaying
      });

    case _Contants.reducerCases.SET_PLAYER_STATE:
      return _objectSpread({}, state, {
        playerState: action.playerState
      });

    case _Contants.reducerCases.SET_PLAYLIST:
      return _objectSpread({}, state, {
        selectedPlaylist: action.selectedPlaylist
      });

    case _Contants.reducerCases.SET_PLAYLIST_ID:
      return _objectSpread({}, state, {
        selectedPlaylistId: action.selectedPlaylistId
      });

    default:
      return state;
  }
};

var _default = Reducer;
exports["default"] = _default;
//# sourceMappingURL=Reducer.dev.js.map
