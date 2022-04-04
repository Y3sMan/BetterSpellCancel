import { printConsole, once, Game } from "@skyrim-platform/skyrim-platform";
import { hooks } from  "skyrimPlatform";

var r = false
var r_equipped
var r_event = ''
var l = false
var l_equipped
var l_event = 'WeapOutLeftReplaceForceEquip'
export function pl() { return Game.getPlayer(); }
hooks.sendAnimationEvent.add({
    enter(ctx) {
        let e = ctx.animEventName
        if ( e.toLowerCase().includes('mrh_spell') && e.toLowerCase().includes('start') ) { r = true };
        if ( e.toLowerCase().includes('mrh_spellrelease_event') ) { r = false };

        if ( (e.toLowerCase().includes('mlh_spell') && e.toLowerCase().includes('start')) || (e.toLowerCase().includes('dualmagic_spell') && e.toLowerCase().includes('start')) ) { l = true };
        if ( e.toLowerCase().includes('mlh_spellrelease_event') ) { l = false };
        once('update', () => {
            l_equipped = pl().getEquippedItemType(1)
            r_equipped = pl().getEquippedItemType(0)
            if ( l_equipped == 9 && r_equipped == 9 ){ l_event = 'MagicForceEquip'; r_event = 'MagicForceEquip'}
            else if ( l_equipped != 9 && r_equipped == 9){ l_event = 'WeapOutLeftReplaceForceEquip'}
            else if ( l_equipped == 9 && r_equipped != 9){ r_event = 'magic_equip'}
        });
        if ( e.toLowerCase().includes('unequip')) { 
            if ( r ) { ctx.animEventName = r_event; r = false;  };
            if ( l ) { ctx.animEventName = l_event; l = false;  };
        }
    },
    leave() {}
},  0x14, 0x14); // filter out non-player events
