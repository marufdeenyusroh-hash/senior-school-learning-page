// ==========================================
// GET CURRENT USER
// ==========================================

const currentUser =
  JSON.parse(localStorage.getItem("currentUser"));


// ==========================================
// LOGIN PROTECTION
// ==========================================

if (!currentUser) {

  window.location.href = "login.html";

}


// ==========================================
// GET DEPARTMENT
// ==========================================

let department =
  currentUser.department || "science";

department =
  department.toLowerCase();


// ==========================================
// VIDEO DATA
// ==========================================

const videoData = {

  // ========================================
  // SCIENCE
  // ========================================

  science: {

    name: "Science",

    subjects: {

      physics: [

        {
          title: "Introduction to Physics",

          videos: [
            {
              url: "https://www.youtube.com/embed/b1t41Q3xRM8"
            },
            {
              url: "https://www.youtube.com/embed/CbuAHMDVX6Y"
            },
            {
              url: "https://www.youtube.com/embed/XX-1_oZD2rM"
            },
            {
              url: "https://www.youtube.com/embed/EjQDBAX8bfw"
            }
          ]
        },


        {
          title: "Physical Quantities and Units",

          videos: [
            {
              url: "https://www.youtube.com/embed/llKtx70pplY"
            }
          ]
        },


        {
          title: "Measurement",

          videos: [
            {
              url: "https://www.youtube.com/embed/kmWuroOxSZg"
            },
            {
              url: "https://www.youtube.com/embed/pB0STvaP1Qs"
            },
            {
              url: "https://www.youtube.com/embed/76sg_unaWJw"
            }
          ]
        },


        {
          title: "Position, Distance and Displacement",

          videos: [
            {
              url: "https://www.youtube.com/embed/EanUsRAzV0k"
            },
            {
              url: "https://www.youtube.com/embed/zsxdYofMFEs"
            }
          ]
        },


        {
          title: "Time and Measurement of Time",

          videos: [
            {
              url: "https://www.youtube.com/embed/Wwxjhxi_NhE"
            }
          ]
        },


        {
          title: "Motion",

          videos: [
            {
              url: "https://www.youtube.com/embed/-Z3jIEKWMfk"
            },
            {
              url: "https://www.youtube.com/embed/ML9ef7trDMc"
            }
          ]
        },


        {
          title: "Speed, Velocity and Acceleration",

          videos: [
            {
              url: "https://www.youtube.com/embed/6iuHuy5tRZY"
            },
            {
              url: "https://www.youtube.com/embed/8gJhsEE4Bho"
            }
          ]
        },


        {
          title: "Distance-Time and Velocity-Time Graphs",

          videos: [
            {
              url: "https://www.youtube.com/embed/nUb7xfkc0Ac"
            },
            {
              url: "https://www.youtube.com/embed/H4kRWKhJ4OE"
            },
            {
              url: "https://www.youtube.com/embed/G5z-Z5GY2qY"
            }
          ]
        },


        {
          title: "Scalars and Vectors",

          videos: [
            {
              url: "https://www.youtube.com/embed/rcDXQ-5H8mk"
            },
            {
              url: "https://www.youtube.com/embed/PCiaAqBKkV4"
            },
            {
              url: "https://www.youtube.com/embed/Y13jresAtm8"
            }
          ]
        },


        {
          title: "Work, Energy and Power",

          videos: [
            {
              url: "https://www.youtube.com/embed/Aqxexw--CEM"
            },
            {
              url: "https://www.youtube.com/embed/tVSdlhY4R6Q"
            },
            {
              url: "https://www.youtube.com/embed/NNtb4VbbkeY"
            }
          ]
        },


        {
          title: "Heat Energy",

          videos: [
            {
              url: "https://www.youtube.com/embed/EPfP-fjo9vA"
            },
            {
              url: "https://www.youtube.com/embed/J7OHlq3X-o0"
            }
          ]
        },


        {
          title: "Thermal Expansion",

          videos: [
            {
              url: "https://www.youtube.com/embed/E5dUZn5jOL4"
            },
            {
              url: "https://www.youtube.com/embed/YOxprM4K1-U"
            },
            {
              url: "https://www.youtube.com/embed/5V_rkCxk-Cs"
            }
          ]
        },


        {
          title: "Heat Transfer",

          videos: [
            {
              url: "https://www.youtube.com/embed/bRZwzy0xvhM"
            },
            {
              url: "https://www.youtube.com/embed/GrW-8pDbsBU"
            }
          ]
        },


        {
          title: "Electric Charge",

          videos: [
            {
              url: "https://www.youtube.com/embed/VD009jiZreo"
            },
            {
              url: "https://www.youtube.com/embed/OSUvXC1pACA"
            }
          ]
        },


        {
          title: "Electric Field",

          videos: [
            {
              url: "https://www.youtube.com/embed/aebCcvQwkg4"
            },
            {
              url: "https://www.youtube.com/embed/1SpvHNOezQ0"
            }
          ]
        },


        {
          title: "Gravitational Field",

          videos: [
            {
              url: "https://www.youtube.com/embed/IilS-vbKom0"
            },
            {
              url: "https://www.youtube.com/embed/HjKL7R-aTJE"
            }
          ]
        },


        {
          title: "Electric Current",

          videos: [
            {
              url: "https://www.youtube.com/embed/EsYtpYGtqpE"
            },
            {
              url: "https://www.youtube.com/embed/vFEapVx90N4"
            }
          ]
        },


        {
          title: "Electrical Circuits",

          videos: [
            {
              url: "https://www.youtube.com/embed/Nbb5Lw14wvo"
            }
          ]
        },


        {
          title: "Ohm's Law",

          videos: [
            {
              url: "https://www.youtube.com/embed/_rSHqvjDksg"
            },
            {
              url: "https://www.youtube.com/embed/wvHcm84RsFw"
            }
          ]
        },


        {
          title: "Electrical Energy and Power",

          videos: [
            {
              url: "https://www.youtube.com/embed/TV176UPxLfg"
            },
            {
              url: "https://www.youtube.com/embed/43HjpDquTlU"
            }
          ]
        },


        {
          title: "Surface Tension",

          videos: [
            {
              url: "https://www.youtube.com/embed/x-nMZ4f4D4s"
            },
            {
              url: "https://www.youtube.com/embed/e3L0x835kmM"
            }
          ]
        },


        {
          title: "Viscosity",

          videos: [
            {
              url: "https://www.youtube.com/embed/QLQfURJMYs0"
            },
            {
              url: "https://www.youtube.com/embed/nYtHpIYpdkk"
            }
          ]
        },


        {
          title: "Solar Energy",

          videos: [
            {
              url: "https://www.youtube.com/embed/HKtD7nNa9uw"
            },
            {
              url: "https://www.youtube.com/embed/nWMQqERzrQ8"
            }
          ]
        }

      ],


      chemistry: [

        {
          title: "Introduction to Chemistry",

          videos: [
            {
              url: "https://www.youtube.com/embed/b1t41Q3xRM8"
            }
          ]
        },

        {
          title: "Laboratory Familiarization and Safety",

          videos: []
        },

        {
          title: "Laboratory Apparatus and Safety",

          videos: []
        },

        {
          title: "Nature of Matter",

          videos: []
        },

        {
          title: "Standard Separation Techniques",

          videos: []
        },

        {
          title: "Chemical Symbols, Formulae and Equations",

          videos: []
        },

        {
          title: "Atomic Structure",

          videos: []
        },

        {
          title: "The Periodic Table",

          videos: []
        },

        {
          title: "Chemical Bonding",

          videos: []
        },

        {
          title: "The Gas Laws",

          videos: []
        },

        {
          title: "Stoichiometry and the Mole Concept",

          videos: []
        },

        {
          title: "Solutions and Solubility",

          videos: []
        },

        {
          title: "Acids, Bases and Salts",

          videos: []
        },

        {
          title: "Oxidation-Reduction Reactions",

          videos: []
        },

        {
          title: "Chemical Kinetics",

          videos: []
        },

        {
          title: "Chemical Equilibrium",

          videos: []
        },

        {
          title: "Carbon and its Compounds",

          videos: []
        },

        {
          title: "Introduction to Organic Chemistry",

          videos: []
        },

        {
          title: "Hydrocarbons",

          videos: []
        },

        {
          title: "Petroleum and Crude Oil",

          videos: []
        },

        {
          title: "Alkanols",

          videos: []
        },

        {
          title: "Giant Molecules / Polymers",

          videos: []
        },

        {
          title: "Electrochemistry",

          videos: []
        },

        {
          title: "Energy and Energy Changes",

          videos: []
        },

        {
          title: "Chemistry of Metals and Transition Elements",

          videos: []
        },

        {
          title: "Industrial Chemistry",

          videos: []
        }

      ],


      biology: [

        {
          title: "Introduction to Biology",
          videos: []
        },

        {
          title: "The Cell",
          videos: []
        },

        {
          title: "Nutrition",
          videos: []
        },

        {
          title: "Respiration",
          videos: []
        }

      ],


      math: [

        {
          title: "Number Bases",
          videos: []
        },

        {
          title: "Fractions",
          videos: []
        },

        {
          title: "Percentages",
          videos: []
        },

        {
          title: "Algebra",
          videos: []
        },

        {
          title: "Quadratic Equations",
          videos: []
        }

      ],


      english: [

        {
          title: "Grammar",
          videos: []
        },

        {
          title: "Comprehension",
          videos: []
        },

        {
          title: "Vocabulary Development",
          videos: []
        }

      ],


      computer: [

        {
          title: "Introduction to Computer",
          videos: []
        },

        {
          title: "Computer Hardware",
          videos: []
        },

        {
          title: "Computer Software",
          videos: []
        }

      ]

    }

  },


  // ========================================
  // COMMERCIAL
  // ========================================

  commercial: {

    name: "Commercial",

    subjects: {

      commerce: [

        {
          title: "Introduction to Commerce",
          videos: []
        },

        {
          title: "Occupation",
          videos: []
        },

        {
          title: "Production",
          videos: []
        },

        {
          title: "Trade",
          videos: []
        },

        {
          title: "Home Trade",
          videos: []
        },

        {
          title: "Foreign Trade",
          videos: []
        }

      ],


      accounting: [

        {
          title: "Introduction to Financial Accounting",
          videos: []
        },

        {
          title: "Accounting Concepts",
          videos: []
        },

        {
          title: "Books of Original Entry",
          videos: []
        },

        {
          title: "Ledger Accounts",
          videos: []
        },

        {
          title: "Trial Balance",
          videos: []
        },

        {
          title: "Final Accounts",
          videos: []
        }

      ],


      economics: [

        {
          title: "Introduction to Economics",
          videos: []
        },

        {
          title: "Demand",
          videos: []
        },

        {
          title: "Supply",
          videos: []
        },

        {
          title: "Market",
          videos: []
        }

      ],


      office: [

        {
          title: "Introduction to Office Practice",
          videos: []
        },

        {
          title: "Office Documents",
          videos: []
        },

        {
          title: "Communication in the Office",
          videos: []
        }

      ],


      mathematics: [

        {
          title: "Number Bases",
          videos: []
        },

        {
          title: "Algebra",
          videos: []
        },

        {
          title: "Statistics",
          videos: []
        }

      ],


      english: [

        {
          title: "Grammar",
          videos: []
        },

        {
          title: "Comprehension",
          videos: []
        },

        {
          title: "Vocabulary",
          videos: []
        }

      ]

    }

  },


  // ========================================
  // ART
  // ========================================

  art: {

    name: "Art",

    subjects: {

      government: [

        {
          title: "Introduction to Government",
          videos: []
        },

        {
          title: "Political Concepts",
          videos: []
        },

        {
          title: "Constitution",
          videos: []
        },

        {
          title: "Democracy",
          videos: []
        },

        {
          title: "Political Parties",
          videos: []
        }

      ],


      literature: [

        {
          title: "Introduction to Literature",
          videos: []
        },

        {
          title: "Prose",
          videos: []
        },

        {
          title: "Drama",
          videos: []
        },

        {
          title: "Poetry",
          videos: []
        }

      ],


      yoruba: [

        {
          title: "Yoruba Language",
          videos: []
        },

        {
          title: "Yoruba Literature",
          videos: []
        }

      ],


      irs: [

        {
          title: "Introduction to Islamic Religious Studies",
          videos: []
        },

        {
          title: "Islamic Beliefs",
          videos: []
        }

      ],


      crs: [

        {
          title: "Introduction to Christian Religious Studies",
          videos: []
        },

        {
          title: "The Bible",
          videos: []
        }

      ],


      mathematics: [

        {
          title: "Number Bases",
          videos: []
        },

        {
          title: "Algebra",
          videos: []
        },

        {
          title: "Statistics",
          videos: []
        }

      ],


      english: [

        {
          title: "Grammar",
          videos: []
        },

        {
          title: "Comprehension",
          videos: []
        },

        {
          title: "Vocabulary",
          videos: []
        }

      ]

    }

  }

};


