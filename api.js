(function () {
  'use strict';
  var cfg = window.VHMEN_CONFIG || {};

  function call(action) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fetch(cfg.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      credentials: 'omit',
      redirect: 'follow',
      cache: 'no-store',
      body: JSON.stringify({ action: action, args: args })
    }).then(function (response) {
      if (!response.ok) throw new Error('Server connection failed (' + response.status + ').');
      return response.json();
    });
  }

  window.VH = { call: call, config: cfg };
})();
