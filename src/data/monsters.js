
export const Monsters = [
  {
    "type": "monsters",
    "id": "acidicGlavenus",
    "attributes": {
      "name": "Acidic Glavenus (Crystallized)",
      "slug": "acidic-glavenus",
      "order": 46,
      "expansion": "MHWI",
      "physiology": {
        "fire": 3,
        "water": 1,
        "thunder": 2,
        "ice": 1,
        "dragon": 2,
        "dragonAlt": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Back",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Forearms",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "defenseDown"
          }
        ]
      }
    },
    "icon": "acidic_glavenus_icon.png"
  },
  {
    "type": "monsters",
    "id": "ancientLeshen",
    "attributes": {
      "name": "Ancient Leshen",
      "slug": "ancient-leshen",
      "order": 83,
      "expansion": "MHW",
      "physiology": {
        "fire": 3,
        "water": 0,
        "thunder": 2,
        "ice": 1,
        "dragon": 2,
        "blast": 1,
        "stun": 1,
        "poison": 2,
        "sleep": 0,
        "paralysis": 1
      },
      "weaknesses": [
        {
          "area": "Antlers",
          "type": "Weakpoint",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Head",
          "type": "BreakableX2"
        },
        {
          "area": "Body",
          "type": "Breakable"
        },
        {
          "area": "Legs",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "relict"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "bleeding"
          }
        ]
      }
    },
    "icon": "ancient_leshen_icon.png"
  },
  {
    "type": "monsters",
    "id": "anjanath",
    "attributes": {
      "name": "Anjanath",
      "slug": "anjanath",
      "order": 7,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 3,
        "thunder": 2,
        "ice": 2,
        "dragon": 1,
        "blast": 1,
        "stun": 2,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Hindclaws",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "anjanath_icon.png"
  },
  {
    "type": "monsters",
    "id": "banbaro",
    "attributes": {
      "name": "Banbaro",
      "slug": "banbaro",
      "order": 35,
      "expansion": "MHWI",
      "physiology": {
        "fire": 2,
        "water": 0,
        "thunder": 1,
        "ice": 0,
        "dragon": 3,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 3,
        "stun": 3
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 1,
          "blunt": 2,
          "ammo": 1
        },
        {
          "area": "Hindlegs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "iceBlight"
          },
          {
            "type": "ailment",
            "id": "waterBlight"
          }
        ]
      }
    },
    "icon": "banbaro_icon.png"
  },
  {
    "type": "monsters",
    "id": "barioth",
    "attributes": {
      "name": "Barioth",
      "slug": "barioth",
      "order": 39,
      "expansion": "MHWI",
      "physiology": {
        "fire": 3,
        "water": 0,
        "thunder": 2,
        "ice": 0,
        "dragon": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 1,
          "blunt": 2,
          "ammo": 1
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 1,
          "ammo": 2
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "iceBlight"
          }
        ]
      }
    },
    "icon": "barioth_icon.png"
  },
  {
    "type": "monsters",
    "id": "barroth",
    "attributes": {
      "name": "Barroth (Mud)",
      "slug": "barroth",
      "order": 4,
      "expansion": "MHW",
      "physiology": {
        "fire": 3,
        "fireAlt": 0,
        "water": 0,
        "waterAlt": 3,
        "thunder": 0,
        "ice": 2,
        "dragon": 1,
        "blast": 3,
        "stun": 1,
        "poison": 3,
        "sleep": 2,
        "paralysis": 3
      },
      "weaknesses": [
        {
          "area": "Arms",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Head",
          "type": "Breakable"
        },
        {
          "area": "Hindfeet",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "waterBlight"
          }
        ]
      }
    },
    "icon": "barroth_icon.png"
  },
  {
    "type": "monsters",
    "id": "bazelgeuse",
    "attributes": {
      "name": "Bazelgeuse",
      "slug": "bazelgeuse",
      "order": 21,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 3,
        "ice": 2,
        "dragon": 2,
        "blast": 1,
        "stun": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 1,
          "blunt": 1,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "bazelgeuse_icon.png"
  },
  {
    "type": "monsters",
    "id": "behemoth",
    "attributes": {
      "name": "Behemoth",
      "slug": "behemoth",
      "order": 81,
      "expansion": "MHW",
      "physiology": {
        "fire": 1,
        "water": 2,
        "thunder": 1,
        "ice": 2,
        "dragon": 3,
        "blast": 2,
        "stun": 2,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Forearms",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "thunderBlight"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "bleeding"
          }
        ]
      }
    },
    "icon": "behemoth_icon.png"
  },
  {
    "type": "monsters",
    "id": "bruteTigrex",
    "attributes": {
      "name": "Brute Tigrex",
      "slug": "brute-tigrex",
      "order": 58,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 3,
        "thunder": 2,
        "ice": 1,
        "dragon": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forearms",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "waterBlight"
          }
        ]
      }
    },
    "icon": "brute_tigrex_icon.png"
  },
  {
    "type": "monsters",
    "id": "coralPukeiPukei",
    "attributes": {
      "name": "Coral Pukei-Pukei",
      "slug": "coral-pukei-pukei",
      "order": 38,
      "expansion": "MHWI",
      "physiology": {
        "fire": 1,
        "water": 0,
        "thunder": 2,
        "ice": 3,
        "dragon": 1,
        "poison": 3,
        "sleep": 2,
        "paralysis": 2,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "birdWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "waterBlight"
          }
        ]
      }
    },
    "icon": "coral_pukei-pukei_icon.png"
  },
  {
    "type": "monsters",
    "id": "deviljho",
    "attributes": {
      "name": "Deviljho",
      "slug": "deviljho",
      "order": 22,
      "expansion": "MHW",
      "physiology": {
        "fire": 2,
        "water": 2,
        "thunder": 3,
        "ice": 1,
        "dragon": 3,
        "blast": 2,
        "stun": 2,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Stomach",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "dragonBlight"
          },
          {
            "type": "ailment",
            "id": "defenseDown"
          }
        ]
      }
    },
    "icon": "deviljho_icon.png"
  },
  {
    "type": "monsters",
    "id": "beotodus",
    "attributes": {
      "name": "Beotodus",
      "slug": "beotodus",
      "order": 34,
      "expansion": "MHWI",
      "physiology": {
        "fire": 3,
        "water": 1,
        "thunder": 2,
        "ice": 0,
        "dragon": 0,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 3,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Hindfins",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "piscineWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "iceBlight"
          }
        ]
      }
    },
    "icon": "beotodus_icon.png"
  },
  {
    "type": "monsters",
    "id": "blackveilVaalHazak",
    "attributes": {
      "name": "Blackveil Vaal Hazak",
      "slug": "blackveil-vaal-hazak",
      "order": 50,
      "expansion": "MHWI",
      "physiology": {
        "fire": 2,
        "water": 0,
        "thunder": 1,
        "ice": 1,
        "dragon": 2,
        "poison": 1,
        "sleep": 1,
        "paralysis": 1,
        "blast": 2,
        "stun": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 1,
          "ammo": 1
        }
      ],
      "breakpoints": [
        {
          "area": "Chest",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "effluvialBuildup"
          }
        ]
      }
    },
    "icon": "blackveil_vaal_hazak_icon.png"
  },
  {
    "type": "monsters",
    "id": "brachydios",
    "attributes": {
      "name": "Brachydios",
      "slug": "brachydios",
      "order": 43,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 2,
        "thunder": 1,
        "ice": 3,
        "dragon": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 1,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 2,
          "ammo": 3
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          }
        ]
      }
    },
    "icon": "brachydios_icon.png"
  },
  {
    "type": "monsters",
    "id": "diablos",
    "attributes": {
      "name": "Diablos",
      "slug": "diablos",
      "order": 16,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 2,
        "thunder": 1,
        "ice": 3,
        "dragon": 2,
        "blast": 2,
        "stun": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 3
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 1,
          "ammo": 3
        },
        {
          "area": "Stomach",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        },
        {
          "area": "Horns",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          }
        ]
      }
    },
    "icon": "diablos_icon.png"
  },
  {
    "type": "monsters",
    "id": "blackDiablos",
    "attributes": {
      "name": "Black Diablos",
      "slug": "black-diablos",
      "order": 26,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 2,
        "thunder": 1,
        "ice": 3,
        "dragon": 0,
        "blast": 2,
        "stun": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 3
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 1,
          "ammo": 3
        },
        {
          "area": "Stomach",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        },
        {
          "area": "Horns",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          }
        ]
      }
    },
    "icon": "black_diablos_icon.png"
  },
  {
    "type": "monsters",
    "id": "dodogama",
    "attributes": {
      "name": "Dodogama",
      "slug": "dodogama",
      "order": 19,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 2,
        "thunder": 3,
        "ice": 2,
        "dragon": 1,
        "blast": 1,
        "stun": 2,
        "poison": 3,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Foreclaws",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "blastBlight"
          }
        ]
      }
    },
    "icon": "dodogama_icon.png"
  },
  {
    "type": "monsters",
    "id": "ebonyOdogaron",
    "attributes": {
      "name": "Ebony Odogaron",
      "slug": "ebony-odogaron",
      "order": 47,
      "expansion": "MHWI",
      "physiology": {
        "fire": 2,
        "water": 3,
        "thunder": 2,
        "ice": 2,
        "dragon": 1,
        "poison": 3,
        "sleep": 2,
        "paralysis": 3,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forearms",
          "type": "Breakable",
          "cut": 1,
          "blunt": 2,
          "ammo": 1
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 1,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Hindlegs",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "bleeding"
          },
          {
            "type": "ailment",
            "id": "dragonBlight"
          }
        ]
      }
    },
    "icon": "ebony_odogaron_icon.png"
  },
  {
    "type": "monsters",
    "id": "fulgurAnjanath",
    "attributes": {
      "name": "Fulgur Anjanath",
      "slug": "fulgur-anjanath",
      "order": 45,
      "expansion": "MHWI",
      "physiology": {
        "fire": 2,
        "water": 2,
        "waterAlt": 3,
        "thunder": 0,
        "ice": 3,
        "iceAlt": 2,
        "dragon": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 1,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Hindfeet",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "thunderBlight"
          }
        ]
      }
    },
    "icon": "fulgur_anjanath_icon.png"
  },
  {
    "type": "monsters",
    "id": "furiousRajang",
    "attributes": {
      "name": "Furious Rajang",
      "slug": "furious-rajang",
      "order": 63,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 0,
        "ice": 3,
        "dragon": 0,
        "poison": 1,
        "sleep": 1,
        "paralysis": 1,
        "blast": 2,
        "stun": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "BreakableX2",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Hands",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedBeast"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "thunderBlight"
          }
        ]
      }
    },
    "icon": "furious_rajang_icon.png"
  },
  {
    "type": "monsters",
    "id": "glavenus",
    "attributes": {
      "name": "Glavenus",
      "slug": "glavenus",
      "order": 41,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 3,
        "thunder": 1,
        "ice": 2,
        "dragon": 2,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Back",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Foreclaws",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "glavenus_icon.png"
  },
  {
    "type": "monsters",
    "id": "girrosGreat",
    "attributes": {
      "name": "Great Girros",
      "slug": "great-girros",
      "order": 11,
      "expansion": "MHW",
      "physiology": {
        "fire": 2,
        "water": 3,
        "thunder": 0,
        "ice": 2,
        "dragon": 1,
        "blast": 2,
        "stun": 2,
        "poison": 2,
        "sleep": 3,
        "paralysis": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Foreclaws",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 1
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "paralysis"
          }
        ]
      }
    },
    "icon": "great_girros_icon.png"
  },
  {
    "type": "monsters",
    "id": "jagrasGreat",
    "attributes": {
      "name": "Great Jagras",
      "slug": "great-jagras",
      "order": 1,
      "expansion": "MHW",
      "physiology": {
        "fire": 3,
        "water": 0,
        "thunder": 2,
        "ice": 2,
        "dragon": 1,
        "blast": 3,
        "stun": 3,
        "poison": 3,
        "sleep": 3,
        "paralysis": 3
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Stomach",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Foreclaws",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedWyvern"
        }
      }
    },
    "icon": "great_jagras_icon.png"
  },
  {
    "type": "monsters",
    "id": "goldRathian",
    "attributes": {
      "name": "Gold Rathian",
      "slug": "gold-rathian",
      "order": 59,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 2,
        "thunder": 3,
        "ice": 1,
        "dragon": 0,
        "poison": 1,
        "sleep": 2,
        "paralysis": 2,
        "blast": 1,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Legs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Head",
          "type": "Breakable"
        },
        {
          "area": "Torso",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "poison"
          }
        ]
      }
    },
    "icon": "gold_rathian_icon.png"
  },
  {
    "type": "monsters",
    "id": "jyuratodus",
    "attributes": {
      "name": "Jyuratodus (Mud)",
      "slug": "jyuratodus",
      "order": 5,
      "expansion": "MHW",
      "physiology": {
        "fire": 1,
        "fireAlt": 0,
        "water": 0,
        "waterAlt": 3,
        "thunder": 3,
        "thunderAlt": 0,
        "ice": 1,
        "dragon": 1,
        "blast": 1,
        "stun": 3,
        "poison": 2,
        "sleep": 1,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        },
        {
          "area": "Hindfins",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "piscineWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "waterBlight"
          }
        ]
      }
    },
    "icon": "jyuratodus_icon.png"
  },
  {
    "type": "monsters",
    "id": "kirin",
    "attributes": {
      "name": "Kirin",
      "slug": "kirin",
      "order": 17,
      "expansion": "MHW",
      "physiology": {
        "fire": 3,
        "water": 2,
        "thunder": 0,
        "ice": 2,
        "dragon": 1,
        "blast": 2,
        "stun": 1,
        "poison": 1,
        "sleep": 2,
        "paralysis": 0
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Horn",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "thunderBlight"
          }
        ]
      }
    },
    "icon": "kirin_icon.png"
  },
  {
    "type": "monsters",
    "id": "kuluYaKu",
    "attributes": {
      "name": "Kulu-Ya-Ku",
      "slug": "kulu-ya-ku",
      "order": 2,
      "expansion": "MHW",
      "physiology": {
        "fire": 2,
        "water": 3,
        "thunder": 2,
        "ice": 2,
        "dragon": 2,
        "blast": 2,
        "stun": 2,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Foreclaws",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "birdWyvern"
        }
      }
    },
    "icon": "kulu-ya-ku_icon.png"
  },
  {
    "type": "monsters",
    "id": "kulveTaroth",
    "attributes": {
      "name": "Kulve Taroth (Golden)",
      "slug": "kulve-taroth",
      "order": 32,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "fireAlt": 1,
        "water": 2,
        "thunder": 0,
        "thunderAlt": 3,
        "ice": 3,
        "iceAlt": 0,
        "dragon": 2,
        "dragonAlt": 1,
        "blast": 1,
        "stun": 1,
        "poison": 1,
        "sleep": 1,
        "paralysis": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Foreclaws",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Gold Plating",
          "type": "Breakable"
        },
        {
          "area": "Horns",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "kulve_taroth_icon.png"
  },
  {
    "type": "monsters",
    "id": "kushalaDaora",
    "attributes": {
      "name": "Kushala Daora",
      "slug": "kushala-daora",
      "order": 30,
      "expansion": "MHW",
      "physiology": {
        "fire": 1,
        "water": 0,
        "thunder": 3,
        "ice": 0,
        "dragon": 2,
        "blast": 3,
        "stun": 2,
        "poison": 3,
        "sleep": 1,
        "paralysis": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Wings",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          }
        ]
      }
    },
    "icon": "kushala_daora_icon.png"
  },
  {
    "type": "monsters",
    "id": "lavasioth",
    "attributes": {
      "name": "Lavasioth (Hard)",
      "slug": "lavasioth",
      "order": 23,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "fireAlt": 1,
        "water": 3,
        "waterAlt": 2,
        "thunder": 2,
        "thunderAlt": 0,
        "ice": 2,
        "iceAlt": 0,
        "dragon": 1,
        "blast": 1,
        "stun": 2,
        "poison": 3,
        "sleep": 1,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Stomach",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        },
        {
          "area": "Hindfins",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "piscineWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "lavasioth_icon.png"
  },
  {
    "type": "monsters",
    "id": "leshen",
    "attributes": {
      "name": "Leshen",
      "slug": "leshen",
      "order": 82,
      "expansion": "MHW",
      "physiology": {
        "fire": 3,
        "water": 0,
        "thunder": 2,
        "ice": 1,
        "dragon": 2,
        "blast": 2,
        "stun": 1,
        "poison": 3,
        "sleep": 0,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Antlers",
          "type": "Weakpoint",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Head",
          "type": "BreakableX2"
        },
        {
          "area": "Body",
          "type": "Breakable"
        },
        {
          "area": "Legs",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "relict"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "bleeding"
          }
        ]
      }
    },
    "icon": "leshen_icon.png"
  },
  {
    "type": "monsters",
    "id": "legiana",
    "attributes": {
      "name": "Legiana",
      "slug": "legiana",
      "order": 13,
      "expansion": "MHW",
      "physiology": {
        "fire": 2,
        "water": 1,
        "thunder": 3,
        "ice": 0,
        "dragon": 1,
        "blast": 2,
        "stun": 2,
        "poison": 3,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "iceBlight"
          }
        ]
      }
    },
    "icon": "legiana_icon.png"
  },
  {
    "type": "monsters",
    "id": "lunastra",
    "attributes": {
      "name": "Lunastra",
      "slug": "lunastra",
      "order": 29,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 1,
        "ice": 3,
        "dragon": 2,
        "blast": 2,
        "stun": 2,
        "poison": 1,
        "sleep": 1,
        "paralysis": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 3
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "lunastra_icon.png"
  },
  {
    "type": "monsters",
    "id": "namielle",
    "attributes": {
      "name": "Namielle",
      "slug": "namielle",
      "order": 51,
      "expansion": "MHWI",
      "physiology": {
        "fire": 3,
        "water": 0,
        "thunder": 0,
        "ice": 1,
        "dragon": 2,
        "poison": 3,
        "sleep": 1,
        "paralysis": 1,
        "blast": 3,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Chest",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Wings",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "thunderBlight"
          },
          {
            "type": "ailment",
            "id": "waterBlight"
          }
        ]
      }
    },
    "icon": "namielle_icon.png"
  },
  {
    "type": "monsters",
    "id": "nargacuga",
    "attributes": {
      "name": "Nargacuga",
      "slug": "nargacuga",
      "order": 40,
      "expansion": "MHWI",
      "physiology": {
        "fire": 2,
        "water": 0,
        "thunder": 3,
        "ice": 1,
        "dragon": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Hind",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Foreclaws",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "bleeding"
          }
        ]
      }
    },
    "icon": "nargacuga_icon.png"
  },
  {
    "type": "monsters",
    "id": "nergigante",
    "attributes": {
      "name": "Nergigante",
      "slug": "nergigante",
      "order": 27,
      "expansion": "MHW",
      "physiology": {
        "fire": 1,
        "water": 1,
        "thunder": 3,
        "ice": 1,
        "dragon": 2,
        "blast": 2,
        "stun": 2,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Forearms",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Horns",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          }
        ]
      }
    },
    "icon": "nergigante_icon.png"
  },
  {
    "type": "monsters",
    "id": "nightshadePaolumu",
    "attributes": {
      "name": "Nightshade Paolumu",
      "slug": "nightshade-paolumu",
      "order": 37,
      "expansion": "MHWI",
      "physiology": {
        "fire": 2,
        "water": 3,
        "thunder": 1,
        "ice": 1,
        "dragon": 0,
        "poison": 2,
        "sleep": 1,
        "paralysis": 2,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Air Sac",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Stomach",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Wings",
          "type": "Breakable"
        },
        {
          "area": "Back",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "sleep"
          }
        ]
      }
    },
    "icon": "nightshade_paolumu_icon.png"
  },
  {
    "type": "monsters",
    "id": "odogaron",
    "attributes": {
      "name": "Odogaron",
      "slug": "odogaron",
      "order": 14,
      "expansion": "MHW",
      "physiology": {
        "fire": 1,
        "water": 1,
        "thunder": 2,
        "ice": 3,
        "dragon": 0,
        "blast": 2,
        "stun": 2,
        "poison": 1,
        "sleep": 2,
        "paralysis": 3
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Hindlegs",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "bleeding"
          }
        ]
      }
    },
    "icon": "odogaron_icon.png"
  },
  {
    "type": "monsters",
    "id": "paolumu",
    "attributes": {
      "name": "Paolumu",
      "slug": "paolumu",
      "order": 10,
      "expansion": "MHW",
      "physiology": {
        "fire": 3,
        "water": 0,
        "thunder": 2,
        "ice": 1,
        "dragon": 1,
        "blast": 3,
        "stun": 3,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Air Sac",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Wings",
          "type": "Breakable"
        },
        {
          "area": "Back",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          }
        ]
      }
    },
    "icon": "paolumu_icon.png"
  },
  {
    "type": "monsters",
    "id": "pukeiPukei",
    "attributes": {
      "name": "Pukei-Pukei",
      "slug": "pukei-pukei",
      "order": 3,
      "expansion": "MHW",
      "physiology": {
        "fire": 2,
        "water": 0,
        "thunder": 3,
        "ice": 2,
        "dragon": 1,
        "blast": 2,
        "stun": 2,
        "poison": 1,
        "sleep": 3,
        "paralysis": 3
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "birdWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "poison"
          }
        ]
      }
    },
    "icon": "pukei-pukei_icon.png"
  },
  {
    "type": "monsters",
    "id": "radobaan",
    "attributes": {
      "name": "Radobaan",
      "slug": "radobaan",
      "order": 12,
      "expansion": "MHW",
      "physiology": {
        "fire": 1,
        "water": 1,
        "thunder": 1,
        "ice": 2,
        "dragon": 3,
        "blast": 3,
        "stun": 2,
        "poison": 2,
        "sleep": 1,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Hindlegs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "sleep"
          }
        ]
      }
    },
    "icon": "radobaan_icon.png"
  },
  {
    "type": "monsters",
    "id": "ragingBrachydios",
    "attributes": {
      "name": "Raging Brachydios",
      "slug": "raging-brachydios",
      "order": 64,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 2,
        "thunder": 1,
        "ice": 3,
        "dragon": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 1,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 3
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "blastscourge"
          }
        ]
      }
    },
    "icon": "raging_brachydios_icon.png"
  },
  {
    "type": "monsters",
    "id": "rajang",
    "attributes": {
      "name": "Rajang",
      "slug": "rajang",
      "order": 61,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 0,
        "ice": 3,
        "dragon": 0,
        "poison": 1,
        "sleep": 1,
        "paralysis": 1,
        "blast": 2,
        "stun": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Tail",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Hands",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedBeast"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "thunderBlight"
          }
        ]
      }
    },
    "icon": "rajang_icon.png"
  },
  {
    "type": "monsters",
    "id": "rathalos",
    "attributes": {
      "name": "Rathalos",
      "slug": "rathalos",
      "order": 15,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 2,
        "ice": 1,
        "dragon": 3,
        "blast": 1,
        "stun": 2,
        "poison": 1,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "poison"
          }
        ]
      }
    },
    "icon": "rathalos_icon.png"
  },
  {
    "type": "monsters",
    "id": "azureRathalos",
    "attributes": {
      "name": "Azure Rathalos",
      "slug": "azure-rathalos",
      "order": 25,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 1,
        "ice": 2,
        "dragon": 3,
        "blast": 1,
        "stun": 2,
        "poison": 1,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "poison"
          }
        ]
      }
    },
    "icon": "azure_rathalos_icon.png"
  },
  {
    "type": "monsters",
    "id": "rathian",
    "attributes": {
      "name": "Rathian",
      "slug": "rathian",
      "order": 8,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 2,
        "ice": 1,
        "dragon": 3,
        "blast": 1,
        "stun": 3,
        "poison": 1,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "poison"
          }
        ]
      }
    },
    "icon": "rathian_icon.png"
  },
  {
    "type": "monsters",
    "id": "pinkRathian",
    "attributes": {
      "name": "Pink Rathian",
      "slug": "pink-rathian",
      "order": 20,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 2,
        "ice": 1,
        "dragon": 3,
        "blast": 1,
        "stun": 3,
        "poison": 1,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "poison"
          }
        ]
      }
    },
    "icon": "pink_rathian_icon.png"
  },
  {
    "type": "monsters",
    "id": "ruinerNergigante",
    "attributes": {
      "name": "Ruiner Nergigante",
      "slug": "ruiner-nergigante",
      "order": 53,
      "expansion": "MHWI",
      "physiology": {
        "fire": 1,
        "water": 1,
        "thunder": 2,
        "ice": 1,
        "dragon": 3,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 3,
        "stun": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forearms",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Horns",
          "type": "BreakableX2"
        },
        {
          "area": "Wings",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          }
        ]
      }
    },
    "icon": "ruiner_nergigante_icon.png"
  },
  {
    "type": "monsters",
    "id": "safiJiiva",
    "attributes": {
      "name": "Safi'jiiva",
      "slug": "safi-jiiva",
      "order": 65,
      "expansion": "MHWI",
      "physiology": {
        "fire": 2,
        "water": 2,
        "thunder": 2,
        "ice": 2,
        "dragon": 2,
        "dragonAlt": 3,
        "poison": 3,
        "sleep": 1,
        "paralysis": 2,
        "blast": 3,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 1
        },
        {
          "area": "Foreclaws",
          "type": "Breakable",
          "cut": 3,
          "blunt": 1,
          "ammo": 1
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 1,
          "blunt": 2,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "safi'jiiva_icon.png"
  },
  {
    "type": "monsters",
    "id": "savageDeviljho",
    "attributes": {
      "name": "Savage Deviljho",
      "slug": "savage-deviljho",
      "order": 52,
      "expansion": "MHWI",
      "physiology": {
        "fire": 2,
        "water": 2,
        "thunder": 3,
        "ice": 1,
        "dragon": 3,
        "poison": 3,
        "sleep": 3,
        "paralysis": 3,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Chest",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 1
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "defenseDown"
          },
          {
            "type": "ailment",
            "id": "dragonBlight"
          }
        ]
      }
    },
    "icon": "savage_deviljho_icon.png"
  },
  {
    "type": "monsters",
    "id": "scarredYianGaruga",
    "attributes": {
      "name": "Scarred Yian Garuga",
      "slug": "scarred-yian-garuga",
      "order": 57,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 3,
        "thunder": 0,
        "ice": 1,
        "dragon": 2,
        "poison": 1,
        "sleep": 1,
        "paralysis": 2,
        "blast": 3,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Ears",
          "type": "Breakable"
        },
        {
          "area": "Chest",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "birdWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "poison"
          },
          {
            "type": "ailment",
            "id": "stun"
          }
        ]
      }
    },
    "icon": "scarred_yian_garuga_icon.png"
  },
  {
    "type": "monsters",
    "id": "seethingBazelgeuse",
    "attributes": {
      "name": "Seething Bazelgeuse",
      "slug": "seething-bazelgeuse",
      "order": 49,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 2,
        "ice": 3,
        "dragon": 1,
        "poison": 2,
        "sleep": 3,
        "paralysis": 2,
        "blast": 1,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Chest",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Wings",
          "type": "Breakable"
        },
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "seething_bazelgeuse_icon.png"
  },
  {
    "type": "monsters",
    "id": "sharaIshvalda",
    "attributes": {
      "name": "Shara Ishvalda",
      "slug": "shara-ishvalda",
      "order": 54,
      "expansion": "MHWI",
      "physiology": {
        "fire": 1,
        "water": 2,
        "thunder": 0,
        "ice": 3,
        "dragon": 1,
        "poison": 2,
        "sleep": 0,
        "paralysis": 1,
        "blast": 3,
        "stun": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 3
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          }
        ]
      }
    },
    "icon": "shara_ishvalda_icon.png"
  },
  {
    "type": "monsters",
    "id": "shriekingLegiana",
    "attributes": {
      "name": "Shrieking Legiana",
      "slug": "shrieking-legiana",
      "order": 44,
      "expansion": "MHWI",
      "physiology": {
        "fire": 3,
        "water": 1,
        "thunder": 2,
        "ice": 0,
        "dragon": 1,
        "poison": 3,
        "sleep": 2,
        "paralysis": 2,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 3,
          "blunt": 2,
          "ammo": 1
        },
        {
          "area": "Chest",
          "type": "Breakable",
          "cut": 1,
          "blunt": 1,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "iceBlight"
          }
        ]
      }
    },
    "icon": "shrieking_legiana_icon.png"
  },
  {
    "type": "monsters",
    "id": "silverRathalos",
    "attributes": {
      "name": "Silver Rathalos",
      "slug": "silver-rathalos",
      "order": 60,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 3,
        "thunder": 2,
        "ice": 1,
        "dragon": 0,
        "poison": 1,
        "sleep": 2,
        "paralysis": 2,
        "blast": 1,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Legs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Head",
          "type": "Breakable"
        },
        {
          "area": "Torso",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "poison"
          }
        ]
      }
    },
    "icon": "silver_rathalos_icon.png"
  },
  {
    "type": "monsters",
    "id": "stygianZinogre",
    "attributes": {
      "name": "Stygian Zinogre",
      "slug": "stygian-zinogre",
      "order": 62,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "fireAlt": 1,
        "water": 0,
        "waterAlt": 2,
        "thunder": 1,
        "thunderAlt": 3,
        "ice": 0,
        "iceAlt": 1,
        "dragon": 0,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 3,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Back",
          "type": "Breakable",
          "cut": 1,
          "blunt": 1,
          "ammo": 1
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "thunderBlight"
          }
        ]
      }
    },
    "icon": "stygian_zinogre_icon.png"
  },
  {
    "type": "monsters",
    "id": "teostra",
    "attributes": {
      "name": "Teostra",
      "slug": "teostra",
      "order": 28,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 3,
        "thunder": 1,
        "ice": 3,
        "dragon": 1,
        "blast": 1,
        "stun": 2,
        "poison": 2,
        "sleep": 1,
        "paralysis": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "blastBlight"
          }
        ]
      }
    },
    "icon": "teostra_icon.png"
  },
  {
    "type": "monsters",
    "id": "tigrex",
    "attributes": {
      "name": "Tigrex",
      "slug": "tigrex",
      "order": 42,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 1,
        "thunder": 3,
        "ice": 1,
        "dragon": 2,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forearms",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "flyingWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "iceBlight"
          },
          {
            "type": "ailment",
            "id": "waterBlight"
          }
        ]
      }
    },
    "icon": "tigrex_icon.png"
  },
  {
    "type": "monsters",
    "id": "tobiKadachi",
    "attributes": {
      "name": "Tobi-Kadachi",
      "slug": "tobi-kadachi",
      "order": 6,
      "expansion": "MHW",
      "physiology": {
        "fire": 2,
        "water": 3,
        "thunder": 0,
        "ice": 2,
        "dragon": 1,
        "blast": 2,
        "stun": 2,
        "poison": 3,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Foreclaws",
          "type": "Breakable"
        },
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "thunderBlight"
          }
        ]
      }
    },
    "icon": "tobi-kadachi_icon.png"
  },
  {
    "type": "monsters",
    "id": "tzitziYaKu",
    "attributes": {
      "name": "Tzitzi-Ya-Ku",
      "slug": "tzitzi-ya-ku",
      "order": 9,
      "expansion": "MHW",
      "physiology": {
        "fire": 2,
        "water": 2,
        "thunder": 3,
        "ice": 3,
        "dragon": 2,
        "blast": 2,
        "stun": 2,
        "poison": 2,
        "sleep": 2,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "birdWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "stun"
          }
        ]
      }
    },
    "icon": "tzitzi-ya-ku_icon.png"
  },
  {
    "type": "monsters",
    "id": "uragaan",
    "attributes": {
      "name": "Uragaan",
      "slug": "uragaan",
      "order": 24,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 3,
        "thunder": 1,
        "ice": 2,
        "dragon": 2,
        "blast": 2,
        "stun": 3,
        "poison": 3,
        "sleep": 1,
        "paralysis": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Stomach",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        },
        {
          "area": "Tail",
          "type": "Severable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "sleep"
          }
        ]
      }
    },
    "icon": "uragaan_icon.png"
  },
  {
    "type": "monsters",
    "id": "vaalHazak",
    "attributes": {
      "name": "Vaal Hazak",
      "slug": "vaal-hazak",
      "order": 31,
      "expansion": "MHW",
      "physiology": {
        "fire": 3,
        "water": 0,
        "thunder": 1,
        "ice": 2,
        "dragon": 0,
        "dragonAlt": 3,
        "blast": 2,
        "stun": 2,
        "poison": 1,
        "sleep": 1,
        "paralysis": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 2,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Stomach",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 1
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 1,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Foreclaws",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "effluvialBuildup"
          }
        ]
      }
    },
    "icon": "vaal_hazak_icon.png"
  },
  {
    "type": "monsters",
    "id": "velkhana",
    "attributes": {
      "name": "Velkhana",
      "slug": "velkhana",
      "order": 48,
      "expansion": "MHWI",
      "physiology": {
        "fire": 3,
        "water": 1,
        "thunder": 2,
        "ice": 0,
        "dragon": 2,
        "poison": 2,
        "sleep": 1,
        "paralysis": 1,
        "blast": 3,
        "stun": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 1
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "iceBlight"
          }
        ]
      }
    },
    "icon": "velkhana_icon.png"
  },
  {
    "type": "monsters",
    "id": "viperTobiKadachi",
    "attributes": {
      "name": "Viper Tobi-Kadachi",
      "slug": "viper-tobi-kadachi",
      "order": 36,
      "expansion": "MHWI",
      "physiology": {
        "fire": 1,
        "water": 0,
        "thunder": 3,
        "ice": 2,
        "dragon": 1,
        "poison": 1,
        "sleep": 2,
        "paralysis": 1,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Back",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Tail",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "bruteWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "poison"
          },
          {
            "type": "ailment",
            "id": "noxiousPoison"
          },
          {
            "type": "ailment",
            "id": "paralysis"
          }
        ]
      }
    },
    "icon": "viper_tobi-kadachi_icon.png"
  },
  {
    "type": "monsters",
    "id": "xenoJiiva",
    "attributes": {
      "name": "Xeno'jiiva",
      "slug": "xeno-jiiva",
      "order": 33,
      "expansion": "MHW",
      "physiology": {
        "fire": 2,
        "water": 2,
        "thunder": 2,
        "ice": 2,
        "dragon": 2,
        "blast": 2,
        "stun": 1,
        "poison": 3,
        "sleep": 0,
        "paralysis": 1
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Foreclaws",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 1
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": [
        {
          "area": "Wings",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "dragonBlight"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "xenojiiva_icon.png"
  },
  {
    "type": "monsters",
    "id": "yianGaruga",
    "attributes": {
      "name": "Yian Garuga",
      "slug": "yian-garuga",
      "order": 56,
      "expansion": "MHWI",
      "physiology": {
        "fire": 0,
        "water": 3,
        "thunder": 0,
        "ice": 1,
        "dragon": 2,
        "poison": 1,
        "sleep": 1,
        "paralysis": 2,
        "blast": 3,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Wings",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 3,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Ears",
          "type": "Breakable"
        },
        {
          "area": "Chest",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "birdWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "strongRoar"
          },
          {
            "type": "ailment",
            "id": "fireBlight"
          },
          {
            "type": "ailment",
            "id": "poison"
          }
        ]
      }
    },
    "icon": "yian_garuga_icon.png"
  },
  {
    "type": "monsters",
    "id": "zinogre",
    "attributes": {
      "name": "Zinogre",
      "slug": "zinogre",
      "order": 55,
      "expansion": "MHWI",
      "physiology": {
        "fire": 1,
        "water": 2,
        "thunder": 0,
        "ice": 3,
        "dragon": 1,
        "poison": 2,
        "sleep": 2,
        "paralysis": 1,
        "blast": 2,
        "stun": 2
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        },
        {
          "area": "Forelegs",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Tail",
          "type": "Severable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        }
      ],
      "breakpoints": [
        {
          "area": "Back",
          "type": "Breakable"
        }
      ]
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "fangedWyvern"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "weakRoar"
          },
          {
            "type": "ailment",
            "id": "thunderBlight"
          }
        ]
      }
    },
    "icon": "zinogre_icon.png"
  },
  {
    "type": "monsters",
    "id": "zorahMagdaros",
    "attributes": {
      "name": "Zorah Magdaros",
      "slug": "zorah-magdaros",
      "order": 18,
      "expansion": "MHW",
      "physiology": {
        "fire": 0,
        "water": 3,
        "thunder": 1,
        "ice": 2,
        "dragon": 3,
        "blast": 0,
        "stun": 0,
        "poison": 0,
        "sleep": 0,
        "paralysis": 0
      },
      "weaknesses": [
        {
          "area": "Head",
          "type": "Breakable",
          "cut": 1,
          "blunt": 1,
          "ammo": 1
        },
        {
          "area": "Stomach",
          "type": "Breakable",
          "cut": 2,
          "blunt": 2,
          "ammo": 2
        },
        {
          "area": "Magmacore",
          "type": "Breakable",
          "cut": 3,
          "blunt": 3,
          "ammo": 3
        }
      ],
      "breakpoints": []
    },
    "relationships": {
      "species": {
        "data": {
          "type": "species",
          "id": "elderDragon"
        }
      },
      "ailments": {
        "data": [
          {
            "type": "ailment",
            "id": "fireBlight"
          }
        ]
      }
    },
    "icon": "zorah_magdaros_icon.png"
  }
]