// ==========================================
// CHECK DEPARTMENT
// ==========================================

if (!videoData[department]) {

  department = "science";

}


// ==========================================
// CURRENT DEPARTMENT
// ==========================================

const currentDepartment =
  videoData[department];


// ==========================================
// PAGE TITLE
// ==========================================

document.title =
  `${currentDepartment.name} Video Lessons`;

document.getElementById("pageTitle").textContent =
  `📚 ${currentDepartment.name} Video Learning Hub`;

document.getElementById("pageSubtitle").textContent =
  "Complete Video Lessons";


// ==========================================
// SUBJECT DROPDOWN
// ==========================================

const subjectSelect =
  document.getElementById("subjectSelect");


// CLEAR OLD OPTIONS

subjectSelect.innerHTML = "";


// ADD SUBJECTS

Object.keys(currentDepartment.subjects)
.forEach(subject => {

  const option =
    document.createElement("option");

  option.value = subject;

  option.textContent =
    formatSubjectName(subject);

  subjectSelect.appendChild(option);

});


// ==========================================
// FORMAT SUBJECT NAME
// ==========================================

function formatSubjectName(subject) {

  const names = {

    physics: "Physics",

    chemistry: "Chemistry",

    biology: "Biology",

    math: "Mathematics",

    mathematics: "Mathematics",

    english: "English",

    computer: "Computer",

    commerce: "Commerce",

    accounting: "Financial Accounting",

    economics: "Economics",

    office: "Office Practice",

    government: "Government",

    literature: "Literature in English",

    yoruba: "Yoruba",

    irs: "IRS",

    crs: "CRS"

  };

  return names[subject] || subject;

}


