export const siren_config = {
    name: 'Maya',
    title: 'Siren',
    skill_layout: [
        {
            branch_name: 'motion',
            branch_color: 'green',
            tiers: {
                1: [0,     null,   1],
                2: [2,     null,   3],
                3: [4,     5,      6],
                4: [null,  7,      null],
                5: [null,  8,      null],
                6: [null,  9,      null],
            },
        },
        {
            branch_name: 'harmony',
            branch_color: 'blue',
            tiers: {
                1: [10,    null,   11],
                2: [12,    null,   13],
                3: [14,    15,     16],
                4: [null,  17,     null],
                5: [null,  18,     null],
                6: [null,  19,     null],
            },
        },
        {
            branch_name: 'cataclysm',
            branch_color: 'red',
            tiers: {
                1: [20,    null,   21],
                2: [22,    null,   23],
                3: [24,    25,     26],
                4: [null,  27,     null],
                5: [null,  28,     null],
                6: [null,  29,     null],
            },
        },
    ],
};