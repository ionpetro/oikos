// Explicit learning events for Pulse. No input autocapture or session recordings.
(() => {
  "use strict";
  if (location.hostname !== "oikos-azure-five.vercel.app") return;
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags identify setPersonProperties group resetGroups reset get_distinct_id get_session_id alias set_config startSessionRecording stopSessionRecording captureException opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init("phc_vaLWrWMYsHC74JbypY6kfzkvwFZu2dPpu65dtoLsPYP2", {
    api_host: "https://us.i.posthog.com", defaults: "2025-05-24",
    person_profiles: "identified_only", autocapture: false,
    capture_pageview: false, capture_pageleave: false,
    disable_session_recording: true, disable_surveys: true,
    capture_exceptions: false, capture_performance: false,
    before_send: event => {
      for (const k of ["$current_url", "$initial_current_url", "$referrer", "$initial_referrer"]) {
        if (event.properties[k]) { try { const u = new URL(event.properties[k]); event.properties[k] = u.origin + u.pathname; } catch { delete event.properties[k]; } }
      }
      return event;
    }
  });
  posthog.register({app: "oikos", surface: "web"});
  const allowed = new Set(["mode", "node_id", "lesson_id", "unit_id", "steps", "step_index", "q_type", "item_id", "correct", "score", "graded", "ms", "seconds", "accuracy", "perfect", "misses", "xp", "streak", "best_streak", "goal_xp", "today_xp", "lessons_done", "answered", "days_active", "onboarded", "first_visit", "first_source", "goal", "tab", "requeued"]);
  const track = (event, props = {}) => {
    const safe = {};
    for (const [k, v] of Object.entries(props)) if (allowed.has(k) && (v === null || ["string", "number", "boolean"].includes(typeof v))) safe[k] = v;
    try { posthog.capture(event, {...safe, app: "oikos", surface: "web"}); } catch { /* analytics never blocks learning */ }
  };
  window.PulseAnalytics = {track};
  track("$pageview");
  let first = false, source = "direct";
  try {
    const visitKey = "oikos" + ":analytics-visit:v1";
    let visit = JSON.parse(localStorage.getItem(visitKey) || "null");
    first = !visit;
    if (!visit) {
      try { const ref = new URL(document.referrer); if (ref.hostname !== location.hostname) source = ref.hostname; } catch { /* direct */ }
      visit = {source}; localStorage.setItem(visitKey, JSON.stringify(visit));
    }
    source = visit.source || "direct";
  } catch { /* storage blocked; still allow this page's events */ }
  track("app_opened", {first_visit:first, first_source:source});
})();