// ==========================================
// CURRENT SUBJECT
// ==========================================

let currentSubject = "";


// ==========================================
// LOAD FROM DROPDOWN
// ==========================================

function loadVideosFromDropdown() {

  const subject =
    document.getElementById("subjectSelect").value;

  loadVideos(subject);

}


// ==========================================
// LOAD VIDEOS
// ==========================================

function loadVideos(subject) {

  currentSubject =
    subject;

  const list =
    currentDepartment.subjects[subject] || [];

  const container =
    document.getElementById("videoList");

  container.innerHTML = "";


  if (list.length === 0) {

    container.innerHTML =
      "No videos available for this selection";

    document.getElementById("player").src = "";

    return;

  }


  list.forEach((topic, index) => {

    const item =
      document.createElement("div");

    item.className =
      "video-item";

    if (index === 0) {

      item.classList.add("active");

    }

    item.textContent =
      topic.title;

    item.onclick =
      function() {

        selectTopic(index, item);

      };


    container.appendChild(item);

  });


  // LOAD FIRST TOPIC

  selectTopic(
    0,
    container.querySelector(".video-item")
  );

}


// ==========================================
// SELECT TOPIC
// ==========================================

function selectTopic(index, element) {

  const topic =
    currentDepartment.subjects[currentSubject][index];


  // REMOVE ACTIVE

  document
    .querySelectorAll(".video-item")
    .forEach(item => {

      item.classList.remove("active");

    });


  // ADD ACTIVE

  element.classList.add("active");


  // NO VIDEOS

  if (
    !topic.videos ||
    topic.videos.length === 0
  ) {

    document.getElementById("player").src = "";

    document.getElementById("videoContainer").innerHTML = `

      <div style="
        padding:20px;
        text-align:center;
        color:#9ca3af;
      ">

        <h2>${topic.title}</h2>

        <p>
          Video lessons for this topic will be added soon.
        </p>

      </div>

    `;

    return;

  }


  // LOAD FIRST VIDEO

  document.getElementById("player").src =
    topic.videos[0].url;


  // SHOW ALL VIDEOS

  showTopic(topic);

}


// ==========================================
// SHOW TOPIC VIDEOS
// ==========================================

function showTopic(topic) {

  const container =
    document.getElementById("videoContainer");


  if (
    !topic.videos ||
    topic.videos.length === 0
  ) {

    container.innerHTML = "";

    return;

  }


  container.innerHTML = `

    <div style="
      padding:20px;
    ">

      <h2 style="
        margin-bottom:20px;
      ">
        ${topic.title}
      </h2>

      ${
        topic.videos.map(video => `

          <iframe

            src="${video.url}"

            title="${topic.title}"

            frameborder="0"

            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share
            "

            allowfullscreen>

          </iframe>

        `).join("")
      }

    </div>

  `;

}


// ==========================================
// LOAD FIRST SUBJECT AUTOMATICALLY
// ==========================================

const firstSubject =
Object.keys(currentDepartment.subjects)[0];

subjectSelect.value =
  firstSubject;

loadVideos(firstSubject);