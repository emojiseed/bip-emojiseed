BIP: ?
  
Layer: Applications
  
Title: Emoji Seed Mnemonics for Deterministic Keys
  
Author: Emoji Seed Dev Team <bitcoin-dev@bitcoiin.net>
  
Status: Draft
  
Type: Informational
  
Created: 2025-09-28

License: BSD-2-Clause

Discussions-To: bitcoin-dev@lists.linuxfoundation.org


## Abstract

This proposal specifies a standardized mapping between the BIP-39 English word list and unique pairs of emoji characters. The goal is to enable mnemonic phrases to be represented in a universally recognizable, language-independent, and visually distinctive form, while remaining compatible with existing deterministic wallet standards.


## Motivation

BIP-39 defined a widely adopted standard for generating mnemonic codes that encode entropy used in deterministic wallets. However, these mnemonics are language-dependent, subject to translation issues, and require literacy in a supported language.

Emoji characters are globally recognized symbols with strong visual memorability. By providing a one-to-one mapping between BIP-39 words and emoji pairs, mnemonic phrases can be:

* Understood and used across language barriers
* More memorable and resistant to transcription errors
* Easily displayed in user interfaces where text space is limited
* Utilized in mnemonic memory reminder apps and devices
* Promotes an industry standard that makes collaboration a breeze

This proposal extends BIP-39 mnemonics by introducing an emoji layer that preserves full backward compatibility with the underlying word list.


## Rationale

This design follows the naming convention of BIP-44: while extending BIP-39, the proposal does not include “39” in its title. Instead, the relationship to BIP-39 is clearly stated in the text.

The choice of emoji pairs instead of single emoji was made to ensure sufficient uniqueness while maintaining strong mnemonic quality. Pairs avoid ambiguity and provide redundancy if one glyph is visually confusable.


## Specification

* Each of the 2048 BIP-39 English words is assigned a unique pair of emoji characters.
* Each mapping is deterministic and published as part of this standard in JSON, CSV, and Markdown reference files.
* Emoji sequences use only stable Unicode code points (no variation selectors).
* Each word maps to exactly **two emoji graphemes**, ensuring uniqueness and compactness.
* Wallets and libraries may choose to accept, generate, or display emoji mnemonics interchangeably with words.

## Backwards Compatibility

* All mnemonic phrases generated using this proposal map directly to existing BIP-39 words.
* Wallets and tools that do not support emoji mnemonics can still parse and validate the equivalent BIP-39 word phrase.
* No changes to entropy generation, checksum calculation, or key derivation (BIP-32) are introduced.

Thus, backward compatibility is preserved at all cryptographic and protocol levels.


## Security

* **Determinism**: Emoji mapping must be fixed, universal, and collision-free.
* **Human Factors**: Pairs of emoji are chosen to reduce visual ambiguity and improve memorability.
* **Implementation Risks**: Incorrect Unicode handling or reliance on unstable glyphs could cause mismatches; therefore, only stable Unicode code points are permitted.


## Type Definitions

The canonical mapping is provided in structured formats (JSON, CSV, Markdown). Each entry contains:

* **word**: the original BIP-39 English word
* **emoji1**: the first emoji grapheme
* **emoji2**: the second emoji grapheme
* **emoji1_name**: Unicode CLDR short name for emoji1
* **emoji2_name**: Unicode CLDR short name for emoji2

The full set of **2048 entries** will be presented as both:

1. **Arrow-format list** (e.g., `abandon → 😀🎲`)
2. **Reference table** (columns: word, emoji1, emoji2, emoji1_name, emoji2_name)

