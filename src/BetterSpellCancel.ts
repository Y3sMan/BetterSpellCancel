import { hooks } from  "skyrimPlatform";

var r = false
var l = false
hooks.sendAnimationEvent.add({
    enter(ctx) {
        let e = ctx.animEventName
        if ( e.toLowerCase().includes('mrh_spell') && e.toLowerCase().includes('start') ) { r = true };
        if ( (e.toLowerCase().includes('mlh_spell') && e.toLowerCase().includes('start')) || (e.toLowerCase().includes('dualmagic_spell') && e.toLowerCase().includes('start')) ) { l = true };
        if ( e.toLowerCase().includes('mrh_spellrelease_event') ) { r = false };
        if ( e.toLowerCase().includes('mlh_spellrelease_event') ) { l = false };
        if ( e.toLowerCase().includes('unequip')) { 
            if ( r ) { ctx.animEventName = 'MagicForceEquip'; r = false;  };
            if ( l ) { ctx.animEventName = 'MagicForceEquip'; l = false;  };
        }
    },
    leave() {}
},  0x14, 0x14); // filter out non-player events
