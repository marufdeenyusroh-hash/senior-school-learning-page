/* videos-data.js
   Replaces the old "Science video.js" / "Art video.js" (a byte-for-byte
   copy of Science's data, keyed by Science's subjects — so every Art
   subject search returned nothing) and the missing "Commercial video.js"
   (404, feature was entirely broken).

   VIDEO_DATA[dept][subjectSlug] = array of topics, each either
   { title, url } (single video) or { title, videos: [{url}, ...] }
   (a topic with several linked videos), matching the original data shape
   so the existing player logic in video.html didn't need to change.

   Only science.physics and science.chemistry have real curated YouTube
   links today (ported verbatim from the original Science video.js — that
   file only ever had real data for these two subjects; math/biology/
   english/computer were already silently broken before this refactor).
   Every other subject gets an explicit "coming soon" placeholder rather
   than a fabricated link.
*/

function comingSoon(label) {
  return [{ title: `${label} videos coming soon`, url: "" }];
}

const VIDEO_DATA = {
  science: {
    physics: [
      { title: "Introduction to Physics", videos: [
        { url: "https://www.youtube.com/embed/CbuAHMDVX6Y" },
        { url: "https://www.youtube.com/embed/XX-1_oZD2rM" },
        { url: "https://www.youtube.com/embed/EjQDBAX8bfw" },
        { url: "https://www.youtube.com/embed/Z1r-ngBkTtk" },
        { url: "https://www.youtube.com/embed/wPm2suDT9_Y" },
        { url: "https://www.youtube.com/embed/_kcDbnzSxU8" },
      ]},
      { title: "Physical Quantities and Units", url: "https://www.youtube.com/embed/llKtx70pplY" },
      { title: "Measurement", videos: [
        { url: "https://www.youtube.com/embed/kmWuroOxSZg" },
        { url: "https://www.youtube.com/embed/pB0STvaP1Qs" },
        { url: "https://www.youtube.com/embed/76sg_unaWJw" },
        { url: "https://www.youtube.com/embed/HBTLeYxB184" },
        { url: "https://www.youtube.com/embed/AjEJIuLkpAA" },
        { url: "https://www.youtube.com/embed/jIAW1D2gm8M" },
        { url: "https://www.youtube.com/embed/wEhiDmeQXuo" },
        { url: "https://www.youtube.com/embed/fgL_1LANaDg" },
        { url: "https://www.youtube.com/embed/KP_rBOIuJ50" },
        { url: "https://www.youtube.com/embed/PBmxeO483iI" },
        { url: "https://www.youtube.com/embed/Gw6-18GcK0Y" },
      ]},
      { title: "Position, Distance and Displacement", videos: [
        { url: "https://www.youtube.com/embed/EanUsRAzV0k" },
        { url: "https://www.youtube.com/embed/zsxdYofMFEs" },
      ]},
      { title: "Time and Measurement of Time", url: "https://www.youtube.com/embed/Wwxjhxi_NhE" },
      { title: "Motion", videos: [
        { url: "https://www.youtube.com/embed/-Z3jIEKWMfk" },
        { url: "https://www.youtube.com/embed/ML9ef7trDMc" },
      ]},
      { title: "Speed, Velocity and Acceleration", videos: [
        { url: "https://www.youtube.com/embed/6iuHuy5tRZY" },
        { url: "https://www.youtube.com/embed/8gJhsEE4Bho" },
      ]},
      { title: "Distance-Time and Velocity-Time Graphs", videos: [
        { url: "https://www.youtube.com/embed/nUb7xfkc0Ac" },
        { url: "https://www.youtube.com/embed/H4kRWKhJ4OE" },
        { url: "https://www.youtube.com/embed/G5z-Z5GY2qY" },
        { url: "https://www.youtube.com/embed/2WLtKsmsEds" },
        { url: "https://www.youtube.com/embed/OyPuEj4fz7A" },
        { url: "https://www.youtube.com/embed/hp4X5jtjMwU" },
        { url: "https://www.youtube.com/embed/RM02SnuJ0MY" },
        { url: "https://www.youtube.com/embed/JTipwcUFT3Q" },
        { url: "https://www.youtube.com/embed/2oEzgL4Cv6w" },
      ]},
      { title: "Scalars and Vectors", videos: [
        { url: "https://www.youtube.com/embed/rcDXQ-5H8mk" },
        { url: "https://www.youtube.com/embed/PCiaAqBKkV4" },
        { url: "https://www.youtube.com/embed/Y13jresAtm8" },
        { url: "https://www.youtube.com/embed/EwSHKuSxX_8" },
        { url: "https://www.youtube.com/embed/RxV06Oj5sMc" },
        { url: "https://www.youtube.com/embed/SdsrCuCuh1U" },
      ]},
      { title: "Work, Energy and Power", videos: [
        { url: "https://www.youtube.com/embed/Aqxexw--CEM" },
        { url: "https://www.youtube.com/embed/tVSdlhY4R6Q" },
        { url: "https://www.youtube.com/embed/NNtb4VbbkeY" },
        { url: "https://www.youtube.com/embed/4LLL8Ii-97A" },
        { url: "https://www.youtube.com/embed/EfXH2tLd5ng" },
        { url: "https://www.youtube.com/embed/GPyPFUxau4o" },
      ]},
      { title: "Heat Energy", videos: [
        { url: "https://www.youtube.com/embed/EPfP-fjo9vA" },
        { url: "https://www.youtube.com/embed/J7OHlq3X-o0" },
        { url: "https://www.youtube.com/embed/0ddQWU96WYs" },
      ]},
      { title: "Thermal Expansion", videos: [
        { url: "https://www.youtube.com/embed/E5dUZn5jOL4" },
        { url: "https://www.youtube.com/embed/YOxprM4K1-U" },
        { url: "https://www.youtube.com/embed/5V_rkCxk-Cs" },
        { url: "https://www.youtube.com/embed/nZ6uvFbB3vs" },
        { url: "https://www.youtube.com/embed/O3OBRVXgXL0" },
        { url: "https://www.youtube.com/embed/KaLy2EDSLCw" },
      ]},
      { title: "Electric Charge", videos: [
        { url: "https://www.youtube.com/embed/VD009jiZreo" },
        { url: "https://www.youtube.com/embed/OSUvXC1pACA" },
      ]},
      { title: "Electric Field", videos: [
        { url: "https://www.youtube.com/embed/aebCcvQwkg4" },
        { url: "https://www.youtube.com/embed/1SpvHNOezQ0" },
        { url: "https://www.youtube.com/embed/gMR_P3Ysyhc" },
      ]},
      { title: "Electric Current", videos: [
        { url: "https://www.youtube.com/embed/EsYtpYGtqpE" },
        { url: "https://www.youtube.com/embed/vFEapVx90N4" },
      ]},
      { title: "Ohm's Law", videos: [
        { url: "https://www.youtube.com/embed/_rSHqvjDksg" },
        { url: "https://www.youtube.com/embed/wvHcm84RsFw" },
      ]},
      { title: "Solar Energy", videos: [
        { url: "https://www.youtube.com/embed/HKtD7nNa9uw" },
        { url: "https://www.youtube.com/embed/nWMQqERzrQ8" },
      ]},
    ],
    chemistry: [
      { title: "Introduction to Chemistry", videos: [
        { url: "https://www.youtube.com/embed/CbuAHMDVX6Y" },
        { url: "https://www.youtube.com/embed/XX-1_oZD2rM" },
        { url: "https://www.youtube.com/embed/EjQDBAX8bfw" },
        { url: "https://www.youtube.com/embed/Z1r-ngBkTtk" },
        { url: "https://www.youtube.com/embed/wPm2suDT9_Y" },
        { url: "https://www.youtube.com/embed/_kcDbnzSxU8" },
      ]},
      { title: "Laboratory Apparatus and Safety", url: "" },
      { title: "Nature of Matter", url: "" },
      { title: "Standard Separation Techniques", url: "" },
      { title: "Chemical Symbols, Formulae and Equations", url: "" },
      { title: "Atomic Structure", url: "" },
      { title: "The Periodic Table", url: "" },
      { title: "Chemical Bonding", url: "" },
      { title: "The Gas Laws", url: "" },
      { title: "Stoichiometry and the Mole Concept", url: "" },
      { title: "Solutions and Solubility", url: "" },
      { title: "Acids, Bases and Salts", url: "" },
      { title: "Oxidation-Reduction (Redox) Reactions", url: "" },
      { title: "Chemical Equilibrium", url: "" },
      { title: "Hydrocarbons", url: "" },
      { title: "Electrochemistry", url: "" },
    ],
    biology: comingSoon("Biology"),
    math: comingSoon("Mathematics"),
    english: comingSoon("English"),
    geography: comingSoon("Geography"),
    civic: comingSoon("Civic Education"),
    agric: comingSoon("Agricultural Science"),
    trade: comingSoon("Trade"),
    computer: comingSoon("Computer Science"),
  },

  commercial: {
    commerce: comingSoon("Commerce"),
    accounting: comingSoon("Financial Accounting"),
    economics: comingSoon("Economics"),
    math: comingSoon("Mathematics"),
    english: comingSoon("English"),
    civic: comingSoon("Civic Education"),
    marketing: comingSoon("Marketing"),
    agric: comingSoon("Agricultural Science"),
    computer: comingSoon("Computer Studies"),
  },

  art: {
    government: comingSoon("Government"),
    literature: comingSoon("Literature in English"),
    yoruba: comingSoon("Yoruba"),
    irs: comingSoon("IRS"),
    math: comingSoon("Mathematics"),
    english: comingSoon("English"),
    marketing: comingSoon("Marketing"),
  },
};
