/*
* --- GUIDE TO WHAT AND HOW ---
*
* General problems to avoid during leveling:
* 1) JS math problems calculating numbers with floating point
*    EXAMPLES:
*       0.8 * 3 === 2.4     // false (2.4000000000000004)
*       0.8 * 6 === 4.8     // false (4.800000000000001)
*
* 2) Foresee the probability of changing stats without certain pattern
*    EXAMPLES:
*       - unexpected stats diminution/growth on certain levels
*
* 3) Reduce a paperwork with this document in case of future need for app expansion,
*    or reuse the document as API
*
* SOLUTION:
* To solve problems described above the parameter [custom_pattern] is added.
*
* So whenever [custom_pattern] is set to TRUE we expect to have fully specified leveling system
* for the specific skill from default level to the [max_level] with all modifiers.
*
* On the other hand if [custom_pattern] is set to FALSE we expect to have specified only
* default level modifiers which are modified by multiplying on a current skill level.
*
* */


export default {
    0: {
        id: 0,
        name: 'Ward',
        description: '+__mod_0__% Shield Capacity and -__mod_1__% Shield Recharge Delay per level.',
        max_value: 5,
        url: 'siren-motion-0.png',
        leveling: {
            0: {
                0: 5,
                1: 8,
            },
        },
    },
    1: {
        id: 1,
        name: 'Accelerate',
        description: '+__mod_0__% Gun Damage and +__mod_1__% Bullet Speed per level.',
        max_value: 5,
        url: 'siren-motion-1.png',
        leveling: {
            0: {
                0: 3,
                1: 4,
            },
        },
    },
    2: {
        id: 2,
        name: 'Suspension',
        description: 'Increase the duration of Phaselock by +__mod_0__s per level.',
        max_value: 5,
        url: 'siren-motion-2.png',
        leveling: {
            0: {
                0: 0.5,
            },
        },
    },
    3: {
        id: 3,
        name: 'Kinetic Reflection',
        description: 'Kill Skill. Killing an enemy causes you to deflect bullets against nearby enemies, reducing damage to you by __mod_0__% and dealing __mod_1__% damage per level for a short time.',
        max_value: 5,
        url: 'siren-motion-3.png',
        leveling: {
            0: {
                0: 10,
                1: 20,
            },
        },
    },
    4: {
        id: 4,
        name: 'Fleet',
        description: 'Your Movement Speed increases by +__mod_0__% per level while your shields are depleted.',
        max_value: 5,
        url: 'siren-motion-4.png',
        leveling: {
            0: {
                0: 10,
            },
        },
    },
    5: {
        id: 5,
        name: 'Converge',
        description: 'Your Phaselock ability now also pulls nearby enemies toward the original target.',
        max_value: 1,
        url: 'siren-motion-5.png',
    },
    6: {
        id: 6,
        name: 'Inertia',
        description: 'Kill Skill. Killing an enemy regenerates +__mod_0__% of your Shield per second and increases your Reload Speed by +__mod_1__% per level for a short time.',
        max_value: 5,
        url: 'siren-motion-6.png',
        custom_pattern: true,
        leveling: {
            0: {
                0: 0.8,
                1: 10,
            },
            1: {
                0: 0.8,
                1: 10,
            },
            2: {
                0: 1.6,
                1: 20,
            },
            3: {
                0: 2.4,
                1: 30,
            },
            4: {
                0: 3.2,
                1: 40,
            },
            5: {
                0: 4,
                1: 50,
            },
        },
    },
    7: {
        id: 7,
        name: 'Quicken',
        description: 'Increases the Cooldown Rate of your Phaselock\'s ability by __mod_0__%',
        max_value: 5,
        url: 'siren-motion-7.png',
        leveling: {
            0: {
                0: 6,
            },
        },
    },
    8: {
        id: 8,
        name: 'Sub-Sequence',
        description: 'When an enemy dies under the effect of Phaselock, there is a chance for your Phaselock to seek out and affect another target (__mod_0__% chance per level).',
        max_value: 5,
        url: 'siren-motion-8.png',
        leveling: {
            0: {
                0: 20,
            },
        },
    },
    9: {
        id: 9,
        name: 'Thoughtlock',
        description: 'Phaselock causes enemies to switch allegiance and fight amongst themselves. Additionally, Phaselock\'s duration is increased by 4s.',
        max_value: 1,
        url: 'siren-motion-9.png',
    },
    10: {
        id: 10,
        name: 'Mind\'s Eye',
        description: '+25% Critical Hit Damage and +25% Accuracy',
        max_value: 5,
        url: 'siren-harmony-0.png',
    },
    11: {
        id: 11,
        name: 'Sweet Release',
        description: 'Killing an enemy who is currently Phaselocked creates 1 Life Ord per level which automatically seeks out and heals you and your friends. The healing is stronger when you or your friend\'s health is low (up to 15% per Orb).',
        max_value: 5,
        url: 'siren-harmony-1.png',
    },
    12: {
        id: 12,
        name: 'Restoration',
        description: '+15% Maximum Health and attack allies to heal them for 30% of the attack damage.',
        max_value: 5,
        url: 'siren-harmony-2.png',
    },
    13: {
        id: 13,
        name: 'Wreck',
        description: '+10% Fire Rate and +6% Damage with guns per level while you have an enemy Phaselocked.',
        max_value: 5,
        url: 'siren-harmony-3.png',
    },
    14: {
        id: 14,
        name: 'Elated',
        description: 'You and your friends regenerate +5% health per second while you have an enemy Phaselocked.',
        max_value: 5,
        url: 'siren-harmony-4.png',
    },
    15: {
        id: 15,
        name: 'Res',
        description: 'You can instantly revive a friend in Fight For Your Life by using Phaselock on him/her. +35% Fight For Your Life time.',
        max_value: 1,
        url: 'siren-harmony-5.png',
    },
    16: {
        id: 16,
        name: 'Recompense',
        description: 'Taking Health damage has a 10% chance per level of dealing an equal amount of damage to your attacker.',
        max_value: 5,
        url: 'siren-harmony-6.png',
    },
    17: {
        id: 17,
        name: 'Sustenance',
        description: 'Regenerate up to +2% of your missing Health per second. The lower your Health the more powerful the regeneration.',
        max_value: 5,
        url: 'siren-harmony-7.png',
    },
    18: {
        id: 18,
        name: 'Life Tap',
        description: 'Kill Skill. Killing an enemy gives you +6% Life Steal for a short while.',
        max_value: 5,
        url: 'siren-harmony-8.png',
    },
    19: {
        id: 19,
        name: 'Scorn',
        description: 'Melee Override. Press [melee] to throw an Orb of Slag that constantly damages enemies near it. This ability has a 10 second cooldown. Pressing [melee] when Scorn is on cooldown will perform a regular melee attack.',
        max_value: 1,
        url: 'siren-harmony-9.png',
    },
    20: {
        id: 20,
        name: 'Flicker',
        description: '+6% Elemental Effect Chance per level.',
        max_value: 5,
        url: 'siren-cataclysm-0.png',
    },
    21: {
        id: 21,
        name: 'Foresight',
        description: 'Increases Magazine Size and Reload Speed with all weapon types. +4% Magazine Size and +5% Reload Speed per level.',
        max_value: 5,
        url: 'siren-cataclysm-1.png',
    },
    22: {
        id: 22,
        name: 'Immolate',
        description: 'Adds +10% Damage per level as Fire Damage to all shots fired when in Fight For Your Life.',
        max_value: 5,
        url: 'siren-cataclysm-2.png',
    },
    23: {
        id: 23,
        name: 'Helios',
        description: 'Phaselocking an enemy causes a fiery explosion, damaging all nearby enemies. 1 Helios Damage Rank per level.',
        max_value: 5,
        url: 'siren-cataclysm-3.png',
    },
    24: {
        id: 24,
        name: 'Chain Reaction',
        description: 'While you have an enemy Phaselocked all of your bullets that hit enemies have a 8% chance per level to ricochet and hit another nearby enemy.',
        max_value: 5,
        url: 'siren-cataclysm-4.png',
    },
    25: {
        id: 25,
        name: 'Cloud Kill',
        description: 'Shooting an enemy creates a lingering Acid Cloud, which lasts for 5 seconds, dealing constant Corrosive Damage to enemies who touch it. Only once Acid Cloud can be active at a time.',
        max_value: 1,
        url: 'siren-cataclysm-5.png',
    },
    26: {
        id: 26,
        name: 'Backdraft',
        description: 'Your melee attacks deal additional Fire Damage. Also, when your shields become depleted you create a fiery explosion, damaging nearby enemies. Your shields must fully recharge between explosions. 1 Backdraft Damage Rank per level',
        max_value: 5,
        url: 'siren-cataclysm-6.png',
    },
    27: {
        id: 27,
        name: 'Reaper',
        description: 'You deal +40% increased Gun Damage to any enemy who has more than 50% of his health remaining.',
        max_value: 5,
        url: 'siren-cataclysm-7.png',
    },
    28: {
        id: 28,
        name: 'Blight Phoenix',
        description: 'Kill Skill. Killing an enemy causes you to deal constant Fire and Corrosive Damage to nearby enemies for a short time. The damage is based on your Level and the Level of the Blight Phoenix.',
        max_value: 5,
        url: 'siren-cataclysm-8.png',
    },
    29: {
        id: 29,
        name: 'Ruin',
        description: 'Action Skill Augmentation. Phaselock now slags, corrodes and electrocutes all nearby enemies.',
        max_value: 1,
        url: 'siren-cataclysm-9.png',
    },
}