```text
word | emoji1 | emoji2 | emoji1_name | emoji2_name
-------------------- | -------------------- | -------------------- | -------------------- | -------------------- 
abandon | 🏚 | 🚪 | derelict house building | door
ability | 🧠 | 💪 | brain | flexed biceps
able | 💪 | 🏃 | flexed biceps | runner
about | ℹ | 📖 | information source | open book
above | ⬆ | ☁ | upwards black arrow | cloud
absent | 🚫 | 👤 | no entry sign | bust in silhouette
absorb | 🧽 | 💧 | sponge | droplet
abstract | 🎨 | 📐 | artist palette | triangular ruler
absurd | 🤪 | ❗ | grinning face with one large and one small eye | heavy exclamation mark symbol
abuse | 🚫 | 👊 | no entry sign | fisted hand sign
access | 🔑 | 🚪 | key | door
accident | 🚗 | 💥 | automobile | collision symbol
account | 🏦 | 📊 | bank | bar chart
accuse | 👆 | ⚖ | white up pointing backhand index | scales
achieve | 🏆 | ✅ | trophy | white heavy check mark
acid | ⚗ | 🧪 | alembic | test tube
acoustic | 🎸 | 🎶 | guitar | multiple musical notes
acquire | 📥 | 📦 | inbox tray | package
across | ↔ | 🌉 | left right arrow | bridge at night
act | 🎭 | 🎬 | performing arts | clapper board
action | 🏃 | ⚡ | runner | high voltage sign
actor | 🎬 | 👨 | clapper board | man
actress | 🎬 | 👩 | clapper board | woman
actual | ✅ | ⚙ | white heavy check mark | gear
adapt | 🔄 | 🦎 | anticlockwise downwards and upwards open circle arrows | lizard
add | ➕ | ➕ | heavy plus sign | heavy plus sign
addict | 💊 | 🔗 | pill | link symbol
address | 🏠 | 📍 | house building | round pushpin
adjust | ⚙ | 🔧 | gear | wrench
admit | 🚪 | ✅ | door | white heavy check mark
adult | 👩 | 👨 | woman | man
advance | ⏩ | 📈 | black right-pointing double triangle | chart with upwards trend
advice | 💬 | 🤝 | speech balloon | handshake
aerobic | 🏃 | ‍ | runner | zero width joiner
affair | 💌 | 🤫 | love letter | face with finger covering closed lips
afford | 💵 | ✅ | banknote with dollar sign | white heavy check mark
afraid | 😨 | 😱 | fearful face | face screaming in fear
again | 🔁 | ♻ | clockwise rightwards and leftwards open circle arrows | black universal recycling symbol
age | 🎂 | 📅 | birthday cake | calendar
agent | 🕵 | ‍ | sleuth or spy | zero width joiner
agree | 🤝 | ✅ | handshake | white heavy check mark
ahead | ⬆ | 🚶 | upwards black arrow | pedestrian
aim | 🎯 | 🏃 | direct hit | runner
air | 🌬 | 💨 | wind blowing face | dash symbol
airport | ✈ | 🛫 | airplane | airplane departure
aisle | 🛒 | ➡ | shopping trolley | black rightwards arrow
alarm | ⏰ | ❗ | alarm clock | heavy exclamation mark symbol
album | 💿 | 🎶 | optical disc | multiple musical notes
alcohol | 🍺 | 🍷 | beer mug | wine glass
alert | 🚨 | 👀 | police cars revolving light | eyes
alien | 👽 | 🚀 | extraterrestrial alien | rocket
all | ✅ | 🌍 | white heavy check mark | earth globe europe-africa
alley | 🛣 | 🏙 | motorway | cityscape
allow | 👍 | ✍ | thumbs up sign | writing hand
almost | ⏳ | ✍ | hourglass with flowing sand | writing hand
alone | 👤 | 🌙 | bust in silhouette | crescent moon
alpha | 🔠 | 🅰 | input symbol for latin capital letters | negative squared latin capital letter a
already | ✅ | ⏰ | white heavy check mark | alarm clock
also | ➕ | 🤝 | heavy plus sign | handshake
alter | 🔄 | 🎭 | anticlockwise downwards and upwards open circle arrows | performing arts
always | 🔁 | ♾ | clockwise rightwards and leftwards open circle arrows | permanent paper sign
amateur | 🎨 | 📷 | artist palette | camera
amazing | 🤩 | 🌟 | grinning face with star eyes | glowing star
among | 👥 | 🌐 | busts in silhouette | globe with meridians
amount | 📊 | 💲 | bar chart | heavy dollar sign
amused | 😆 | 🎭 | smiling face with open mouth and tightly-closed eyes | performing arts
analyst | 📊 | 🧠 | bar chart | brain
anchor | ⚓ | ⚓ | anchor | anchor
ancient | 🏛 | 📜 | classical building | scroll
anger | 😡 | 🔥 | pouting face | fire
angle | 📐 | 📏 | triangular ruler | straight ruler
angry | 😠 | 💢 | angry face | anger symbol
animal | 🐾 | 🐾 | paw prints | paw prints
ankle | 🦶 | 🦴 | foot | bone
announce | 📢 | 📰 | public address loudspeaker | newspaper
annual | 📅 | 🔁 | calendar | clockwise rightwards and leftwards open circle arrows
another | 🔄 | ➕ | anticlockwise downwards and upwards open circle arrows | heavy plus sign
answer | 💬 | ✅ | speech balloon | white heavy check mark
antenna | 📡 | 📡 | satellite antenna | satellite antenna
antique | 🏺 | 🕰 | amphora | mantelpiece clock
anxiety | 😰 | 💭 | face with open mouth and cold sweat | thought balloon
any | ❓ | ✅ | black question mark ornament | white heavy check mark
apart | ↔ | 🏠 | left right arrow | house building
apology | 🙏 | 💬 | person with folded hands | speech balloon
appear | 👀 | ✨ | eyes | sparkles
apple | 🍎 | 🍎 | red apple | red apple
approve | 👍 | ⚙ | thumbs up sign | gear
april | 🌸 | 📅 | cherry blossom | calendar
arch | 🏛 | 🎯 | classical building | direct hit
arctic | ❄ | 🌊 | snowflake | water wave
area | 📍 | 📐 | round pushpin | triangular ruler
arena | 🏟 | 🎤 | stadium | microphone
argue | 🗣 | ⚡ | speaking head in silhouette | high voltage sign
arm | 💪 | 🦾 | flexed biceps | mechanical arm
armed | 🔫 | 🛡 | pistol | shield
armor | 🪖 | 🛡 | military helmet | shield
army | 🎖 | 👥 | military medal | busts in silhouette
around | 🔄 | 🌍 | anticlockwise downwards and upwards open circle arrows | earth globe europe-africa
arrange | 📅 | 📦 | calendar | package
arrest | 👮 | 🔗 | police officer | link symbol
arrive | ✈ | 📍 | airplane | round pushpin
arrow | ➡ | 🏹 | black rightwards arrow | bow and arrow
art | 🎨 | 🖌 | artist palette | lower left paintbrush
artefact | 🏺 | 📜 | amphora | scroll
artist | 👩 | ‍ | woman | zero width joiner
artwork | 🖼 | 🖌 | frame with picture | lower left paintbrush
ask | ❓ | 💬 | black question mark ornament | speech balloon
aspect | 🔍 | 📐 | left-pointing magnifying glass | triangular ruler
assault | 👊 | ⚔ | fisted hand sign | crossed swords
asset | 💰 | 🏃 | money bag | runner
assist | 🤝 | ⚽ | handshake | soccer ball
assume | 🤔 | 📜 | thinking face | scroll
asthma | 😮 | ‍ | face with open mouth | zero width joiner
athlete | 🏃 | ‍ | runner | zero width joiner
atom | ⚛ | ⚛ | atom symbol | atom symbol
attack | ⚔ | 💥 | crossed swords | collision symbol
attend | 🎓 | 🏫 | graduation cap | school
attitude | 🙂 | 👍 | slightly smiling face | thumbs up sign
attract | 🧲 | ❤ | magnet | heavy black heart
auction | 🔨 | 💵 | hammer | banknote with dollar sign
audit | 📊 | 🔍 | bar chart | left-pointing magnifying glass
august | ☀ | 🏃 | black sun with rays | runner
aunt | 👩 | 👶 | woman | baby
author | ✍ | 📖 | writing hand | open book
auto | 🚗 | ⚙ | automobile | gear
autumn | 🍂 | 🍁 | fallen leaf | maple leaf
average | 📊 | 🏃 | bar chart | runner
avocado | 🥑 | 🥑 | avocado | avocado
avoid | 🚫 | ↩ | no entry sign | leftwards arrow with hook
awake | ⏰ | 🙋 | alarm clock | happy person raising one hand
aware | 👀 | 💡 | eyes | electric light bulb
away | ➡ | 🚪 | black rightwards arrow | door
awesome | 🌟 | 🎉 | glowing star | party popper
awful | 😖 | 👎 | confounded face | thumbs down sign
awkward | 😬 | 🪵 | grimacing face | wood
axis | 🔭 | 📐 | telescope | triangular ruler
baby | 👶 | 👶 | baby | baby
bachelor | 🎓 | 👨 | graduation cap | man
bacon | 🥓 | 🥓 | bacon | bacon
badge | 📛 | ✅ | name badge | white heavy check mark
bag | 👜 | 📦 | handbag | package
balance | ⚖ | 🏃 | scales | runner
balcony | 🏠 | 🪟 | house building | window
ball | ⚽ | ⚽ | soccer ball | soccer ball
bamboo | 🎋 | 🌱 | tanabata tree | seedling
banana | 🍌 | 🍌 | banana | banana
banner | 🚩 | 🧾 | triangular flag on post | receipt
bar | 🍸 | 🧱 | cocktail glass | brick
barely | 📉 | ⏳ | chart with downwards trend | hourglass with flowing sand
bargain | 🏷 | 💵 | label | banknote with dollar sign
barrel | 🛢 | 🛢 | oil drum | oil drum
base | 🧱 | 📏 | brick | straight ruler
basic | 📚 | ✅ | books | white heavy check mark
basket | 🧺 | 📦 | basket | package
battle | ⚔ | 🏰 | crossed swords | european castle
beach | 🏖 | 🏖 | beach with umbrella | beach with umbrella
bean | 🌱 | 🫘 | seedling | beans
beauty | 🌸 | 🌟 | cherry blossom | glowing star
because | 📜 | ➡ | scroll | black rightwards arrow
become | 🔄 | 🏃 | anticlockwise downwards and upwards open circle arrows | runner
beef | 🥩 | 🥩 | cut of meat | cut of meat
before | ⏮ | 📅 | black left-pointing double triangle with vertical bar | calendar
begin | ▶ | 🏁 | black right-pointing triangle | chequered flag
behave | 🙂 | 🏃 | slightly smiling face | runner
behind | ⬅ | 📍 | leftwards black arrow | round pushpin
believe | 🙏 | ✅ | person with folded hands | white heavy check mark
below | ⬇ | 🏃 | downwards black arrow | runner
belt | 🧵 | 🪢 | spool of thread | knot
bench | 🪑 | 🏟 | chair | stadium
benefit | ✅ | 📈 | white heavy check mark | chart with upwards trend
best | 🥇 | 🌟 | first place medal | glowing star
betray | 🤫 | ⚔ | face with finger covering closed lips | crossed swords
better | 📈 | 👍 | chart with upwards trend | thumbs up sign
between | ↔ | 📍 | left right arrow | round pushpin
beyond | 🚀 | 🌌 | rocket | milky way
bicycle | 🚲 | 🚲 | bicycle | bicycle
bid | 🏷 | ✋ | label | raised hand
bike | 🚴 | ‍ | bicyclist | zero width joiner
bind | 🪢 | 📚 | knot | books
biology | 🧬 | 📚 | dna double helix | books
bird | 🐦 | 🐦 | bird | bird
birth | 👶 | 🎉 | baby | party popper
bitter | 😖 | 🍋 | confounded face | lemon
black | ⚫ | ⬛ | medium black circle | black large square
blade | 🔪 | 🗡 | hocho | dagger knife
blame | ☝ | ❗ | white up pointing index | heavy exclamation mark symbol
blanket | 🧶 | 🛌 | ball of yarn | sleeping accommodation
blast | 💥 | 🌪 | collision symbol | cloud with tornado
bleak | 🌫 | 🥶 | fog | freezing face
bless | 🙏 | ✨ | person with folded hands | sparkles
blind | 🙈 | 🚫 | see-no-evil monkey | no entry sign
blood | 🩸 | 🩸 | drop of blood | drop of blood
blossom | 🌸 | 🏃 | cherry blossom | runner
blouse | 👚 | 👚 | womans clothes | womans clothes
blue | 🔵 | 🔵 | large blue circle | large blue circle
blur | 🌫 | 🔍 | fog | left-pointing magnifying glass
blush | 😊 | ⚙ | smiling face with smiling eyes | gear
board | 🧱 | 📋 | brick | clipboard
boat | 🚤 | 🚤 | speedboat | speedboat
body | 🧍 | ‍ | standing person | zero width joiner
boil | 🔥 | 💧 | fire | droplet
bomb | 💣 | 💣 | bomb | bomb
bone | 🦴 | 🦴 | bone | bone
bonus | 🎁 | 💵 | wrapped present | banknote with dollar sign
book | 📖 | 📖 | open book | open book
boost | 📈 | ⚡ | chart with upwards trend | high voltage sign
border | 🚧 | 🏁 | construction sign | chequered flag
boring | 🥱 | ⌛ | yawning face | hourglass
borrow | 🤲 | 💵 | palms up together | banknote with dollar sign
boss | 👑 | 🏃 | crown | runner
bottom | ⬇ | 📏 | downwards black arrow | straight ruler
bounce | 🏀 | 🔄 | basketball and hoop | anticlockwise downwards and upwards open circle arrows
box | 📦 | ⚙ | package | gear
boy | 👦 | 🏃 | boy | runner
bracket | 📐 | 🗂 | triangular ruler | card index dividers
brain | 🧠 | 🧠 | brain | brain
brand | 🏷 | 🏢 | label | office building
brass | 🧲 | 🟡 | magnet | large yellow circle
brave | 🦁 | 💪 | lion face | flexed biceps
bread | 🍞 | 🍞 | bread | bread
breeze | 🌬 | 🍃 | wind blowing face | leaf fluttering in wind
brick | 🧱 | 🧱 | brick | brick
bridge | 🌉 | 🌉 | bridge at night | bridge at night
brief | 📄 | ⏱ | page facing up | stopwatch
bright | 💡 | 🌟 | electric light bulb | glowing star
bring | 🤲 | ➡ | palms up together | black rightwards arrow
brisk | 🏃 | 🏃 | runner | runner
broccoli | 🥦 | 🥦 | broccoli | broccoli
broken | ❌ | 🧩 | cross mark | jigsaw puzzle piece
bronze | 🟤 | 🏅 | large brown circle | sports medal
broom | 🧹 | 🧹 | broom | broom
brother | 👦 | ⚙ | boy | gear
brown | 🟫 | 🟫 | large brown square | large brown square
brush | 🖌 | 🧹 | lower left paintbrush | broom
bubble | 🫧 | 🫧 | bubbles | bubbles
buddy | 👬 | 🤝 | two men holding hands | handshake
budget | 💵 | 🏃 | banknote with dollar sign | runner
buffalo | 🦬 | 🦬 | bison | bison
build | 🧱 | 🔧 | brick | wrench
bulb | 💡 | 💡 | electric light bulb | electric light bulb
bulk | 📦 | 🏃 | package | runner
bullet | 🔫 | 🔘 | pistol | radio button
bundle | 📦 | 🪢 | package | knot
bunker | 🏚 | 🛡 | derelict house building | shield
burden | 🧱 | 📉 | brick | chart with downwards trend
burger | 🍔 | 🍔 | hamburger | hamburger
burst | 💥 | ❗ | collision symbol | heavy exclamation mark symbol
bus | 🚌 | 🚌 | bus | bus
business | 💼 | 🏢 | briefcase | office building
busy | 🏃 | 📅 | runner | calendar
butter | 🧈 | 🧈 | butter | butter
buyer | 🧑 | 💳 | adult | credit card
buzz | 🐝 | 🔊 | honeybee | speaker with three sound waves
cabbage | 🥬 | 🏃 | leafy green | runner
cabin | 🏚 | 🌲 | derelict house building | evergreen tree
cable | 🔌 | 🪢 | electric plug | knot
cactus | 🌵 | 🌵 | cactus | cactus
cage | 🪺 | 🔒 | nest with eggs | lock
cake | 🍰 | 🍰 | shortcake | shortcake
call | 📞 | 🗣 | telephone receiver | speaking head in silhouette
calm | 😌 | 🌊 | relieved face | water wave
camera | 📷 | 📷 | camera | camera
camp | 🏕 | 🏕 | camping | camping
can | 🥫 | 🥫 | canned food | canned food
canal | 🚤 | 🛣 | speedboat | motorway
cancel | ❌ | 🗓 | cross mark | spiral calendar pad
candy | 🍬 | 🍬 | candy | candy
cannon | 💣 | 🛡 | bomb | shield
canoe | 🛶 | 🛶 | canoe | canoe
canvas | 🖼 | 🎨 | frame with picture | artist palette
canyon | 🏜 | 📏 | desert | straight ruler
capable | ✅ | 💪 | white heavy check mark | flexed biceps
capital | 🏛 | 💰 | classical building | money bag
captain | 🧑 | 🚢 | adult | ship
car | 🚗 | 🏃 | automobile | runner
carbon | 🧪 | 🧱 | test tube | brick
card | 💳 | 💳 | credit card | credit card
cargo | 🚚 | 📦 | delivery truck | package
carpet | 🧶 | 🏠 | ball of yarn | house building
carry | 🤲 | 🚚 | palms up together | delivery truck
cart | 🛒 | 🛒 | shopping trolley | shopping trolley
case | 📦 | 📄 | package | page facing up
cash | 💵 | 💵 | banknote with dollar sign | banknote with dollar sign
casino | 🎰 | 🎰 | slot machine | slot machine
castle | 🏰 | 🏰 | european castle | european castle
casual | 🙂 | 👕 | slightly smiling face | t-shirt
cat | 🐱 | 🐱 | cat face | cat face
catalog | 📚 | 🏷 | books | label
catch | ✋ | 🎣 | raised hand | fishing pole and fish
category | 🗂 | 📁 | card index dividers | file folder
cattle | 🍽 | 🤲 | fork and knife with plate | palms up together
caught | 🐄 | 🐄 | cow | cow
cause | 🎯 | 📜 | direct hit | scroll
caution | ⚠ | ⛔ | warning sign | no entry
cave | 🕳 | 🪨 | hole | rock
ceiling | 🏠 | 🏃 | house building | runner
celery | 🥬 | 🥬 | leafy green | leafy green
cement | 🧱 | ⚙ | brick | gear
census | 📊 | 🏠 | bar chart | house building
century | 📅 | 💯 | calendar | hundred points symbol
cereal | 🥣 | 🌾 | bowl with spoon | ear of rice
certain | ✅ | 📌 | white heavy check mark | pushpin
chair | 🪑 | 🏃 | chair | runner
chalk | ✏ | 🧱 | pencil | brick
champion | 🏆 | 👑 | trophy | crown
change | 🔄 | 🧩 | anticlockwise downwards and upwards open circle arrows | jigsaw puzzle piece
chaos | 🌪 | 🔀 | cloud with tornado | twisted rightwards arrows
chapter | 📖 | 📑 | open book | bookmark tabs
charge | ⚡ | 💳 | high voltage sign | credit card
chase | 🏃 | 🎯 | runner | direct hit
chat | 💬 | 💬 | speech balloon | speech balloon
cheap | 🏷 | ⬇ | label | downwards black arrow
check | ✅ | 📋 | white heavy check mark | clipboard
cheese | 🧀 | 🧀 | cheese wedge | cheese wedge
chef | 👨 | ‍ | man | zero width joiner
cherry | 🍒 | 🍒 | cherries | cherries
chest | 🧳 | 🧰 | luggage | toolbox
chicken | 🐔 | 🐔 | chicken | chicken
chief | 👑 | 🏢 | crown | office building
child | 👶 | 🏃 | baby | runner
chimney | 🏠 | 💨 | house building | dash symbol
choice | ✅ | 🔀 | white heavy check mark | twisted rightwards arrows
choose | 👉 | ✅ | white right pointing backhand index | white heavy check mark
chronic | ⏳ | 🩺 | hourglass with flowing sand | stethoscope
chuckle | 😄 | 😄 | smiling face with open mouth and smiling eyes | smiling face with open mouth and smiling eyes
chunk | 📦 | 🧱 | package | brick
churn | 🔄 | 📉 | anticlockwise downwards and upwards open circle arrows | chart with downwards trend
cigar | 🚬 | 🚬 | smoking symbol | smoking symbol
cinnamon | 🪵 | 🌿 | wood | herb
circle | 🔵 | 📐 | large blue circle | triangular ruler
citizen | 🧑 | 🏛 | adult | classical building
city | 🏙 | 🏃 | cityscape | runner
civil | 🏛 | 🤝 | classical building | handshake
claim | 📄 | 🏃 | page facing up | runner
clap | 👏 | 👏 | clapping hands sign | clapping hands sign
clarify | 🔍 | 💬 | left-pointing magnifying glass | speech balloon
claw | 🐾 | 🔪 | paw prints | hocho
clay | 🧱 | 🌱 | brick | seedling
clean | 🧼 | ✨ | bar of soap | sparkles
clerk | 🧑 | 📋 | adult | clipboard
clever | 🧠 | 🏃 | brain | runner
click | 🖱 | 🖱 | three button mouse | three button mouse
client | 🧑 | 💼 | adult | briefcase
cliff | 🏔 | ⬇ | snow capped mountain | downwards black arrow
climb | 🧗 | ‍ | person climbing | zero width joiner
clinic | 🏥 | 🩺 | hospital | stethoscope
clip | 🧷 | 📎 | safety pin | paperclip
clock | ⏰ | ⏰ | alarm clock | alarm clock
clog | 🚫 | 🛁 | no entry sign | bathtub
close | 🚪 | 🏃 | door | runner
cloth | 🧵 | 🧻 | spool of thread | roll of paper
cloud | ☁ | ☁ | cloud | cloud
clown | 🤡 | 🤡 | clown face | clown face
club | 🏑 | 🎉 | field hockey stick and ball | party popper
clump | 🌱 | 📦 | seedling | package
cluster | 🌐 | 📦 | globe with meridians | package
clutch | ✋ | 🔒 | raised hand | lock
coach | 🧑 | 🎯 | adult | direct hit
coast | 🏖 | 🌊 | beach with umbrella | water wave
coconut | 🥥 | 🥥 | coconut | coconut
code | 💻 | 🔐 | personal computer | closed lock with key
coffee | ☕ | ☕ | hot beverage | hot beverage
coil | 🌀 | 🧵 | cyclone | spool of thread
coin | 🪙 | 🪙 | coin | coin
collect | 📦 | 📚 | package | books
color | 🎨 | 🎨 | artist palette | artist palette
column | 🏛 | 📏 | classical building | straight ruler
combine | ➕ | 🧩 | heavy plus sign | jigsaw puzzle piece
come | ➡ | ⚙ | black rightwards arrow | gear
comfort | 🛋 | 😌 | couch and lamp | relieved face
comic | 🗯 | 📚 | right anger bubble | books
common | 👥 | 🎯 | busts in silhouette | direct hit
company | 🏢 | 👥 | office building | busts in silhouette
concert | 🎵 | 🎤 | musical note | microphone
conduct | 🧑 | ⚖ | adult | scales
confirm | ✅ | 💬 | white heavy check mark | speech balloon
congress | 🏛 | 🏛 | classical building | classical building
connect | 🔗 | 🤝 | link symbol | handshake
consider | 🤔 | 📖 | thinking face | open book
control | 🎛 | 🛡 | control knobs | shield
convince | 🗣 | ✅ | speaking head in silhouette | white heavy check mark
cook | 🍳 | 🍳 | cooking | cooking
cool | 😎 | ❄ | smiling face with sunglasses | snowflake
copper | 🟠 | 🪙 | large orange circle | coin
copy | 📄 | 🎯 | page facing up | direct hit
coral | 🪸 | 🌊 | coral | water wave
core | 🧠 | 📍 | brain | round pushpin
corn | 🌽 | 🌽 | ear of maize | ear of maize
correct | ✅ | ✅ | white heavy check mark | white heavy check mark
cost | 💵 | 💲 | banknote with dollar sign | heavy dollar sign
cotton | 🧶 | 🌾 | ball of yarn | ear of rice
couch | 🛋 | 🛋 | couch and lamp | couch and lamp
country | 🗺 | 🏴 | world map | waving black flag
couple | 👩 | ‍ | woman | zero width joiner
course | 🛣 | 📚 | motorway | books
cousin | 👨 | ‍ | man | zero width joiner
cover | 🛡 | 📄 | shield | page facing up
coyote | 🐺 | 🏜 | wolf face | desert
crack | 💥 | ⚙ | collision symbol | gear
cradle | 🧺 | 👶 | basket | baby
craft | 🧰 | 🧵 | toolbox | spool of thread
cram | 🧠 | 📚 | brain | books
crane | 🏗 | 🪜 | building construction | ladder
crash | 💥 | 🚗 | collision symbol | automobile
crater | 🌋 | 🕳 | volcano | hole
crawl | 🐛 | ➡ | bug | black rightwards arrow
crazy | 🤪 | 🤯 | grinning face with one large and one small eye | shocked face with exploding head
cream | 🍦 | 🍦 | soft ice cream | soft ice cream
credit | 💳 | 📈 | credit card | chart with upwards trend
creek | 🏞 | 🌊 | national park | water wave
crew | 👥 | 🚢 | busts in silhouette | ship
cricket | 🦗 | 🏏 | cricket | cricket bat and ball
crime | 🚫 | 🏃 | no entry sign | runner
crisp | ❄ | 🍎 | snowflake | red apple
critic | 🧑 | 📝 | adult | memo
crop | 🌾 | ✂ | ear of rice | black scissors
cross | ➕ | ✝ | heavy plus sign | latin cross
crouch | 🧍 | ‍ | standing person | zero width joiner
crowd | 👥 | 👥 | busts in silhouette | busts in silhouette
crucial | 📌 | ❗ | pushpin | heavy exclamation mark symbol
cruel | 😡 | 💔 | pouting face | broken heart
cruise | 🚢 | 🌊 | ship | water wave
crumble | 🧱 | 💥 | brick | collision symbol
crunch | 😬 | 🍪 | grimacing face | cookie
crush | 💔 | 🔨 | broken heart | hammer
cry | 😢 | 😢 | crying face | crying face
crystal | 🔷 | 💎 | large blue diamond | gem stone
cube | 🧊 | 📐 | ice cube | triangular ruler
culture | 🏛 | 🎭 | classical building | performing arts
cup | 🥤 | 🥤 | cup with straw | cup with straw
cupboard | 🚪 | 🧂 | door | salt shaker
curious | 🤔 | 🔍 | thinking face | left-pointing magnifying glass
current | 🔌 | 🌊 | electric plug | water wave
curtain | 🧵 | 🚪 | spool of thread | door
curve | 📈 | 🔄 | chart with upwards trend | anticlockwise downwards and upwards open circle arrows
cushion | 🛋 | 🧶 | couch and lamp | ball of yarn
custom | 📜 | 🧾 | scroll | receipt
cute | 😊 | 🏃 | smiling face with smiling eyes | runner
cycle | 🔄 | ✍ | anticlockwise downwards and upwards open circle arrows | writing hand
dad | 👨 | 👨 | man | man
damage | 💥 | 🏃 | collision symbol | runner
damp | 💧 | 🧽 | droplet | sponge
dance | 💃 | 🎵 | dancer | musical note
danger | ⚠ | ☠ | warning sign | skull and crossbones
daring | 💥 | 🚀 | collision symbol | rocket
dash | 🏃 | 💨 | runner | dash symbol
daughter | 👧 | 👨 | girl | man
dawn | 🌄 | 🌄 | sunrise over mountains | sunrise over mountains
day | 📅 | 📅 | calendar | calendar
deal | 🤝 | 📜 | handshake | scroll
debate | 🗣 | ⚖ | speaking head in silhouette | scales
debris | 🧱 | 🗑 | brick | wastebasket
decade | 📅 | 🔟 | calendar | keycap ten
december | 🎄 | 🎄 | christmas tree | christmas tree
decide | ✅ | 🧠 | white heavy check mark | brain
decline | 📉 | ⬇ | chart with downwards trend | downwards black arrow
decorate | 🎨 | 🏠 | artist palette | house building
decrease | 📉 | 📉 | chart with downwards trend | chart with downwards trend
deer | 🦌 | 🦌 | deer | deer
defense | 🛡 | ⚔ | shield | crossed swords
define | 📖 | 📏 | open book | straight ruler
defy | 🚫 | ⚖ | no entry sign | scales
degree | 🎓 | 📏 | graduation cap | straight ruler
delay | ⏳ | 🐢 | hourglass with flowing sand | turtle
deliver | 🚚 | 🏃 | delivery truck | runner
demand | ✋ | 📜 | raised hand | scroll
demise | ⚰ | 🏁 | coffin | chequered flag
denial | ❌ | 📜 | cross mark | scroll
dentist | 🧑 | 🦷 | adult | tooth
deny | ❌ | ✍ | cross mark | writing hand
depart | ✈ | ➡ | airplane | black rightwards arrow
depend | 🤝 | 📌 | handshake | pushpin
deposit | 🏦 | 💵 | bank | banknote with dollar sign
depth | 📏 | 💬 | straight ruler | speech balloon
deputy | 👮 | 🏛 | police officer | classical building
derive | 📖 | ➡ | open book | black rightwards arrow
describe | ✍ | 🖼 | writing hand | frame with picture
desert | 🏜 | 🌞 | desert | sun with face
design | 📐 | 🎨 | triangular ruler | artist palette
desk | 🧑 | ‍ | adult | zero width joiner
despair | 😭 | 🌫 | loudly crying face | fog
destroy | 💥 | 🧱 | collision symbol | brick
detail | 📄 | 🔍 | page facing up | left-pointing magnifying glass
detect | 🔍 | 🕵 | left-pointing magnifying glass | sleuth or spy
develop | 📈 | 🔧 | chart with upwards trend | wrench
device | 📱 | ⚙ | mobile phone | gear
devote | ❤ | 📅 | heavy black heart | calendar
diagram | 📊 | 📐 | bar chart | triangular ruler
dial | ☎ | 🔄 | black telephone | anticlockwise downwards and upwards open circle arrows
diamond | 💎 | 🏃 | gem stone | runner
diary | 📓 | 🖊 | notebook | lower left ballpoint pen
dice | 🎲 | 🎲 | game die | game die
diesel | 🛢 | 🚛 | oil drum | articulated lorry
diet | 🥗 | 📉 | green salad | chart with downwards trend
differ | ↔ | 📏 | left right arrow | straight ruler
digital | 💻 | 📱 | personal computer | mobile phone
dignity | 👑 | 📏 | crown | straight ruler
dilemma | ❓ | ↔ | black question mark ornament | left right arrow
dinner | 🍽 | 🏃 | fork and knife with plate | runner
dinosaur | 🦖 | 🦖 | t-rex | t-rex
direct | ➡ | 📍 | black rightwards arrow | round pushpin
dirt | 🪨 | 🌱 | rock | seedling
disagree | ❌ | 🤝 | cross mark | handshake
discover | 🔍 | ✨ | left-pointing magnifying glass | sparkles
disease | 🦠 | 🤒 | microbe | face with thermometer
dish | 🍽 | 🍛 | fork and knife with plate | curry and rice
dismiss | 🚪 | ❌ | door | cross mark
disorder | 🌪 | 📉 | cloud with tornado | chart with downwards trend
display | 🖥 | 🏃 | desktop computer | runner
distance | 📏 | ➡ | straight ruler | black rightwards arrow
divert | 🔀 | ↩ | twisted rightwards arrows | leftwards arrow with hook
divide | ➗ | 📊 | heavy division sign | bar chart
divorce | ✂ | 💍 | black scissors | ring
dizzy | 🌀 | 😵 | cyclone | dizzy face
doctor | 🧑 | ‍ | adult | zero width joiner
document | 📄 | 📄 | page facing up | page facing up
dog | 🐶 | 🐶 | dog face | dog face
doll | 🪆 | 🪆 | nesting dolls | nesting dolls
dolphin | 🐬 | 🐬 | dolphin | dolphin
domain | 🌐 | 🏷 | globe with meridians | label
donate | 🤲 | 💰 | palms up together | money bag
donkey | 🫏 | 🫏 | unknown (🫏) | unknown (🫏)
donor | 🤲 | 💉 | palms up together | syringe
door | 🚪 | ⚙ | door | gear
dose | 💊 | 💊 | pill | pill
double | ✌ | ✌ | victory hand | victory hand
dove | 🕊 | 🕊 | dove of peace | dove of peace
draft | 📄 | ✍ | page facing up | writing hand
dragon | 🐉 | 🐉 | dragon | dragon
drama | 🎭 | 🎭 | performing arts | performing arts
drastic | ❗ | ⚡ | heavy exclamation mark symbol | high voltage sign
draw | ✏ | 🖼 | pencil | frame with picture
dream | 😴 | 💭 | sleeping face | thought balloon
dress | 👗 | ⚙ | dress | gear
drift | 🌊 | 💨 | water wave | dash symbol
drill | 🛠 | 🌀 | hammer and wrench | cyclone
drink | 🍹 | 🍹 | tropical drink | tropical drink
drip | 💧 | 🏃 | droplet | runner
drive | 🚗 | 🛣 | automobile | motorway
drop | 💧 | ⬇ | droplet | downwards black arrow
drum | 🥁 | 🥁 | drum with drumsticks | drum with drumsticks
dry | 🌵 | ☀ | cactus | black sun with rays
duck | 🦆 | 🦆 | duck | duck
dumb | 🤐 | 🤔 | zipper-mouth face | thinking face
dune | 🏜 | ⛰ | desert | mountain
during | ⏳ | 📅 | hourglass with flowing sand | calendar
dust | 🧹 | 🌫 | broom | fog
dutch | 🧀 | 🇳 | cheese wedge | regional indicator symbol letter n
duty | 📜 | 🛡 | scroll | shield
dwarf | 🧙 | ‍ | mage | zero width joiner
dynamic | 🔄 | ⚡ | anticlockwise downwards and upwards open circle arrows | high voltage sign
eager | 🤩 | 🔥 | grinning face with star eyes | fire
eagle | 🦅 | 🦅 | eagle | eagle
early | ⏰ | 🌅 | alarm clock | sunrise
earn | 💰 | 🏦 | money bag | bank
earth | 🌍 | 🏃 | earth globe europe-africa | runner
easily | 😊 | 👌 | smiling face with smiling eyes | ok hand sign
east | 🧭 | ➡ | compass | black rightwards arrow
easy | 😌 | ✅ | relieved face | white heavy check mark
echo | 📢 | 🔊 | public address loudspeaker | speaker with three sound waves
ecology | 🌱 | 🌍 | seedling | earth globe europe-africa
economy | 💵 | 📊 | banknote with dollar sign | bar chart
edge | 📐 | ⛰ | triangular ruler | mountain
edit | ✏ | 💻 | pencil | personal computer
educate | 🎓 | 🧑 | graduation cap | adult
effort | 💪 | 🔥 | flexed biceps | fire
egg | 🥚 | 🥚 | egg | egg
eight | 🎱 | 🕗 | billiards | clock face eight oclock
either | ↔ | 🤷 | left right arrow | shrug
elbow | 💪 | 🦴 | flexed biceps | bone
elder | 👴 | 📿 | older man | prayer beads
electric | ⚡ | 🔌 | high voltage sign | electric plug
elegant | 👠 | ✨ | high-heeled shoe | sparkles
element | 🧪 | 🌡 | test tube | thermometer
elephant | 🐘 | 🐘 | elephant | elephant
elevator | 🛗 | 🏃 | elevator | runner
elite | 👑 | 🌟 | crown | glowing star
else | 🔀 | 🤔 | twisted rightwards arrows | thinking face
embark | 🚢 | ➡ | ship | black rightwards arrow
embody | 🧍 | 💡 | standing person | electric light bulb
embrace | 🤗 | ❤ | hugging face | heavy black heart
emerge | 🌱 | ⬆ | seedling | upwards black arrow
emotion | ❤ | 😭 | heavy black heart | loudly crying face
employ | 💼 | 👨 | briefcase | man
empower | ⚪ | 🕳 | medium white circle | hole
empty | ✅ | 🔓 | white heavy check mark | open lock
enable | 👥 | ⚡ | busts in silhouette | high voltage sign
enact | 👍 | 💬 | thumbs up sign | speech balloon
end | 🛑 | 🏁 | octagonal sign | chequered flag
endless | ♾ | 🌌 | permanent paper sign | milky way
endorse | ✍ | 📜 | writing hand | scroll
enemy | ⚔ | 😠 | crossed swords | angry face
energy | ⚡ | 💪 | high voltage sign | flexed biceps
enforce | 👮 | ⚖ | police officer | scales
engage | 💍 | 🗣 | ring | speaking head in silhouette
engine | ⚙ | 🚂 | gear | steam locomotive
enhance | 📈 | ✨ | chart with upwards trend | sparkles
enjoy | 😄 | 🎉 | smiling face with open mouth and smiling eyes | party popper
enlist | 🪖 | ✍ | military helmet | writing hand
enough | ✅ | 📏 | white heavy check mark | straight ruler
enrich | 💎 | 📈 | gem stone | chart with upwards trend
enroll | 🏫 | 📝 | school | memo
ensure | ✅ | 🔒 | white heavy check mark | lock
enter | 🚪 | ➡ | door | black rightwards arrow
entire | 🌐 | 🏃 | globe with meridians | runner
entry | 🚪 | 🚶 | door | pedestrian
envelope | ✉ | 🏃 | envelope | runner
episode | 🎬 | 📺 | clapper board | television
equal | ⚖ | ⚖ | scales | scales
equip | 🧰 | ⚙ | toolbox | gear
era | 🕰 | 🏛 | mantelpiece clock | classical building
erase | 🩹 | ✏ | adhesive bandage | pencil
erode | 🌊 | 🪨 | water wave | rock
erosion | 🌧 | ⛰ | cloud with rain | mountain
error | ❌ | 💻 | cross mark | personal computer
erupt | 🌋 | 🔥 | volcano | fire
escape | 🏃 | ‍ | runner | zero width joiner
essay | 📄 | 🖊 | page facing up | lower left ballpoint pen
essence | 🌸 | 💨 | cherry blossom | dash symbol
estate | 🏡 | 📜 | house with garden | scroll
eternal | ♾ | 🕊 | permanent paper sign | dove of peace
ethics | ⚖ | 📚 | scales | books
evidence | 📜 | 🔍 | scroll | left-pointing magnifying glass
evil | 😈 | 🔥 | smiling face with horns | fire
evoke | 🗣 | 💭 | speaking head in silhouette | thought balloon
evolve | 🐒 | 🧑 | monkey | adult
exact | 🎯 | ✅ | direct hit | white heavy check mark
example | 📖 | 👆 | open book | white up pointing backhand index
excess | ➕ | 📈 | heavy plus sign | chart with upwards trend
exchange | 🔄 | ⚙ | anticlockwise downwards and upwards open circle arrows | gear
excite | 🤩 | ⚡ | grinning face with star eyes | high voltage sign
exclude | 🚫 | 🚪 | no entry sign | door
excuse | 🙏 | 📝 | person with folded hands | memo
execute | ⚔ | 🧑 | crossed swords | adult
exercise | 🏃 | ‍ | runner | zero width joiner
exhaust | 😩 | 💨 | weary face | dash symbol
exhibit | 🖼 | 🏃 | frame with picture | runner
exile | 🚷 | 🌍 | no pedestrians | earth globe europe-africa
exist | 🌐 | ✅ | globe with meridians | white heavy check mark
exit | 🚪 | ⬅ | door | leftwards black arrow
exotic | 🌴 | 🦜 | palm tree | parrot
expand | ⬆ | 📈 | upwards black arrow | chart with upwards trend
expect | 👀 | ⏳ | eyes | hourglass with flowing sand
expire | ⏰ | 💀 | alarm clock | skull
explain | 🗣 | 📖 | speaking head in silhouette | open book
expose | 📸 | 😮 | camera with flash | face with open mouth
express | 🚂 | 💬 | steam locomotive | speech balloon
extend | 📏 | 🎯 | straight ruler | direct hit
extra | ➕ | 🌟 | heavy plus sign | glowing star
eye | 👁 | 👁 | eye | eye
eyebrow | 👁 | 〰 | eye | wavy dash
fabric | 🧵 | 🪡 | spool of thread | sewing needle
face | 🙂 | 🙂 | slightly smiling face | slightly smiling face
faculty | 🎓 | 🏃 | graduation cap | runner
fade | 🌫 | ⬇ | fog | downwards black arrow
faint | 😵 | 💫 | dizzy face | dizzy symbol
faith | ✝ | 🙏 | latin cross | person with folded hands
fall | 🍂 | ⬇ | fallen leaf | downwards black arrow
false | ❌ | 🤥 | cross mark | lying face
fame | 🌟 | 📣 | glowing star | cheering megaphone
family | 👨 | ‍ | man | zero width joiner
famous | 🌟 | 📸 | glowing star | camera with flash
fan | 🌀 | 🪭 | cyclone | unknown (🪭)
fancy | 👑 | 🎀 | crown | ribbon
fantasy | 🧚 | ‍ | fairy | zero width joiner
farm | 🚜 | 🌾 | tractor | ear of rice
fashion | 👗 | 🏃 | dress | runner
fat | 🥓 | 🏃 | bacon | runner
fatal | ☠ | ⚰ | skull and crossbones | coffin
father | 👨 | 👔 | man | necktie
fatigue | 😴 | 😩 | sleeping face | weary face
fault | ⚡ | ⛰ | high voltage sign | mountain
favorite | ⭐ | ❤ | white medium star | heavy black heart
feature | 🔍 | 📱 | left-pointing magnifying glass | mobile phone
february | ❄ | 💘 | snowflake | heart with arrow
federal | 🏛 | 🇺 | classical building | regional indicator symbol letter u
fee | 💵 | 🧾 | banknote with dollar sign | receipt
feed | 🍽 | 🐄 | fork and knife with plate | cow
feel | 🤲 | 💓 | palms up together | beating heart
female | 🚺 | 👩 | womens symbol | woman
fence | 🚧 | 🌳 | construction sign | deciduous tree
festival | 🎉 | 🥁 | party popper | drum with drumsticks
fetch | 🐕 | 🎾 | dog | tennis racquet and ball
fever | 🤒 | 🌡 | face with thermometer | thermometer
few | 👐 | 🔢 | open hands sign | input symbol for numbers
fiber | 🧶 | 🥗 | ball of yarn | green salad
fiction | 📚 | 🛸 | books | flying saucer
field | 🌾 | ⚽ | ear of rice | soccer ball
figure | 👤 | 📏 | bust in silhouette | straight ruler
file | 📂 | 🖥 | open file folder | desktop computer
film | 🎥 | 🎞 | movie camera | film frames
filter | 🧃 | 🪣 | beverage box | bucket
final | 🏁 | ✅ | chequered flag | white heavy check mark
find | 🔍 | 👆 | left-pointing magnifying glass | white up pointing backhand index
fine | 💰 | ⚖ | money bag | scales
finger | 👉 | 🖐 | white right pointing backhand index | raised hand with fingers splayed
finish | 🏁 | 🎉 | chequered flag | party popper
fire | 🔥 | 🔥 | fire | fire
firm | 🏢 | 💼 | office building | briefcase
first | 🥇 | 🏆 | first place medal | trophy
fiscal | 💰 | 📊 | money bag | bar chart
fish | 🐟 | 🐟 | fish | fish
fit | 🧩 | 🏃 | jigsaw puzzle piece | runner
fitness | 🏋 | ‍ | weight lifter | zero width joiner
fix | 🛠 | 🔧 | hammer and wrench | wrench
flag | 🚩 | 🚩 | triangular flag on post | triangular flag on post
flame | 🔥 | 💨 | fire | dash symbol
flash | ⚡ | 📸 | high voltage sign | camera with flash
flat | ➖ | 🏠 | heavy minus sign | house building
flavor | 🍦 | 🍓 | soft ice cream | strawberry
flee | 🏃 | ‍ | runner | zero width joiner
flight | 🛫 | 🛬 | airplane departure | airplane arriving
flip | 🔄 | 📖 | anticlockwise downwards and upwards open circle arrows | open book
float | 🛟 | 🌊 | ring buoy | water wave
flock | 🐑 | 👥 | sheep | busts in silhouette
floor | 🪵 | 🏠 | wood | house building
flower | 🌸 | 🌼 | cherry blossom | blossom
fluid | 💧 | 🧪 | droplet | test tube
flush | 🚽 | 💦 | toilet | splashing sweat symbol
fly | 🪰 | ✈ | fly | airplane
foam | 🧴 | 🫧 | lotion bottle | bubbles
focus | 🎯 | 🔍 | direct hit | left-pointing magnifying glass
fog | 🌫 | 🌁 | fog | foggy
foil | 🧻 | ✨ | roll of paper | sparkles
fold | 📄 | ➖ | page facing up | heavy minus sign
follow | 👣 | ↪ | footprints | rightwards arrow with hook
food | 🍲 | 🍎 | pot of food | red apple
foot | 🦶 | 👣 | foot | footprints
force | 💪 | ⚔ | flexed biceps | crossed swords
forest | 🌦 | 📊 | white sun behind cloud with rain | bar chart
forget | 🧠 | ❌ | brain | cross mark
fork | 🍴 | 🍴 | fork and knife | fork and knife
fortune | 🍀 | 💰 | four leaf clover | money bag
forum | 🏛 | 🗣 | classical building | speaking head in silhouette
forward | ➡ | 📈 | black rightwards arrow | chart with upwards trend
fossil | 🦴 | 🪨 | bone | rock
foster | 🤲 | 👶 | palms up together | baby
found | 🧭 | ✅ | compass | white heavy check mark
fox | 🦊 | 🦊 | fox face | fox face
fragile | 🥂 | ⚠ | clinking glasses | warning sign
frame | 🖼 | 📐 | frame with picture | triangular ruler
frequent | 🔄 | 📅 | anticlockwise downwards and upwards open circle arrows | calendar
fresh | 🥗 | 🌱 | green salad | seedling
friend | 🤝 | 😊 | handshake | smiling face with smiling eyes
fringe | 🎭 | ✨ | performing arts | sparkles
frog | 🐸 | 🐸 | frog face | frog face
front | ⬆ | 🏠 | upwards black arrow | house building
frost | ❄ | 🏃 | snowflake | runner
frown | 🙁 | 👎 | slightly frowning face | thumbs down sign
frozen | 🧊 | ❄ | ice cube | snowflake
fruit | 🍎 | 🍌 | red apple | banana
fuel | ⛽ | 🛢 | fuel pump | oil drum
fun | 🎉 | 😂 | party popper | face with tears of joy
funny | 🤣 | 🎭 | rolling on the floor laughing | performing arts
furnace | 🔥 | 🏭 | fire | factory
fury | 😡 | 🏃 | pouting face | runner
future | 🔮 | 📅 | crystal ball | calendar
gadget | 📱 | 🏃 | mobile phone | runner
gain | 📈 | 💰 | chart with upwards trend | money bag
galaxy | 🌌 | ✨ | milky way | sparkles
gallery | 🖼 | 🏛 | frame with picture | classical building
game | 🎮 | 🎲 | video game | game die
gap | ➖ | 📏 | heavy minus sign | straight ruler
garage | 🚗 | 🏠 | automobile | house building
garbage | 🗑 | 🚮 | wastebasket | put litter in its place symbol
garden | 🌱 | 🌸 | seedling | cherry blossom
garlic | 🧄 | 🧄 | garlic | garlic
garment | 👕 | 👗 | t-shirt | dress
gas | ⛽ | 💨 | fuel pump | dash symbol
gasp | 😮 | 🏃 | face with open mouth | runner
gate | 🚪 | 🚪 | door | door
gather | 👥 | 📦 | busts in silhouette | package
gauge | 📏 | ⚡ | straight ruler | high voltage sign
gaze | 👀 | ➡ | eyes | black rightwards arrow
general | ⭐ | 🏃 | white medium star | runner
genius | 🧠 | ⚙ | brain | gear
genre | 🎶 | 📚 | multiple musical notes | books
gentle | 🤲 | 🕊 | palms up together | dove of peace
genuine | ✅ | ❤ | white heavy check mark | heavy black heart
gesture | 🤌 | 🤝 | pinched fingers | handshake
ghost | 👻 | 👻 | ghost | ghost
giant | 🗿 | 📏 | moyai | straight ruler
gift | 🎁 | 🎁 | wrapped present | wrapped present
giggle | 😆 | 😂 | smiling face with open mouth and tightly-closed eyes | face with tears of joy
ginger | 🫚 | 🥤 | unknown (🫚) | cup with straw
giraffe | 🦒 | 🦒 | giraffe face | giraffe face
girl | 👧 | 👧 | girl | girl
give | 🤲 | 🎁 | palms up together | wrapped present
glad | 😀 | 👍 | grinning face | thumbs up sign
glance | 👀 | ⏱ | eyes | stopwatch
glare | 👀 | ⚡ | eyes | high voltage sign
glass | 🥛 | 🍷 | glass of milk | wine glass
glide | 🪂 | ✨ | parachute | sparkles
glimpse | 👀 | 🔦 | eyes | electric torch
globe | 🌍 | 🌍 | earth globe europe-africa | earth globe europe-africa
gloom | 🌫 | 😞 | fog | disappointed face
glory | 🏆 | ✨ | trophy | sparkles
glove | 🧤 | 🧤 | gloves | gloves
glow | ✨ | 🌟 | sparkles | glowing star
glue | 🧴 | 📌 | lotion bottle | pushpin
goat | 🐐 | 🐐 | goat | goat
goddess | 👑 | 🕊 | crown | dove of peace
gold | 🥇 | 💰 | first place medal | money bag
good | 👍 | 🏃 | thumbs up sign | runner
goose | 🪿 | 🪿 | unknown (🪿) | unknown (🪿)
gorilla | 🦍 | 🦍 | gorilla | gorilla
gospel | 📖 | ✝ | open book | latin cross
gossip | 🗣 | 👂 | speaking head in silhouette | ear
govern | 🏛 | ⚖ | classical building | scales
gown | 👗 | 🎓 | dress | graduation cap
grab | ✋ | 🏃 | raised hand | runner
grace | 🙏 | 🕊 | person with folded hands | dove of peace
grain | 🌾 | 🌾 | ear of rice | ear of rice
grant | ✅ | 📜 | white heavy check mark | scroll
grape | 🍇 | 🍇 | grapes | grapes
grass | 🌱 | 🏃 | seedling | runner
gravity | 🌍 | ⬇ | earth globe europe-africa | downwards black arrow
great | 🌟 | 🏆 | glowing star | trophy
green | 🟢 | 🌱 | large green circle | seedling
grid | 🔲 | 📐 | black square button | triangular ruler
grief | 😢 | 💔 | crying face | broken heart
grit | 🪨 | 🏃 | rock | runner
grocery | 🛒 | 🥦 | shopping trolley | broccoli
group | 👥 | 🏃 | busts in silhouette | runner
grow | 🌱 | 📈 | seedling | chart with upwards trend
grunt | 🐗 | 💢 | boar | anger symbol
guard | 🛡 | 🚷 | shield | no pedestrians
guess | ❓ | 🤔 | black question mark ornament | thinking face
guide | 🧭 | 📖 | compass | open book
guilt | 😔 | ⚖ | pensive face | scales
guitar | 🎸 | 🎸 | guitar | guitar
gun | 🔫 | 🔫 | pistol | pistol
gym | 🏋 | ‍ | weight lifter | zero width joiner
habit | 🔁 | 📆 | clockwise rightwards and leftwards open circle arrows | tear-off calendar
hair | ✂ | 🧴 | black scissors | lotion bottle
half | 🌓 | ➗ | first quarter moon symbol | heavy division sign
hammer | 🔨 | 🔩 | hammer | nut and bolt
hamster | 🐹 | 🐹 | hamster face | hamster face
hand | ✋ | ✋ | raised hand | raised hand
happy | 😄 | ✨ | smiling face with open mouth and smiling eyes | sparkles
harbor | ⚓ | 🚢 | anchor | ship
hard | 🪨 | 💪 | rock | flexed biceps
harsh | 🌵 | ⚠ | cactus | warning sign
harvest | 🌾 | 🧺 | ear of rice | basket
hat | 🎩 | 🎩 | top hat | top hat
have | 🤲 | 📦 | palms up together | package
hawk | 🦅 | 👁 | eagle | eye
hazard | ☣ | ⚠ | biohazard sign | warning sign
head | 🧑 | 🧠 | adult | brain
health | ❤ | ‍ | heavy black heart | zero width joiner
heart | ❤ | ❤ | heavy black heart | heavy black heart
heavy | 🏋 | 📦 | weight lifter | package
hedgehog | 🦔 | 🦔 | hedgehog | hedgehog
height | 📏 | 🔍 | straight ruler | left-pointing magnifying glass
hello | 👋 | 🙂 | waving hand sign | slightly smiling face
helmet | ⛑ | 🛡 | helmet with white cross | shield
help | 🆘 | ✋ | squared sos | raised hand
hen | 🐔 | 🥚 | chicken | egg
hero | 🛡 | ⭐ | shield | white medium star
hidden | 🙈 | 🔒 | see-no-evil monkey | lock
high | ⛰ | ⬆ | mountain | upwards black arrow
hill | ⛰ | ↗ | mountain | north east arrow
hint | 💡 | 👉 | electric light bulb | white right pointing backhand index
hip | 🦴 | 👖 | bone | jeans
hire | 👔 | 📄 | necktie | page facing up
history | 📜 | ⌛ | scroll | hourglass
hobby | 🎨 | 🎯 | artist palette | direct hit
hockey | 🏒 | 🥅 | ice hockey stick and puck | goal net
hold | ✋ | 📦 | raised hand | package
hole | 🕳 | ⬇ | hole | downwards black arrow
holiday | 🎉 | 🏖 | party popper | beach with umbrella
hollow | 🕳 | ⚪ | hole | medium white circle
home | 🏠 | 🏠 | house building | house building
honey | 🍯 | 🐝 | honey pot | honeybee
hood | 🧥 | 🧣 | coat | scarf
hope | 🙏 | 🏃 | person with folded hands | runner
horn | 📯 | 🎺 | postal horn | trumpet
horror | 😱 | 🩸 | face screaming in fear | drop of blood
horse | 🐴 | 🏃 | horse face | runner
hospital | 🏥 | ➕ | hospital | heavy plus sign
host | 🤝 | 🏠 | handshake | house building
hotel | 🏨 | 🛎 | hotel | bellhop bell
hour | ⏰ | 🕒 | alarm clock | clock face three oclock
hover | 🚁 | ⏸ | helicopter | double vertical bar
hub | 🛞 | 🔗 | wheel | link symbol
huge | 🗻 | 📏 | mount fuji | straight ruler
human | 🧑 | 🌍 | adult | earth globe europe-africa
humble | 🙇 | 🕊 | person bowing deeply | dove of peace
humor | 😂 | 🎭 | face with tears of joy | performing arts
hundred | 💯 | 💯 | hundred points symbol | hundred points symbol
hungry | 😋 | 🍽 | face savouring delicious food | fork and knife with plate
hunt | 🏹 | 🐾 | bow and arrow | paw prints
hurdle | 🏃 | 🚧 | runner | construction sign
hurry | ⏳ | 🏃 | hourglass with flowing sand | runner
hurt | 🤕 | 💢 | face with head-bandage | anger symbol
husband | 👨 | 💍 | man | ring
hybrid | 🧬 | 🔀 | dna double helix | twisted rightwards arrows
ice | ❄ | ❄ | snowflake | snowflake
icon | 🖼 | ⭐ | frame with picture | white medium star
idea | 💡 | 🏃 | electric light bulb | runner
identify | 🆔 | 🔍 | squared id | left-pointing magnifying glass
idle | 🛑 | 😴 | octagonal sign | sleeping face
ignore | 🙈 | 🏃 | see-no-evil monkey | runner
ill | 🤒 | 🤢 | face with thermometer | nauseated face
illegal | 🚫 | ⚙ | no entry sign | gear
illness | 🤧 | 🏥 | sneezing face | hospital
image | 🖼 | 📷 | frame with picture | camera
imitate | 🪞 | 🙃 | mirror | upside-down face
immense | 🌌 | 📏 | milky way | straight ruler
immune | 🛡 | 🧬 | shield | dna double helix
impact | 💥 | 🌍 | collision symbol | earth globe europe-africa
impose | 📜 | 📢 | scroll | public address loudspeaker
improve | 📈 | 💪 | chart with upwards trend | flexed biceps
impulse | ⚡ | ❤ | high voltage sign | heavy black heart
inch | 📏 | 📏 | straight ruler | straight ruler
include | ➕ | 📦 | heavy plus sign | package
income | 💵 | 📥 | banknote with dollar sign | inbox tray
increase | 📈 | ⬆ | chart with upwards trend | upwards black arrow
index | 📖 | ☝ | open book | white up pointing index
indicate | 👉 | 📍 | white right pointing backhand index | round pushpin
indoor | 🏠 | ✍ | house building | writing hand
industry | 🏭 | ⚙ | factory | gear
infant | 👶 | 🍼 | baby | baby bottle
inflict | 🔪 | 💢 | hocho | anger symbol
inform | 📢 | 💬 | public address loudspeaker | speech balloon
inhale | 😮 | 💨 | face with open mouth | dash symbol
inherit | 🧬 | 📜 | dna double helix | scroll
initial | 🔤 | ➡ | input symbol for latin letters | black rightwards arrow
inject | 💉 | ➡ | syringe | black rightwards arrow
injury | 🤕 | 🩹 | face with head-bandage | adhesive bandage
inmate | 🚔 | 🔒 | oncoming police car | lock
inner | 🔘 | 🧠 | radio button | brain
innocent | 😇 | ✅ | smiling face with halo | white heavy check mark
input | ⌨ | 📥 | keyboard | inbox tray
inquiry | ❓ | 📄 | black question mark ornament | page facing up
insane | 🤪 | 🏥 | grinning face with one large and one small eye | hospital
insect | 🐜 | 🐜 | ant | ant
inside | 🏠 | ➡ | house building | black rightwards arrow
inspire | ✨ | 💡 | sparkles | electric light bulb
install | 📦 | ⬇ | package | downwards black arrow
intact | 🧩 | ⚙ | jigsaw puzzle piece | gear
interest | 📈 | 💬 | chart with upwards trend | speech balloon
into | 👉 | ➡ | white right pointing backhand index | black rightwards arrow
invest | 💰 | 📈 | money bag | chart with upwards trend
invite | ✉ | 🎉 | envelope | party popper
involve | 🔄 | 🤝 | anticlockwise downwards and upwards open circle arrows | handshake
iron | 🧲 | ⚙ | magnet | gear
island | 🏝 | 🌊 | desert island | water wave
isolate | 🧍 | 🚫 | standing person | no entry sign
issue | 🧾 | ⚠ | receipt | warning sign
item | 📦 | 🔖 | package | bookmark
ivory | 🐘 | 🦷 | elephant | tooth
jacket | 🧥 | 🧥 | coat | coat
jaguar | 🐆 | 🌴 | leopard | palm tree
jar | 🫙 | 🍯 | jar | honey pot
jazz | 🎷 | 🎶 | saxophone | multiple musical notes
jealous | 😒 | 💔 | unamused face | broken heart
jeans | 👖 | 👖 | jeans | jeans
jelly | 🍮 | 🍇 | custard | grapes
jewel | 💎 | 💎 | gem stone | gem stone
job | 💼 | 💼 | briefcase | briefcase
join | 🤝 | ➕ | handshake | heavy plus sign
joke | 😂 | 🏃 | face with tears of joy | runner
journey | 🚶 | ‍ | pedestrian | zero width joiner
joy | 😀 | 🎉 | grinning face | party popper
judge | 👨 | ‍ | man | zero width joiner
juice | 🥤 | 🍊 | cup with straw | tangerine
jump | 🤸 | ‍ | person doing cartwheel | zero width joiner
jungle | 🌴 | 🦍 | palm tree | gorilla
junior | 👶 | 🎓 | baby | graduation cap
junk | 🗑 | 🪙 | wastebasket | coin
just | ⚖ | ⚙ | scales | gear
kangaroo | 🦘 | 🦘 | kangaroo | kangaroo
keen | 👀 | 🔥 | eyes | fire
keep | 🤲 | 🔒 | palms up together | lock
ketchup | 🍅 | 🥫 | tomato | canned food
key | 🔑 | 🔑 | key | key
kick | 🦵 | ⚽ | leg | soccer ball
kid | 👦 | 👦 | boy | boy
kidney | 🩺 | 🫘 | stethoscope | beans
kind | 🤝 | 💖 | handshake | sparkling heart
kingdom | 🏰 | 👑 | european castle | crown
kiss | 💋 | ❤ | kiss mark | heavy black heart
kit | 🧰 | 📦 | toolbox | package
kitchen | 🍳 | 🏠 | cooking | house building
kite | 🪁 | 🌬 | kite | wind blowing face
kitten | 🐱 | 🐾 | cat face | paw prints
kiwi | 🥝 | 🥝 | kiwifruit | kiwifruit
knee | 🦵 | 🦴 | leg | bone
knife | 🔪 | 🔪 | hocho | hocho
knock | 👊 | 🚪 | fisted hand sign | door
know | 🧠 | ✅ | brain | white heavy check mark
lab | 🧪 | 🔬 | test tube | microscope
label | 🏷 | 🏃 | label | runner
labor | 👷 | ‍ | construction worker | zero width joiner
ladder | 🪜 | 🪜 | ladder | ladder
lady | 👩 | 👒 | woman | womans hat
lake | 🌊 | 🏞 | water wave | national park
lamp | 🛋 | 💡 | couch and lamp | electric light bulb
language | 🗣 | 📚 | speaking head in silhouette | books
laptop | 💻 | ⌨ | personal computer | keyboard
large | 📏 | ⬆ | straight ruler | upwards black arrow
later | ⏳ | ⚙ | hourglass with flowing sand | gear
latin | 📜 | 🔤 | scroll | input symbol for latin letters
laugh | 😂 | 🤣 | face with tears of joy | rolling on the floor laughing
laundry | 👕 | 🧺 | t-shirt | basket
lava | 🌋 | 🫗 | volcano | pouring liquid
law | 📜 | ⚖ | scroll | scales
lawn | 🌱 | ✂ | seedling | black scissors
lawsuit | ⚖ | 🧾 | scales | receipt
layer | 📚 | ➖ | books | heavy minus sign
lazy | 😴 | 🛋 | sleeping face | couch and lamp
leader | 🧑 | ‍ | adult | zero width joiner
leaf | 🍃 | 🍃 | leaf fluttering in wind | leaf fluttering in wind
learn | 📚 | 🏃 | books | runner
leave | 🚪 | 👋 | door | waving hand sign
lecture | 🎓 | 📖 | graduation cap | open book
left | ⬅ | ✋ | leftwards black arrow | raised hand
leg | 🦵 | 🦵 | leg | leg
legal | ⚖ | ✅ | scales | white heavy check mark
legend | 🏆 | 📜 | trophy | scroll
leisure | 🏖 | 🍹 | beach with umbrella | tropical drink
lemon | 🍋 | 🍋 | lemon | lemon
lend | 💵 | ⚙ | banknote with dollar sign | gear
length | 📏 | ↔ | straight ruler | left right arrow
lens | 🔍 | 📸 | left-pointing magnifying glass | camera with flash
leopard | 🐆 | 🐆 | leopard | leopard
lesson | 📖 | 🧑 | open book | adult
letter | ✉ | ✉ | envelope | envelope
level | 📊 | 📏 | bar chart | straight ruler
liar | 🤥 | 🙊 | lying face | speak-no-evil monkey
liberty | 🗽 | 🕊 | statue of liberty | dove of peace
library | 📚 | 🏛 | books | classical building
license | 🪪 | ✅ | identification card | white heavy check mark
life | 🌱 | ❤ | seedling | heavy black heart
lift | 🛗 | ⬆ | elevator | upwards black arrow
light | 💡 | ✨ | electric light bulb | sparkles
like | 👍 | ❤ | thumbs up sign | heavy black heart
limb | 🦴 | 🦵 | bone | leg
limit | 🚫 | 📏 | no entry sign | straight ruler
link | 🔗 | 🔗 | link symbol | link symbol
lion | 🦁 | 🦁 | lion face | lion face
liquid | 💧 | ⚙ | droplet | gear
list | 📋 | 📋 | clipboard | clipboard
little | 👶 | 📏 | baby | straight ruler
live | 🎤 | 🏟 | microphone | stadium
lizard | 🦎 | 🦎 | lizard | lizard
load | 📦 | ⬆ | package | upwards black arrow
loan | 💵 | 🏦 | banknote with dollar sign | bank
lobster | 🦞 | 🦞 | lobster | lobster
local | 🏘 | 📍 | house buildings | round pushpin
lock | 🔒 | 🔒 | lock | lock
logic | 📍 | ⚙ | round pushpin | gear
lonely | 😔 | 🚶 | pensive face | pedestrian
long | 📏 | ✍ | straight ruler | writing hand
loop | 👀 | 👆 | eyes | white up pointing backhand index
lottery | 🎟 | 💰 | admission tickets | money bag
loud | 🔊 | 📢 | speaker with three sound waves | public address loudspeaker
lounge | 🛋 | ☕ | couch and lamp | hot beverage
love | ❤ | 💞 | heavy black heart | revolving hearts
loyal | 🪢 | ✂ | knot | black scissors
lucky | ✝ | 👑 | latin cross | crown
luggage | ❌ | 🏆 | cross mark | trophy
lumber | 📉 | 💔 | chart with downwards trend | broken heart
lunar | 🌙 | 🛰 | crescent moon | satellite
lunch | 🍽 | 🕛 | fork and knife with plate | clock face twelve oclock
luxury | 👑 | 💎 | crown | gem stone
lyrics | 🎵 | 📝 | musical note | memo
machine | ⚙ | 🤖 | gear | robot face
mad | 😡 | 🤯 | pouting face | shocked face with exploding head
magic | ✨ | 🎩 | sparkles | top hat
magnet | 🧲 | 🧲 | magnet | magnet
maid | 👩 | ‍ | woman | zero width joiner
mail | 📬 | ✉ | open mailbox with raised flag | envelope
main | 📌 | 🏠 | pushpin | house building
major | 🎖 | 🏛 | military medal | classical building
make | 🛠 | 🎨 | hammer and wrench | artist palette
mammal | 🚹 | 👨 | mens symbol | man
man | 🏬 | 🛍 | department store | shopping bags
manage | 🧑 | ‍ | adult | zero width joiner
mandate | 📜 | 🏃 | scroll | runner
mango | 🥭 | 🥭 | mango | mango
mansion | 🏰 | 🏠 | european castle | house building
manual | 📖 | 🛠 | open book | hammer and wrench
maple | 🍁 | 🌳 | maple leaf | deciduous tree
marble | 🏛 | ⚪ | classical building | medium white circle
march | 🚶 | ‍ | pedestrian | zero width joiner
margin | 📉 | 📐 | chart with downwards trend | triangular ruler
marine | ⚓ | 🐬 | anchor | dolphin
market | 🛒 | 📈 | shopping trolley | chart with upwards trend
marriage | 💍 | ❤ | ring | heavy black heart
mask | 🎭 | 😷 | performing arts | face with medical mask
mass | 🌍 | ⚖ | earth globe europe-africa | scales
master | 👑 | 📚 | crown | books
match | 🎾 | 🔥 | tennis racquet and ball | fire
material | 🧱 | 🏃 | brick | runner
math | ➕ | ➗ | heavy plus sign | heavy division sign
matrix | 🔢 | 🕸 | input symbol for numbers | spider web
matter | 🌌 | ⚛ | milky way | atom symbol
maximum | 📈 | 🚀 | chart with upwards trend | rocket
maze | 🌀 | 🗺 | cyclone | world map
meadow | 🌾 | 🌼 | ear of rice | blossom
mean | ➖ | 😠 | heavy minus sign | angry face
measure | 📏 | ⚖ | straight ruler | scales
meat | 🍖 | 🥩 | meat on bone | cut of meat
mechanic | 🧑 | ‍ | adult | zero width joiner
medal | 🥇 | 🏅 | first place medal | sports medal
media | 📺 | 🎙 | television | studio microphone
melody | 🎼 | 🎶 | musical score | multiple musical notes
melt | 🧊 | 🔥 | ice cube | fire
member | 👤 | 👥 | bust in silhouette | busts in silhouette
memory | 🧠 | 💾 | brain | floppy disk
mention | 💬 | 📢 | speech balloon | public address loudspeaker
menu | 📋 | 🍴 | clipboard | fork and knife
mercy | 🙏 | ⚙ | person with folded hands | gear
merge | 🔀 | 🏃 | twisted rightwards arrows | runner
merit | 🏆 | ⚙ | trophy | gear
merry | 🎄 | 😀 | christmas tree | grinning face
mesh | 🕸 | 🧵 | spider web | spool of thread
message | 💬 | 📨 | speech balloon | incoming envelope
metal | ⚙ | ⛓ | gear | chains
method | 📚 | 📝 | books | memo
middle | ➗ | 📍 | heavy division sign | round pushpin
midnight | 🌙 | 🕛 | crescent moon | clock face twelve oclock
milk | 🥛 | 🥛 | glass of milk | glass of milk
million | 🪙 | 🔢 | coin | input symbol for numbers
mimic | 🪞 | 🙂 | mirror | slightly smiling face
mind | 🧠 | ✨ | brain | sparkles
minimum | 📉 | 🏃 | chart with downwards trend | runner
minor | 👶 | ⚠ | baby | warning sign
minute | ⏱ | 🕒 | stopwatch | clock face three oclock
miracle | ✨ | 🙏 | sparkles | person with folded hands
mirror | 🪞 | 🪞 | mirror | mirror
misery | 😢 | 🏃 | crying face | runner
miss | 🎯 | 👩 | direct hit | woman
mistake | 📜 | ❌ | scroll | cross mark
mix | 🔀 | 🥣 | twisted rightwards arrows | bowl with spoon
mixed | ⚖ | 🔄 | scales | anticlockwise downwards and upwards open circle arrows
mixture | 🧪 | 🥛 | test tube | glass of milk
mobile | 📱 | 📱 | mobile phone | mobile phone
model | 🧍 | ‍ | standing person | zero width joiner
modify | ✏ | 🛠 | pencil | hammer and wrench
mom | 👩 | ‍ | woman | zero width joiner
moment | ⏳ | 📸 | hourglass with flowing sand | camera with flash
monitor | 🖥 | 👀 | desktop computer | eyes
monkey | 🐒 | 🐒 | monkey | monkey
monster | 👾 | 👾 | alien monster | alien monster
month | 📅 | 🗓 | calendar | spiral calendar pad
moon | 🌙 | 🌙 | crescent moon | crescent moon
moral | 🏙 | 💡 | cityscape | electric light bulb
more | 🙇 | ‍ | person bowing deeply | zero width joiner
morning | 🌅 | ☕ | sunrise | hot beverage
mosquito | 🦟 | 🦟 | mosquito | mosquito
mother | 👩 | ⚙ | woman | gear
motion | 🏃 | ‍ | runner | zero width joiner
motor | ⚙ | 🚗 | gear | automobile
mountain | 🏔 | 🏔 | snow capped mountain | snow capped mountain
mouse | 🐭 | 🖱 | mouse face | three button mouse
move | 🚶 | ‍ | pedestrian | zero width joiner
movie | 🎬 | 🎥 | clapper board | movie camera
much | 📈 | 📦 | chart with upwards trend | package
muffin | 🧁 | 🥮 | cupcake | moon cake
mule | 🫏 | 🏃 | unknown (🫏) | runner
multiply | 🔢 | ✖ | input symbol for numbers | heavy multiplication x
muscle | 💪 | 🦵 | flexed biceps | leg
museum | 🏛 | 🖼 | classical building | frame with picture
mushroom | 🍄 | 🍄 | mushroom | mushroom
music | 🎵 | 🎼 | musical note | musical score
must | ✅ | ✍ | white heavy check mark | writing hand
mutual | 🤝 | ↔ | handshake | left right arrow
myself | 🙋,🏻 | happy person raising one hand | emoji modifier fitzpatrick type-1-2
mystery | 🕵 | ‍ | sleuth or spy | zero width joiner
myth | 🧙 | ‍ | mage | zero width joiner
naive | 🙂 | 🍼 | slightly smiling face | baby bottle
name | 🏷 | 🧾 | label | receipt
napkin | 🤧 | 🤧 | sneezing face | sneezing face
narrow | 📏 | 🔽 | straight ruler | down-pointing small red triangle
nasty | 🤮 | 🤮 | face with open mouth vomiting | face with open mouth vomiting
nation | 🗺 | 🏛 | world map | classical building
nature | 🌿 | 🌍 | herb | earth globe europe-africa
near | 📍 | ✍ | round pushpin | writing hand
neck | 🦴 | 👕 | bone | t-shirt
need | ⚠ | 📌 | warning sign | pushpin
negative | ➖ | ❌ | heavy minus sign | cross mark
neglect | 🚫 | 👶 | no entry sign | baby
neither | ↔ | 🙅 | left right arrow | face with no good gesture
nephew | 👦 | 👨 | boy | man
nerve | 🧠 | ⚡ | brain | high voltage sign
nest | 🪺 | 🐣 | nest with eggs | hatching chick
net | 🎣 | 🕸 | fishing pole and fish | spider web
network | 🌐 | 🔗 | globe with meridians | link symbol
neutral | ⚖ | ⚪ | scales | medium white circle
never | 🚫 | ♾ | no entry sign | permanent paper sign
news | 📰 | 📺 | newspaper | television
next | ⏭ | ➡ | black right-pointing double triangle with vertical bar | black rightwards arrow
nice | 😊 | 🌸 | smiling face with smiling eyes | cherry blossom
night | 🌙 | 🌌 | crescent moon | milky way
noble | 👑 | ⚜ | crown | fleur-de-lis
noise | 🔊 | 🙉 | speaker with three sound waves | hear-no-evil monkey
nominee | 🏅 | 🧑 | sports medal | adult
noodle | 🍜 | 🍜 | steaming bowl | steaming bowl
normal | 📏 | 🙂 | straight ruler | slightly smiling face
north | 🧭 | ⬆ | compass | upwards black arrow
nose | 👃 | 👃 | nose | nose
notable | 🌟 | 📖 | glowing star | open book
note | 📝 | 🎶 | memo | multiple musical notes
nothing | 🚫 | ⚪ | no entry sign | medium white circle
notice | 👀 | 📜 | eyes | scroll
novel | 📚 | ✍ | books | writing hand
now | ⏰ | ✅ | alarm clock | white heavy check mark
nuclear | ☢ | 🌋 | radioactive sign | volcano
number | 🔢 | 🔢 | input symbol for numbers | input symbol for numbers
nurse | 👩 | ‍ | woman | zero width joiner
nut | 🌰 | 🥜 | chestnut | peanuts
oak | 🌳 | 🏃 | deciduous tree | runner
obey | 🙇 | ‍ | person bowing deeply | zero width joiner
object | 🎯 | 📦 | direct hit | package
oblige | 🤝 | ⚙ | handshake | gear
obscure | 🌫 | 🙈 | fog | see-no-evil monkey
observe | 👀 | 🔭 | eyes | telescope
obtain | 📦 | 🎯 | package | direct hit
obvious | 👁 | ✅ | eye | white heavy check mark
occur | 🕒 | ⚡ | clock face three oclock | high voltage sign
ocean | 🌊 | 🐠 | water wave | tropical fish
october | 🎃 | 🍁 | jack-o-lantern | maple leaf
odor | 💨 | 😷 | dash symbol | face with medical mask
off | ⛔ | 🔌 | no entry | electric plug
offer | 🎁 | 🤲 | wrapped present | palms up together
office | 🏢 | 🖇 | office building | linked paperclips
often | 🔄 | 📆 | anticlockwise downwards and upwards open circle arrows | tear-off calendar
oil | 🛢 | 💧 | oil drum | droplet
okay | 👍 | ✅ | thumbs up sign | white heavy check mark
old | 👴 | 📜 | older man | scroll
olive | 🫒 | 🫒 | olive | olive
olympic | 🏅 | 🏟 | sports medal | stadium
omit | 🚫 | 📝 | no entry sign | memo
once | 🔂 | ⏳ | clockwise rightwards and leftwards open circle arrows with circled one overlay | hourglass with flowing sand
one | ☝ | ☝ | white up pointing index | white up pointing index
onion | 🧅 | 🧅 | onion | onion
online | 🌐 | 📱 | globe with meridians | mobile phone
only | 🚫 | 👥 | no entry sign | busts in silhouette
open | 🔓 | 🚪 | open lock | door
opera | 🎭 | 🎶 | performing arts | multiple musical notes
opinion | 💬 | 🧠 | speech balloon | brain
oppose | ✊ | 🚫 | raised fist | no entry sign
option | ✅ | ❓ | white heavy check mark | black question mark ornament
orange | 🍊 | 🟠 | tangerine | large orange circle
orbit | 🌍 | 🛰 | earth globe europe-africa | satellite
orchard | 🌳 | 🍎 | deciduous tree | red apple
order | 📜 | 📦 | scroll | package
ordinary | 🙂 | 📏 | slightly smiling face | straight ruler
organ | 🎹 | 🫁 | musical keyboard | lungs
orient | 🌀 | 📍 | cyclone | round pushpin
original | 🌟 | 🧬 | glowing star | dna double helix
orphan | 👶 | 🚫 | baby | no entry sign
ostrich | 🐦 | 🏜 | bird | desert
other | 🔄 | 👤 | anticlockwise downwards and upwards open circle arrows | bust in silhouette
outdoor | 🌳 | 🏞 | deciduous tree | national park
outer | 🌌 | 🚀 | milky way | rocket
output | ⬆ | 💻 | upwards black arrow | personal computer
outside | 🚪 | 🌳 | door | deciduous tree
oval | 🏐 | 🟢 | volleyball | large green circle
oven | 🍞 | 🔥 | bread | fire
over | ⬆ | 🔁 | upwards black arrow | clockwise rightwards and leftwards open circle arrows
own | 🏠 | ⚙ | house building | gear
owner | 👤 | 🏠 | bust in silhouette | house building
oxygen | 🫁 | 💨 | lungs | dash symbol
oyster | 🦪 | 💎 | oyster | gem stone
ozone | 🌍 | 💨 | earth globe europe-africa | dash symbol
pact | 🤝 | 🤝 | handshake | handshake
paddle | 🛶 | 🥢 | canoe | chopsticks
page | 📄 | ⚙ | page facing up | gear
pair | 👥 | ⚙ | busts in silhouette | gear
palace | 🏰 | 🏃 | european castle | runner
palm | 🌴 | ✋ | palm tree | raised hand
panda | 🐼 | 🐼 | panda face | panda face
panel | 🖥 | 📊 | desktop computer | bar chart
panic | 😱 | 🔥 | face screaming in fear | fire
panther | 🐆 | 🏃 | leopard | runner
paper | 📄 | 📰 | page facing up | newspaper
parade | 🥁 | 🎉 | drum with drumsticks | party popper
parent | 👩 | 🏃 | woman | runner
park | 🌳 | 🎠 | deciduous tree | carousel horse
parrot | 🦜 | 🦜 | parrot | parrot
party | 🎉 | 🍾 | party popper | bottle with popping cork
pass | 🎫 | ✅ | ticket | white heavy check mark
patch | 🩹 | 🧵 | adhesive bandage | spool of thread
path | 🛣 | ➡ | motorway | black rightwards arrow
patient | 🏥 | 🧑 | hospital | adult
patrol | 🚓 | 👮 | police car | police officer
pattern | 🪡 | 🧵 | sewing needle | spool of thread
pause | ⏸ | ✋ | double vertical bar | raised hand
pave | 🛣 | 🧱 | motorway | brick
payment | 💵 | 🤲 | banknote with dollar sign | palms up together
peace | ☮ | 🕊 | peace symbol | dove of peace
peanut | 🥜 | 🥜 | peanuts | peanuts
pear | 🍐 | 🍐 | pear | pear
peasant | 👨 | ‍ | man | zero width joiner
pelican | 🦩 | 🐟 | flamingo | fish
pen | 🖊 | 🖊 | lower left ballpoint pen | lower left ballpoint pen
penalty | 🚫 | ⚽ | no entry sign | soccer ball
pencil | ✏ | ✏ | pencil | pencil
people | 👥 | ✍ | busts in silhouette | writing hand
pepper | 🌶 | 🫑 | hot pepper | bell pepper
perfect | ✅ | 🌟 | white heavy check mark | glowing star
permit | 🪪 | 📜 | identification card | scroll
person | 👴 | 👥 | older man | busts in silhouette
pet | 🐕 | 🐾 | dog | paw prints
phone | 📱 | 📞 | mobile phone | telephone receiver
photo | 📸 | 📸 | camera with flash | camera with flash
phrase | 💬 | 📖 | speech balloon | open book
physical | 🏋 | ‍ | weight lifter | zero width joiner
piano | 🎹 | 🎹 | musical keyboard | musical keyboard
picnic | 🧺 | 🍇 | basket | grapes
picture | 🖼 | 🖼 | frame with picture | frame with picture
piece | 🧩 | 🧩 | jigsaw puzzle piece | jigsaw puzzle piece
pig | 🐖 | 🐖 | pig | pig
pigeon | 📚 | 🗑 | books | wastebasket
pill | 💊 | 🏃 | pill | runner
pilot | 👨 | ‍ | man | zero width joiner
pink | 🩷 | 🌸 | unknown (🩷) | cherry blossom
pioneer | 🧭 | 🚶 | compass | pedestrian
pipe | 🪈 | 💨 | unknown (🪈) | dash symbol
pistol | 🔫 | 💥 | pistol | collision symbol
pitch | 🎤 | 🎶 | microphone | multiple musical notes
pizza | 🍕 | 🍕 | slice of pizza | slice of pizza
place | 📍 | 🏠 | round pushpin | house building
planet | 🌎 | 🌍 | earth globe americas | earth globe europe-africa
plastic | 🧴 | ♻ | lotion bottle | black universal recycling symbol
plate | 🍽 | 🍽 | fork and knife with plate | fork and knife with plate
play | ▶ | ▶ | black right-pointing triangle | black right-pointing triangle
please | 👀 | 🧠 | eyes | brain
pledge | 💯 | 📊 | hundred points symbol | bar chart
pluck | 🎸 | ✂ | guitar | black scissors
plug | 🎭 | 🏃 | performing arts | runner
plunge | ❓ | 🤷 | black question mark ornament | shrug
poem | ⏰ | 📍 | alarm clock | round pushpin
poet | 🧑 | 📜 | adult | scroll
point | 👉 | 🏃 | white right pointing backhand index | runner
polar | 🥶 | 🐻 | freezing face | bear face
pole | 🪜 | 🧊 | ladder | ice cube
police | 🚓 | 🏃 | police car | runner
pond | 💦 | 🌊 | splashing sweat symbol | water wave
pony | 🐴 | 🐴 | horse face | horse face
pool | 🏊 | 💦 | swimmer | splashing sweat symbol
popular | 🌟 | 👥 | glowing star | busts in silhouette
portion | 🥧 | 📏 | pie | straight ruler
position | 📍 | 🧭 | round pushpin | compass
possible | 🤔 | ✅ | thinking face | white heavy check mark
post | 📮 | ✉ | postbox | envelope
potato | 🥔 | 🥔 | potato | potato
pottery | 🫖 | 🏺 | teapot | amphora
poverty | 🪙 | 💔 | coin | broken heart
powder | 🧂 | 💨 | salt shaker | dash symbol
power | 💪 | ⚡ | flexed biceps | high voltage sign
practice | 📝 | 🎯 | memo | direct hit
praise | 👏 | 🙏 | clapping hands sign | person with folded hands
predict | 🔮 | 📈 | crystal ball | chart with upwards trend
prefer | 👉 | 👍 | white right pointing backhand index | thumbs up sign
prepare | 🛠 | 📦 | hammer and wrench | package
present | 🎁 | 📅 | wrapped present | calendar
pretty | 🌸 | 😊 | cherry blossom | smiling face with smiling eyes
prevent | 🚫 | 🛡 | no entry sign | shield
price | 💵 | 🏷 | banknote with dollar sign | label
pride | 🦁 | 🌈 | lion face | rainbow
primary | 📘 | 🥇 | blue book | first place medal
print | 🖨 | 📄 | printer | page facing up
priority | 🥇 | ⏱ | first place medal | stopwatch
prison | 🏚 | 🔒 | derelict house building | lock
private | 🔒 | 🙊 | lock | speak-no-evil monkey
prize | 🏆 | 🎁 | trophy | wrapped present
problem | ❓ | ⚠ | black question mark ornament | warning sign
process | ⚙ | 📋 | gear | clipboard
produce | 🥦 | 🍎 | broccoli | red apple
profit | 💰 | ⚙ | money bag | gear
program | 💻 | 📜 | personal computer | scroll
project | 📐 | 📊 | triangular ruler | bar chart
promote | 📢 | 📈 | public address loudspeaker | chart with upwards trend
proof | 📜 | ✅ | scroll | white heavy check mark
property | 🏠 | 📜 | house building | scroll
prosper | 🌟 | 💰 | glowing star | money bag
protect | 🛡 | 🤲 | shield | palms up together
proud | 😌 | 👑 | relieved face | crown
provide | 📦 | 🤲 | package | palms up together
public | 📝 | 📰 | memo | newspaper
pudding | 🥣 | 🟤 | bowl with spoon | large brown circle
pull | 🤲 | ⬅ | palms up together | leftwards black arrow
pulp | 🍊 | 🧃 | tangerine | beverage box
pulse | ❤ | 📉 | heavy black heart | chart with downwards trend
pumpkin | 🎃 | 🎃 | jack-o-lantern | jack-o-lantern
punch | 👊 | 🥊 | fisted hand sign | boxing glove
pupil | 👁 | 👦 | eye | boy
puppy | 🐶 | 🐾 | dog face | paw prints
purchase | 💳 | 🛍 | credit card | shopping bags
purity | 💧 | 🕊 | droplet | dove of peace
purpose | 🎯 | 📖 | direct hit | open book
purse | 👛 | 💰 | purse | money bag
push | ✋ | ➡ | raised hand | black rightwards arrow
put | 📦 | ➡ | package | black rightwards arrow
puzzle | 🧩 | 🧠 | jigsaw puzzle piece | brain
pyramid | 🔺 | 🏜 | up-pointing red triangle | desert
quality | ✅ | ⭐ | white heavy check mark | white medium star
quantum | ⚛ | 🌀 | atom symbol | cyclone
quarter | 🪙 | 🕓 | coin | clock face four oclock
question | ❓ | 🏃 | black question mark ornament | runner
quick | 🏃 | ✍ | runner | writing hand
quit | 🚪 | ✍ | door | writing hand
quiz | ❓ | 📝 | black question mark ornament | memo
quote | 🗨 | 📝 | left speech bubble | memo
rabbit | 🐰 | 🐰 | rabbit face | rabbit face
raccoon | 🦝 | 🦝 | raccoon | raccoon
race | 🏁 | 🏁 | chequered flag | chequered flag
rack | 🗄 | 📚 | file cabinet | books
radar | 📡 | 🔄 | satellite antenna | anticlockwise downwards and upwards open circle arrows
radio | 📻 | 📻 | radio | radio
rail | 🛤 | 🛤 | railway track | railway track
rain | 🌧 | 🌧 | cloud with rain | cloud with rain
raise | 🙋 | ⬆ | happy person raising one hand | upwards black arrow
rally | 📣 | 🤝 | cheering megaphone | handshake
ramp | ↗ | 🏗 | north east arrow | building construction
ranch | 🐄 | 🏡 | cow | house with garden
random | 🎲 | 🔀 | game die | twisted rightwards arrows
range | 🎯 | 📏 | direct hit | straight ruler
rapid | ⚡ | 🏃 | high voltage sign | runner
rare | 🦄 | ✨ | unicorn face | sparkles
rate | ⭐ | 📊 | white medium star | bar chart
rather | 🤔 | ➡ | thinking face | black rightwards arrow
raven | 🐦 | ‍ | bird | zero width joiner
raw | 🥩 | ❌ | cut of meat | cross mark
razor | 🪒 | 🪒 | razor | razor
ready | ✅ | ⏱ | white heavy check mark | stopwatch
real | 🔍 | ✅ | left-pointing magnifying glass | white heavy check mark
reason | 🤔 | 📚 | thinking face | books
rebel | ✊ | 🏴 | raised fist | waving black flag
rebuild | 🧱 | 🔁 | brick | clockwise rightwards and leftwards open circle arrows
recall | 🔙 | 🧠 | back with leftwards arrow above | brain
receive | 📥 | 🤲 | inbox tray | palms up together
recipe | 📖 | 🍲 | open book | pot of food
record | ⏺ | 🎙 | black circle for record | studio microphone
recycle | ♻ | ♻ | black universal recycling symbol | black universal recycling symbol
reduce | ➖ | 📉 | heavy minus sign | chart with downwards trend
reflect | 🔁 | 🪞 | clockwise rightwards and leftwards open circle arrows | mirror
reform | 🔧 | 📜 | wrench | scroll
refuse | 🚫 | 🙅 | no entry sign | face with no good gesture
region | 🗺 | 📍 | world map | round pushpin
regret | 😞 | 🔄 | disappointed face | anticlockwise downwards and upwards open circle arrows
regular | 📏 | 📆 | straight ruler | tear-off calendar
reject | ❌ | 📤 | cross mark | outbox tray
relax | 🧘 | 🌴 | person in lotus position | palm tree
release | 🕊 | 🔓 | dove of peace | open lock
relief | 😮 | ‍ | face with open mouth | zero width joiner
rely | 🤝 | 🔒 | handshake | lock
remain | 🧍 | ⏸ | standing person | double vertical bar
remember | 🧠 | 🔖 | brain | bookmark
remind | ⏰ | 🔔 | alarm clock | bell
remove | 🗑 | ➖ | wastebasket | heavy minus sign
render | 🖥 | 🎨 | desktop computer | artist palette
renew | 🔄 | 🌱 | anticlockwise downwards and upwards open circle arrows | seedling
rent | 🏠 | 💵 | house building | banknote with dollar sign
reopen | 🔓 | 🔁 | open lock | clockwise rightwards and leftwards open circle arrows
repair | 🔧 | 🩹 | wrench | adhesive bandage
repeat | 🔁 | 🔁 | clockwise rightwards and leftwards open circle arrows | clockwise rightwards and leftwards open circle arrows
replace | 🔁 | 🔀 | clockwise rightwards and leftwards open circle arrows | twisted rightwards arrows
report | 🧾 | 📊 | receipt | bar chart
require | 📌 | ✅ | pushpin | white heavy check mark
rescue | 🆘 | 🚑 | squared sos | ambulance
resemble | 🪞 | 🔁 | mirror | clockwise rightwards and leftwards open circle arrows
resist | ✋ | ⚡ | raised hand | high voltage sign
resource | 🧰 | 🏃 | toolbox | runner
response | 💬 | ↩ | speech balloon | leftwards arrow with hook
result | 📈 | ✅ | chart with upwards trend | white heavy check mark
retire | 🧓 | 🏖 | older adult | beach with umbrella
retreat | 🔙 | 🏕 | back with leftwards arrow above | camping
return | 🔙 | 📦 | back with leftwards arrow above | package
reunion | 🤝 | 🎉 | handshake | party popper
reveal | 🎭 | 🔓 | performing arts | open lock
review | 🔍 | 📝 | left-pointing magnifying glass | memo
reward | 🏆 | ✍ | trophy | writing hand
rhythm | 🥁 | 🎵 | drum with drumsticks | musical note
rib | 🦴 | 🏃 | bone | runner
ribbon | 🎀 | 🎀 | ribbon | ribbon
rice | 🍚 | 🍚 | cooked rice | cooked rice
rich | 💰 | 💎 | money bag | gem stone
ride | 🚴 | ➡ | bicyclist | black rightwards arrow
ridge | ⛰ | ↔ | mountain | left right arrow
rifle | 🔫 | 🎯 | pistol | direct hit
right | ✅ | ➡ | white heavy check mark | black rightwards arrow
rigid | 🪨 | 📏 | rock | straight ruler
ring | 💍 | 💍 | ring | ring
riot | 🔥 | 🚨 | fire | police cars revolving light
ripple | 🌊 | 〰 | water wave | wavy dash
risk | ⚠ | 🎲 | warning sign | game die
ritual | 🔥 | 🕯 | fire | candle
rival | ⚔ | 🥇 | crossed swords | first place medal
river | 🏞 | 💧 | national park | droplet
road | 🛣 | 🛣 | motorway | motorway
roast | 🍖 | 🔥 | meat on bone | fire
robot | 🤖 | 🤖 | robot face | robot face
robust | 💪 | 🏗 | flexed biceps | building construction
rocket | 🚀 | 🚀 | rocket | rocket
romance | 💘 | 🌹 | heart with arrow | rose
roof | 🏠 | ⬆ | house building | upwards black arrow
rookie | 🌱 | 🎓 | seedling | graduation cap
room | 🚪 | 🏠 | door | house building
rose | 🌹 | 🌹 | rose | rose
rotate | 🔁 | 🏃 | clockwise rightwards and leftwards open circle arrows | runner
rough | 🪨 | 🪓 | rock | axe
round | ⚪ | 🔄 | medium white circle | anticlockwise downwards and upwards open circle arrows
route | 🗺 | ➡ | world map | black rightwards arrow
royal | 👑 | 👑 | crown | crown
rubber | 🛞 | 🧪 | wheel | test tube
rude | 😠 | 🚫 | angry face | no entry sign
rug | 🧶 | 🏃 | ball of yarn | runner
rule | 📏 | 📜 | straight ruler | scroll
run | 🏃 | ⚙ | runner | gear
runway | 🛫 | 🛣 | airplane departure | motorway
rural | 🌾 | 🏡 | ear of rice | house with garden
sad | 😢 | 💧 | crying face | droplet
saddle | 🐎 | 🪑 | horse | chair
sadness | 😞 | 🌧 | disappointed face | cloud with rain
safe | 🛡 | ✅ | shield | white heavy check mark
sail | ⛵ | 🌬 | sailboat | wind blowing face
salad | 🥗 | 🥗 | green salad | green salad
salmon | 🐟 | 🏞 | fish | national park
salon | 💇 | ‍ | haircut | zero width joiner
salt | 🧂 | 🧂 | salt shaker | salt shaker
salute | 🫡 | 🎖 | saluting face | military medal
same | 🔁 | ↔ | clockwise rightwards and leftwards open circle arrows | left right arrow
sample | 🧪 | 📊 | test tube | bar chart
sand | 🏖 | 🟡 | beach with umbrella | large yellow circle
satisfy | 😌 | 🏃 | relieved face | runner
satoshi | 🧠 | 🪙 | brain | coin
sauce | 🧂 | 🍅 | salt shaker | tomato
sausage | 🌭 | 🌭 | hot dog | hot dog
save | 💾 | ✅ | floppy disk | white heavy check mark
say | 💬 | 🗣 | speech balloon | speaking head in silhouette
scale | ⚖ | 📏 | scales | straight ruler
scan | 📷 | 🔍 | camera | left-pointing magnifying glass
scare | 😱 | 👻 | face screaming in fear | ghost
scatter | 🎯 | 🔀 | direct hit | twisted rightwards arrows
scene | 🎬 | 📍 | clapper board | round pushpin
scheme | 🗺 | 🧩 | world map | jigsaw puzzle piece
school | 🏫 | 📚 | school | books
science | 🔬 | 🧪 | microscope | test tube
scissors | ✂ | ✂ | black scissors | black scissors
scorpion | 🦂 | 🦂 | scorpion | scorpion
scout | 🔭 | 🧭 | telescope | compass
scrap | 🧻 | 🗑 | roll of paper | wastebasket
screen | 🖥 | 🖼 | desktop computer | frame with picture
script | 📜 | ✍ | scroll | writing hand
scrub | 🧽 | 🫧 | sponge | bubbles
sea | 🌊 | 🌊 | water wave | water wave
search | 🔍 | 📚 | left-pointing magnifying glass | books
season | 🍂 | 📅 | fallen leaf | calendar
seat | 💺 | 💺 | seat | seat
second | 🥈 | ⏱ | second place medal | stopwatch
secret | 🤫 | 🔒 | face with finger covering closed lips | lock
section | 📑 | ✂ | bookmark tabs | black scissors
security | 🛡 | 🔒 | shield | lock
seed | 🌱 | 🌱 | seedling | seedling
seek | 👀 | 🔍 | eyes | left-pointing magnifying glass
segment | 🧩 | 📐 | jigsaw puzzle piece | triangular ruler
select | ✅ | 🖱 | white heavy check mark | three button mouse
sell | 💵 | 📉 | banknote with dollar sign | chart with downwards trend
seminar | 🧑 | ‍ | adult | zero width joiner
senior | 👴 | 🎓 | older man | graduation cap
sense | 👃 | 🧠 | nose | brain
sentence | ✍ | 🔤 | writing hand | input symbol for latin letters
series | 📺 | 🔢 | television | input symbol for numbers
service | 🛠 | 🤝 | hammer and wrench | handshake
session | 🕒 | 🪑 | clock face three oclock | chair
settle | 🪙 | ⚖ | coin | scales
setup | ⚙ | 🧰 | gear | toolbox
seven | 🕖 | 🧮 | clock face seven oclock | abacus
shadow | 🌑 | 👤 | new moon symbol | bust in silhouette
shaft | 🕳 | 🏃 | hole | runner
shallow | 🌊 | 📏 | water wave | straight ruler
share | 🔗 | 📤 | link symbol | outbox tray
shed | 🛖 | 🪵 | hut | wood
shell | 🐚 | 🐚 | spiral shell | spiral shell
sheriff | ⭐ | 👮 | white medium star | police officer
shield | 🛡 | 🛡 | shield | shield
shift | 🔀 | ➡ | twisted rightwards arrows | black rightwards arrow
shine | ✨ | ☀ | sparkles | black sun with rays
ship | 🚢 | 📦 | ship | package
shiver | ❄ | 🥶 | snowflake | freezing face
shock | ⚡ | 😮 | high voltage sign | face with open mouth
shoe | 👟 | 👟 | athletic shoe | athletic shoe
shoot | 🎯 | 🏹 | direct hit | bow and arrow
shop | 🛍 | 🏬 | shopping bags | department store
short | 📏 | ⬇ | straight ruler | downwards black arrow
shoulder | 💪 | 👕 | flexed biceps | t-shirt
shove | 🤜 | ➡ | right-facing fist | black rightwards arrow
shrimp | 🍤 | 🍤 | fried shrimp | fried shrimp
shrug | 🤷 | ‍ | shrug | zero width joiner
shuffle | 🔀 | 🎵 | twisted rightwards arrows | musical note
shy | 🙈 | 🌸 | see-no-evil monkey | cherry blossom
sibling | 👧 | 👦 | girl | boy
sick | 🤢 | 🤒 | nauseated face | face with thermometer
side | ↔ | 📐 | left right arrow | triangular ruler
siege | 🛡 | 🏰 | shield | european castle
sight | 👁 | 🏃 | eye | runner
sign | ✍ | 🪧 | writing hand | placard
silent | 🤫 | 🔇 | face with finger covering closed lips | speaker with cancellation stroke
silk | 🥻 | 🧵 | sari | spool of thread
silly | 🤪 | 🎈 | grinning face with one large and one small eye | balloon
silver | 🥈 | 💿 | second place medal | optical disc
similar | 🧍 | ‍ | standing person | zero width joiner
simple | ✅ | 📄 | white heavy check mark | page facing up
since | ⏳ | ➡ | hourglass with flowing sand | black rightwards arrow
sing | 🎤 | 🎵 | microphone | musical note
siren | 🚨 | 📢 | police cars revolving light | public address loudspeaker
sister | 👧 | 💞 | girl | revolving hearts
situate | 📍 | 🏃 | round pushpin | runner
six | 🕕 | 🧮 | clock face six oclock | abacus
size | 📏 | 📐 | straight ruler | triangular ruler
skate | 🛼 | 🧊 | roller skate | ice cube
sketch | ✏ | 📄 | pencil | page facing up
ski | 🎿 | ⛷ | ski and ski boot | skier
skill | 🧠 | 🎯 | brain | direct hit
skin | 🧴 | 🧍 | lotion bottle | standing person
skirt | 👗 | 👗 | dress | dress
skull | 💀 | 💀 | skull | skull
slab | 🧱 | ⬛ | brick | black large square
slam | 🤜 | 🚪 | right-facing fist | door
sleep | 😴 | 🛏 | sleeping face | bed
slender | 👗 | 📏 | dress | straight ruler
slice | 🔪 | 🍞 | hocho | bread
slide | ↘ | 🧊 | south east arrow | ice cube
slight | 📏 | 🪶 | straight ruler | feather
slim | 🪶 | 📉 | feather | chart with downwards trend
slogan | 🪧 | 🔤 | placard | input symbol for latin letters
slot | 🎰 | 🕳 | slot machine | hole
slow | 🐢 | ⏳ | turtle | hourglass with flowing sand
slush | 🧊 | 🫗 | ice cube | pouring liquid
small | 🐜 | 📏 | ant | straight ruler
smart | 🧠 | 💡 | brain | electric light bulb
smile | 🙂 | ⚙ | slightly smiling face | gear
smoke | 🚬 | 💨 | smoking symbol | dash symbol
smooth | 🧈 | ➡ | butter | black rightwards arrow
snack | 🍪 | 🥨 | cookie | pretzel
snake | 🐍 | 🐍 | snake | snake
snap | 🫰 | ⚡ | hand with index finger and thumb crossed | high voltage sign
sniff | 👃 | 🐶 | nose | dog face
snow | ❄ | 🌨 | snowflake | cloud with snow
soap | 🧼 | 🫧 | bar of soap | bubbles
soccer | ⚽ | 🥅 | soccer ball | goal net
social | 👥 | 💬 | busts in silhouette | speech balloon
sock | 🧦 | 🧦 | socks | socks
soda | 🥤 | 🫧 | cup with straw | bubbles
soft | 🧸 | 🪶 | teddy bear | feather
solar | ☀ | 🔆 | black sun with rays | high brightness symbol
soldier | 🪖 | 🪖 | military helmet | military helmet
solid | 🧱 | 📦 | brick | package
solution | 🧪 | 🏃 | test tube | runner
solve | 🧩 | ✅ | jigsaw puzzle piece | white heavy check mark
someone | 👤 | ❓ | bust in silhouette | black question mark ornament
song | 🎵 | 🏃 | musical note | runner
soon | ➡ | ⏳ | black rightwards arrow | hourglass with flowing sand
sorry | 🙏 | 😔 | person with folded hands | pensive face
sort | 🗂 | 🔤 | card index dividers | input symbol for latin letters
soul | 🕊 | ✨ | dove of peace | sparkles
sound | 🔊 | 🎵 | speaker with three sound waves | musical note
soup | 🍲 | 🥄 | pot of food | spoon
source | 🔗 | 📚 | link symbol | books
south | 🧭 | ⬇ | compass | downwards black arrow
space | 🚀 | 🏃 | rocket | runner
spare | 🆓 | 🧰 | squared free | toolbox
spatial | 🗺 | 📐 | world map | triangular ruler
spawn | 🐣 | ✨ | hatching chick | sparkles
speak | 🗣 | 💬 | speaking head in silhouette | speech balloon
special | ⭐ | 🎁 | white medium star | wrapped present
speed | 🏎 | 💨 | racing car | dash symbol
spell | ✨ | 🔤 | sparkles | input symbol for latin letters
spend | 💸 | 🕒 | money with wings | clock face three oclock
sphere | ⚪ | 🌍 | medium white circle | earth globe europe-africa
spice | 🌶 | 🧂 | hot pepper | salt shaker
spider | 🕷 | 🕸 | spider | spider web
spike | 📈 | 📌 | chart with upwards trend | pushpin
spin | 🌀 | ↩ | cyclone | leftwards arrow with hook
spirit | 👻 | ✨ | ghost | sparkles
split | ✂ | ↔ | black scissors | left right arrow
spoil | 🗑 | 🍎 | wastebasket | red apple
sponsor | 🤝 | 💰 | handshake | money bag
spoon | 🥄 | 🥄 | spoon | spoon
sport | 🏟 | 🏃 | stadium | runner
spot | 📍 | 🔎 | round pushpin | right-pointing magnifying glass
spray | 💦 | 🧴 | splashing sweat symbol | lotion bottle
spread | ➡ | ➡ | black rightwards arrow | black rightwards arrow
spring | 🌸 | 🌱 | cherry blossom | seedling
spy | 🕵 | ‍ | sleuth or spy | zero width joiner
square | ⬜ | 📐 | white large square | triangular ruler
squeeze | ✊ | 🍋 | raised fist | lemon
squirrel | 🐿 | 🌰 | chipmunk | chestnut
stable | 🐎 | 🏚 | horse | derelict house building
stadium | 🏟 | 🎫 | stadium | ticket
staff | 🧑 | ‍ | adult | zero width joiner
stage | 🎭 | 🎤 | performing arts | microphone
stairs | 🪜 | ↗ | ladder | north east arrow
stamp | 🖋 | 📮 | lower left fountain pen | postbox
stand | 🧍 | ⬆ | standing person | upwards black arrow
start | ▶ | 🚀 | black right-pointing triangle | rocket
state | 🏛 | 🏃 | classical building | runner
stay | 🧍 | 🏃 | standing person | runner
steak | 🥩 | 🔥 | cut of meat | fire
steel | 🗜 | 🔩 | compression | nut and bolt
stem | 🌱 | 🔬 | seedling | microscope
step | 👣 | ➡ | footprints | black rightwards arrow
stereo | 🔊 | 🎚 | speaker with three sound waves | level slider
stick | 🪵 | 📌 | wood | pushpin
still | 🧘 | ⏸ | person in lotus position | double vertical bar
sting | 🐝 | 💢 | honeybee | anger symbol
stock | 📈 | 🏦 | chart with upwards trend | bank
stomach | 🤢 | 🍽 | nauseated face | fork and knife with plate
stone | 🪨 | 🪨 | rock | rock
stool | 🪑 | 🪑 | chair | chair
story | 📖 | ✨ | open book | sparkles
stove | 🔥 | 🍳 | fire | cooking
strategy | ♟ | 🎯 | black chess pawn | direct hit
street | 🛣 | ⚙ | motorway | gear
strike | ⚡ | ✊ | high voltage sign | raised fist
strong | 💪 | 🏋 | flexed biceps | weight lifter
struggle | 🥵 | 🧗 | overheated face | person climbing
student | 🎓 | 📚 | graduation cap | books
stuff | 📦 | 📦 | package | package
stumble | 🤦 | ‍ | face palm | zero width joiner
style | 👗 | ✨ | dress | sparkles
subject | 📝 | 📚 | memo | books
submit | 📤 | ✅ | outbox tray | white heavy check mark
subway | 🚇 | 🚇 | metro | metro
success | 🏆 | 🏃 | trophy | runner
such | 👉 | 📝 | white right pointing backhand index | memo
sudden | ⚡ | ⏱ | high voltage sign | stopwatch
suffer | 😣 | 💢 | persevering face | anger symbol
sugar | 🍬 | 🏃 | candy | runner
suggest | 💡 | 📤 | electric light bulb | outbox tray
suit | 👔 | 👔 | necktie | necktie
summer | ☀ | 🏖 | black sun with rays | beach with umbrella
sun | ☀ | ☀ | black sun with rays | black sun with rays
sunny | ☀ | 😎 | black sun with rays | smiling face with sunglasses
sunset | 🌇 | 🌇 | sunset over buildings | sunset over buildings
super | 🦸 | ⭐ | superhero | white medium star
supply | 📦 | ✍ | package | writing hand
supreme | 👑 | 📜 | crown | scroll
sure | ✅ | 👍 | white heavy check mark | thumbs up sign
surface | 🧼 | 🪵 | bar of soap | wood
surge | 📈 | 🏃 | chart with upwards trend | runner
surprise | 🎁 | 😮 | wrapped present | face with open mouth
surround | 🔄 | 🏠 | anticlockwise downwards and upwards open circle arrows | house building
survey | 📋 | 📊 | clipboard | bar chart
suspect | 🕵 | 🏃 | sleuth or spy | runner
sustain | 🌱 | ♻ | seedling | black universal recycling symbol
swallow | 🐦 | 🍽 | bird | fork and knife with plate
swamp | 🐊 | 🌿 | crocodile | herb
swap | 🔁 | 🔄 | clockwise rightwards and leftwards open circle arrows | anticlockwise downwards and upwards open circle arrows
swarm | 🐝 | 🐝 | honeybee | honeybee
swear | 🤞 | 📜 | hand with index and middle fingers crossed | scroll
sweet | 🍰 | 😊 | shortcake | smiling face with smiling eyes
swift | 🐦 | 💨 | bird | dash symbol
swim | 🏊 | ‍ | swimmer | zero width joiner
swing | 🪀 | ↔ | yo-yo | left right arrow
switch | 🔀 | ↔ | twisted rightwards arrows | left right arrow
sword | ⚔ | ⚔ | crossed swords | crossed swords
symbol | 🔣 | 🔤 | input symbol for symbols | input symbol for latin letters
symptom | 🤒 | 📋 | face with thermometer | clipboard
syrup | 🍯 | 🫙 | honey pot | jar
system | 🖥 | ⚙ | desktop computer | gear
table | 🪑 | 🍽 | chair | fork and knife with plate
tackle | 🏈 | 🤼 | american football | wrestlers
tag | 🏷 | 🏷 | label | label
tail | 🐕 | ➡ | dog | black rightwards arrow
talent | 🎭 | ⭐ | performing arts | white medium star
talk | 🗣 | 🏃 | speaking head in silhouette | runner
tank | 🛢 | 🪖 | oil drum | military helmet
tape | 📼 | 📼 | videocassette | videocassette
target | 🎯 | 🎯 | direct hit | direct hit
task | 📋 | ✅ | clipboard | white heavy check mark
taste | 👅 | 🍴 | tongue | fork and knife
tattoo | 🖋 | 🖤 | lower left fountain pen | black heart
taxi | 🚕 | 🚕 | taxi | taxi
teach | 👩 | ‍ | woman | zero width joiner
team | 👥 | ⚽ | busts in silhouette | soccer ball
tell | 🗣 | ➡ | speaking head in silhouette | black rightwards arrow
ten | 🔟 | 🔟 | keycap ten | keycap ten
tenant | 🏠 | 🔑 | house building | key
tennis | 🎾 | 🎾 | tennis racquet and ball | tennis racquet and ball
tent | ⛺ | 🌲 | tent | evergreen tree
term | 📖 | 🗓 | open book | spiral calendar pad
test | 🧪 | ✅ | test tube | white heavy check mark
text | 📝 | 📱 | memo | mobile phone
thank | 🙏 | 😊 | person with folded hands | smiling face with smiling eyes
that | 👉 | 📌 | white right pointing backhand index | pushpin
theme | 🎨 | 📚 | artist palette | books
then | ⏭ | ⏳ | black right-pointing double triangle with vertical bar | hourglass with flowing sand
theory | 📚 | 🧠 | books | brain
there | 📍 | ➡ | round pushpin | black rightwards arrow
they | 👥 | 👉 | busts in silhouette | white right pointing backhand index
thing | 📦 | ❓ | package | black question mark ornament
this | 👉 | ⚙ | white right pointing backhand index | gear
thought | 💭 | 💭 | thought balloon | thought balloon
three | 🕒 | 🧮 | clock face three oclock | abacus
thrive | 🌱 | 💪 | seedling | flexed biceps
throw | 🤾 | ‍ | handball | zero width joiner
thumb | 👍 | 👍 | thumbs up sign | thumbs up sign
thunder | 🌩 | ⚡ | cloud with lightning | high voltage sign
ticket | 🎟 | 🎟 | admission tickets | admission tickets
tide | 🌊 | 🏃 | water wave | runner
tiger | 🐅 | 🐅 | tiger | tiger
tilt | ↗ | ↘ | north east arrow | south east arrow
timber | 🪵 | 🌲 | wood | evergreen tree
time | ⏰ | 🏃 | alarm clock | runner
tiny | 🐜 | 🏃 | ant | runner
tip | 💡 | 💰 | electric light bulb | money bag
tired | 🥱 | 💤 | yawning face | sleeping symbol
tissue | 🧻 | 🧻 | roll of paper | roll of paper
title | 📖 | 🏆 | open book | trophy
toast | 🍞 | 🏃 | bread | runner
tobacco | 🚬 | 🌿 | smoking symbol | herb
today | 📅 | ☀ | calendar | black sun with rays
toddler | 👶 | 🚶 | baby | pedestrian
toe | 🦶 | 🦶 | foot | foot
together | 🤝 | ❤ | handshake | heavy black heart
toilet | 🚽 | 🚽 | toilet | toilet
token | 🎟 | 💱 | admission tickets | currency exchange
tomato | 🍅 | 🍅 | tomato | tomato
tomorrow | 📅 | ➡ | calendar | black rightwards arrow
tone | 🎵 | 🎚 | musical note | level slider
tongue | 👅 | 👅 | tongue | tongue
tonight | 🌙 | 🕒 | crescent moon | clock face three oclock
tool | 🛠 | 🧰 | hammer and wrench | toolbox
tooth | 🦷 | 🦷 | tooth | tooth
top | 🔝 | 🔝 | top with upwards arrow above | top with upwards arrow above
topic | 🗂 | 💬 | card index dividers | speech balloon
topple | 🪆 | ⬇ | nesting dolls | downwards black arrow
torch | 🔦 | 🔥 | electric torch | fire
tornado | 🌪 | 🌪 | cloud with tornado | cloud with tornado
tortoise | 🐢 | 🐢 | turtle | turtle
toss | 🤾 | ‍ | handball | zero width joiner
total | 🧮 | ✅ | abacus | white heavy check mark
tourist | 🎒 | 📸 | school satchel | camera with flash
toward | ➡ | 🏃 | black rightwards arrow | runner
tower | 🗼 | 🏙 | tokyo tower | cityscape
town | 🏘 | 🏘 | house buildings | house buildings
toy | 🧸 | 🧸 | teddy bear | teddy bear
track | 🛤 | 🏃 | railway track | runner
trade | 🔄 | 💱 | anticlockwise downwards and upwards open circle arrows | currency exchange
traffic | 🚦 | 🚗 | vertical traffic light | automobile
tragic | 😢 | ⚰ | crying face | coffin
train | 🚆 | 🚆 | train | train
transfer | 🔄 | 💳 | anticlockwise downwards and upwards open circle arrows | credit card
trap | 🪤 | 🐭 | mouse trap | mouse face
trash | 🗑 | 🗑 | wastebasket | wastebasket
travel | ✈ | 🧳 | airplane | luggage
tray | 🍽 | 📦 | fork and knife with plate | package
treat | 🍬 | 🎁 | candy | wrapped present
tree | 🌳 | 🌳 | deciduous tree | deciduous tree
trend | 📈 | 🔥 | chart with upwards trend | fire
trial | ⚖ | 📜 | scales | scroll
tribe | 🪶 | 👥 | feather | busts in silhouette
trick | 🎩 | ✨ | top hat | sparkles
trigger | 🔫 | ⚡ | pistol | high voltage sign
trim | ✂ | 🌿 | black scissors | herb
trip | 🧳 | 🛫 | luggage | airplane departure
trophy | 🏆 | 🏆 | trophy | trophy
trouble | 😰 | ⚡ | face with open mouth and cold sweat | high voltage sign
truck | 🚚 | 🚚 | delivery truck | delivery truck
true | ✅ | 🎯 | white heavy check mark | direct hit
truly | 🙌 | ✅ | person raising both hands in celebration | white heavy check mark
trumpet | 🎺 | 🎺 | trumpet | trumpet
trust | 🤝 | 🏃 | handshake | runner
truth | ⚖ | 📖 | scales | open book
try | 🏃 | ‍ | runner | zero width joiner
tube | 🧪 | 🚇 | test tube | metro
tuition | 🎓 | 💵 | graduation cap | banknote with dollar sign
tumble | 🤸 | ‍ | person doing cartwheel | zero width joiner
tuna | 🐟 | 🍣 | fish | sushi
tunnel | 🚇 | 🕳 | metro | hole
turkey | 🦃 | 🦃 | turkey | turkey
turn | 🔄 | ➡ | anticlockwise downwards and upwards open circle arrows | black rightwards arrow
turtle | 🐢 | 🌊 | turtle | water wave
twelve | 🕛 | 🧮 | clock face twelve oclock | abacus
twenty | 🧮 | 📊 | abacus | bar chart
twice | ✌ | 🔁 | victory hand | clockwise rightwards and leftwards open circle arrows
twin | 👯 | 👯 | woman with bunny ears | woman with bunny ears
twist | 🔀 | 🌀 | twisted rightwards arrows | cyclone
two | ✌ | 👉 | victory hand | white right pointing backhand index
type | ⌨ | 📄 | keyboard | page facing up
typical | 📏 | 📊 | straight ruler | bar chart
ugly | 🤢 | 🚫 | nauseated face | no entry sign
umbrella | ☂ | ☂ | umbrella | umbrella
unable | 🚫 | 💪 | no entry sign | flexed biceps
unaware | 🙈 | ❓ | see-no-evil monkey | black question mark ornament
uncle | 👨 | ‍ | man | zero width joiner
uncover | 🔓 | 🕵 | open lock | sleuth or spy
under | ⬇ | 📍 | downwards black arrow | round pushpin
undo | ⬅ | ❌ | leftwards black arrow | cross mark
unfair | ⚖ | 🚫 | scales | no entry sign
unfold | 📄 | ➡ | page facing up | black rightwards arrow
unhappy | 😞 | 💧 | disappointed face | droplet
uniform | 👕 | 🏃 | t-shirt | runner
unique | 🌟 | ✨ | glowing star | sparkles
unit | 📦 | 📏 | package | straight ruler
universe | 🌌 | 🌍 | milky way | earth globe europe-africa
unknown | ❓ | 🌫 | black question mark ornament | fog
unlock | 🔓 | 🔑 | open lock | key
until | ⏳ | 🎯 | hourglass with flowing sand | direct hit
unusual | 🤔 | 🌟 | thinking face | glowing star
unveil | 🎭 | 👀 | performing arts | eyes
update | 🔄 | 🆕 | anticlockwise downwards and upwards open circle arrows | squared new
upgrade | ⬆ | ⚙ | upwards black arrow | gear
uphold | ✋ | ⚖ | raised hand | scales
upon | 📖 | 🏃 | open book | runner
upper | ⬆ | 📍 | upwards black arrow | round pushpin
upset | 😡 | 💢 | pouting face | anger symbol
urban | 🏙 | 🏙 | cityscape | cityscape
urge | ⚡ | 👉 | high voltage sign | white right pointing backhand index
usage | 📊 | 📈 | bar chart | chart with upwards trend
use | 🛠 | ✅ | hammer and wrench | white heavy check mark
used | 🧾 | ✅ | receipt | white heavy check mark
useful | 👍 | 🛠 | thumbs up sign | hammer and wrench
useless | ❌ | 🪣 | cross mark | bucket
usual | 📆 | 🔁 | tear-off calendar | clockwise rightwards and leftwards open circle arrows
utility | ⚙ | 🔌 | gear | electric plug
vacant | 🪑 | 🚫 | chair | no entry sign
vacuum | 🧹 | 🕳 | broom | hole
vague | 🌫 | ❓ | fog | black question mark ornament
valid | ✅ | 📦 | white heavy check mark | package
valley | ⛰ | 🌄 | mountain | sunrise over mountains
valve | 🚰 | ⚙ | potable water symbol | gear
van | 🚐 | 🚐 | minibus | minibus
vanish | 🌫 | ✨ | fog | sparkles
vapor | 💨 | 💨 | dash symbol | dash symbol
various | 🔀 | 📦 | twisted rightwards arrows | package
vast | 🌌 | 🏃 | milky way | runner
vault | 🏦 | 🔒 | bank | lock
vehicle | 🚗 | 🚗 | automobile | automobile
velvet | 🧵 | 🎀 | spool of thread | ribbon
vendor | 🧑 | ‍ | adult | zero width joiner
venture | 🚀 | 💼 | rocket | briefcase
venue | 🎪 | 🏟 | circus tent | stadium
verb | ✍ | 🏃 | writing hand | runner
verify | ✅ | 🔍 | white heavy check mark | left-pointing magnifying glass
version | 📑 | 🔄 | bookmark tabs | anticlockwise downwards and upwards open circle arrows
very | ⭐ | ✅ | white medium star | white heavy check mark
vessel | 🚢 | ⚓ | ship | anchor
veteran | 🎖 | 👴 | military medal | older man
viable | 🌱 | ✅ | seedling | white heavy check mark
vibrant | 🌈 | ✨ | rainbow | sparkles
vicious | 😈 | ⚡ | smiling face with horns | high voltage sign
victory | 🏆 | 🥳 | trophy | face with party horn and party hat
video | 📹 | 🎞 | video camera | film frames
view | 👀 | 🌄 | eyes | sunrise over mountains
village | 🏘 | 🌾 | house buildings | ear of rice
vintage | 📻 | 🎩 | radio | top hat
violin | 🎻 | 🎻 | violin | violin
virtual | 💻 | 🌐 | personal computer | globe with meridians
virus | 🦠 | 🦠 | microbe | microbe
visa | 🛂 | 📜 | passport control | scroll
visit | 🚶 | 📍 | pedestrian | round pushpin
visual | 👁 | 🎨 | eye | artist palette
vital | ❤ | 🌱 | heavy black heart | seedling
vivid | 🌈 | 👁 | rainbow | eye
vocal | 🎤 | 🗣 | microphone | speaking head in silhouette
voice | 🗣 | 🔊 | speaking head in silhouette | speaker with three sound waves
void | 🕳 | 🌌 | hole | milky way
volcano | 🌋 | 🌋 | volcano | volcano
volume | 🔊 | 📚 | speaker with three sound waves | books
vote | 🗳 | 📝 | ballot box with ballot | memo
voyage | 🚢 | ⚙ | ship | gear
wage | 💵 | 💼 | banknote with dollar sign | briefcase
wagon | 🚙 | 🛞 | recreational vehicle | wheel
wait | ⏳ | 🛑 | hourglass with flowing sand | octagonal sign
walk | 🚶 | ‍ | pedestrian | zero width joiner
wall | 🧱 | ✍ | brick | writing hand
walnut | 🌰 | 🌰 | chestnut | chestnut
want | 🙏 | 💭 | person with folded hands | thought balloon
warfare | ⚔ | 💣 | crossed swords | bomb
warm | 🌞 | 🔥 | sun with face | fire
warrior | 🪖 | ⚔ | military helmet | crossed swords
wash | 🧼 | 🚿 | bar of soap | shower
wasp | 🐝 | 🏃 | honeybee | runner
waste | 🗑 | ♻ | wastebasket | black universal recycling symbol
water | 💧 | 💧 | droplet | droplet
wave | 🌊 | 👋 | water wave | waving hand sign
way | 🛣 | 🏃 | motorway | runner
wealth | 💰 | 👑 | money bag | crown
weapon | 🔫 | ⚔ | pistol | crossed swords
wear | 👕 | 👖 | t-shirt | jeans
weasel | 🦦 | 🦦 | otter | otter
weather | 🌦 | 🌤 | white sun behind cloud with rain | white sun with small cloud
web | 🕸 | 🌐 | spider web | globe with meridians
wedding | 👰 | 🤵 | bride with veil | man in tuxedo
weekend | 📅 | 🎉 | calendar | party popper
weird | 🌀 | 😜 | cyclone | face with stuck-out tongue and winking eye
welcome | 🙌 | 🤝 | person raising both hands in celebration | handshake
west | 🧭 | ⬅ | compass | leftwards black arrow
wet | 💦 | 💦 | splashing sweat symbol | splashing sweat symbol
whale | 🐋 | 🐋 | whale | whale
what | ❓ | 👉 | black question mark ornament | white right pointing backhand index
wheat | 🌾 | 🏃 | ear of rice | runner
wheel | 🛞 | ⚙ | wheel | gear
when | ⏰ | ❓ | alarm clock | black question mark ornament
where | 📍 | ❓ | round pushpin | black question mark ornament
whip | 🐎 | ➡ | horse | black rightwards arrow
whisper | 🤫 | 👂 | face with finger covering closed lips | ear
wide | 📏 | 🏃 | straight ruler | runner
width | 📏 | ⚙ | straight ruler | gear
wife | 👰 | 💍 | bride with veil | ring
wild | 🐆 | 🌿 | leopard | herb
will | 📝 | ✅ | memo | white heavy check mark
win | 🏆 | ✌ | trophy | victory hand
window | 🪟 | 🏠 | window | house building
wine | 🍷 | 🍷 | wine glass | wine glass
wing | 🪽 | 🪽 | unknown (🪽) | unknown (🪽)
wink | 😉 | 😉 | winking face | winking face
winner | 🏆 | 🎉 | trophy | party popper
winter | 🌨 | ❄ | cloud with snow | snowflake
wire | 🔌 | 🧵 | electric plug | spool of thread
wisdom | 🦉 | 📚 | owl | books
wise | 👴 | 🧠 | older man | brain
wish | 🌠 | 🙏 | shooting star | person with folded hands
witness | 👀 | ⚖ | eyes | scales
wolf | 🐺 | 🐺 | wolf face | wolf face
woman | 👩 | 👩 | woman | woman
wonder | 🤔 | ✨ | thinking face | sparkles
wood | 🪵 | 🪵 | wood | wood
wool | 🧶 | 🐑 | ball of yarn | sheep
word | 🔤 | 🗣 | input symbol for latin letters | speaking head in silhouette
work | 💼 | 🔨 | briefcase | hammer
world | 🌍 | ⚙ | earth globe europe-africa | gear
worry | 😟 | 💭 | worried face | thought balloon
worth | 💎 | ⚙ | gem stone | gear
wrap | 🎁 | 🌀 | wrapped present | cyclone
wreck | 🚢 | 🏃 | ship | runner
wrestle | 🤼 | 🤼 | wrestlers | wrestlers
wrist | ⌚ | ✋ | watch | raised hand
write | ✍ | 📝 | writing hand | memo
wrong | ❌ | ↔ | cross mark | left right arrow
yard | 🌱 | 🏡 | seedling | house with garden
year | 📅 | 📆 | calendar | tear-off calendar
yellow | 🟨 | 🌼 | large yellow square | blossom
you | 🫵 | 🫵 | index pointing at the viewer | index pointing at the viewer
young | 👶 | 🌱 | baby | seedling
youth | 🧒 | 🎓 | child | graduation cap
zebra | 🦓 | 🦓 | zebra face | zebra face
zero | ⚪ | 🅾 | medium white circle | negative squared latin capital letter o
zone | 📍 | 🗺 | round pushpin | world map
zoo | 🐒 | 🏞 | monkey | national park

```


## Reference Implementation

Reference mapping files and validation scripts are available in the project repository:

* 2048 BIP39 word-emoji-mapping (JSON): `word-emoji-mapping.json`
* 2048 BIP39 word-emoji-mapping (CSV): `word-emoji-mapping.csv`
* 2048 BIP39 word-emoji-mapping (MD): `word-emoji-mapping.md`

A Python test suite validates the uniqueness, integrity, and completeness of the mapping.


## Copyright

This document is licensed under the BSD 2-Clause License.


© 2025 Coperbyte™️
[www.coperbyte.com](http://www.coperbyte.com)

