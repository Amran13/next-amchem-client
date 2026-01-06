export const products = [
  {
    id: "amchem-flavomycin",
    name: "AMCHEM FLAVOMYCIN® 4% / 8% PREMIX",
    subtitle: "(flavophospholipol)",

    sections: [
      {
        type: "table",
        title: "COMPOSITION",
        description: "Content (per 100 g):",
        columns: [
          "Component",
          "Flavomycin® 4%",
          "Flavomycin® 8%"
        ],
        rows: [
          [
            "Flavophospholipol (Bambermycin, Moenomycin)",
            "4 g",
            "8 g"
          ],
          [
            "Pharmaceutical-grade excipients",
            "up to 100 g",
            "up to 100 g"
          ]
        ],
        footer:
          "Produced by fermentation of Streptomyces species (e.g., Streptomyces ghanaensis)."
      },

      {
        type: "text",
        title: "DESCRIPTION",
        content:
          "AMCHEM FLAVOMYCIN® PREMIX is a light brown to yellowish-brown, homogeneous powder with a characteristic odor. It is a non-therapeutic phosphoglycolipid antibiotic used exclusively as a growth promoter and gut microflora modulator in animal nutrition.\n\nAfter oral administration at recommended doses, the product is not absorbed from the gastrointestinal tract and acts locally in the intestinal lumen."
      },

      {
        type: "text",
        title: "PHARMACOLOGICAL ACTION",
        content:
          "Flavophospholipol inhibits bacterial cell wall synthesis by interfering with murein (peptidoglycan) biosynthesis.\n\nInhibition of murein synthesis weakens the bacterial cell wall, leading to osmotic lysis."
      },

      {
        type: "text",
        title: "PHARMACOKINETICS",
        content:
          "Following oral administration, flavophospholipol is not absorbed from the gastrointestinal tract and remains confined to the intestinal lumen."
      },

      {
        type: "text",
        title: "INDICATIONS",
        content:
          "AMCHEM FLAVOMYCIN® PREMIX is indicated as a performance enhancer for use in poultry, swine, cattle, rabbits, and aquatic species."
      },

      {
        type: "text",
        title: "CONTRAINDICATIONS",
        content:
          "The product should not be used in animals with known hypersensitivity to flavophospholipol."
      },

      {
        type: "text",
        title: "MODE OF ADMINISTRATION",
        content:
          "Oral administration via feed. For uniform distribution, stepwise premixing is recommended."
      },

      {
        type: "list",
        title: "TARGET SPECIES",
        items: [
          "Chickens",
          "Turkeys",
          "Pigs",
          "Rabbits",
          "Cattle",
          "Fish",
          "Shrimp"
        ]
      },

      {
        type: "table",
        title: "DOSAGE",
        columns: [
          "Species",
          "Flavophospholipol (ppm)",
          "Flavomycin® 4% (g/ton feed)",
          "Flavomycin® 8% (g/ton feed)"
        ],
        rows: [
          ["Broilers", "1–12", "25–300", "12.5–150"],
          ["Layers", "2–8", "50–200", "25–100"],
          ["Turkeys (≤26 weeks)", "1–15", "25–375", "12.5–190"],
          ["Piglets (≤3 months)", "2–10", "50–250", "25–125"],
          ["Fattening pigs", "2–12", "50–300", "25–150"],
          ["Rabbits", "2–4", "50–100", "25–50"],
          ["Calves", "8–20", "200–500", "100–250"],
          ["Beef cattle", "10–20", "250–500", "125–250"]
        ]
      }
    ]
  }
]
