// import knight from "../img/classes/knight.png";
// import asssassin from "../img/classes/assassin.png";
// import barbarian from "../img/classes/barbarian.png";
// import cleric from "../img/classes/cleric.png";
// import druid from "../img/classes/druid.png";
// import elf from "../img/classes/elf.png";
// import mage from "../img/classes/mage.png";
// import paladin from "../img/classes/paladin.png";
// import ranger from "../img/classes/ranger.png";
// import rogue from "../img/classes/rogue.png";
// import warrior from "../img/classes/warrior.png";

export const charactersClasses = [
  {
    id: 1,
    name: "Knight",
    // img: `${knight}`,
    bio:
      "Knights are masters of melee combat and fight with swords, axes and clubs. They possess greater physical strength than other vocations and are able to carry more items at any given level.As a result of their focus on physical skills, knights are severely lacking in terms of magical abilities.",
    passiveSkill: "God Bless",
    passiveSkillBio: "It makes great power of Saint knight by the name of God.",
    skill1: "Soul Breaker",
    skill1Bio: "Powerful attack into the enemy's soul.",
    skill2: "Saint Blade",
    skill2Bio: "Summoning divine power to your sword to attack the opponent.",
    skill3: "Divine Piercing",
    skill3Bio:
      "It attacks a monster by God's power with invincible sword dance.",
    skill4: "Grand Cross",
    skill4Bio: "Deadly cross attacks to opponents."
  },
  {
    id: 2,
    name: "Ranger",
    // img: `${ranger}`,
    bio:
      "Rangers are usually associated with the wisdom of nature. Rangers tend to be wise, hardy, cunning, and perceptive in addition to being skilled woodsmen. Many are skilled in woodcraft, stealth, wilderness survival, beast-mastery, herbalism, tracking, and sometimes nature magic. Can wield only bows, allowing them to attack most enemy units without receiving a counterattack, but at the same time preventing them from counterattacking enemies who manage to close to melee range",
    passiveSkill: "Shooting Mastery",
    passiveSkillBio: "Permanently raises attack power with bows.",
    skill1: "Wind Arrow",
    skill1Bio: "Imbues an arrow with wind properties to increase attack power.",
    skill2: "Perfect Aim",
    skill2Bio: "Makes an aimed shot with increased Attack Rating and Power.",
    skill3: "Phoenix Shot",
    skill3Bio: "It gives wide ATK with Energy of Phoenix.",
    skill4: "Evade Shot",
    skill4Bio: "Jump away to shoot a fire arrow to enemy below."
  },
  {
    id: 3,
    name: "Rogue",
    // img: `${rogue}`,
    bio:
      "Rogues are skirmishers, focused on getting to where the enemy does not want them and hurting them by applying extra sneak attack damage to enemies that grant combat advantage to them. They are also highly skilled, with the most trained skills of any class in the game and all with training in stealth and thievery (a skill that includes picking locks and pockets, and disarming traps).",
    passiveSkill: "Force of Nature",
    passiveSkillBio:
      "It improves your ability by natural assimilation perfectly.",
    skill1: "Thunder Roop",
    skill1Bio: "Using lightning for a powerful attack.",
    skill2: "Circle Trap",
    skill2Bio: "Capture weakness and slows down the enemy's speed.",
    skill3: "Arrow of Rage",
    skill3Bio:
      "Shoots an arrow over a desired area which explodes and rains down fire on enemies.",
    skill4: "Avalanche",
    skill4Bio: "Unleashes a barrage of piercing arrows on a single target."
  },
  {
    id: 4,
    name: "Elf",
    // img: `${elf}`,
    bio:
      "Elves use tracking and other wilderness skills to hunt down their enemies. Elves are renowned for their grace and mastery of magic and weapons such as the sword and bow. Becoming physically mature by the age of 25 and emotionally mature at around 125, they are also famously long-lived, capable of living more than half a millennium and remaining physically youthful. Possessed of innate beauty and easy gracefulness",
    passiveSkill: "Assassin Eye",
    passiveSkillBio: "Find a monster's weak point, increase concentration.",
    skill1: "Chain Lancer",
    skill1Bio: "Critical Spinning 3 Hits Attack.",
    skill2: "Charging Strike",
    skill2Bio: "Gathers a power and continuous ATK.",
    skill3: "Dancing Reaper",
    skill3Bio:
      "Jump in the air nail the one powerful attack by using twist power.",
    skill4: "Side Spin Attack",
    skill4Bio: "Slide while twisting beside of opponent to attack and retreat."
  },
  {
    id: 5,
    name: "Assassin",
    // img: `${asssassin}`,
    bio:
      "Assassins usually have attacks that cause a high amount of damage in a short amount of time.In addition to the burst damage concept, the Assassin class is often designed with another mechanic known as damage over time. This is damage that slowly depletes the enemy's health without the Assassin physically attacking the enemy. This is most commonly achieved through poison and bleeding mechanics.",
    passiveSkill: "Critical Mastery",
    passiveSkillBio: "It makes to increase Critical ATK permanently.",
    skill1: "Critical Hit",
    skill1Bio:
      "Aims for enemies' weak spots to raise probability of a critical strike.",
    skill2: "Jumping Crash",
    skill2Bio: "Leaps up into the air to strike down with a powerful blow.",
    skill3: "Ground Pike",
    skill3Bio:
      "Imbues weapon with frost properties to deliver a powerful attack.",
    skill4: "Expansion",
    skill4Bio: "Imbues weapon with vigor to unleash a devastating attack."
  },
  {
    id: 6,
    name: "Warrior",
    // img: `${warrior}`,
    bio:
      "A archetypal warrior who uses brute strength and raw fury to excel in combat, instead of the honed skills of the Fighter or measured strength of the Monk. Warriors can tap their inner fury to fly into a berserker-like rage. Once the rage is expended, it provides bonuses to Strength ",
    passiveSkill: "Rage of Zechram",
    passiveSkillBio:
      "Borrows the skills of the legendary warrior Ragnar Lodbrok to get more ATK.",
    skill1: "Impact",
    skill1Bio: "Raises attack rating to accurately strike the enemy.",
    skill2: "Triple Impact",
    skill2Bio: "A more powerful version of Impact.",
    skill3: "Brutal Swing",
    skill3Bio: "Delivers a powerful and fatal blow to the enemy.",
    skill4: "Roar",
    skill4Bio:
      "Shouting out a deafening roar to momentarily stun and confuse enemies."
  },
  {
    id: 7,
    name: "Barbarian",
    // img: `${barbarian}`,
    bio:
      "The Barbarian, a member of any of several tribes on the fringes of civilization, rebuffs the influence of those he sees as soft and weak. Through ceaseless clan warfare barbarians bring the constant fury embracing his axe to bring death to his enemies.",
    passiveSkill: "Bloody  Destroyer",
    passiveSkillBio: "Reduces defense for bringing Max strength.",
    skill1: "Avenging Crash",
    skill1Bio: "Powerful crashing attacks to opponents.",
    skill2: "Swift Weapon",
    skill2Bio: "Raises attack speed of weapon in a limited time.",
    skill3: "Bone Crash",
    skill3Bio:
      "Used to defeat demons by ancestors. Powerful attack that hits opponent twice.",
    skill4: "Power Dash",
    skill4Bio: "Run to the opponent and turn into Stun status."
  },
  {
    id: 8,
    name: "Paladin",
    // img: `${paladin}`,
    bio:
      "Paladins are masters of combat, well-balanced between weapons and shield. They focus on weapons like shields and swords to a deadly effect. They advance very fast in distance fighting and are quite capable.Paladins are not severely lacking in any area, but decimating enemies with weapons is what they do best.",
    passiveSkill: "Extreme Shield",
    passiveSkillBio:
      "Temporarily increases block rating of the current shield.",
    skill1: "Maximize",
    skill1Bio: "Optimizes weapons to raise their attack power permanently.",
    skill2: "Sore Sword",
    skill2Bio: "Deals repeated damage to the enemy.",
    skill3: "Grand Smash",
    skill3Bio:
      "Accurate and continous attack to opponents. Raises attack rating. ",
    skill4: "Rolling Smash",
    skill4Bio: "Strong 4 attacks with lethal damage."
  },
  {
    id: 9,
    name: "Druid",
    // img: `${druid}`,
    bio:
      "Druids are masters of nature and healing magic. Throughout history, they have used their skills and knowledge to the benefit of all humans. Nature can heal and protect, but can also cause widespread destruction. As such, druids command the powers of ice and earth to punish those who oppose the natural order.",
    passiveSkill: "Inner Peace",
    passiveSkillBio:
      "By receiving the ancients' spirit, maximum mana is increased permanently.",
    skill1: "Dark Bolt",
    skill1Bio: "Attacks enemy with small dark orb created with sorcery.",
    skill2: "Dark Wave",
    skill2Bio: "Attacks enemy with multiple Dark Bolts.",
    skill3: "Curse Lazy",
    skill3Bio: "Casts a curse on the enemy to slow the for the duration.",
    skill4: "Soul Manacle",
    skill4Bio: "Binds the target's soul with sorcery."
  },
  {
    id: 10,
    name: "Mage",
    // img: `${mage}`,
    bio:
      "Mages are masters of destructive, offensive and agressive magic. They have access to a vast array of combat spells and command the powers of fire, energy and death, which they can use to deal impressive damage to multiple enemies at once. Thanks to their quick advancement in magic level, they can also cast powerful damaging spells",
    passiveSkill: "Rain Maker",
    passiveSkillBio: "Uses mana to increase life steal.",
    skill1: "Land of Ghost",
    skill1Bio:
      "Calls the cursed phantom to deal massive damage to enemies nearby.",
    skill2: "Haunt",
    skill2Bio:
      "Using the ghost's strength, deals damage to the enemy and absorbs life.",
    skill3: "Judgement",
    skill3Bio: "Deals damage by shooting a stream of darkness at the enemy.",
    skill4: "Mourning Of Pray",
    skill4Bio:
      "With the buff of Midranda and Migal, it deals damage to the enemies nearby."
  },
  {
    id: 11,
    name: "Cleric",
    // img: `${cleric}`,
    bio:
      "A cleric is a holy warrior, who is somewhere between a priest and warrior. Like the priest, his religion has bestowed upon him some 'holy magical power', specifically those 'white' magics used in healing.",
    passiveSkill: "Holy Mind",
    passiveSkillBio: "It weakens enemy's attack received during time.",
    skill1: "Healing",
    skill1Bio: "Heals life with its holy magic.",
    skill2: "Holy Bolt",
    skill2Bio: "Hurls a holy bolt to enemies.",
    skill3: "Divine Lightning",
    skill3Bio: "Attack enemies with holy lightning.",
    skill4: "Grand Healing",
    skill4Bio: "Heal life of a party member."
  }
];
