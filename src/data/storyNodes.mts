export default [
  {
    id: 0,
    wait: 1,
    type: 'chapter',
    text: 'Begotten Home',
  },
  {
    id: 1,
    wait: 4,
    type: 'narration',
    text: 'Stones grind underneath the frail ship as it beaches upon the artic shores. This place is stark, yet full of malice - the air itself whips you with frozen tendrils; this place will be your new home.',
  },
  {
    id: 2,
    wait: 4,
    type: 'narration',
    text: 'Nearly 4 months have passed since you fled your home, you disciples fervent, but fearful. The old country had no room for new ideas - only old men and thier old, decrepit ways: too afraid to abandon thier temples; too stubborn to reason with.',
  },
  {
    id: 3,
    wait: 4,
    type: 'narration',
    text: 'But in this place, hope can begin. No longer will you be bound by outdated laws and corrupt rulers; you shall build a new world, and a new dawn shall kiss upon your brows such wonders as yet to be known by all the world.',
  },
  {
    id: 4,
    soundId: 0,
    wait: 6,
    type: 'scripture',
    text: 'And so they sailed till they had met with the land again, far north of their home.',
  },
  {
    id: 5,
    wait: 36,
    type: 'decision',
    text: 'Where will you build your temple?',
    choices: [
      {
        nextId: 100,
        name: 'By Water',
        summary:
          "You shall praise the sea; dance with it's rage, and fear its frozen depths.",
        consequences: [
          {
            key: 'resolve',
            value: 2,
          },
        ],
      },
      {
        nextId: 400,
        name: 'By Wood',
        summary:
          'You shall praise the forest; meditate with nature, and find peace amongst stoic rock and timber.',
        consequences: [
          {
            key: 'contentment',
            value: 2,
          },
        ],
      },
      {
        nextId: 700,
        name: 'By Windswept Hills',
        summary:
          'You shall praise the earth; strike hard the rock, and cradle treasures found deep below.',
        consequences: [
          {
            key: 'resolve',
            value: 2,
          },
        ],
      },
    ],
  },
  {
    id: 100,
    soundId: 1,
    wait: 4,
    type: 'scripture',
    text: 'Upon finding shore, they built a temple to worship the very sea which brought them to this promised land.',
  },
  {
    id: 101,
    wait: 4,
    type: 'narration',
    text: 'You make your temple of stone and mud; the insides are dark and damp, but they are yours.',
  },
  {
    id: 102,
    wait: 4,
    type: 'narration',
    text: 'As your followers settle into the area, some of the disciples begin talking amongst themselves, wondering what they should do next.',
  },
  {
    id: 103,
    soundId: 2,
    wait: 4,
    type: 'scripture',
    text: "Now there were those in the multitude who began to worry. 'How shall we eat', would say one. 'What shall we do when winter comes', would say another.",
  },
  {
    id: 104,
    wait: 36,
    type: 'decision',
    text: 'What shall your people do?',
    choices: [
      {
        nextId: 200,
        name: 'Fish',
        summary: 'You shall live off the blessings of the sea.',
        consequences: [
          {
            key: 'contentment',
            value: 1,
          },
          {
            key: 'faith',
            value: 1,
          },
          {
            key: 'contentment',
            value: -1,
          },
        ],
      },
      {
        nextId: 300,
        name: 'Fast',
        summary: 'You shall grow patience and humility.',
        consequences: [
          {
            key: 'contentment',
            value: -1,
          },
          {
            key: 'resolve',
            value: 1,
          },
          {
            key: 'faith',
            value: 1,
          },
        ],
      },
    ],
  },
  {
    id: 200,
    soundId: 3,
    wait: 4,
    type: 'scripture',
    text: "And the Prophet commanded them, 'Are you so quick to forget the sea and it's blessings? Surely there is one among you who can fish.'",
  },
  {
    id: 201,
    wait: 4,
    type: 'narration',
    text: 'Your followers feel encouraged, and with new found energy, begin to fish with abundance.',
  },
  {
    id: 202,
    wait: 4,
    type: 'narration',
    text: 'Learning to fish the icy sea is hard - to be hungry makes it harder. Some of your followers suggest setting traps for shellfish, but others refuse to eat such animals, believing them to be unclean.',
  },
  {
    id: 203,
    soundId: 4,
    wait: 4,
    type: 'scripture',
    text: 'Now there were those who sought to eat the things which crawled upon the sea floor, for they had difficulty catching fish. But to many, these creatures were unpure, and to eat them would be to blaspheme their gods.',
  },
  {
    id: 204,
    wait: 36,
    type: 'decision',
    text: 'What is clean and unclean?',
    choices: [
      {
        nextId: 210,
        name: 'All Things are a Blessing',
        summary: 'You shall eat all which the sea provides.',
        consequences: [
          {
            key: 'contentment',
            value: 1,
          },
          {
            key: 'faith',
            value: -1,
          },
          {
            key: 'resolve',
            value: -1,
          },
        ],
      },
      {
        nextId: 260,
        name: 'Be Pure and Prudent',
        summary: 'You shall not partake in those things which cannot swim.',
        consequences: [
          {
            key: 'contentment',
            value: -1,
          },
          {
            key: 'faith',
            value: 1,
          },
          {
            key: 'resolve',
            value: -1,
          },
        ],
      },
    ],
  },
  {
    id: 210,
    soundId: 5,
    wait: 4,
    type: 'scripture',
    text: "And the Prophet spoke, 'Have you become so self-righteous that you reject the blessing that the sea has given? Let any who seeks starvation find humility instead, but those who are thankful shall be filled in their stomachs and their souls.",
  },
  {
    id: 211,
    wait: 4,
    type: 'narration',
    text: 'There was more food to eat, and many felt rejuvinated by the new found blessings.',
  },
  {
    id: 212,
    nextId: 303,
    wait: 4,
    type: 'narration',
    text: '...but not all. Some still shun this food, and they begin to wisper amongst themselves.',
  },
  {
    id: 260,
    soundId: 6,
    wait: 4,
    type: 'scripture',
    text: "The Prophet warned them of their greed: 'Do you wish to craw upon your bellies like those accursed things? Crawl! Those who eat of unclean things shall be themselves unclean.",
  },
  {
    id: 261,
    wait: 4,
    type: 'narration',
    text: 'While many feel assured in their piety, others grown with hunger.',
  },
  {
    id: 262,
    nextId: 303,
    wait: 4,
    type: 'narration',
    text: 'The fishing continues, and so do the doubts of amongst your flock.',
  },
  {
    id: 300,
    soundId: 7,
    wait: 4,
    type: 'scripture',
    text: "And the Prophet corrected them, 'You are like children - wining with an open mouth; close thy mouth and open thy mind to the will of heaven. You shall feast on holy thoughts. You shall fill your spirit, which is eternal, not your stomach, which will rot like the food you long for.'",
  },
  {
    id: 301,
    wait: 4,
    type: 'narration',
    text: 'Your followers feel guilty and ashamed; some tear their garmets and pray for forgiveness; some sit in silence, praying...',
  },
  {
    id: 302,
    wait: 4,
    type: 'narration',
    text: 'and thinking...',
  },
  {
    id: 303,
    wait: 4,
    type: 'narration',
    text: 'As the days pass by, the air grows colder; larger blocks of ice are filling the sea.',
  },
  {
    id: 304,
    soundId: 8,
    wait: 4,
    type: 'scripture',
    text: 'Now the days were growing short, and they new that winter was drawing near. And they were each of them concerned with how they would eat during that time when food is scarce.',
  },
  {
    id: 305,
    wait: 4,
    type: 'narration',
    text: 'Some of your followers are discussing storing up food for the winter.',
  },
  {
    id: 306,
    wait: 36,
    type: 'decision',
    text: 'How shall you prepare for the winter?',
    choices: [
      {
        nextId: 310,
        name: 'Wisdom',
        summary: 'You shall be wise and save food for when there is none.',
        consequences: [
          {
            key: 'contentment',
            value: 2,
          },
          {
            key: 'faith',
            value: -1,
          },
        ],
      },
      {
        nextId: 360,
        name: 'Faith',
        summary: 'You shall have faith that the heavens will provide.',
        consequences: [
          {
            key: 'faith',
            value: 1,
          },
          {
            key: 'resolve',
            value: 1,
          },
          {
            key: 'contentment',
            value: -1,
          },
        ],
      },
    ],
  },
  {
    id: 310,
    soundId: 9,
    wait: 4,
    type: 'scripture',
    text: 'So the Prophet instructed them to begin storing up what foods they could, so that they would not grow hungry in those times when food is scarce.',
  },
  {
    id: 311,
    nextId: 1000,
    wait: 4,
    type: 'narration',
    text: 'They are relieved, and work hard at saving all that they can for the winter ahead.',
  },
  {
    id: 360,
    soundId: 10,
    wait: 4,
    type: 'scripture',
    text: "But the Prophet corrected them: 'You foolish children - do you think the sea is afraid of the cold? Is it not still there when spring comes and the waters thaw. Why then do you doubt the sea will still care for you?",
  },
  {
    id: 361,
    wait: 4,
    type: 'narration',
    text: 'Some begin to worship - they are assured that the sea shall provide for them when they are in need.',
  },
  {
    id: 362,
    nextId: 1000,
    wait: 4,
    type: 'narration',
    text: 'Others have doubts - there is barely enough now; there will only be less when winter comes.',
  },
  {
    id: 400,
    soundId: 11,
    wait: 4,
    type: 'scripture',
    text: "They traveled until they reached a forest; there they build a place of worship; 'Come, let us be still like the trees', they said to one another.",
  },
  {
    id: 401,
    wait: 4,
    type: 'narration',
    text: 'There is plenty of wood for shelter; you quickly build a grand hall, proud tembers hoisting the temple room high above.',
  },
  {
    id: 402,
    wait: 4,
    type: 'narration',
    text: 'The forest provides much; wood for shelter and warmth, plenty of plants to gather for food, but there are some who hunt and trap animals, which is not well recieved by all.',
  },
  {
    id: 403,
    soundId: 12,
    wait: 4,
    type: 'scripture',
    text: 'Now the place where they settled was abundant in resources, and their needs were met; yet there were those who sought to eat the meat of animals, and others who did argue that this was an act of sacrilege.',
  },
  {
    id: 404,
    wait: 36,
    type: 'decision',
    text: 'Who should eat of what?',
    choices: [
      {
        nextId: 500,
        name: 'Sacred',
        summary:
          'You shall not eat of any flesh, but from the earth ye shall harvest.',
        consequences: [
          {
            key: 'contentment',
            value: -1,
          },
          {
            key: 'resolve',
            value: 1,
          },
          {
            key: 'faith',
            value: 1,
          },
        ],
      },
      {
        nextId: 600,
        name: 'Bounty',
        summary: 'You shall enjoy all the forest provides.',
        consequences: [
          {
            key: 'faith',
            value: -2,
          },
          {
            key: 'contentment',
            value: 1,
          },
        ],
      },
    ],
  },
  {
    id: 500,
    soundId: 13,
    wait: 4,
    type: 'scripture',
    text: "But the Prophet chided them; 'Are these creatures not guests here as we are? Curse any whom eats of an animal - they are eating their own kin.",
  },
  {
    id: 501,
    wait: 4,
    type: 'narration',
    text: 'Some of your followers feel assured in their beliefs; others are ashamed...',
  },
  {
    id: 502,
    wait: 4,
    type: 'narration',
    text: 'And a few who feel robbed of their hard work. They wisper their discontent amongst themselves.',
  },
  {
    id: 503,
    wait: 4,
    type: 'narration',
    text: 'Some time after, a trade caravan arrives, bringing with them animal goods such as milk and eggs, and animal pelts.',
  },
  {
    id: 504,
    soundId: 14,
    wait: 4,
    type: 'scripture',
    text: 'Now after this time there came marchants who had much to offer. They brought with them food which came from animals, and the skins of wild game.',
  },
  {
    id: 505,
    wait: 4,
    type: 'narration',
    text: 'Some argue that having farm animals would be good as a stable source of food, and that the pelts could be made into coats for the winter. Others aregued against this; they believe the animals must be treated as equals and not be treated like livestock.',
  },
  {
    id: 506,
    wait: 36,
    type: 'decision',
    text: 'How shall you treat other living creatures?',
    choices: [
      {
        nextId: 510,
        name: 'Equals',
        summary: 'You shall not take of anything from any creature.',
        consequences: [
          {
            key: 'contentment',
            value: -1,
          },
          {
            key: 'resolve',
            value: 1,
          },
          {
            key: 'faith',
            value: -1,
          },
        ],
      },
      {
        nextId: 550,
        name: 'Caretakers',
        summary:
          'You shall take only those things which do not harm the animal.',
        consequences: [
          {
            key: 'faith',
            value: -1,
          },
          {
            key: 'resolve',
            value: -1,
          },
          {
            key: 'contentment',
            value: 1,
          },
        ],
      },
    ],
  },
  {
    id: 510,
    soundId: 15,
    wait: 4,
    type: 'scripture',
    text: "And again the Prophet chastised them; 'You would not steal a mothers milk from a child? Why then would you do the same to our animal kin? Does not the forest provide for their needs - and this being done without anything taken from us? Have faith, then, that it shall the same for us, but if we forsake it's blessings, may we be stripped bare of our abundance and cover ourselves in piety instead.'",
  },
  {
    id: 511,
    wait: 4,
    type: 'narration',
    text: 'Some are assured in their devotion to the forest and its creatures, but others still question this command - longing for their lives before this journey, and wanting those things which are now forbidden to them.',
  },
  {
    id: 512,
    nextId: 4000,
    wait: 4,
    type: 'narration',
    text: 'Some continue to drink milk of the animal and honey from the bee, but in secret. Only gather what they can find in the wild.',
  },
  {
    id: 550,
    soundId: 16,
    wait: 4,
    type: 'scripture',
    text: "And the Prophet, upon hearing this, stepped in to instruct them; 'Do we not gather berries and roots, and the seeds of trees and mushrooms found upon the ground? And is this not taking from those living things? But the forest knows our needs and so shares its bounty with us, that we may be blessed and worship in all that we are given.'",
  },
  {
    id: 551,
    wait: 4,
    type: 'narration',
    text: 'You flock begins to tend for these animals, caring not harm them or to take when the animal is sick or bearing children. They thrive off these new blessings, even to the dismay of a few.',
  },
  {
    id: 552,
    nextId: 4000,
    wait: 4,
    type: 'narration',
    text: 'But there are rumors of some who are still killing and eating meat, and your followers begin to grow suspicious of each other.',
  },
  {
    id: 600,
    soundId: 17,
    wait: 4,
    type: 'scripture',
    text: "And the Prophet spoke thus, 'Do not the foxes and birds of prey hunt other creatures? Let each be thankful with what the forest provides, and be not self righteous, but thankful, that the forest should provide to each according to his needs.",
  },
  {
    id: 601,
    wait: 4,
    type: 'narration',
    text: 'While thus who hunted celebrate, others are disgusted, and they begin to eat separately, one group not seeking the compony of the other.',
  },
  {
    id: 602,
    wait: 4,
    type: 'narration',
    text: 'As the weeks go by, your followers grow further and further apart; they begin to bicker at each other, and their bickerings turn to fighting.',
  },
  {
    id: 603,
    wait: 4,
    type: 'narration',
    text: 'Families and friends are cursing each others names; your flock is at risk of separating.',
  },
  {
    id: 604,
    soundId: 18,
    wait: 4,
    type: 'scripture',
    text: 'But the people began to argue and shout with each other. Hatred stirred within them and they were each becoming like strangers to each other, and there was great mistrust amongst them.',
  },
  {
    id: 605,
    wait: 36,
    type: 'decision',
    text: 'How shall you keep your flock?',
    choices: [
      {
        nextId: 610,
        name: 'Rejoin',
        summary: 'They shall unite in dance and feasting!',
        consequences: [
          {
            key: 'contentment',
            value: 2,
          },
          {
            key: 'resolve',
            value: -1,
          },
          {
            key: 'faith',
            value: -1,
          },
        ],
      },
      {
        nextId: 650,
        name: 'Rebuke',
        summary: 'They shall fast and pray for their transgressions',
        consequences: [
          {
            key: 'faith',
            value: 1,
          },
          {
            key: 'contentment',
            value: -2,
          },
          {
            key: 'resolve',
            value: 1,
          },
        ],
      },
    ],
  },
  {
    id: 610,
    soundId: 19,
    wait: 4,
    type: 'scripture',
    text: 'Yet the Prophet forgave them of their sins, and encouraged each to do the same unto those they had wronged. And they prepared a feast together, and played music and danced with each other.',
  },
  {
    id: 611,
    wait: 4,
    type: 'narration',
    text: 'Many who had fought made amends, and the feast livened the spirits and good tidings amongst them.',
  },
  {
    id: 612,
    nextId: 4000,
    wait: 4,
    type: 'narration',
    text: 'But some from each group did not, and instead met in secret groups that night.',
  },
  {
    id: 650,
    soundId: 20,
    wait: 4,
    type: 'scripture',
    text: "Upon hearing this, the Prophet torn their garments and covered themselves in ash, crying aloud, 'How spoiled we have become, that we should fight over our abundance.'",
  },
  {
    id: 651,
    wait: 4,
    type: 'narration',
    text: 'Your flock practiced fasting, and spoke praises of their bounty; they begged the forest for forgiveness, and prayed in solitude from morning to night.',
  },
  {
    id: 652,
    nextId: 4000,
    wait: 4,
    type: 'narration',
    text: 'Yet among the prayers, wispers are being spoken, and discontent is sown into the hearts of many.',
  },
  {
    id: 700,
    soundId: 21,
    wait: 4,
    type: 'scripture',
    text: 'They marched upon hills, and saw that there were great riches buried underneath them.',
  },
  {
    id: 701,
    wait: 4,
    type: 'narration',
    text: 'While the hills themselves provide meager food - there are many caves filled with various fungus and small creatures to catch.',
  },
  {
    id: 702,
    wait: 4,
    type: 'narration',
    text: 'But the true blessing of these hills is found deep within; precious stones and metals are easily found, and many work tirelessly to carve out every treasure which they can find.',
  },
  {
    id: 703,
    wait: 4,
    type: 'narration',
    text: '...so tirelessly, that they begin to loose sleep and go hungry.',
  },
  {
    id: 704,
    soundId: 22,
    wait: 4,
    type: 'scripture',
    text: 'Now as they began working, they were going without food and rest, and their homes were becoming unclean.',
  },
  {
    id: 705,
    wait: 4,
    type: 'narration',
    text: 'They discuss amongst themselves who should mine and who should gather and prepare food. Most women wish to remain in the mine, but most men desire them to maintain the home, and leave the labor to themselves.',
  },
  {
    id: 706,
    wait: 36,
    type: 'decision',
    text: 'How shall you divide the work?',
    choices: [
      {
        nextId: 800,
        name: 'Gender',
        summary: 'Men to the mines, and women to the home.',
        consequences: [
          {
            key: 'contentment',
            value: -1,
          },
          {
            key: 'faith',
            value: -1,
          },
          {
            key: 'resolve',
            value: 1,
          },
        ],
      },
      {
        nextId: 900,
        name: 'Rotation',
        summary:
          'Everyone will have a time to mine and a time to maintain the home.',
        consequences: [
          {
            key: 'contentment',
            value: -1,
          },
          {
            key: 'resolve',
            value: -1,
          },
          {
            key: 'faith',
            value: 1,
          },
        ],
      },
    ],
  },
  {
    id: 800,
    soundId: 23,
    wait: 4,
    type: 'scripture',
    text: "And so the Prophet divided them male from female, and spoke unto them, 'Do not the women bear children, and are not those children in need of their mother long after their births? Let us then divide ourselves, and let the men and women serve as they are best suited for.'",
  },
  {
    id: 801,
    wait: 4,
    type: 'narration',
    text: 'Many men were content with this; many women were angered - a few even refused to work only in the home. Likewise, there were some men who had no passion or desire to dig, but wished to work other tasks.',
  },
  {
    id: 802,
    wait: 4,
    type: 'narration',
    text: 'The men become obsessed with digging, and began to value their treasures above food and water. They began to question each others valuables, and coveted the treasures of others.',
  },
  {
    id: 803,
    soundId: 24,
    wait: 4,
    type: 'scripture',
    text: "When the men had found many great treasures, they gathered together and compared their riches; and one would say to another, 'Is not my lot more valuable than yours? Why then should we receive the same portion of food and drink?'",
  },
  {
    id: 804,
    wait: 4,
    type: 'narration',
    text: 'More and more they wish to trade with each other, and they argue over whom should arbitrate and decide what each thing is worth.',
  },
  {
    id: 805,
    wait: 36,
    type: 'decision',
    text: 'Whom shall decide the worth of things?',
    choices: [
      {
        nextId: 810,
        name: 'The Prophet',
        summary: 'You shall decide the worth of every good and service.',
        consequences: [
          {
            key: 'contentment',
            value: -1,
          },
          {
            key: 'faith',
            value: 1,
          },
          {
            key: 'resolve',
            value: -1,
          },
        ],
      },
      {
        nextId: 840,
        name: 'Barter',
        summary: 'They shall barter in their own way.',
        consequences: [
          {
            key: 'contentment',
            value: -1,
          },
          {
            key: 'resolve',
            value: 1,
          },
          {
            key: 'faith',
            value: -1,
          },
        ],
      },
      {
        nextId: 870,
        name: 'The Women',
        summary: 'The women shall trade what the men find.',
        consequences: [
          {
            key: 'contentment',
            value: 1,
          },
          {
            key: 'resolve',
            value: -1,
          },
          {
            key: 'faith',
            value: -1,
          },
        ],
      },
    ],
  },
  {
    id: 810,
    soundId: 25,
    wait: 4,
    type: 'scripture',
    text: "'You who follow me do so out of faith,' the Prophet reminded them, 'So then have faith in me, and I shall decide the worth of each stone and morsel, in turn.",
  },
  {
    id: 811,
    wait: 4,
    type: 'narration',
    text: 'Your followers trust you, and they seek your wisdom and guidance. Bartering for them is difficult, and why you try to keep everyones needs met, there are those who are never happy.',
  },
  {
    id: 812,
    nextId: 7000,
    wait: 4,
    type: 'narration',
    text: 'Some begin to trade in secret, thinking themselves more cunning than you...',
  },
  {
    id: 840,
    soundId: 26,
    wait: 4,
    type: 'scripture',
    text: "But the Prophet scolded them, 'Are you children who cannot discuss without tantrums? Are you animals who cannot reason with each other? Begone then, and behave in a manner which is honorable to the earth.",
  },
  {
    id: 841,
    nextId: 7000,
    wait: 4,
    type: 'narration',
    text: 'While some are satisfied with this arrangement, others feel jaded - they feel abandoned by their leader, and begin to wisper their grievances to each other.',
  },
  {
    id: 870,
    soundId: 27,
    wait: 4,
    type: 'scripture',
    text: "And so the Prophet chided the men, 'Is it not enough you must argue with your wives about what your work is worth, but now must argue amongst yourselves? Give your treasures then to the women, and let them decide the worth of your households.",
  },
  {
    id: 871,
    nextId: 7000,
    wait: 4,
    type: 'narration',
    text: 'While some women enjoy the increase in power, others resent the extra duties - now they must deal in food and treasure? And many men were also upset, and they begin to discuss their Prophet in secret...',
  },
  {
    id: 900,
    soundId: 28,
    wait: 4,
    type: 'scripture',
    text: "But the Prophet went before them, with a gem in one hand and a mushroom in the other, saying thus: 'Does not the earth provide for our needs, and bless us with such riches? And are the women not able to strike the earth for its blessings? And do the men wish to eat only stones and dirt? We each desire these gifts, but we cannot go without food or rest. Let us then each perform each task in some portion, that we may serve and be served by one another.'",
  },
  {
    id: 901,
    wait: 4,
    type: 'narration',
    text: 'And so your followers continue to work the mines, and trade places caring for the home. While they grumble, most are content with this arrangement...',
  },
  {
    id: 902,
    wait: 4,
    type: 'narration',
    text: '...but not all. A few of them begin mine apart from the flock, and they hide their treasures secretly. They begin to demand more food and drink for that which they have mined, and they refuse to do their share of the other chores.',
  },
  {
    id: 903,
    wait: 4,
    type: 'narration',
    text: 'As their demands increased, so do the calls for justice.',
  },
  {
    id: 904,
    soundId: 29,
    wait: 4,
    type: 'scripture',
    text: 'Now there were those who refused to do any work, other than digging in the earth, and the others among them sought judgement to be brought down upon them for their laziness.',
  },
  {
    id: 905,
    wait: 36,
    type: 'decision',
    text: 'How should the slothful be punished.',
    choices: [
      {
        nextId: 910,
        name: 'Banishment',
        summary: 'They shall not share in the blessings of the earth.',
        consequences: [
          {
            key: 'contentment',
            value: 1,
          },
          {
            key: 'faith',
            value: 1,
          },
          {
            key: 'resolve',
            value: -1,
          },
        ],
      },
      {
        nextId: 950,
        name: 'Enslavement',
        summary: 'They shall work others without treasure.',
        consequences: [
          {
            key: 'resolve',
            value: 2,
          },
          {
            key: 'faith',
            value: -1,
          },
        ],
      },
    ],
  },
  {
    id: 910,
    soundId: 30,
    wait: 4,
    type: 'scripture',
    text: "And so the Prophet cast out the lazy and the selfish, reprimanding them; 'You greedy fools! If treasure is all you seek, then let your bellies be full of stone, and you hearts heavy with shame.'",
  },
  {
    id: 911,
    nextId: 7000,
    wait: 4,
    type: 'narration',
    text: 'Many rejuiced in this justice, but some were conflicted - they did not wish to be separated from their loved ones. A few even left with the banished party, much to the discouragement and mockery of the rest.',
  },
  {
    id: 950,
    soundId: 31,
    wait: 4,
    type: 'scripture',
    text: 'So the Prophet commanded them to be bound in chains, and they were forced to work without rest and without food or water. They could not keep what they found, but instead had nothing. And so they had nothing to barter with when they were in need.',
  },
  {
    id: 951,
    wait: 4,
    type: 'narration',
    text: 'Some feel a cathartic enjoyment watching the enslaved work - their pride having brought them so low, but others were dismayed. A few tried to take pity upon them by helping them without asking of anything in return.',
  },
  {
    id: 952,
    nextId: 7000,
    wait: 4,
    type: 'narration',
    text: 'But some accused them of treason, and wispers began to stir amongst them about what should be done to them...',
  },
  {
    id: 1000,
    wait: 1,
    type: 'chapter',
    text: 'Nights Growing Longer',
  },
  {
    id: 4000,
    wait: 1,
    type: 'chapter',
    text: 'Nights Growing Longer',
  },
  {
    id: 7000,
    wait: 1,
    type: 'chapter',
    text: 'Nights Growing Longer',
  },
  {
    id: -1,
    wait: 60,
    type: 'reset',
    text: 'You have served well.',
  },
];
