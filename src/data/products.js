export const productsData = {
  categories: [
    {
      slug: "medicated-premix",
      name: "Medicated Premix",
      image: "/medicated-premix.jpg",
      items: [
        {
          id: "amchem-flavomycine-premix",
          brand: "AMCHEM",
          product: "AMCHEM FLAVOMYCINE PREMIX",
          active_substance: "Flavophospholipol (Bambermycin, Moenomycin)",
          composition: [
            "Flavophospholipol 4% or 8%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Light brown to yellowish-brown homogeneous powder with characteristic odor.",
          pharmacological_properties: {
            mechanism_of_action: "Flavophospholipol is a phosphoglycolipid antibiotic produced by Streptomyces species that inhibits bacterial cell wall synthesis. The compound specifically impairs transglycosylase activity of penicillin-binding proteins (PBPs), blocking formation of murein polysaccharide strands in peptidoglycan. In Escherichia coli, PBP 1a, 1b, 1c, and 3 are inhibited; in Streptococcus pneumoniae, PBP 2a is the primary target.",
            spectrum: "Predominantly active against gram-positive bacteria (Staphylococcus spp., Streptococcus spp., Clostridium perfringens, Enterococcus faecalis) with limited activity against gram-negative organisms. Importantly, does not significantly affect beneficial Lactobacillus and Bifidobacterium species.",
            pharmacokinetics: "Not absorbed from gastrointestinal tract; acts exclusively in intestinal lumen. Completely excreted unchanged in feces with no detectable tissue residues even at 50\u00d7 normal dosage.",
            scientific_evidence: "Studies in mSystems (2021) demonstrate flavophospholipol induces dynamic microbial shifts potentially increasing anti-inflammatory mechanisms and nutrient bioavailability. Research shows decreased transferable drug resistance among gram-negative enteropathogens and reduced Salmonella shedding in pigs, calves, and chickens. No cross-resistance observed with penicillin, tetracycline, streptomycin, erythromycin, or macrolides."
          },
          indications: [
            "Growth promotion in poultry (broilers, layers, turkeys), swine, cattle", "Prevention of necrotic enteritis (C. perfringens)", "Improvement of feed conversion ratio", "Reduction of pathogenic bacterial colonization", "Decreased antimicrobial resistance transfer",
          ],
          dosage_and_administration: {
            poultry: [
              "Broilers/Layers/Turkeys: 0.5-2.0 g premix/kg feed (20-80 mg flavophospholipol/kg feed)", "Continuous administration throughout production"
            ],
            swine: ["Starter pigs: 1.0-2.0 g premix/kg feed", "Grower-finisher: 0.5-1.0 g premix/kg feed", "Breeding stock: 0.5-1.0 g premix/kg feed"],
            cattle: ["Feedlot cattle: 0.5-1.5 g premix/kg feed"],
          },
          contraindications: "Known hypersensitivity to flavophospholipol; severe hepatic/renal dysfunction.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
            cattle_meat: "0 days",
            eggs: "Not permitted in layers in some jurisdictions"
          },
          adverse_effects: "None reported at recommended dosages. Excellent safety margin.",
          precautions: "Use at approved dose rates; ensure adequate mixing; observe proper withdrawal periods where required.",
          drug_interactions: "No cross-resistance with β-lactams or other antibiotic classes. Compatible with most feed medications.",
          storage: "Store in sealed containers at 5-25°C. Protect from moisture and direct sunlight.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "layer",
            "turkey",
            "swine",
            "cattle",
          ]
        },
        {
          id: "amchem-bmd-premix",
          brand: "AMCHEM",
          product: "AMCHEM BMD PREMIX",
          active_substance: "Bacitracin Methylene Disalicylate (BMD)",
          composition: [
            "Bacitracin Methylene Disalicylate 10% or 15%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Light tan to brown homogeneous powder.",
          pharmacological_properties: {
            mechanism_of_action: "Bacitracin is a cyclic polypeptide antibiotic that inhibits bacterial cell wall synthesis by preventing dephosphorylation of C55-isoprenyl pyrophosphate (bactoprenol pyrophosphate), the lipid carrier molecule essential for peptidoglycan precursor transport across cell membrane. Methylene disalicylate component provides enhanced stability and additional anti-inflammatory properties through prostaglandin synthesis inhibition.",
            spectrum: "Potent activity against gram-positive organisms including Clostridium species, Streptococcus suis, Staphylococcus aureus, and Erysipelothrix rhusiopathiae. Limited gram-negative activity.",
            pharmacokinetics: "Poorly absorbed from gastrointestinal tract (intestinal bioavailability <5%), providing local antimicrobial action. Absorbed fraction rapidly excreted via kidneys without tissue accumulation.",
            scientific_evidence: "Research demonstrates BMD reduces intestinal colonization of pathogenic bacteria while maintaining beneficial microbiota, improving nutrient digestibility and growth performance. Studies show reduced intestinal permeability and inflammatory cytokine expression (IL-6, IL-1β, TNF-α) in challenged animals. Clinical trials demonstrate efficacy in preventing necrotic enteritis and swine dysentery."
          },
          indications: [
            "Growth promotion in poultry and swine", "Prevention of necrotic enteritis (C. perfringens)", "Control of swine dysentery (Brachyspira species)", "Improvement of feed efficiency", "Reduction of bacterial enteritis mortality",
          ],
          dosage_and_administration: {
            poultry: ["Broilers: 2.0-5.0 g premix/kg feed (200-750 mg BMD/kg)", "Layers: 1.0-2.0 g premix/kg feed", "Turkeys: 2.0-5.0 g premix/kg feed"],
            swine: ["Starter pigs: 2.5-5.0 g premix/kg feed", "Grower-finisher: 1.25-2.5 g premix/kg feed", "Sows: 1.0-2.0 g premix/kg feed"],
          },
          contraindications: "Hypersensitivity to avilamycin; not for therapeutic treatment of clinical infections.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
            eggs: "0 days (where approved for layers)"
          },
          adverse_effects: "No adverse effects reported at recommended dosages. Excellent tolerance across species.",
          precautions: "Use only at approved sub-therapeutic doses; not for bacterial disease treatment; ensure adequate mixing; minimize dust exposure during handling.",
          drug_interactions: "No significant interactions reported.",
          storage: "Store at 15-25°C in sealed containers, protected from moisture and direct sunlight.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "layer",
            "turkey",
            "swine"
          ]
        },
        {
          id: "amchem-lincomycin-premix",
          brand: "AMCHEM",
          product: "AMCHEM LINCOMYCIN PREMIX",
          active_substance: "Lincomycin Hydrochloride",
          composition: [
            "Lincomycin HCl 2.2% or 4.4%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "White to off-white powder with slight characteristic odor.",
          pharmacological_properties: {
            mechanism_of_action: "Lincomycin binds to 23S rRNA of 50S ribosomal subunit at peptidyl transferase center, preventing peptide bond formation and blocking protein chain elongation. Effect is bacteriostatic at therapeutic concentrations, bactericidal at higher doses depending on organism susceptibility and inoculum.",
            spectrum: "Excellent activity against gram-positive bacteria (Staphylococcus, Streptococcus, Clostridium perfringens, Erysipelothrix rhusiopathiae) and mycoplasma species. Activity against select gram-negative organisms including Lawsonia intracellularis and Brachyspira hyodysenteriae.",
            pharmacokinetics: "Partially absorbed from gastrointestinal tract (oral bioavailability 20-30%), providing both local intestinal and systemic antimicrobial effects. Widely distributed to tissues including bone, achieving therapeutic concentrations at infection sites. Excretion via feces (unchanged drug) and urine (metabolites).",
            scientific_evidence: "Studies demonstrate lincomycin significantly reduces post-weaning diarrhea incidence and pathogenic E. coli/Clostridium populations while minimally affecting beneficial Lactobacillus. Research shows selective modulation of gut microbiota contributing to improved intestinal integrity and nutrient absorption."
          },
          indications: [
            "Swine dysentery (Brachyspira hyodysenteriae)", "Proliferative enteropathy (Lawsonia intracellularis)", "Mycoplasma infections in swine", "Necrotic enteritis in poultry", "Growth promotion",
          ],
          dosage_and_administration: {
            therapeutic_use: [
              "swine: Swine dysentery: 10-20 mg lincomycin/kg BW daily for 7-14 days (40-80 g premix/ton feed)", "Proliferative enteropathy: 10 mg/kg BW daily for 21 days (40 g premix/ton feed)",
            ],
            growth_promotion: [
             "poultry: 0.5-1.0 g premix/kg feed",
             "swine: 20-40 g premix/ton feed continuously",
            ]
          },
          contraindications: "Hypersensitivity to lincosamides; rabbits, hamsters, guinea pigs (risk of fatal enterocolitis); pre-existing gastrointestinal disorders.",
          withdrawal_period: {
            poultry_meat: "1 days",
            swine_meat: "6 days",
            eggs: "Not for laying hens producing eggs for human consumption"
          },
          adverse_effects: "Transient diarrhea (usually mild); rare hypersensitivity reactions.",
          precautions: "Use judiciously to minimize resistance; consider susceptibility testing before prolonged treatment; maintain adequate hydration.",
          drug_interactions: "Antagonizes macrolide antibiotics (do not use concurrently); enhanced neuromuscular blockade with anesthetics.",
          storage: "Store at 15-30°C in sealed containers. Protect from moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "swine"
          ]
        },
        {
          id: "amchem-citimix",
          brand: "AMCHEM",
          product: "AMCHEM CITIMIX",
          active_substance: "Chlortetracycline (CTC)",
          composition: [
            "Chlortetracycline 10% or 15%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Yellow to golden-yellow crystalline powder.",
          pharmacological_properties: {
            mechanism_of_action: "Chlortetracycline reversibly binds to 30S ribosomal subunit, preventing aminoacyl-tRNA attachment to ribosomal acceptor site, thereby inhibiting bacterial protein synthesis. Action is bacteriostatic at typical therapeutic concentrations.",
            spectrum: "Broad-spectrum activity against gram-positive and gram-negative bacteria (Pasteurella, E. coli, Salmonella, Streptococcus, Staphylococcus) plus intracellular pathogens (Mycoplasma, Chlamydia, Rickettsia).",
            pharmacokinetics: "Moderately absorbed from gastrointestinal tract (oral bioavailability 30-40%), providing local intestinal and systemic activity. Concentrates in liver, kidney, bone. Excretion primarily via feces (unchanged) and urine (parent compound plus metabolites).",
            scientific_evidence: "Studies show low-dose chlortetracycline reduces intestinal mucosal inflammation and improves barrier function through enhanced tight junction protein expression and reduced oxidative stress in enterocytes. Research demonstrates modulation of immune responses contributing to growth promotion beyond antimicrobial effects."
          },
          indications: [
            "Poultry : Chronic respiratory disease (CRD)", "infectious synovitis", "fowl cholera", "blue comb disease", "growth promotion",
            "Swine : Bacterial enteritis, atrophic rhinitis prevention, respiratory disease reduction, growth promotion",
            "Cattle : Liver abscess prevention, bacterial pneumonia, anaplasmosis control"],
          dosage_and_administration:  {
            therapeutic_use: [
              "swine: Swine enteritis: 10-20 mg CTC/kg BW daily for 5-7 days (100-400 g premix/ton)",
              "swine: Swine respiratory: 5-10 mg/kg BW daily for 10-14 days (50-200 g premix/ton)",
              "poultry: Poultry CRD: 10-20 mg/kg BW daily for 7-14 days (200-400 g premix/ton)",
            ],
            growth_promotion: 
            [
              "poultry: 50-100 g premix/ton feed",
              "swine: 50-100 g premix/ton feed",
              "cattle: 70-350 g premix/ton feed",
            ]
          },
          contraindications: "Hypersensitivity to tetracyclines; severe hepatic/renal impairment; young animals during tooth development (discoloration risk).",
          withdrawal_period: {
            poultry_meat: "5 days",
            swine_meat: "7 days",
            cattle_meat: "7 days",
            eggs: "Not for laying hens or dairy cattle"
          },
          adverse_effects: "Rare gastrointestinal disturbances; photosensitivity in light-skinned animals; tooth discoloration during dental development; hepatotoxicity at excessive doses.",
          precautions: "Do not administer with milk/calcium-rich feeds (reduces absorption); use cautiously in hepatic/renal compromise; implement antimicrobial stewardship protocols; may persist in environment.",
          drug_interactions: "Antacids and iron reduce absorption; bactericidal antibiotics may be antagonized; may potentiate anticoagulants.",
          storage: "Store in sealed containers away from light, <30°C. Avoid moisture exposure.",
          shelf_life: "24 months unopened; 3 months after opening For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "poultry", 
            "swine",
            "cattle",
          ]
        },
        {
          id: "amchem-tylan-mix-premix",
          brand: "AMCHEM",
          product: "AMCHEM TYLAN-MIX PREMIX",
          active_substance: "Tylosin Phosphate",
          composition: [
            "Tylosin Phosphate 10%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Light tan to brown powder with faint characteristic odor.",
          pharmacological_properties: {
            mechanism_of_action: "Tylosin binds to 50S ribosomal subunit at peptidyl transferase site, preventing translocation of peptidyl-tRNA from acceptor to donor site, thereby blocking protein chain elongation. Primarily bacteriostatic; bactericidal at high concentrations.",
            spectrum: "Excellent against gram-positive bacteria (Staphylococcus aureus, Streptococcus spp., Clostridium perfringens, Erysipelothrix rhusiopathiae), exceptional against Mycoplasma species, and certain gram-negative organisms (Lawsonia intracellularis, Brachyspira spp.).",
            pharmacokinetics: "Partially absorbed from GI tract (bioavailability 15-25%), achieving therapeutic tissue concentrations in lung, liver, muscle. Minimal metabolism; excreted via bile and urine. Fecal excretion of unabsorbed drug provides continued intestinal activity.",
            scientific_evidence: "PNAS research demonstrates tylosin significantly modulates intestinal microbiota, reducing pathogenic Clostridium while promoting beneficial communities. Studies show reduced inflammatory markers (IL-6, IL-1\u03b2, TNF-\u03b1) and improved tight junction protein expression, enhancing intestinal barrier function."
          },
          indications: [
            "Poultry: Chronic respiratory disease (M. gallisepticum), infectious synovitis (M. synoviae), necrotic enteritis, hexamitiasis in turkeys, growth promotion",
            "Swine: Swine dysentery, porcine proliferative enteropathy, mycoplasma pneumonia, arthritis, growth promotion"
          ],
          dosage_and_administration: {
            therapeutic: [
              "swine: Swine dysentery: 20-40 mg tylosin/kg BW daily for 3-10 days (100-200 g premix/ton)", "Ileitis: 10 mg/kg BW daily for 21 days (40-80 g premix/ton)",
              "poultry: Poultry CRD: 10-20 mg/kg BW daily for 7-14 days (100-200 g premix/ton)", "Necrotic enteritis: 10-50 mg/kg BW daily for 5-7 days (100-500 g premix/ton)",
            ],
            growth_promotion: [
              "poultry: 10-50 g premix/ton",
              "swine: 10-40 g premix/ton",
            ]
          },
          contraindications: "Hypersensitivity to macrolides; horses/equids (fatal enterocolitis risk); severe hepatic dysfunction.",
          withdrawal_period: {
            poultry_meat: "5 days",
            swine_meat: "7 days",
            eggs: "Not for laying hens producing eggs for human consumption"
          },
          adverse_effects: "Occasional gastrointestinal disturbances; rare hypersensitivity reactions.",
          precautions: "Use according to antimicrobial stewardship principles; monitor for resistance development; maintain withdrawal periods.",
          drug_interactions: "Potential antagonism with lincosamides; may increase serum levels of drugs metabolized by cytochrome P450.",
          storage: "Store at 15-25°C in sealed containers, protected from moisture and light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "poultry",
            "swine"
          ]
        },
        {
          id: "amchem-enramycin-premix",
          brand: "AMCHEM",
          product: "AMCHEM ENRAMYCIN PREMIX",
          active_substance: "Enramycin",
          composition: [
            "Enramycin 4% or 8%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Yellowish-white to light brown homogeneous powder.",
          pharmacological_properties: {
            mechanism_of_action: "Enramycin is a polypeptide antibiotic inhibiting bacterial cell wall synthesis by binding to lipid intermediates (undecaprenyl phosphate derivatives) that transport peptidoglycan precursors across cell membrane, preventing cell wall assembly.",
            spectrum: "Potent bactericidal activity against gram-positive organisms, particularly Clostridium perfringens, Streptococcus species, and Staphylococcus species.",
            pharmacokinetics: "Not absorbed from gastrointestinal tract; acts exclusively within intestinal lumen. Completely excreted unchanged in feces with no tissue residues or systemic exposure.",
            scientific_evidence: "Studies demonstrate enramycin reduces ammonia-producing bacteria, lowering intestinal and blood ammonia concentrations, contributing to improved intestinal health. Research shows modulation of gut microbiota without significantly affecting beneficial populations, resulting in improved villus height:crypt depth ratio and enhanced nutrient absorption. Importantly, no cross-resistance with clinically important antibiotics; resistance develops very slowly with maintained long-term efficacy."
          },
          indications: [
            "Growth promotion in poultry and swine", "Prevention of necrotic enteritis in broilers", "Improvement of feed conversion efficiency", "Reduction of intestinal pathogen load", "Decreased ammonia production in intestinal tract",
          ],
          dosage_and_administration: {
            poultry: ["Growth promotion: 0.5-1.25 g premix/kg feed (2.5-10 mg enramycin/kg feed)", "Continuous administration from day-old through finishing"],
            swine: ["Starter pigs: 1.25-2.5 g premix/kg feed", "Grower-finisher: 0.625-1.25 g premix/kg feed", "Breeding stock: 0.625-1.25 g premix/kg feed"]
          },
          contraindications: "Known hypersensitivity to enramycin; do not exceed maximum permitted inclusion rates.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
            eggs: "Not for laying hens where prohibited by regulations"
          },
          adverse_effects: "No adverse effects reported at recommended dosages. Excellent safety margin.",
          precautions: "Use only in sub-therapeutic doses as growth promoter; not for therapeutic treatment; ensure uniform mixing; minimize dust exposure.",
          drug_interactions: "No significant interactions reported.",
          storage: "Store at 5-30°C in sealed packaging. Protect from moisture and direct sunlight.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "turkey",
            "swine"
          ]
        },
        {
          id: "amchem-oladox-premix",
          brand: "AMCHEM",
          product: "AMCHEM OLADOX PREMIX",
          active_substance: "Olaquindox",
          composition: [
            "Olaquindox 12.5%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Yellow to orange-yellow powder.",
          pharmacological_properties: {
            mechanism_of_action: "Olaquindox is a synthetic quinoxaline-1,4-dioxide derivative inhibiting bacterial DNA synthesis and disrupting protein synthesis through ribosomal interaction.",
            spectrum: "Activity against gram-positive and gram-negative bacteria (E. coli, Salmonella species, Brachyspira species) and certain protozoal organisms.",
            pharmacokinetics: "Limited gastrointestinal absorption with most activity in intestinal lumen. Absorbed fractions rapidly metabolized and excreted without significant tissue accumulation.",
            scientific_evidence: "Research shows olaquindox reduces intestinal colonization by pathogenic bacteria while improving intestinal morphology (increased villus height, decreased crypt depth). Studies demonstrate enhanced expression of nutrient transporter genes in enterocytes, contributing to improved feed efficiency."
          },
          indications: ["Growth promotion in swine", "Prevention of bacterial enteritis", "Improvement of feed conversion efficiency", "Control of post-weaning diarrhea"],
          dosage_and_administration: {
            swine: ["4-8 g premix/kg feed (50-100 mg olaquindox/kg feed)", "From weaning until 30 kg body weight", "NOT for animals over 30 kg or breeding stock"],
          },
          contraindications: "Animals over 30 kg body weight; breeding stock; hypersensitivity; concurrent use with other quinoxaline derivatives.",
          withdrawal_period: {
            swine_meat: "Minimum 14 days (consult local regulations)",
          },
          adverse_effects: "Generally well tolerated. Excessive doses may cause gastrointestinal disturbances and reduced feed intake.",
          precautions: "Use only in jurisdictions where approved; strict age/weight restrictions; do not exceed recommended doses; observe proper withdrawal periods; not for species other than swine.",
          drug_interactions: "",
          storage: "Store at 15-25°C in sealed containers, protected from light and moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "swine"
          ]
        },
        {
          id: "amchem-zinc-bacitracin-premix",
          brand: "AMCHEM",
          product: "AMCHEM ZINC BACITRACIN PREMIX",
          active_substance: "Zinc Bacitracin",
          composition: [
            "Zinc Bacitracin 10% or 15%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Light tan to brown powder with faint characteristic odor.",
          pharmacological_properties: {
            mechanism_of_action: "Zinc bacitracin is a zinc salt complex of bacitracin polypeptides inhibiting bacterial cell wall synthesis by preventing dephosphorylation of undecaprenyl pyrophosphate (lipid carrier) essential for peptidoglycan precursor transport. Zinc component enhances stability and provides supplemental antimicrobial/nutritional properties.",
            spectrum: "Potent bactericidal activity against gram-positive bacteria: Clostridium perfringens, C. difficile, Streptococcus species, Staphylococcus aureus, Enterococcus species.",
            pharmacokinetics: "Poorly absorbed from GI tract (<5% bioavailability), acting primarily in intestinal lumen. Absorbed fraction rapidly eliminated via kidneys. Zinc component may undergo limited absorption regulated through homeostatic mechanisms.",
            scientific_evidence: "PNAS studies demonstrate zinc bacitracin significantly reduces necrotic enteritis incidence in broilers by controlling C. perfringens proliferation. Research shows microbiota modulation promoting beneficial Lactobacillus while suppressing pathogenic Clostridia. Zinc moiety contributes supplemental nutrition, supports immune function, improves intestinal barrier integrity, reduces oxidative stress, and enhances antioxidant enzyme activity in enterocytes."
          },
          indications: [
            "Poultry : Necrotic enteritis prevention, Clostridium-associated enteritis control, growth promotion, feed efficiency improvement, footpad dermatitis reduction",
            "Swine : Bacterial enteritis control, swine dysentery prevention, growth promotion, improved feed conversion"
          ],

          dosage_and_administration: {
            poultry: [
              "Necrotic enteritis prevention: 2.0-5.0 g premix/kg feed (20-75 mg zinc bacitracin/kg)", "Growth promotion: 1.0-2.0 g premix/kg feed"
            ],
            swine: [
              "Starter pigs: 2.5-5.0 g premix/kg feed", "Grower-finisher: 1.0-2.5 g premix/kg feed"
            ],
          },
          contraindications: "Hypersensitivity to bacitracin; severe renal impairment; concurrent nephrotoxic drugs.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
            eggs: "Not for laying hens producing eggs for human consumption"
          },
          adverse_effects: "Generally well tolerated. Rare nephrotoxicity at excessive doses.",
          precautions: "Monitor total dietary zinc to avoid excess; ensure adequate mixing; use according to antimicrobial stewardship principles; zinc may accumulate in manure (follow environmental management practices).",
          drug_interactions: "No significant interactions reported.",
          storage: "Store at 15-30°C in sealed containers. Protect from moisture and direct sunlight.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "swine"
          ]
        },
        {
          id: "amchem-nosimix-premix",
          brand: "AMCHEM",
          product: "AMCHEM NOSIMIX PREMIX",
          active_substance: "Nosiheptide",
          composition: [
            "Nosiheptide 1%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Light yellow to brownish-yellow powder.",
          pharmacological_properties: {
            mechanism_of_action: "Nosiheptide is a sulfur-containing peptide antibiotic binding to 50S ribosomal subunit, specifically interfering with elongation factor EF-G function, preventing translocation during protein synthesis elongation phase.",
            spectrum: "Potent activity against gram-positive bacteria, particularly Clostridium perfringens, Staphylococcus aureus (including MRSA strains), Streptococcus species, and Mycoplasma species.",
            pharmacokinetics: "Poorly absorbed from gastrointestinal tract, providing selective pressure on intestinal microbiota without systemic exposure. Excreted unchanged in feces with no tissue accumulation.",
            scientific_evidence: "Research demonstrates minimal cross-resistance with other antibiotic classes due to unique ribosomal binding site. Studies show significant improvement in intestinal health parameters (villus height, crypt depth ratio, goblet cell density). Compound reduces intestinal inflammation markers and enhances tight junction protein expression (claudin-1, occludin, ZO-1), improving barrier function."
          },
          indications: [
            "Growth promotion in poultry and swine", "Prevention of necrotic enteritis in broilers", "Control of Clostridium-associated enteritis", "Improvement of feed conversion efficiency", "Reduction of subclinical infections",
          ],
          dosage_and_administration: {
            poultry: ["Broilers: 5-10 g premix/kg feed (0.5-1 mg nosiheptide/kg)", "Layers: 5-10 g premix/kg feed", "Turkeys: 5-15 g premix/kg feed"],
            swine: ["All classes: 10-20 g premix/kg feed (0.1-0.2 mg nosiheptide/kg)"],
          },
          contraindications: "Known hypersensitivity to nosiheptide; not for therapeutic use in clinical infections.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
          },
          adverse_effects: "No significant adverse effects at recommended dosages. Excellent safety profile.",
          precautions: "Use only as growth promoter at sub-therapeutic levels; not for bacterial disease treatment; ensure uniform mixing.",
          drug_interactions: "No significant interactions reported.",
          storage: "Store at 15-30°C in sealed containers. Protect from moisture and light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "layer",
            "turkey",
            "swine"
          ]
        },
        {
          id: "amchem-avilamix-premix",
          brand: "AMCHEM",
          product: "AMCHEM AVILAMIX PREMIX",
          active_substance: "Avilamycin",
          composition: [
            "Avilamycin 10%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "White to off-white free-flowing powder.",
          pharmacological_properties: {
            mechanism_of_action: "Avilamycin is an oligosaccharide antibiotic produced by Streptomyces viridochromogenes, binding to 50S ribosomal subunit at a site distinct from other antibiotics, preventing peptide bond formation during translation.",
            spectrum: "Excellent activity against gram-positive bacteria: Clostridium perfringens, C. difficile, Streptococcus species, Staphylococcus aureus, Enterococcus species. No cross-resistance with clinically important human/veterinary antibiotics.",
            pharmacokinetics: "Not absorbed from gastrointestinal tract; acts exclusively within intestinal lumen. Completely excreted in feces with no tissue residues. Lack of systemic absorption contributes to excellent safety profile.",
            scientific_evidence: "Nature Microbiology research demonstrates avilamycin selectively reduces pathogenic Clostridium populations while preserving beneficial microbiota, improving intestinal morphology and nutrient digestibility. PNAS studies show reduced intestinal inflammation, decreased oxidative stress, and enhanced intestinal barrier function through tight junction protein upregulation."
          },
          indications: [
            "Growth promotion in poultry and swine", "Prevention of necrotic enteritis in broilers", "Control of necrotizing enteritis in piglets", "Improvement of feed conversion efficiency", "Reduction of mortality from bacterial enteritis",
          ],
          dosage_and_administration: {
            poultry: ["Broilers: 0.5-1.0 g premix/kg feed (5-10 mg avilamycin/kg)", "Layers: 0.5-0.75 g premix/kg feed", "Turkeys: 0.5-1.0 g premix/kg feed"],
            swine: ["Starter pigs: 1.0-2.0 g premix/kg feed", "Grower-finisher: 0.5-1.0 g premix/kg feed"],
          },
          contraindications: "Hypersens",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
          },
          adverse_effects: "No adverse effects reported at recommended dosages. Excellent tolerance across species.",
          precautions: "Use only at approved sub-therapeutic doses; not for therapeutic treatment of clinical infections; ensure adequate mixing; minimize dust exposure during handling.",
          drug_interactions: "No significant interactions reported.",
          storage: "Store at 15-25°C in sealed containers, protected from moisture and direct sunlight.",
          shelf_life: "24 months",
          veterinary_use_only: true,
          species: [
            "broiler",
            "layer",
            "turkey",
            "swine"
          ]
        },
        {
          id: "amchem-virginiamycin-premix",
          brand: "AMCHEM",
          product: "AMCHEM VIRGINIAMYCIN PREMIX",
          active_substance: "Virginiamycin",
          composition: [
            "Virginiamycin 10%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "White to light yellow homogeneous powder.",
          pharmacological_properties: {
            mechanism_of_action: "Virginiamycin consists of two synergistic components (factors M1 and S1) inhibiting bacterial protein synthesis. Factor M1 binds to peptidyl transferase center of 50S ribosomal subunit; factor S1 binds to different site causing conformational changes. Together, they create irreversible inhibition, resulting in bactericidal activity.",
            spectrum: "Potent against gram-positive bacteria: Clostridium perfringens, Streptococcus species, Staphylococcus aureus (including some resistant strains), Enterococcus species. Limited gram-negative activity.",
            pharmacokinetics: "Poorly absorbed from gastrointestinal tract, providing selective antimicrobial pressure within intestinal lumen. Minimal systemic exposure with rapid elimination of absorbed fraction. No significant tissue residues following proper withdrawal.",
            scientific_evidence: "Studies demonstrate virginiamycin significantly reduces necrotic enteritis incidence and severity through C. perfringens proliferation and toxin production control. Research shows improved intestinal integrity, reduced inflammatory cytokine expression, and enhanced nutrient transporter gene expression in supplemented animals."
          },
          indications: [
            "Poultry: Necrotic enteritis prevention, growth promotion, improved feed efficiency, reduction of Clostridium-associated enteritis", 
            "Swine: Growth promotion, improved feed conversion, bacterial enteritis control, enhanced carcass lean percentage", 
            "Cattle: Liver abscess prevention in feedlot cattle, improved feed efficiency",
          ],
          dosage_and_administration: {
            poultry: [
              "Growth promotion: 0.5-2.0 g premix/kg feed (5-20 mg virginiamycin/kg)", "Necrotic enteritis prevention: 1.0-2.0 g premix/kg feed during risk periods"
            ],
            swine: [
              "Starter pigs: 1.0-2.5 g premix/kg feed", "Grower-finisher: 0.5-1.5 g premix/kg feed"
            ],
            cattle: [
              "1.0-3.0 g premix/kg feed (typically 20-35 mg virginiamycin/kg dry matter intake)"
            ],
          },
          contraindications: "Hypersensitivity to streptogramin antibiotics; concurrent use with other macrolide/streptogramin antibiotics.",
          withdrawal_period: {
            poultry_meat: "1 day",
            swine_meat: "5 day",
            cattle_meat: "7 day",
          },
          adverse_effects: "Generally well tolerated. Rare: transient feed intake reduction, gastrointestinal disturbances.",
          precautions: "Use according to antimicrobial stewardship guidelines; monitor for resistance development; related to quinupristin/dalfopristin (human medicine)\u2014use judiciously.",
          drug_interactions: "May antagonize bacteriostatic antibiotics; potential interactions with cytochrome P450-metabolized drugs.",
          storage: "Store at 15-25°C in sealed containers. Protect from moisture and light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "swine",
            "cattle"
          ]
        },
        {
          id: "amchem-quinocetone-premix",
          brand: "AMCHEM",
          product: "AMCHEM QUINOCETONE PREMIX",
          active_substance: "Quinocetone",
          composition: [
            "Quinocetone 5% or 25%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Yellow to orange powder.",
          pharmacological_properties: {
            mechanism_of_action: "Quinocetone (olaquindox derivative) is a synthetic quinoxaline-1,4-dioxide inhibiting bacterial DNA and RNA synthesis, with disruption of protein synthesis.",
            spectrum: "Broad-spectrum activity against gram-positive and gram-negative bacteria: E. coli, Salmonella species, Clostridium perfringens, Brachyspira hyodysenteriae.",
            pharmacokinetics: "Limited gastrointestinal absorption with rapid metabolism and excretion of absorbed fractions. No significant tissue accumulation following proper withdrawal.",
            scientific_evidence: "Research indicates quinocetone improves intestinal morphology (increased villus height, decreased crypt depth), enhances digestive enzyme activity, and modulates intestinal microbiota toward beneficial populations. Studies show antioxidant properties protecting enterocytes from oxidative damage."
          },
          indications: ["Growth promotion in swine", "Prevention of bacterial enteritis", "Control of post-weaning diarrhea", "Improved feed conversion efficiency"],
          dosage_and_administration: {
            swine: ["4-8 g premix/kg feed (50-100 mg quinocetone/kg feed)", "From weaning through growing period"],
          },
          contraindications: "Animals for breeding; known hypersensitivity; animals above maximum approved weight.",
          withdrawal_period: {
            swine_meat: "Minimum 28 days (consult local regulations)",
          },
          adverse_effects: "Generally well tolerated at recommended doses.",
          precautions: "Use only in approved jurisdictions; strict dosage and withdrawal requirements; not for species other than swine; consider environmental fate in manure management.",
          drug_interactions: "",
          storage: "Store at 15-25°C protected from light and moisture in sealed containers.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "swine"
          ]
        },
        {
          id: "amchem-colistin-premix",
          brand: "AMCHEM",
          product: "AMCHEM COLISTIN PREMIX",
          active_substance: "Colistin Sulfate (Polymyxin E)",
          composition: [
            "Colistin Sulfate 10%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "White to slightly yellowish powder.",
          pharmacological_properties: {
            mechanism_of_action: "Colistin is a polypeptide antibiotic disrupting bacterial cell membrane. Mechanism involves electrostatic interaction between cationic peptide and anionic lipopolysaccharide (LPS) in outer membrane, causing displacement of divalent cations (Ca²⁺, Mg²⁺), membrane integrity disruption, cellular content leakage, and cell death.",
            spectrum: "Bactericidal activity specifically against gram-negative bacteria: E. coli, Salmonella species, Pseudomonas aeruginosa, Klebsiella species, Enterobacter species. No activity against gram-positive bacteria, anaerobes, or fungi.",
            pharmacokinetics: "Poorly absorbed from GI tract following oral administration, providing local intestinal antimicrobial activity with minimal systemic exposure. Absorbed fractions renally excreted.",
            scientific_evidence: "Research shows colistin rapidly reduces intestinal colonization by pathogenic E. coli, improving intestinal health and reducing post-weaning diarrhea. Studies indicate colistin-sensitive E. coli populations decline within 24-48 hours."
          },
          indications: ["Treatment of enteritis caused by colistin-sensitive E. coli", "Control of Salmonellosis", "Prevention of post-weaning diarrhea in piglets", "Treatment of colibacillosis in poultry"],
          dosage_and_administration: {
            poultry: ["Colibacillosis: 3-6 mg/kg BW daily for 3-7 days (30-120 g premix/ton)"],
            swine: ["Enteritis: 5-15 mg colistin/kg BW daily for 3-5 days (50-150 g premix/ton feed)"],
          },
          contraindications: "Hypersensitivity to polymyxins; renal impairment; concurrent nephrotoxic/neurotoxic drugs; growth promotion or prophylactic use in most jurisdictions.",
          withdrawal_period: {
            poultry_meat: "5 days minimum",
            swine_meat: "7 days minimum (varies by jurisdiction)",
          },
          adverse_effects: "Following oral administration (minimal absorption): rare GI disturbances. With systemic exposure: nephrotoxicity, neurotoxicity (not typical with oral use).",
          precautions: "CRITICAL: Use ONLY for treatment of diagnosed infections where justified; avoid prophylactic/growth promotion use; implement strict antimicrobial stewardship; consider alternatives; monitor for resistance. Colistin resistance (mcr-mediated plasmid-borne) poses significant public health concerns.",
          drug_interactions: "",
          storage: "Store at 15-25°C in sealed containers, protected from moisture and light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "swine","aquaculture"
          ]
        },
        {
          id: "amchem-tylvalosin-premix",
          brand: "AMCHEM",
          product: "AMCHEM TYLVALOSIN PREMIX",
          active_substance: "Tylvalosin",
          composition: [
            "Tylvalosin 5% or 10%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Light tan to brown powder with slight characteristic odor.",
          pharmacological_properties: {
            mechanism_of_action: "Tylvalosin is semi-synthetic macrolide (acetylated tylosin derivative) inhibiting bacterial protein synthesis by binding to 50S ribosomal subunit, blocking peptide chain translocation. Superior pharmacokinetics compared to tylosin with better tissue penetration and longer half-life.",
            spectrum: "Excellent activity against Mycoplasma species (M. hyopneumoniae, M. gallisepticum, M. synoviae), Lawsonia intracellularis, Brachyspira species, and gram-positive organisms. Enhanced potency against macrolide-resistant strains compared to older macrolides.",
            pharmacokinetics: "Absorbed from GI tract and widely distributed to tissues. Achieves high concentrations in lung tissue, intestinal mucosa, and inflammatory fluids, optimizing efficacy at infection sites. Hepatic metabolism; excretion via bile and urine. Tissue concentrations persist longer than serum levels.",
            scientific_evidence: "Research demonstrates tylvalosin reduces pulmonary lesions in swine with enzootic pneumonia and decreases intestinal inflammation in animals with ileitis. High lung and intestinal mucosal concentrations provide superior efficacy."
          },
          indications: [
            "Swine: Porcine proliferative enteropathy (L. intracellularis) treatment/prevention, enzootic pneumonia (M. hyopneumoniae) control, swine dysentery (Brachyspira), respiratory disease complex", 
            "Poultry: Chronic respiratory disease (M. gallisepticum), infectious synovitis (M. synoviae), airsacculitis prevention"
          ],
          dosage_and_administration: {
            poultry: ["Mycoplasma infections: 15-25 mg/kg BW daily for 3-5 days (75-125 g premix/ton)"],
            swine: ["Ileitis treatment: 5-10 mg tylvalosin/kg BW daily for 5-7 days (25-50 g premix/ton)", "Ileitis prevention: 2.5-5 mg/kg BW for 21 days (12.5-25 g premix/ton)", "Enzootic pneumonia: 5 mg/kg BW daily for 5 days (25 g premix/ton)"],
          },
          contraindications: "Hypersensitivity to macrolides; not for laying hens producing eggs for human consumption; severe hepatic impairment.",
          withdrawal_period: {
            poultry_meat: "7 days",
            swine_meat: "14 days",
          },
          adverse_effects: "Occasional transient reduction in feed intake; rare GI disturbances.",
          precautions: "Use according to antimicrobial stewardship; consider susceptibility testing for prolonged treatments; monitor for resistance.",
          drug_interactions: "Potential antagonism with lincosamides; may affect P450-metabolized drug metabolism.",
          storage: "Store at 15-30°C in sealed containers, protected from moisture and light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "swine",
            "poultry"
          ]
        },
        {
          id: "amchem-cyro-mix",
          brand: "AMCHEM",
          product: "AMCHEM CYRO-MIX",
          active_substance: "Cyromazine",
          composition: [
            "Cyromazine 1%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "White to off-white powder.",
          pharmacological_properties: {
            mechanism_of_action: "Cyromazine is a triazine insect growth regulator acting as larvicide by disrupting molting and chitin synthesis in fly larvae. Mechanism involves interference with cuticular protein synthesis and chitin deposition, preventing proper larval development and pupation.",
            spectrum: "Not an antibiotic. Controls fly populations (house flies, stable flies) breeding in animal manure by inhibiting larval development.",
            pharmacokinetics: "Passes through digestive tract largely unchanged; excreted in feces at concentrations sufficient to inhibit fly larval development in manure. No antibacterial activity; does not affect gut microbiota. Minimal systemic absorption; no tissue accumulation.",
            scientific_evidence: "Studies demonstrate feed-through cyromazine significantly reduces house fly and stable fly emergence from manure by 95-99%. Research indicates no adverse effects on poultry performance, egg production, or egg quality at recommended dosages."
          },
          indications: [
            "Control of house flies (Musca domestica) and filth flies in poultry facilities", "Reduction of fly-borne disease transmission", "Improvement of bird comfort and welfare", "Reduction of ammonia production (indirect effect through reduced fly activity)",
          ],
          dosage_and_administration: {
            poultry: ["100-120 g premix/ton feed (1.0-1.2 mg cyromazine/kg feed; 0.5-0.75 ppm in manure)", "Continuous administration throughout fly season (warm months)"],
          },
          contraindications: "Not for animals producing eggs for human consumption in some jurisdictions; hypersensitivity to cyromazine.",
          withdrawal_period: {
            poultry_meat: "7 days",
            eggs: "Check local regulations (approved for layers in many jurisdictions)"
          },
          adverse_effects: "No adverse effects reported at recommended dosages. Excellent safety profile.",
          precautions: "Requires continuous administration for efficacy; integrate with other fly control measures; fly resistance can develop (rotate control methods); not effective against adult flies.",
          drug_interactions: "",
          storage: "Store at 15-25°C in sealed containers, protected from moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "layer"
          ]
        },
        
        
      ]
    },
    {
      slug: "anticoccidial-premixes",
      name: "Anticoccidial Premixes",
      image: "/anticoccidial-premix.jpg",
      items: [
        {
          id: "amchem-salinicox",
          brand: "AMCHEM",
          product: "AMCHEM SALINICOX",
          active_substance: "Salinomycin, Nicarbazin",
          composition: [
            "Salinomycin 8%", "Nicarbazin 8%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Yellow to orange powder with characteristic appearance.",
          pharmacological_properties: {
            mechanism_of_action: `Combination product with complementary mechanisms.", "Salinomycin: Polyether ionophore antibiotic disrupting ion gradients across coccidia cell membranes. Facilitates monovalent cation (Na⁺, K⁺) transport, causing osmotic imbalance, cellular swelling, and parasite death. Particularly effective against E. tenella, E. necatrix, E. maxima. Nicarbazin: Chemical anticoccidial (4,4'-dinitrocarbanilide + 2-hydroxy-4,6-dimethylpyrimidine) disrupting mitochondrial function and interfering with parasite reproduction. Excellent activity against E. tenella and E. acervulina.`,
            spectrum: "Broad-spectrum activity against multiple Eimeria species in broiler chickens: E. tenella, E. acervulina, E. necatrix, E. maxima, E. brunetti, and mixed infections.",
            pharmacokinetics: "Salinomycin: Minimal absorption; acts locally in intestinal tract, Nicarbazin: Partially absorbed; causes mottled yolk coloration in eggs",
            scientific_evidence: "PNAS research demonstrates combination provides synergistic effects with enhanced efficacy compared to either component alone. Dual mechanism reduces resistance development likelihood and provides reliable protection throughout production."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens caused by multiple Eimeria species"
          ],
          dosage_and_administration: {
            poultry: ["6.25-12.5 g premix/kg feed (50-100 mg salinomycin + 50-100 mg nicarbazin/kg)", "Continuous administration from day 1 through withdrawal period"],
          },
          contraindications: "NOT for layers or breeder chickens (nicarbazin reduces egg production and hatchability); hypersensitivity to ionophores or nicarbazin; DO NOT use in turkeys (salinomycin toxicity).",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "Generally well tolerated. Excessive doses: reduced growth rate, nicarbazin mottled yolk, ionophore toxicity (ataxia, depression, mortality).",
          precautions: "CRITICAL: DO NOT feed to turkeys, ducks, or non-chicken species; ensure accurate mixing (prevent localized high concentrations causing ionophore toxicity); INCOMPATIBLE with tiamulin (may cause fatal toxicity); hot weather may increase nicarbazin effects; strict withdrawal period.",
          drug_interactions: "FATAL interaction with tiamulin, valnemulin, other pleuromutilins; avoid concurrent use with other ionophores.",
          storage: "Store at 15-25°C in sealed packaging. Protect from sunlight and moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
          ]
        },
        {
          id: "amchem-madunicar-plus",
          brand: "AMCHEM",
          product: "AMCHEM MADUNICAR PLUS",
          active_substance: "Maduramicin, Nicarbazin",
          composition: [
            "Maduramicin 1.5%", "Nicarbazin 16%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Orange to reddish-brown powder.",
          pharmacological_properties: {
            mechanism_of_action: "Maduramicin: Highly potent polyether ionophore with exceptional anticoccidial activity, disrupting ion transport across parasite membranes causing rapid death. Effective against all major pathogenic Eimeria species, including resistant strains., Nicarbazin: Provides complementary chemical anticoccidial activity with different mechanism, enhancing efficacy and spectrum.",
            spectrum: "Robust protection against all pathogenic Eimeria species in broiler chickens, particularly valuable against ionophore-resistant strains.",
            pharmacokinetics: "Neither component significantly absorbed; local intestinal action.",
            scientific_evidence: "Research shows maduramicin effective at lower inclusion rates than other ionophores due to high potency. Studies demonstrate excellent efficacy against Eimeria resistant to other anticoccidials."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens", "Effective against all pathogenic Eimeria species including resistant strains", "Particularly valuable in areas with ionophore resistance",
          ],
          dosage_and_administration: {
            poultry: ["5.0-6.25 g premix/kg feed (0.75-0.94 mg maduramicin + 80-100 mg nicarbazin/kg)", "Continuous administration from day 1 through withdrawal"],
          },
          contraindications: "NOT for turkeys or other poultry species (high toxicity risk); not for layers or breeding chickens; hypersensitivity.",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "Depression, reduced feed intake if overdosed; ionophore toxicity signs (leg weakness, ataxia, reluctance to move, mortality); nicarbazin egg effects (not relevant for broilers).",
          precautions: "CRITICAL: Maduramicin has narrow safety margin-accurate mixing essential; DO NOT exceed recommended inclusion rate; DO NOT feed to turkeys (highly toxic); incompatible with tiamulin and pleuromutilins; personnel use appropriate PPE; clean equipment thoroughly when changing feeds.",
          drug_interactions: "FATAL interaction with tiamulin, valnemulin, pleuromutilins; do not use with other ionophores; increased toxicity risk with macrolide antibiotics.",
          storage: "Store at 15-25°C in original sealed packaging. Protect from moisture and sunlight.",
          shelf_life: "24 months",
          veterinary_use_only: true,
          species: [
            "broiler",
          ]
        },
        {
          id: "amchem-naramix-plus",
          brand: "AMCHEM",
          product: "AMCHEM NARAMIX PLUS",
          active_substance: "Narasin, Nicarbazin",
          composition: [
            "Narasin 8%", "Nicarbazin 8%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Yellow-orange to brown powder.",
          pharmacological_properties: {
            mechanism_of_action: "Narasin: Polyether ionophore structurally similar to salinomycin with enhanced activity against certain Eimeria species. Disrupts ionic balance in coccidia through facilitated cation transport, leading to osmotic lysis, Nicarbazin: Synergistic chemical anticoccidial affecting mitochondrial function and parasite reproduction.",
            spectrum: "Broad-spectrum protection against all pathogenic Eimeria species in broilers and turkeys (where approved).",
            pharmacokinetics: "Minimal absorption; local intestinal activity.",
            scientific_evidence: "Research demonstrates superior narasin efficacy against E. tenella and E. necatrix compared to monensin. Studies show combination maintains efficacy in flocks with reduced sensitivity to single ionophores."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens and turkeys", "Effective against all major Eimeria species", "Suitable for rotation/shuttle programs",
          ],
          dosage_and_administration: {
            poultry: ["Broiler Chickens: 6.25-12.5 g premix/kg feed (50-100 mg narasin + 50-100 mg nicarbazin/kg)", "Turkeys (where approved): 6.25-8.75 g premix/kg feed (50-70 mg narasin + 50-70 mg nicarbazin/kg)"],
          },
          contraindications: "Not for laying hens or breeding birds; hypersensitivity; do not use in ducks or geese.",
          withdrawal_period: {
            poultry_meat: "",
             Broilers: "5 days",
             Turkeys: "5 days",
          },
          adverse_effects: "Generally well tolerated. Excessive doses: reduced growth/feed intake, ionophore toxicity (leg weakness, depression, mortality), nicarbazin mottled yolks.",
          precautions: "Ensure accurate mixing; incompatible with tiamulin (severe toxicity risk); not for horses/equines (fatal toxicity); monitor during hot weather.",
          drug_interactions: "Do not use with tiamulin, valnemulin, pleuromutilins; avoid concurrent other ionophores; potential interactions with macrolides.",
          storage: "Store at 15-25°C in sealed containers. Protect from moisture and sunlight.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "turkey",
          ]
        },
        {
          id: "amchem-ethonicar-mix",
          brand: "AMCHEM",
          product: "AMCHEM ETHONICAR MIX",
          active_substance: "Ethopabate, Nicarbazin",
          composition: [
            "Ethopabate 1.6%", "Nicarbazin 15%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Yellow to orange powder.",
          pharmacological_properties: {
            mechanism_of_action: "Combination of two chemical (non-ionophore) anticoccidials with complementary mechanisms, Ethopabate: Synthetic anticoccidial interfering with folate metabolism by competitive inhibition of dihydrofolate reductase, disrupting nucleic acid synthesis and preventing parasite multiplication. Particular activity against E. tenella and E. necatrix, Nicarbazin: Disrupts mitochondrial function and sporozoite development, providing broad-spectrum activity.",
            spectrum: "Reliable protection against coccidiosis without ionophore-associated toxicity risks. Effective across pathogenic Eimeria species.",
            pharmacokinetics: "Both components minimally absorbed; local intestinal action.",
            scientific_evidence: "Research demonstrates reliable coccidiosis protection without ionophore toxicity risks. Studies show excellent efficacy in conventional and organic production systems. Valuable in rotation programs alternating with ionophores for resistance management."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens", "Alternative to ionophore programs", "Component of rotation/shuttle programs", "Suitable for non-ionophore production systems",
          ],
          dosage_and_administration: {
            poultry: ["8.0-10.0 g premix/kg feed (12.8-16 mg ethopabate + 120-150 mg nicarbazin/kg)", "Continuous from day 1 through withdrawal"],
          },
          contraindications: "Not for laying hens or breeding chickens (nicarbazin reduces fertility/hatchability); not for turkeys (nicarbazin intolerance); hypersensitivity.",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "Well tolerated. Nicarbazin may reduce growth in hot weather; mottled yolks if used in layers; reduced egg production/hatchability in breeders.",
          precautions: "Not for breeding stock; performance may be affected during extreme heat; no ionophore-tiamulin interaction concerns (advantage in some situations); complete withdrawal before processing.",
          drug_interactions: "No significant interactions. Compatible with tiamulin and other antibiotics (unlike ionophores).",
          storage: "Store at 15-30°C in sealed containers. Protect from moisture and light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
          ]
        },
        {
          id: "amchem-decobate-premix",
          brand: "AMCHEM",
          product: "AMCHEM DECOBATE PREMIX",
          active_substance: "Decoquinate, Ethopabate",
          composition: [
            "Decoquinate 6%", "Ethopabate 1.6%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Light yellow to yellowish-brown powder.",
          pharmacological_properties: {
            mechanism_of_action: "Decoquinate: Quinolone derivative inhibiting mitochondrial electron transport system in coccidia, specifically targeting complex III (cytochrome bc1 complex), disrupting ATP production, causing energy depletion and parasite death. Particularly effective against early developmental stages. Ethopabate: Complements decoquinate through folate metabolism inhibition, providing enhanced efficacy against resistant strains and broader Eimeria coverage.",
            spectrum: "Effective against multiple Eimeria species with maintained efficacy against ionophore-resistant populations.",
            pharmacokinetics: "Both components poorly absorbed; local intestinal action.",
            scientific_evidence: "Studies demonstrate decoquinate maintains efficacy against Eimeria strains resistant to ionophores, making combination valuable in rotation programs. Research shows excellent safety margins and no negative interactions with commonly used feed medications."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens", "Alternative for ionophore-resistant populations", "Component of anticoccidial rotation programs", "Suitable for antibiotic-free production systems"
          ],
          dosage_and_administration: {
            poultry: ["4.0-5.0 g premix/kg feed (24-30 mg decoquinate + 6.4-8 mg ethopabate/kg)", "Continuous from first day through withdrawal"],
          },
          contraindications: "Not for laying hens; hypersensitivity to quinolone derivatives or ethopabate.",
          withdrawal_period: {
            poultry_meat: "0 days",
          },
          adverse_effects: "Excellent safety profile. No significant adverse effects at recommended dosages.",
          precautions: "Observe proper mixing; no special dietary restrictions or incompatibilities; safe with most antibiotics and medications.",
          drug_interactions: "No significant interactions. Compatible with tiamulin and other antibiotics.",
          storage: "Store at 15-30°C in sealed containers, protected from moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler"
          ]
        },
        {
          id: "amchem-diclamycin-premix",
          brand: "AMCHEM",
          product: "AMCHEM DICLAMYCIN PREMIX",
          active_substance: "Diclazuril ,Maduramicin",
          composition: [
            "Diclazuril 1%", "Maduramicin 1%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "White to beige with orange specks. Homogeneous premix.",
          pharmacological_properties: {
            mechanism_of_action: "Diclazuril: Triazinetrione derivative inhibiting mitochondrial respiration in coccidia by blocking electron transport chain. Demonstrates excellent activity against all Eimeria development stages, particularly effective against sexual stages. Maduramicin: Potent ionophore activity complementing diclazuril mechanism for comprehensive protection.",
            spectrum: "All pathogenic Eimeria species in broilers with synergistic efficacy against resistant strains.",
            pharmacokinetics: "Neither component significantly absorbed; local intestinal action.",
            scientific_evidence: "Nature Communications research shows combination offers synergistic effects with enhanced efficacy against resistant strains compared to either agent alone."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens", "Effective against all pathogenic Eimeria species", "Particularly valuable against resistant populations"
          ],
          dosage_and_administration: {
            poultry: ["10 g premix/kg feed (1 mg diclazuril + 1 mg maduramicin/kg)", "Continuous administration from day 1"],
          },
          contraindications: "DO NOT use in turkeys (maduramicin toxicity); not for layers/breeders; hypersensitivity.",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "See maduramicin precautions. Toxicity signs: depression, reduced intake, leg weakness, ataxia, mortality.",
          precautions: "CRITICAL: DO NOT use in turkeys; INCOMPATIBLE with tiamulin; accurate mixing essential (maduramicin narrow safety margin); trained personnel only.",
          drug_interactions: "FATAL with tiamulin/pleuromutilins; avoid other ionophores; increased toxicity with macrolides.",
          storage: "Store at 15-25°C in sealed packaging. Protect from moisture/sunlight.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
          ]
        },
        {
          id: "amchem-diclamix-plus",
          brand: "AMCHEM",
          product: "AMCHEM DICLAMIX PLUS",
          active_substance: "Diclazuril, Salinomycin",
          composition: [
            "Diclazuril 1%", "Salinomycin 11%", "Carrier: Pharmaceutical-grade excipients", 
          ],
          pack_size: "25 kg bags",
          description: "White to cream with yellow specks.",
          pharmacological_properties: {
            mechanism_of_action: "Diclazuril: Mitochondrial electron transport inhibition, particularly effective against sexual stages. Salinomycin: Ionophore disrupting ion gradients, rapid action against early stages.",
            spectrum: "Comprehensive coverage of all Eimeria species with complementary stage-specific activity.",
            pharmacokinetics: "Diclazuril and salinomycin in AMCHEM DICLAMIX PLUS are both minimally absorbed from the gastrointestinal tract, acting primarily within the intestinal lumen where coccidia develop. Diclazuril shows very low systemic absorption and is excreted largely unchanged in the feces. Salinomycin has limited absorption, with the absorbed fraction metabolized in the liver and eliminated via bile. Both components maintain effective luminal concentrations for continuous anticoccidial activity, with negligible tissue residues when used as directed.",
            scientific_evidence: "Studies demonstrate enhanced efficacy through different mechanism/stage targeting, reducing breakthrough infections."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens with robust protection throughout production cycle."
          ],
          dosage_and_administration: {
            poultry: ["9.0-10.0 g premix/kg feed (0.9-1.0 mg diclazuril + 110 mg salinomycin/kg)"],
          },
          contraindications: "NOT for turkeys, layers, breeders; hypersensitivity.",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "",
          precautions: "INCOMPATIBLE with tiamulin; accurate mixing required; not for non-chicken species.",
          drug_interactions: "FATAL with tiamulin/pleuromutilins.",
          storage: "Store at 15-25°C sealed. Protect from moisture/light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
          ]
        },
        {
          id: "amchem-decosal-premix",
          brand: "AMCHEM",
          product: "AMCHEM DECOSAL PREMIX",
          active_substance: "Decoquinate, Salinomycin",
          composition: [
            "Decoquinate 4%", "Salinomycin 9%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Light yellow with orange tint.",
          pharmacological_properties: {
            mechanism_of_action: "Decoquinate: Mitochondrial electron transport inhibition (complex III). Salinomycin: Ionophore ion gradient disruption.",
            spectrum: "Broad Eimeria coverage combining quinolone and ionophore mechanisms.",
            pharmacokinetics: "Decoquinate and salinomycin in AMCHEM DECOSAL PREMIX exhibit minimal systemic absorption, allowing them to act primarily within the intestinal lumen where Eimeria species initiate infection. Decoquinate is poorly absorbed and remains highly localized in the gut, with most of the administered dose excreted unchanged in feces. Salinomycin is also minimally absorbed; the small absorbed fraction undergoes hepatic metabolism and is eliminated via bile, maintaining low tissue accumulation. Both compounds provide sustained intestinal concentrations that inhibit early- and mid-stage coccidial development. Their limited systemic exposure contributes to a wide safety margin and negligible residues when used as recommended.",
            scientific_evidence: "Scientific studies demonstrate that combining decoquinate and salinomycin provides enhanced anticoccidial protection through complementary mechanisms: decoquinate inhibits mitochondrial electron transport in early Eimeria stages, while salinomycin disrupts ionic gradients critical for parasite survival. Research shows this dual-action approach significantly reduces oocyst shedding, intestinal lesion scores, and mortality in broiler chickens. Experimental trials confirm strong efficacy against multiple pathogenic Eimeria species, including strains showing reduced sensitivity to single-agent ionophores. Publications also highlight the combination’s value in rotation programs, maintaining performance metrics such as weight gain and feed conversion. Overall, evidence supports AMCHEM DECOSAL PREMIX as a reliable, broad-spectrum coccidiosis preventive."
          },
          indications: [
            "Coccidiosis prevention in broilers with dual-mechanism protection."
          ],
          dosage_and_administration: {
            poultry: ["5.0-6.0 g premix/kg feed (20-24 mg decoquinate + 45-54 mg salinomycin/kg)"],
          },
          contraindications: "NOT for turkeys, layers, breeders.",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "AMCHEM DECOSAL PREMIX is generally well tolerated when included at recommended levels, with adverse effects being rare under proper use. Mild reductions in feed intake or growth may occur if overdosed or improperly mixed, mainly due to salinomycin’s ionophore activity. Signs of excessive exposure can include lethargy, reduced weight gain, ataxia, or muscular weakness, reflecting typical ionophore-related toxicity. These effects are uncommon with correct feed uniformity and formulation. No significant adverse effects have been associated with decoquinate due to its low absorption and wide safety margin. Ensuring accurate mixing and avoiding contraindicated interactions helps maintain excellent overall safety.",
          precautions: "INCOMPATIBLE with tiamulin; accurate mixing; not for non-chicken species.",
          drug_interactions: "FATAL with tiamulin/pleuromutilins.",
          storage: "15-25°C sealed. Protect from moisture/light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
          ]
        },
        {
          id: "amchem-moniracox-premix",
          brand: "AMCHEM",
          product: "AMCHEM MONIRACOX PREMIX",
          active_substance: "Monensin, Nicarbazin",
          composition: [
            "Monensin 8%", "Nicarbazin 8%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Yellow-brown powder.",
          pharmacological_properties: {
            mechanism_of_action: "Monensin: Polyether ionophore facilitating Na⁺/H⁺ exchange across membranes, disrupting ionic balance. Nicarbazin: Chemical anticoccidial with mitochondrial/reproductive effects.",
            spectrum: "Effective against major Eimeria species in broilers and cattle (monensin).",
            pharmacokinetics: "Monensin is partially absorbed from the gastrointestinal tract, metabolized in the liver, and excreted primarily via bile, maintaining effective luminal concentrations against coccidia. Nicarbazin dissociates into DNC and HDP; DNC is poorly absorbed and largely eliminated in feces, while HDP is absorbed, metabolized, and excreted in urine. Together, the combination delivers localized intestinal action with limited systemic exposure and minimal residue development when used according to recommended inclusion levels.",
            scientific_evidence: "Recent Q1 poultry research consistently demonstrates that combining monensin and nicarbazin provides superior control of Eimeria infections compared with single-agent ionophores. Studies show significantly reduced lesion scores, improved weight gain, and enhanced feed efficiency in broilers under both challenge and field conditions, confirming strong efficacy against multiple pathogenic Eimeria species."
          },
          indications: [
            "Coccidiosis prevention in broilers; monensin also used in cattle for coccidiosis and feed efficiency."
          ],
          dosage_and_administration: {
            poultry: ["Broilers: 6.25-12.5 g premix/kg feed (50-100 mg monensin + 50-100 mg nicarbazin/kg)",],
            cattle: ["100-400 mg monensin/animal/day"],
          },
          contraindications: "NOT for layers, breeders, horses (monensin highly toxic to equines).",
          withdrawal_period: {
            poultry_meat: "5 days",
            cattle_meat: "0 days",
          },
          adverse_effects: "At recommended dietary concentrations, Monensin–Nicarbazin combinations are generally safe; however, overdosing or uneven mixing may cause reduced feed intake, lethargy, or growth depression. High exposures to monensin may lead to muscle weakness, ataxia, or ionophore-related toxicity, while excessive nicarbazin can increase heat stress susceptibility in warm environments. Interactions with incompatible antibiotics may enhance toxicity. When properly formulated and fed under standard conditions, adverse effects remain infrequent and mild.",
          precautions: "CRITICAL: FATAL to horses; INCOMPATIBLE with tiamulin; accurate mixing essential.",
          drug_interactions: "FATAL with tiamulin/pleuromutilins and in horses.",
          storage: "15-25°C sealed. Protect from moisture/light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "cattle",
          ]
        },
        {
          id: "amchem-clopimix-premix",
          brand: "AMCHEM",
          product: "AMCHEM CLOPIMIX PREMIX",
          active_substance: "Clopidol",
          composition: [
            "Clopidol 12.5% or 25%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "White to off-white powder.",
          pharmacological_properties: {
            mechanism_of_action: "Clopidol is a pyridinol derivative interfering with carbohydrate metabolism in coccidia, particularly affecting glycolysis and respiratory enzymes, leading to energy depletion.",
            spectrum: "Effective against E. tenella, E. acervulina, E. maxima, E. necatrix, E. brunetti.",
            pharmacokinetics: "Minimal absorption; local intestinal action.",
            scientific_evidence: "Long-established anticoccidial with proven efficacy. Studies show good tolerance and safety. Often used in rotation with ionophores for resistance management."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens and replacement pullets."
          ],
          dosage_and_administration: {
            poultry: ["Broiler Chicken: 125 mg clopidol/kg feed (10 g premix/kg feed for 12.5% product). Continuous administration",],
          },
          contraindications: "Not for laying hens; hypersensitivity.",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "Well tolerated. No significant adverse effects at recommended doses.",
          precautions: "No ionophore-tiamulin interaction concerns; suitable for rotation programs; ensure proper mixing.",
          drug_interactions: "No significant interactions. Compatible with most antibiotics.",
          storage: "15-25°C sealed. Protect from moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
          ]
        },
        {
          id: "amchem-halocox",
          brand: "AMCHEM",
          product: "AMCHEM HALOCOX",
          active_substance: "Halofuginone Hydrobromide",
          composition: [
            "Halofuginone 0.6%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Light yellow to yellow powder.",
          pharmacological_properties: {
            mechanism_of_action: "Halofuginone is a quinazolinone alkaloid (febrifugine derivative) inhibiting protein synthesis in coccidia by interfering with prolyl-tRNA synthetase, preventing proline incorporation into proteins essential for parasite development.",
            spectrum: "Highly potent against E. tenella and E. acervulina; moderate activity against other species. Extremely narrow safety margin requires precise dosing.",
            pharmacokinetics: "Rapidly absorbed; distributed to tissues; metabolized and excreted. Narrow therapeutic index.",
            scientific_evidence: "Research demonstrates high potency requiring low inclusion rates. Studies emphasize critical importance of accurate mixing due to narrow safety margin."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens, particularly E. tenella and E. acervulina."
          ],
          dosage_and_administration: {
            poultry: ["Broiler Chickens: 3 mg halofuginone/kg feed (0.5 g premix/kg feed for 0.6% product). CRITICAL: Exact dosing essential; narrow safety margin",],
          },
          contraindications: "Not for layers, breeders, turkeys; hypersensitivity.",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "Toxicity signs with overdose: reduced growth, feed intake, leg weakness, mortality. Very narrow safety margin (toxicity at 2× normal dose).",
          precautions: "CRITICAL: Most narrow safety margin of all anticoccidials; requires extremely accurate mixing; trained personnel only; regular mixer calibration; homogeneity testing essential; not for use with automated proportioner systems prone to variation.",
          drug_interactions: "Compatible with most antibiotics but observe all safety precautions.",
          storage: "15-25°C sealed with extreme care. Protect from moisture.",
          shelf_life: "24 months For Veterinary Use Only - EXPERT USE REQUIRED",
          veterinary_use_only: true,
          species: [
            "broiler",
          ]
        },
        {
          id: "amchem-decomix-premix",
          brand: "AMCHEM",
          product: "AMCHEM DECOMIX PREMIX",
          active_substance: "Decoquinate",
          composition: [
            "Decoquinate 6%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Light yellow powder.",
          pharmacological_properties: {
            mechanism_of_action: "Quinolone derivative inhibiting mitochondrial electron transport (complex III/cytochrome bc1), disrupting ATP production and causing energy depletion in coccidia.",
            spectrum: "Effective against major Eimeria species, particularly active against early developmental stages.",
            pharmacokinetics: "Poorly absorbed; local intestinal action.",
            scientific_evidence: "Studies show maintained efficacy against ionophore-resistant Eimeria. Research demonstrates excellent safety margins and broad compatibility with feed medications."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens and cattle."
          ],
          dosage_and_administration: {
            poultry: ["Broiler Chickens: 27.2 mg decoquinate/kg feed (approx. 4.5 g premix/kg)",],
            cattle: [
              "0.5 mg decoquinate/kg BW daily"
            ],
          },
          contraindications: "Not for laying hens; hypersensitivity.",
          withdrawal_period: {
            poultry_meat: "0 days",
            cattle_meat: "0 days",
          },
          adverse_effects: "Excellent safety. No significant adverse effects.",
          precautions: "No special restrictions; compatible with most medications; no ionophore-tiamulin concerns.",
          drug_interactions: "Compatible with tiamulin and other antibiotics.",
          storage: "15-30°C sealed. Protect from moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "cattle",
          ]
        },
        {
          id: "amchem-robenidine-premix",
          brand: "AMCHEM",
          product: "AMCHEM ROBENIDINE PREMIX",
          active_substance: "Robenidine Hydrochloride",
          composition: [
            "Robenidine HCl 6.6% or 10%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "White to slightly pink powder.",
          pharmacological_properties: {
            mechanism_of_action: "Guanidine derivative interfering with mitochondrial respiration in coccidia, inhibiting electron transport and oxidative phosphorylation.",
            spectrum: "Effective against E. tenella, E. acervulina, E. maxima, E. necatrix, E. brunetti.",
            pharmacokinetics: "Minimal absorption; local action.",
            scientific_evidence: "Established anticoccidial with long history of use. Research shows good efficacy profile and acceptable safety. Useful in rotation programs."
          },
          indications: [
            "Prevention of coccidiosis in broiler chickens."
          ],
          dosage_and_administration: {
            poultry: ["Broiler Chickens: 33 mg robenidine/kg feed (5 g premix/kg for 6.6% product; 3.3 g/kg for 10% product)",],
          },
          contraindications: "Not for laying hens; hypersensitivity.",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "Generally well tolerated. High doses may cause reduced growth.",
          precautions: "No ionophore-tiamulin concerns; compatible with rotation programs; ensure proper mixing.",
          drug_interactions: "Compatible with most antibiotics.",
          storage: "15-25°C sealed. Protect from light and moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
          ]
        },
        {
          id: "amchem-zoalene-premix",
          brand: "AMCHEM",
          product: "AMCHEM ZOALENE PREMIX",
          active_substance: "Zoalene (Dinitolmide, 3,5-Dinitro-o-toluamide)",
          composition: [
            "Zoalene 25%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Yellow to orange powder.",
          pharmacological_properties: {
            mechanism_of_action: "Nitrobenzamide derivative inhibiting carbohydrate metabolism in coccidia, particularly affecting thiamine metabolism and respiratory enzymes.",
            spectrum: "Effective against E. tenella, E. acervulina, E. maxima, E. necatrix.",
            pharmacokinetics: "Limited absorption; primarily local action.",
            scientific_evidence: "Long-established anticoccidial (since 1960s). Studies show reliable efficacy and good safety profile. Compatible with other medications."
          },
          indications: [
            "Prevention of coccidiosis in poultry (broilers, replacement pullets, turkeys)."
          ],
          dosage_and_administration: {
            poultry: ["Broilers/Pullets: 125 mg zoalene/kg feed (5 g premix/kg)", "Turkeys: 125 mg zoalene/kg feed",],
          },
          contraindications: "Not for laying hens; hypersensitivity.",
          withdrawal_period: {
            poultry_meat: "5 days",
          },
          adverse_effects: "Well tolerated. No significant effects at recommended doses.",
          precautions: "No ionophore-related concerns; compatible with most antibiotics; suitable for rotation; ensure proper mixing.",
          drug_interactions: "Compatible with tiamulin and other antibiotics.",
          storage: "15-30°C sealed. Protect from light and moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "turkey"
          ]
        },
      ]
    },
    {
      slug: "vitamin-and-mineral-supplements",
      name: "Vitamin & Mineral Supplements",
      image: "/vitamin-and-minerals.jpg",
      items: [
        {
        id: "amvit-c-stable",
        brand: "AMCHEM",
        product: "AMVIT-C STABLE",
        active_substance: "Stabilized Vitamin C (L-Ascorbate 2-Monophosphate)",
        composition: [
          "Vitamin C 35% (as L-ascorbate 2-monophosphate)", "Carrier: Pharmaceutical-grade excipients", "Carrier: Pharmaceutical-grade excipients",
        ],
        pack_size: "25 kg bags",
        description: "White to off-white powder. Highly stable vitamin C form.",
        pharmacological_properties: {
          mechanism_of_action: "Vitamin C (ascorbic acid) is essential water-soluble vitamin with multiple biological functions: Antioxidant activity (electron donor, free radical scavenging); Collagen synthesis cofactor (prolyl and lysyl hydroxylase); Immune function support (leukocyte function, antibody production); Stress response modulation (adrenal cortex function, cortisol regulation); Iron absorption enhancement L-ascorbate 2-monophosphate is phosphorylated derivative demonstrating superior stability compared to ascorbic acid or ascorbate salts.",
          spectrum: "AMVIT-C STABLE, containing stabilized Vitamin C (L-Ascorbate-2-Monophosphate), provides broad antioxidant and immunomodulatory benefits across poultry and livestock species. It supports resistance to stress, enhances immune cell function, improves vaccine response, and aids collagen synthesis. Its stability ensures consistent activity in feed, effectively countering heat stress, oxidative damage, and performance-limiting conditions.",
          pharmacokinetics: "Water-soluble; absorbed from small intestine; distributed to tissues; excess excreted in urine. Phosphate ester cleaved in vivo releasing active ascorbic acid.",
          scientific_evidence: "Nature research demonstrates this form resists oxidation during feed pelleting (temperatures to 90°C) and storage, maintaining 85-95% potency over 6 months versus 20-40% for standard ascorbic acid. Studies show vitamin C supplementation during stress periods (heat stress, disease challenge, vaccination, transport) significantly improves immune response, reduces cortisol levels, and maintains production performance. Research indicates enhanced heterophil function, antibody production, and disease resistance. In poultry, supplementation improves eggshell quality, reduces production drops during stress, and enhances heat tolerance. In swine, reduces weaning stress, improves growth performance, and enhances carcass quality."
        },
        indications: [
          "Prevention of vitamin C deficiency", "Stress period support (heat, disease, transport, vaccination)", "Immune function enhancement", "Eggshell quality improvement in layers", "Collagen synthesis support", "Antioxidant supplementation"
        ],
        dosage_and_administration: {
          poultry: ["Routine: 0.2-0.5 g premix/kg feed (70-175 mg vitamin C/kg)", "Stress periods: 0.5-1.0 g premix/kg (175-350 mg vitamin C/kg)", "Heat stress: 0.75-1.5 g premix/kg",],
          swine: ["Growing pigs: 0.3-0.5 g premix/kg feed", "Stress periods: 0.5-1.0 g premix/kg", "Breeding stock: 0.2-0.4 g premix/kg"],
          cattle: ["0.2-0.5 g premix/kg concentrate",],
          aquaculture: ["Fish/shrimp: 0.5-1.5 g premix/kg feed (essential—cannot synthesize vitamin C)"]
        },
        contraindications: "None known. Water-soluble vitamin with minimal toxicity risk.",
        withdrawal_period: {
          poultry_meat: "0 days",
          swine_meat: "0 days",
          cattle_meat: "0 days",
          eggs: "0 days",
          aquaculture: "0 days"
        },
        adverse_effects: "No adverse effects at recommended doses. Excessive supplementation (>10\u00d7 recommended) may cause diarrhea due to osmotic effects.",
        precautions: "Store in cool, dry conditions to maximize stability; compatible with standard feed ingredients and medications.",
        drug_interactions: "AMVIT-C STABLE shows minimal drug interactions, but high-dose vitamin C may enhance iron absorption, reduce stability of some antioxidants, or alter antibiotic efficacy. Avoid mixing with strongly alkaline compounds to maintain potency.",
        storage: "15-25°C sealed. Protect from moisture and direct sunlight.",
        shelf_life: "24 months For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "broiler",
          "layer",
          "swine",
          "cattle",
          "goats-and-sheep", "rabbits","aquaculture"
        ]
      },
      {
        id: "amchem-ormin-g-organic-trace-minerals",
        brand: "AMCHEM",
        product: "AMCHEM ORMIN-G (Organic Trace Minerals)",
        active_substance: "Chelated/Complexed Trace Minerals",
        composition: [
          "Iron (amino acid chelate)", "Zinc (amino acid chelate)", "Copper (amino acid chelate)", "Manganese (amino acid chelate)", "Selenium (organic selenium, selenomethionine)", "Cobalt (organic complex)", "Carrier: Pharmaceutical-grade excipients",
        ],
        pack_size: "25 kg bags",
        description: "Light brown to tan homogeneous powder.",
        pharmacological_properties: {
          mechanism_of_action: "Organic trace minerals are chelated or complexed with amino acids, peptides, or organic acids, enhancing bioavailability compared to inorganic salts. Chelation protects minerals from antagonistic interactions with phytate, fiber, and other dietary components throughout gastrointestinal tract pH ranges. Amino acid-mineral complexes utilize amino acid transporters for enhanced intestinal absorption.",
          spectrum: "AMCHEM ORMIN-G, composed of chelated and complexed trace minerals, provides a broad spectrum of nutritional and metabolic support in poultry and livestock. Its organic mineral forms enhance immune competence, skeletal development, enzyme activation, antioxidant defense, and overall productivity. The product effectively addresses mineral deficiency, stress-related performance drops, and improved bioavailability compared with inorganic salts.",
          pharmacokinetics: "Chelated trace minerals in AMCHEM ORMIN-G exhibit superior absorption due to their stable organic complexes, which protect them from antagonistic reactions within the gut. They are efficiently transported across intestinal membranes, incorporated into metabolic enzymes, and excreted more slowly than inorganic minerals. This enhances retention, tissue deposition, and functional bioavailability in target species.",
          scientific_evidence: "Nature Communications studies show organic trace minerals: Reduce antagonistic interactions with phytate and fiber Remain stable through wider pH ranges in GI tract Enhanced transport across intestinal epithelium via amino acid transporters Improved storage in tissues (liver, bone) Superior animal performance outcomes Research indicates organic mineral supplementation improves immune function, reproductive performance, hoof/claw integrity, feather quality, eggshell strength, and production efficiency."
        },
        indications: [
          "Provision of essential trace minerals in highly bioavailable form", "Immune function and disease resistance support", "Reproductive performance enhancement", "Hoof/claw and feather quality improvement", "Enzyme system and metabolic function support", "Environmental mineral excretion reduction"
        ],
        dosage_and_administration: {
          poultry: [
            "0.5-2.0 kg/ton feed"
          ],
          swine: [
            "0.5-2.0 kg/ton feed"
          ],
          cattle: [
            "1.0-3.0 kg/ton feed Adjust based on mineral concentrations and dietary requirements."
          ],
        },
        contraindications: "Do not exceed maximum permitted mineral levels; monitor total copper (avoid toxicity in sheep).",
        withdrawal_period: {
          poultry_meat: "0 days",
          swine_meat: "0 days",
          cattle_meat: "0 days",
        },
        adverse_effects: "No adverse effects when used at recommended levels following species-specific requirements.",
        precautions: "Balance total diet minerals from all sources; copper toxicity risk in sheep (use species-appropriate formulations); selenium toxicity possible with excessive supplementation.",
        drug_interactions: "Chelated minerals reduce negative interactions commonly seen with inorganic salts, but excessive supplementation may compete with other minerals or affect antibiotic stability. Avoid simultaneous overuse of high-calcium or high-phytate ingredients that hinder absorption.",
        storage: "15-30°C sealed. Protect from moisture.",
        shelf_life: "24 months For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "poultry",
          "swine",
          "cattle",
        ]
      },
      {
        id: "amchem-trace-min-inorganic-trace-minerals",
        brand: "AMCHEM",
        product: "AMCHEM TRACE MIN (Inorganic Trace Minerals)",
        active_substance: "Inorganic Trace Mineral Salts",
        composition: [
          "Iron sulfate or iron oxide", "Zinc sulfate or zinc oxide", "Copper sulfate", "Manganese sulfate or manganese oxide", "Iodine (potassium iodide or calcium iodate)", "Cobalt sulfate or cobalt carbonate", "Selenium (sodium selenite or sodium selenate)", "Carrier: Pharmaceutical-grade excipients",
        ],
        pack_size: "25 kg bags",
        description: "Gray to reddish-brown powder (varies with mineral composition).",
        pharmacological_properties: {
          mechanism_of_action: "Organic trace minerals are chelated or complexed with amino acids, peptides, or organic acids, enhancing bioavailability compared to inorganic salts. Chelation protects minerals from antagonistic interactions with phytate, fiber, and other dietary components throughout gastrointestinal tract pH ranges. Amino acid-mineral complexes utilize amino acid transporters for enhanced intestinal absorption. Mineral Functions: Iron: Hemoglobin/myoglobin synthesis, oxygen transport, enzyme cofactor (cytochromes, catalase, peroxidase) Zinc: Protein synthesis, immune function, wound healing, enzyme cofactor (>300 enzymes including carbonic anhydrase, alkaline phosphatase, DNA/RNA polymerases), Copper: Iron metabolism, connective tissue formation (lysyl oxidase), enzyme cofactor (cytochrome oxidase, superoxide dismutase), pigmentation, immune function, Manganese: Bone formation, carbohydrate/lipid metabolism, antioxidant enzyme cofactor (Mn-SOD), reproduction, Selenium: Antioxidant enzyme cofactor (glutathione peroxidase, thioredoxin reductase), immune function, thyroid hormone metabolism, Cobalt: Vitamin B12 synthesis (ruminants), enzyme cofactor",
          spectrum: "AMCHEM TRACE MIN, composed of inorganic trace mineral salts, provides essential micronutrients that support growth, immune function, enzyme activity, and metabolic performance in poultry and livestock. These minerals contribute to bone strength, feathering, antioxidant protection, and reproductive efficiency. The product helps prevent common deficiency-related disorders and supports overall health under varied production conditions.",
          pharmacokinetics: "Inorganic trace mineral salts dissociate in the gastrointestinal tract, releasing free ions that are absorbed through standard transport pathways. Their absorption is moderate and can be influenced by dietary antagonists. Unabsorbed minerals are excreted via feces. Absorbed fractions are distributed to tissues, integrated into enzymes and proteins, and eliminated primarily through bile.",
          scientific_evidence: "Scientific Reports research demonstrates adequate trace mineral nutrition is critical for optimal animal health and productivity across all species and production stages."
        },
        indications: [
          "Prevention of trace mineral deficiencies", "Growth and production support", "Immune function maintenance", "Reproductive performance support", "Deficiency-related disorder prevention (anemia, poor bone development, reduced fertility)"
        ],
        dosage_and_administration: {
          poultry: ["Iron: 40-80 mg/kg | Zinc: 50-100 mg/kg | Copper: 8-20 mg/kg | Manganese: 60-120 mg/kg | Iodine: 0.3-1.0 mg/kg | Selenium: 0.15-0.3 mg/kg"],
          swine: ["Iron: 80-125 mg/kg | Zinc: 75-150 mg/kg | Copper: 6-15 mg/kg (starter: up to 125 mg/kg where permitted) | Manganese: 20-40 mg/kg | Iodine: 0.14-0.5 mg/kg | Selenium: 0.15-0.3 mg/kg"],
          cattle: ["Species-specific requirements based on class and production stage"],
        },
        contraindications: "Do not exceed maximum permitted levels; copper highly toxic to sheep.",
        withdrawal_period: {
          poultry_meat: "0 days",
          swine_meat: "0 days",
          cattle_meat: "0 days",
        },
        adverse_effects: "Toxicity if maximum levels exceeded:",
        precautions: "Calculate total mineral intake from all sources; caution with copper in swine diets and any use near sheep; selenium has narrow margin between requirement and toxicity; store separately from reactive ingredients.",
        drug_interactions: "Inorganic minerals may interact with antibiotics, vitamins, and other minerals, reducing their absorption or stability. High calcium, phytates, or certain medications can further decrease bioavailability. Proper formulation helps minimize antagonistic interactions.",
        storage: "15-30°C dry conditions. Some forms hygroscopic-protect from moisture.",
        shelf_life: "24 months For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "poultry",
          "swine",
          "cattle"
        ]
      },
      {
        id: "amchem-dcp-dicalcium-phosphate",
        brand: "AMCHEM",
        product: "AMCHEM DCP (Dicalcium Phosphate)",
        active_substance: "Dicalcium Phosphate (CaHPO₄)",
        composition: ["Phosphorus: 18%", "Calcium: 23-24%", "Carrier: None (pure mineral product)"],
        pack_size: "25 kg bags",
        description: "White to grayish-white granular or powder. Free-flowing mineral supplement.",
        pharmacological_properties: {
          mechanism_of_action: "Calcium: Bone and eggshell mineralization (99% of body calcium in skeleton), Muscle contraction and nerve transmission, Blood clotting cascade, Cellular signaling and enzyme activation, Membrane stability and permeability, Phosphorus: Bone mineralization (80% of body phosphorus in skeleton), Energy metabolism (ATP, phosphocreatine), Nucleic acid structure (DNA, RNA), Phospholipid membrane components, Enzyme activation and metabolic regulation",
          spectrum: "AMCHEM DCP provides essential phosphorus and calcium needed for skeletal development, eggshell formation, metabolic energy processes, and optimal growth in poultry and livestock. It corrects dietary mineral deficiencies, supports muscle function, improves feed efficiency, and enhances reproductive performance. Its balanced mineral profile makes it suitable for routine supplementation across diverse production systems.",
          pharmacokinetics: "Dicalcium phosphate dissolves in the digestive tract, releasing calcium and phosphate ions for absorption primarily in the small intestine. Uptake is regulated by vitamin D levels and physiological needs. Absorbed minerals enter systemic circulation, supporting bone mineralization and metabolic functions. Excess unabsorbed mineral is excreted through feces, maintaining mineral balance.",
          scientific_evidence: "Studies show adequate calcium and phosphorus nutrition is critical for optimal bone development, prevention of leg disorders, skeletal integrity maintenance, eggshell quality, and prevention of rickets/osteomalacia."
        },
        indications: [
          "Bioavailable calcium and phosphorus provision", "Skeletal development in growing animals", "Bone health maintenance in production animals", "Eggshell quality enhancement in layers", "Mineral deficiency disorder prevention"
        ],
        dosage_and_administration: {
          poultry: ["Broilers: 0.5-1.5% of feed (5-15 kg/ton)", "Layers: 1.0-2.0% of feed (10-20 kg/ton)", "Turkeys: 0.5-2.0% (age-dependent)"],
          swine: ["All classes: 0.5-2.0% of feed (5-20 kg/ton)"],
          cattle: ["Typically 0.3-1.0% of concentrate Adjust based on total dietary Ca and P from all sources."],
        },
        contraindications: "None when used to meet nutritional requirements.",
        withdrawal_period: {
          poultry_meat: "0 days",
          swine_meat: "0 days",
          cattle_meat: "0 days",
          eggs: "0 days"
        },
        adverse_effects: "Excessive phosphorus may reduce calcium absorption; imbalanced Ca:P ratios cause mineral metabolism disorders; excess phosphorus contributes environmental pollution.",
        precautions: "Calculate total dietary Ca and P from all ingredients; maintain appropriate Ca:P ratios (1:1 to 2:1); ensure adequate vitamin D\u2083; consider environmental phosphorus impact; use phytase enzymes to maximize phytate phosphorus utilization.",
        drug_interactions: "DCP may reduce absorption of certain antibiotics, such as tetracyclines and fluoroquinolones, through chelation. High dietary calcium can also interfere with trace mineral uptake. Proper ration formulation minimizes these interactions.",
        storage: "Store dry. Stable but protect from moisture (prevents caking).",
        shelf_life: "36 months For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "broiler",
          "layer",
          "turkey",
          "swine",
          "cattle",
        ]
      },
      {
        id: "amchem-mcp-monocalcium-phosphate",
        brand: "AMCHEM",
        product: "AMCHEM MCP (Monocalcium Phosphate)",
        active_substance: "Monocalcium Phosphate [Ca(H₂PO₄)₂]",
        composition: ["Phosphorus: 22.3%", "Calcium: 16-17%", "Carrier: None (pure mineral product)"],
        pack_size: "25 kg bags",
        description: "White to light gray granular powder.",
        pharmacological_properties: {
          mechanism_of_action: "Nature Communications demonstrates phosphorus digestibility 80-90% across poultry and swine, making MCP one of most bioavailable inorganic phosphate sources. Lower calcium content allows precise dietary Ca:P ratio management, particularly important in high-producing layers, young animals requiring precise balance, and diets with multiple calcium sources.",
          spectrum: "AMCHEM MCP supplies highly available phosphorus and calcium essential for bone formation, eggshell quality, muscular function, and energy metabolism in poultry and livestock. Its greater solubility supports efficient nutrient utilization, prevents mineral deficiencies, and enhances growth and feed performance. MCP is widely used in balanced rations to maintain optimal skeletal strength and metabolic health.",
          pharmacokinetics: "Monocalcium phosphate dissolves readily in the gastrointestinal tract, releasing calcium and phosphate ions for absorption mainly in the small intestine. Uptake is influenced by vitamin D status and dietary balance. Absorbed minerals circulate to support bone mineralization, cellular metabolism, and physiological functions. Unabsorbed minerals are excreted through feces, ensuring regulated mineral homeostasis.",
          scientific_evidence: "Studies show phosphorus from MCP efficiently absorbed in small intestine and incorporated into bone mineral matrix, supporting skeletal development and strength."
        },
        indications: [
          "High-phosphorus, moderate-calcium supplementation", "Precise Ca:P ratio management", "Skeletal development support", "Phosphorus deficiency prevention", "Diets requiring phosphorus fortification without excessive calcium"
        ],
        dosage_and_administration: {
          poultry: ["Broilers: 0.3-1.0% of feed (3-10 kg/ton)", "Layers: 0.5-1.5% of feed (5-15 kg/ton)"],
          swine: ["All classes: 0.3-1.5% of feed (3-15 kg/ton)"],
        },
        contraindications: "None when used appropriately.",
        withdrawal_period: {
          poultry_meat: "0 days",
          swine_meat: "0 days",
        },
        adverse_effects: "Improper Ca:P ratios impair mineral metabolism; excessive phosphorus reduces calcium absorption and environmental pollution.",
        precautions: "Balance with calcium sources for proper Ca:P ratio; ensure adequate vitamin D\u2083; consider total phosphorus from all sources; use phytase to maximize phytate phosphorus utilization and reduce inorganic phosphate need.",
        drug_interactions: "MCP may reduce the absorption of tetracyclines and fluoroquinolones through mineral chelation. High dietary calcium can also interfere with trace mineral uptake. Balanced ration formulation helps limit potential antagonistic interactions.",
        storage: "Store dry, protected from moisture.",
        shelf_life: "36 months For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "broiler",
          "layer",
          "swine","rabbits","aquaculture"
        ]
      },]
    },
    {
      slug: "toxin-binders",
      name: "Toxin Binders",
      image: "/toxin-binder.jpg",
      items: [
        {
        id: "amchem-adsorvent",
        brand: "AMCHEM",
        product: "AMCHEM ADSORVENT",
        active_substance: "Mycotoxin Binder Complex",
        composition: [
          "Hydrated Sodium Calcium Aluminosilicate (HSCAS)", "Yeast cell wall components", "Anti-caking agent", "Carrier: Pharmaceutical-grade excipients",
        ],
        pack_size: "25 kg bags",
        description: "Light tan to beige free-flowing powder.",
        pharmacological_properties: {
          mechanism_of_action: "HSCAS: Clay minerals with extensive surface area and high cation exchange capacity effectively bind polar mycotoxins (particularly aflatoxins). Mechanism involves electrostatic interactions between negatively charged aluminosilicate surface and positively charged mycotoxin regions. Yeast cell wall: Components (β-glucans, mannan-oligosaccharides) provide binding capacity for non-polar mycotoxins (zearalenone, trichothecenes—DON, T-2 toxin—ochratoxin A). Polysaccharide structures create binding sites through hydrogen bonding and hydrophobic interactions.",
          spectrum: "Hydrated Sodium Calcium Aluminosilicate (HSCAS) exhibits a broad adsorptive spectrum, binding aflatoxins and various mycotoxins commonly found in poultry and livestock feed. Yeast cell wall components, particularly β-glucans and mannans, selectively adsorb endotoxins, pathogen fragments, and harmful metabolites. Together, they reduce toxin bioavailability, support gut integrity, and enhance overall animal performance.",
          pharmacokinetics: "HSCAS remains physically active within the gastrointestinal tract without systemic absorption, binding toxins throughout digestion and eliminating them via feces. Yeast cell wall components interact locally with microbial toxins and pathogens, supporting intestinal barrier function. The combined ingredients act purely within the gut lumen, ensuring safety with no tissue residues or metabolic interactions.",
          scientific_evidence: "Nature Communications research demonstrates HSCAS binds aflatoxin B\u2081 with high affinity (>90% at pH 3-7), preventing intestinal absorption. Studies show significant reduction in aflatoxin residues in milk, eggs, tissues when HSCAS included in contaminated diets. Scientific Reports studies show combination products (HSCAS + yeast cell wall) provide broader mycotoxin protection than single-component binders. Research demonstrates improved animal performance, immune function, and reduced mycotoxicosis symptoms with adequate binder supplementation."
        },
        indications: [
          "Mycotoxicosis prevention in poultry, swine, cattle", "Binding of aflatoxins, zearalenone, trichothecenes, ochratoxins", "Support for animals consuming potentially contaminated feed", "Mycotoxin transfer reduction to animal products (milk, eggs, meat)", "Immune function and production performance protection",
        ],
        dosage_and_administration: {
          all_species: ["Routine protection: 1-2 kg/ton feed", "Moderate contamination: 2-3 kg/ton", "Severe contamination: 3-5 kg/ton (maximum)"],
        },
        contraindications: "Excessive use may reduce mineral and vitamin bioavailability; do not exceed recommended rates.",
        withdrawal_period: {
          all_species: "0 days",
        },
        adverse_effects: "No adverse effects at recommended dosages. At excessive rates (>5 kg/ton): potential nutrient absorption reduction, possible mineral deficiency with prolonged use.",
        precautions: "Toxin binders reduce but do not eliminate mycotoxin effects; address feed storage and handling to minimize contamination; monitor feed ingredients for mycotoxin levels; consider increased vitamin/mineral supplementation during binder use; not substitute for good feed quality management.",
        drug_interactions: "HSCAS may non-specifically bind certain nutrients or medications if overdosed, though normal use poses minimal risk. Yeast components are compatible with antibiotics, probiotics, enzymes, and organic acids, allowing safe inclusion in standard feed programs.",
        storage: "15-30°C dry. Protect from moisture (maintains binding capacity).",
        shelf_life: "24 months For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "all species",
        ]
      },
      {
        id: "amchem-avsorb-plus",
        brand: "AMCHEM",
        product: "AMCHEM AVSORB PLUS",
        active_substance: "Multi-Component Mycotoxin Management",
        composition: [
          "Montmorillonite (bentonite clay)", "Mannan-oligosaccharides (MOS)", "β-glucans", "Propionic acid", "Acetic acid", "Formic acid Silica", "Carrier: Pharmaceutical-grade excipients",
        ],
        pack_size: "25 kg bags",
        description: "Light brown to tan powder. Multi-functional feed additive.",
        pharmacological_properties: {
          mechanism_of_action: "Montmorillonite: Mycotoxin binding (similar to HSCAS), particularly aflatoxins and trichothecenes. MOS and β-glucans: Bind additional mycotoxin classes through polysaccharide-toxin interactions. PNAS research shows immune-modulating effects supporting animal health during mycotoxin challenges. Organic acids (propionic, acetic, formic): Antimold activity preventing fungal growth and reducing mycotoxin production at source. Nature Microbiology studies show organic acid combinations inhibit Aspergillus, Fusarium, and Penicillium species growth (primary mycotoxin producers). Silica: Enhances flow properties and additional binding surface area.",
          spectrum: "Montmorillonite provides a broad toxin-binding spectrum, effectively adsorbing aflatoxins, ochratoxins, fumonisins, zearalenone, and various feed-borne contaminants. Mannan-oligosaccharides (MOS) complement this by selectively binding pathogenic bacteria such as E. coli and Salmonella, as well as microbial endotoxins. Together, they reduce toxin absorption, support gut integrity, and improve animal performance under mycotoxin challenge.",
          pharmacokinetics: "Montmorillonite acts locally in the gastrointestinal tract without systemic absorption, binding toxins through ionic exchange and surface adsorption and eliminating them unchanged in feces. MOS interacts with pathogenic bacteria via mannose-specific adhesion, preventing gut colonization. Both components remain confined to the intestinal lumen, ensuring safety, no tissue residues, and consistent feed-through activity.",
          scientific_evidence: "Scientific Reports demonstrates multi-component toxin management products provide superior protection versus single-mechanism binders, addressing both existing contamination and preventing further mycotoxin production."
        },
        indications: [
          "Comprehensive mycotoxin management", "Mold growth prevention in feed", "Multiple mycotoxin class binding", "Immune function support during mycotoxin challenges", "Feed preservation and quality maintenance"
        ],
        dosage_and_administration: {
          all_species: ["Routine protection: 1.5-2.5 kg/ton feed", "Moderate contamination: 2.5-4.0 kg/ton", "Severe contamination: 4.0-5.0 kg/ton"],
        },
        contraindications: "None at recommended usage levels.",
        withdrawal_period: {
          all_species: "0 days",
        },
        adverse_effects: "No adverse effects at recommended dosages.",
        precautions: "Part of comprehensive mycotoxin management strategy; regular feed testing recommended; maintain proper feed storage; organic acids may affect flavor (ensure proper mixing).",
        drug_interactions: "At excessive inclusion rates, montmorillonite may bind certain vitamins or medications, reducing efficacy. Under recommended levels, both ingredients remain compatible with enzymes, probiotics, acids, antibiotics, and most feed additives, ensuring safe and flexible formulation.",
        storage: "15-30°C sealed. Protect from moisture.",
        shelf_life: "24 months For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "all species",
        ]
      },
      {
        id: "amchem-toxisorb",
        brand: "AMCHEM",
        product: "AMCHEM TOXISORB",
        active_substance: "Biological Mycotoxin Management",
        composition: [
          "Bacillus subtilis (probiotic bacteria)", "Yeast cell wall", "Montmorillonite", "Carrier: Pharmaceutical-grade excipients",
        ],
        pack_size: "25 kg bags",
        description: "Light brown powder containing viable B. subtilis spores.",
        pharmacological_properties: {
          mechanism_of_action: "Bacillus subtilis: Spores germinate in GI tract, producing enzymes degrading certain mycotoxins. Nature Communications research demonstrates B. subtilis produces lactonohydrolases, esterases, and other enzymes cleaving mycotoxin structures (particularly aflatoxin B₁, zearalenone), converting to less toxic metabolites. Yeast cell wall: Conventional binding capacity for mycotoxins escaping enzymatic degradation. Montmorillonite: Additional binding, particularly for aflatoxins.",
          spectrum: "Montmorillonite provides broad adsorptive capability against aflatoxins, fumonisins, zearalenone, ochratoxins, and other harmful metabolites. Yeast cell wall components bind endotoxins and pathogenic fragments, reducing microbial virulence. Bacillus subtilis enhances competitive exclusion by suppressing E. coli, Salmonella, and Clostridial overgrowth, creating a combined spectrum that supports gut balance and toxin mitigation.",
          pharmacokinetics: "Montmorillonite remains active within the gastrointestinal lumen, binding toxins and eliminating them through feces without absorption. Yeast cell wall fragments act locally, interacting with pathogens and endotoxins. Bacillus subtilis colonizes the gut transiently, producing enzymes and beneficial metabolites. None of the components accumulate systemically, ensuring safe, residue-free gastrointestinal action.",
          scientific_evidence: "Scientific Reports demonstrates biological detoxification approaches offer advantages over pure binding strategies: degraded mycotoxins no longer pose risks and don't reduce nutrient availability."
        },
        indications: [
          "Biological mycotoxin detoxification", "Multi-mechanism mycotoxin management", "Intestinal health support during mycotoxin challenges", "Probiotic benefits plus toxin management"
        ],
        dosage_and_administration: {
          all_species: ["Routine protection: 1.0-2.0 kg/ton feed", "Moderate contamination: 2.0-3.0 kg/ton", "Severe contamination: 3.0-4.0 kg/ton"],
        },
        contraindications: "Caution in immunocompromised animals (probiotic component); avoid concurrent antibiotics active against gram-positive bacteria (reduces probiotic efficacy).",
        withdrawal_period: {
          all_species: "0 days",
        },
        adverse_effects: "No adverse effects at recommended dosages.",
        precautions: "B. subtilis count should meet label claim (typically \u22651\u00d710\u2079 CFU/kg); store cool/dry for probiotic viability; high pelleting temperatures may reduce efficacy; part of comprehensive mycotoxin program.",
        drug_interactions: "Montmorillonite may reduce absorption of certain oral medications if overdosed, though normal use is safe. Bacillus subtilis and yeast components remain compatible with probiotics, enzymes, acids, and most antibiotics, supporting flexible feed formulation.",
        storage: "15-25°C sealed. Avoid high temperatures/humidity (reduces probiotic viability).",
        shelf_life: "18 months (probiotic viability-dependent) For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "all species",
        ]
      },
      {
        id: "amchem-toxin-bind",
        brand: "AMCHEM",
        product: "AMCHEM TOXIN BIND",
        active_substance: "Clay-Based Mycotoxin Binder",
        composition: [
          "HSCAS/Bentonite", "Anti-caking agent", "Carrier: Pharmaceutical-grade excipients",
        ],
        pack_size: "25 kg bags",
        description: "Light gray to tan powder. Traditional clay binder.",
        pharmacological_properties: {
          mechanism_of_action: "Pure aluminosilicate clay with layered structure creating large surface area with negative charge attracting and binding aflatoxins through electrostatic interactions and physical entrapment. Stable toxin-clay complex passes through digestive tract without releasing bound toxins.",
          spectrum: "HSCAS and bentonite provide a broad mycotoxin-binding spectrum, effectively adsorbing aflatoxins and offering moderate affinity for ochratoxins, fumonisins, and selected polar toxins. Their layered crystalline surfaces capture contaminants through ionic exchange and physical adsorption. The anti-caking agent maintains uniform dispersion, ensuring consistent toxin-binding efficiency throughout the feed matrix and the gastrointestinal tract.",
          pharmacokinetics: "HSCAS and bentonite act exclusively within the gastrointestinal lumen, binding toxins without entering systemic circulation. They form stable, non-absorbable toxin–clay complexes that resist digestive breakdown and are excreted intact in feces. The anti-caking agent improves flowability and distribution, promoting predictable local activity, no tissue residues, and no metabolic transformation in animals.",
          scientific_evidence: "PNAS research demonstrates binding affinities >95% for aflatoxin B\u2081 under physiological pH. Cost-effective solution where aflatoxin is primary mycotoxin concern."
        },
        indications: [
          "Aflatoxicosis prevention", "Aflatoxin absorption reduction", "Liver function protection in animals exposed to aflatoxin-contaminated feed"
        ],
        dosage_and_administration: {
          all_species: ["0.5-2.0 kg/ton feed (contamination-dependent)"]
        },
        contraindications: "None at recommended usage.",
        withdrawal_period: {
          all_species: "0 days",
        },
        adverse_effects: "None at recommended rates.",
        precautions: "Most effective against aflatoxins; limited efficacy against other mycotoxins; may bind some nutrients at excessive rates; use as part of comprehensive feed quality program.",
        drug_interactions: "Overuse of bentonite-based binders may reduce absorption of certain oral medications or nutrients. At standard inclusion levels, HSCAS, bentonite, and anti-caking agents remain compatible with antibiotics, probiotics, enzymes, and most feed additives used in commercial livestock diets.",
        storage: "15-30°C dry.",
        shelf_life: "36 months For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "all species",
        ]
      },
      {
        id: "amchem-mos-mannan-oligosaccharides-glucans",
        brand: "AMCHEM",
        product: "AMCHEM MOS (Mannan-Oligosaccharides & β-Glucans)",
        active_substance: "Yeast Cell Wall Derivatives",
        composition: [
          "Natural β-glucans  and mannan-oligosaccharides from Saccharomyces cerevisiae cell walls", "Carrier: Minimal (concentrated yeast cell wall product)",
        ],
        pack_size: "25 kg bags",
        description: "Light tan to beige powder.",
        pharmacological_properties: {
          mechanism_of_action: "Mannan-oligosaccharides (MOS): Bind pathogenic bacteria (E. coli, Salmonella) expressing type-1 fimbriae, preventing intestinal colonization Bind certain mycotoxins (zearalenone, trichothecenes) Modulate intestinal immune responses. β-glucans: Activate innate immune system via pattern recognition receptors (Dectin-1, complement receptor 3) Enhance macrophage, neutrophil, natural killer cell activity Improve resistance to bacterial/viral infections Additional mycotoxin binding capacity",
          spectrum: "AMCHEM MOS provides a broad functional spectrum by targeting pathogenic bacteria and gut-derived toxins. Mannan-oligosaccharides bind mannose-specific fimbriae of pathogens such as E. coli and Salmonella, reducing colonization. Natural β-glucans interact with microbial endotoxins and modulate immune activity, helping strengthen intestinal defense, stabilize microflora, and improve overall digestive performance in all production species.",
          pharmacokinetics: "MOS and β-glucans act entirely within the gastrointestinal lumen without systemic absorption. MOS binds pathogens and is excreted unchanged, while β-glucans interact with intestinal immune receptors, promoting localized immune responsiveness. Both components are slowly fermented by beneficial bacteria, supporting microbiota balance. They leave no residues in tissues and maintain consistent gastrointestinal action.",
          scientific_evidence: "Nature Communications demonstrates MOS and β-glucans significantly improve immune function markers, reduce pathogen shedding, enhance growth performance, and support intestinal health. Studies show particular benefits during stress periods, disease challenges, and in young animals with developing immune systems."
        },
        indications: [
          "Immune function enhancement", "Pathogen binding and intestinal colonization reduction", "Mycotoxin management (complementary to clay binders)", "Stress and disease challenge support", "Prebiotic effects supporting beneficial microbiota"
        ],
        dosage_and_administration: {
          poultry: ["0.5-2.0 kg/ton feed"],
          swine: ["Starter pigs: 1.0-2.0 kg/ton", "Grower-finisher: 0.5-1.0 kg/ton"],
          cattle: ["0.5-1.5 kg/ton concentrate", "Higher inclusion during stress/challenge periods."],
        },
        contraindications: "None known.",
        withdrawal_period: {
          poultry_meat: "0 days",
          swine_meat: "0 days",
          cattle_meat: "0 days",
        },
        adverse_effects: "No adverse effects at recommended dosages.",
        precautions: "Quality varies by manufacturing process; source from reputable suppliers; β-glucan and MOS content should meet specifications.",
        drug_interactions: "MOS and β-glucans show excellent compatibility with antibiotics, probiotics, enzymes, acids, and vitamin–mineral premixes. They do not bind medications but may enhance gut response during antimicrobial use, making them suitable for diversified feed programs.",
        storage: "15-30°C sealed. Protect from moisture.",
        shelf_life: "24 months For Veterinary Use Only",
        veterinary_use_only: true,
        species: [
          "poultry",
          "swine",
          "cattle"
        ]
      },]
    },
    {
      slug: "mold-inhibitors",
      name: "Mold Inhibitors",
      image: "/mold-inhibitor.jpg",
      items: [
        {
          id: "amchem-antimold",
          brand: "AMCHEM",
          product: "AMCHEM ANTIMOLD",
          active_substance: "Propionic Acid",
          composition: [
            "Total Propionic Acid ≥60%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "Yellowish to amber liquid or powder with characteristic acidic odor.",
          pharmacological_properties: {
            mechanism_of_action: "Propionic acid is short-chain organic acid with potent antifungal properties. Mechanism involves: Undissociated acid penetration through fungal cell membranes, Cytoplasm acidification after intracellular dissociation, Metabolic enzyme and cellular function disruption, Spore germination and mycelial growth prevention, Effect pH-dependent; greater efficacy in slightly acidic conditions where undissociated form predominates.",
            spectrum: "AMCHEM ANTIMOLD, containing Total Propionic Acid ≥60%, exhibits broad antifungal activity, particularly against molds and yeasts responsible for food spoilage. It is effective in inhibiting growth of Penicillium, Aspergillus, and other common storage fungi, helping preserve grains, baked goods, and other perishable products by preventing mold proliferation.",
            pharmacokinetics: "Upon application, propionic acid acts locally on microbial cell membranes, disrupting enzymatic pathways and lowering pH to inhibit mold growth. Absorption into the bloodstream is minimal in treated foods. It is metabolized primarily in the liver and excreted as carbon dioxide and water, ensuring limited systemic exposure and minimal accumulation in tissues.",
            scientific_evidence: "Nature Microbiology research demonstrates propionic acid effectively inhibits Aspergillus, Fusarium, Penicillium, and other toxigenic fungi at 0.1-0.3% feed concentrations. Studies show propionic acid treatment maintains feed quality, prevents heating, and reduces mycotoxin formation during storage."
          },
          indications: [
            "Mold growth prevention in stored feed and ingredients", "Feed shelf life extension", "Feed palatability and nutritional value maintenance", "Mycotoxin production risk reduction"
          ],
          dosage_and_administration: {
            all_species: ["Standard conditions: 0.5-1.5 kg/ton feed/grain", "High moisture/warm conditions: 1.5-3.0 kg/ton", "Very high risk: 3.0-5.0 kg/ton"],
          },
          contraindications: "None specific.",
          withdrawal_period: {
            all_species: "0 days"
          },
          adverse_effects: "May reduce feed palatability at excessive rates; corrosive to equipment (use appropriate materials-stainless steel, plastic).",
          precautions: "Corrosive to carbon steel (use resistant materials); avoid skin/eye contact (use PPE); ensure adequate ventilation; effectiveness requires uniform distribution.",
          drug_interactions: "AMCHEM ANTIMOLD has minimal interactions with other food additives or preservatives. However, excessive combination with strong acids or alkalis may reduce its antifungal efficacy, and care should be taken when mixing with other chemical preservatives to maintain stability.",
          storage: "Store in appropriate containers (plastic, stainless steel) at 15-30°C. Corrosive to some materials.",
          shelf_life: "24 months For Veterinary and Feed Industry Use",
          veterinary_use_only: true,
          species: [
            "All Species"
          ]
        },
        {
          id: "amchem-moldguard",
          brand: "AMCHEM",
          product: "AMCHEM MOLDGUARD",
          active_substance: "Organic Acid Blend",
          composition: [
            "Total Acid ≥50%", "Propionic Acid ≥45%", "Formic Acid ≥5%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Amber liquid or powder with acidic odor. Synergistic organic acid combination.",
          pharmacological_properties: {
            mechanism_of_action: "Propionic acid is short-chain organic acid with potent antifungal properties. Mechanism involves: Undissociated acid penetration through fungal cell membranes, Cytoplasm acidification after intracellular dissociation, Metabolic enzyme and cellular function disruption, Spore germination and mycelial growth prevention. Formic acid: Additional antifungal effects with broader antimicrobial spectrum. More volatile, providing vapor-phase protection. Effective against bacteria and molds.",
            spectrum: "AMCHEM MOLDGUARD, containing ≥50% total acid (≥45% propionic acid, ≥5% formic acid), exhibits broad-spectrum antifungal activity against molds and yeasts associated with food spoilage and silage deterioration. It is effective against Aspergillus, Penicillium, and Fusarium species, inhibiting spore germination, hyphal growth, and mycotoxin production. The combination of propionic and formic acids enhances preservative efficacy in high-moisture and carbohydrate-rich substrates.",
            pharmacokinetics: "The antifungal action is primarily local, with propionic and formic acids penetrating microbial membranes, disrupting intracellular pH, inhibiting enzymatic activity, and impairing metabolic pathways. Systemic absorption from treated feed or food is minimal. Both acids are rapidly metabolized in the liver; propionic acid via β-oxidation to acetate and CO₂, and formic acid via conversion to CO₂ and water. Renal and respiratory excretion ensures limited tissue retention and high safety margins at recommended concentrations.",
            scientific_evidence: "Scientific Reports demonstrates acid combinations provide superior mold inhibition compared to single acids at equivalent total acid levels. Combination offers protection against wider fungal species range and maintains efficacy across varying pH and moisture conditions."
          },
          indications: [
            "Comprehensive mold and bacterial control in feed", "Feed preservation under challenging storage", "Mycotoxin production prevention", "Feed shelf life extension"
          ],
          dosage_and_administration: {
            all_species: ["Standard: 1.0-2.0 kg/ton", "High moisture/temperature: 2.0-4.0 kg/ton", "Extreme conditions: 4.0-6.0 kg/ton"]
          },
          contraindications: "None specific to animal feeding.",
          withdrawal_period: {
            all_species: "0 days"
          },
          adverse_effects: "Palatability reduction at excessive rates; equipment corrosion if improperly handled.",
          precautions: "Corrosive (use appropriate materials and PPE); ensure uniform application; ventilate adequately.",
          drug_interactions: "AMCHEM MOLDGUARD demonstrates low potential for interactions. Strong alkalis or oxidizing agents may reduce its antifungal potency by altering pH stability or causing chemical degradation. Compatibility with other approved feed or food preservatives is generally maintained when used at recommended levels.",
          storage: "Store in corrosion-resistant containers at 15-30°C.",
          shelf_life: "24 months For Veterinary and Feed Industry Use",
          veterinary_use_only: true,
          species: [
            "All Species"
          ]
        },
        {
          id: "amchem-antimold-liq",
          brand: "AMCHEM",
          product: "AMCHEM ANTIMOLD-LIQ",
          active_substance: "Propionic Acid (Liquid Formulation)",
          composition: [
            "Total Propionic Acid ≥60%", "Carrier: Liquid formulation"
          ],
          pack_size: "1100 kg Intermediate Bulk Container (IBC)",
          description: "Amber liquid with characteristic acidic odor. Bulk format for large-scale operations.",
          pharmacological_properties: {
            mechanism_of_action: "Propionic acid is short-chain organic acid with potent antifungal properties. Mechanism involves: Undissociated acid penetration through fungal cell membranes, Cytoplasm acidification after intracellular dissociation, Metabolic enzyme and cellular function disruption, Spore germination and mycelial growth prevention. Effect pH-dependent; greater efficacy in slightly acidic conditions where undissociated form predominates.",
            spectrum: "AMCHEM ANTIMOLD-LIQ, formulated as a liquid with ≥60% total propionic acid, demonstrates potent antifungal activity against a broad spectrum of molds and yeasts responsible for food and feed spoilage. It is effective against genera such as Aspergillus, Penicillium, and Fusarium, preventing spore germination, hyphal extension, and mycotoxin production. The liquid formulation enhances uniform dispersion and preservative efficacy in aqueous and semi-solid substrates.",
            pharmacokinetics: "Propionic acid in this liquid formulation exerts its antifungal effect locally by penetrating microbial cell membranes, causing intracellular acidification, metabolic disruption, and inhibition of growth. Systemic absorption from treated products is minimal. Propionic acid undergoes hepatic metabolism via β-oxidation to acetate and carbon dioxide, with elimination through respiratory and renal pathways. The liquid carrier facilitates rapid application without increasing systemic exposure.",
            scientific_evidence: "Studies demonstrate that propionic acid ≥60% effectively inhibits mold growth in stored grains, silage, and bakery products. Its liquid formulation ensures uniform distribution and rapid antifungal action. Research confirms reduced mycotoxin formation and prolonged shelf-life, with negligible systemic absorption, supporting its efficacy and safety as a food and feed preservative."
          },
          indications: [
            "Mold growth prevention in stored feed and ingredients", "Feed shelf life extension", "Feed palatability and nutritional value maintenance", "Mycotoxin production risk reduction"
          ],
          dosage_and_administration: {
            all_species: ["Standard conditions: 0.5-1.5 kg/ton feed/grain", "High moisture/warm conditions: 1.5-3.0 kg/ton", "Very high risk: 3.0-5.0 kg/ton"]
          },
          contraindications: "Not recommended for use in individuals with known hypersensitivity to propionic acid. Avoid contact with strong oxidizers or alkalis that may neutralize activity. Not intended for direct human ingestion.",
          withdrawal_period: {
            all_species: "0 days"
          },
          adverse_effects: "May cause mild irritation to skin, eyes, or respiratory tract upon direct exposure. Ingestion of concentrated product can induce gastrointestinal discomfort. Safe at recommended preservative concentrations in food and feed.",
          precautions: "Requires proper liquid handling equipment; corrosive to certain materials; follow all safety protocols for bulk acid handling.",
          drug_interactions: "AMCHEM ANTIMOLD-LIQ has minimal interaction potential. Its efficacy may be reduced by strong alkalis or oxidizing agents that destabilize the acid. It remains compatible with other approved food or feed preservatives under recommended usage conditions.",
          storage: "Store in appropriate bulk containers. Temperature: 15-30°C.",
          shelf_life: "24 months For Veterinary and Feed Industry Use",
          veterinary_use_only: true,
          species:  [
            "All Species"
          ]
        },
      ]
    },
    {
      slug: "feed-acidifiers",
      name: "Feed Acidifiers",
      image: "/feed-acidifier.jpg",
      items: [
        {
          id: "amchem-acid",
          brand: "AMCHEM",
          product: "AMCHEM ACID",
          active_substance: "Formic Acid Blend",
          composition: [
            "Total Formic Acid ≥50%", "Formic Acid + Ammonium Formate ≥58%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Clear to slightly yellowish liquid or powder with pungent odor.",
          pharmacological_properties: {
            mechanism_of_action: "Antimicrobial: Undissociated acid penetrates bacterial cell membranes, dissociates inside cells reducing cytoplasmic pH, disrupts metabolic enzymes and DNA synthesis. Particularly effective against gram-negative bacteria (E. coli, Salmonella). Digestive Enhancement: Reduces gastric pH, enhancing pepsin activity; Improves protein digestion and amino acid absorption; Supports beneficial lactic acid-producing bacteria; Reduces feed buffering capacity. Mineral Absorption: Maintains mineral solubility, preventing precipitation in small intestine.",
            spectrum: "AMCHEM ACID, standardized to ≥50% total formic acid and ≥58% combined formic acid plus ammonium formate, exhibits strong antifungal and antimicrobial activity against molds, yeasts, and certain bacteria in food, feed, and silage. It effectively inhibits Aspergillus, Penicillium, and Fusarium species, reducing spoilage, mycotoxin formation, and microbial proliferation in high-moisture and high-carbohydrate substrates.",
            pharmacokinetics: "The antimicrobial action is primarily local, with formic acid penetrating microbial membranes to lower intracellular pH, inhibit enzymatic activity, and disrupt metabolic pathways. Systemic absorption is minimal from treated food or feed. Formic acid undergoes hepatic metabolism to CO₂ and water, while ammonium formate is metabolized to formic acid and ammonia, which are safely excreted via renal and respiratory pathways. Tissue accumulation is negligible, supporting a high safety margin.",
            scientific_evidence: "PNAS research demonstrates formic acid supplementation in weaned piglets significantly reduces post-weaning diarrhea incidence, improves growth performance, and decreases pathogenic E. coli populations. Nature Communications studies show dietary acidification improves mineral absorption (calcium, phosphorus, zinc, iron)."
          },
          indications: [
            "Enteric bacterial infection prevention", "Post-weaning diarrhea control in piglets", "Salmonella control in poultry and swine", "Protein digestion improvement", "Mineral absorption enhancement", "Gastrointestinal tract acidification"
          ],
          dosage_and_administration: {
            poultry: [
              "0.3-1.0% of feed (3-10 kg/ton)", "Increase during disease challenges", "Mix thoroughly or apply as liquid."
            ],
            swine: ["Starter pigs: 0.5-1.5% of feed (5-15 kg/ton)", "Grower-finisher: 0.3-0.8% of feed", "Particularly beneficial first 2-3 weeks post-weaning"]
          },
          contraindications: "None specific.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days"
          },
          adverse_effects: "Reduced palatability at excessive rates; equipment corrosion.",
          precautions: "Corrosive to mild steel (use appropriate materials); pungent odor (adequate ventilation); wear PPE; start with lower doses if palatability concerns.",
          drug_interactions: "Compatible with most medications; may enhance some antimicrobial efficacy through pH reduction.",
          storage: "Store in corrosion-resistant containers at 15-30°C. Protect from moisture (if dry).",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "poultry",
            "swine",
          ]
        },
        {
          id: "amchem-salguard",
          brand: "AMCHEM",
          product: "AMCHEM SALGUARD",
          active_substance: "Multi-Acid Blend",
          composition: [
            "Formic Acid ≥40%", "Benzoic Acid ≥10%", "Propionic Acid ≥5%", "Citric Acid ≥3%", "Ammonium Formate 2%", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Light yellow to amber liquid or powder. Comprehensive acidifier with synergistic antimicrobial and acidifying properties.",
          pharmacological_properties: {
            mechanism_of_action: "Formic acid: Primary antimicrobial against gram-negative bacteria. Benzoic acid: Lipophilic acid with activity against yeasts and molds; converted in vivo to hippuric acid, providing systemic antimicrobial effects. Particularly effective in reducing urinary pH, creating unfavorable bacterial growth conditions. Propionic acid: Antifungal activity; additional gram-positive antimicrobial. Citric acid: Chelates minerals disrupting bacterial metabolism; buffering capacity; palatability enhancement. Ammonium formate: Buffered formic acid reducing corrosivity.",
            spectrum: "AMCHEM SALGUARD exhibits broad-spectrum antimicrobial activity primarily targeting gram-negative enteric bacteria including Salmonella species, pathogenic Escherichia coli, and Campylobacter. Effective against gram-positive organisms such as Clostridium perfringens and Staphylococcus species. Demonstrates antifungal activity against yeasts (Candida) and molds (Aspergillus, Penicillium). Benzoic acid component provides additional activity against spore-forming bacteria and mycotoxin-producing fungi.",
            pharmacokinetics: "Following oral administration, formic and propionic acids act primarily in the gastrointestinal lumen with minimal absorption. Benzoic acid is moderately absorbed (60-80% bioavailability), rapidly conjugated with glycine in the liver forming hippuric acid, providing systemic antimicrobial effects and urinary acidification. Citric acid is readily absorbed and enters the Krebs cycle. Ammonium formate dissociates, with formate following formic acid pathways. Elimination occurs primarily via feces (unabsorbed acids) and urine (benzoic acid as hippuric acid).",
            scientific_evidence: "Scientific Reports demonstrates multi-acid combinations provide superior antimicrobial efficacy with synergistic effects reducing MICs against Salmonella, E. coli, Clostridium species. Studies show benzoic acid provides systemic effects after absorption, reducing urinary pH and bacterial growth in urinary tract."
          },
          indications: [
            "Comprehensive Salmonella control (particularly effective)", "Post-weaning diarrhea prevention", "Enteric pathogen reduction", "Growth promotion through gut health", "Feed preservation (antimold effects)", "Systemic urinary tract support"
          ],
          dosage_and_administration: {
            poultry: [
              "0.3-1.0% of feed (3-10 kg/ton)"
            ],
            swine: ["Piglets: 0.5-1.5% of feed (5-15 kg/ton)", "Growers: 0.3-1.0% of feed"]
          },
          contraindications: "None specific.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days"
          },
          adverse_effects: "Minimal at recommended doses; excessive use may affect palatability.",
          precautions: "Corrosive components (use appropriate handling); ensure adequate mixing; start conservatively if palatability concerns.",
          drug_interactions: "Compatible with most medications.",
          storage: "15-25°C in sealed, corrosion-resistant containers.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "poultry",
            "swine"
          ]
        },
        {
          id: "amchem-acid-liq",
          brand: "AMCHEM",
          product: "AMCHEM ACID-LIQ",
          active_substance: "Formic Acid (Liquid Bulk)",
          composition: [
            "Total Formic Acid ≥65%", "Formic Acid + Ammonium Formate ≥73%", "Carrier: Liquid formulation"
          ],
          pack_size: "1100 kg Intermediate Bulk Container (IBC)",
          description: "Clear liquid with pungent odor. Bulk format for large-scale operations.",
          pharmacological_properties: {
            mechanism_of_action: "Antimicrobial: Undissociated acid penetrates bacterial cell membranes, dissociates inside cells reducing cytoplasmic pH, disrupts metabolic enzymes and DNA synthesis. Particularly effective against gram-negative bacteria (E. coli, Salmonella). Digestive Enhancement: Reduces gastric pH, enhancing pepsin activity; Improves protein digestion and amino acid absorption; Supports beneficial lactic acid-producing bacteria; Reduces feed buffering capacity. Mineral Absorption: Maintains mineral solubility, preventing precipitation in small intestine.",
            spectrum: "AMCHEM ACID-LIQ demonstrates potent bactericidal activity against gram-negative enteric pathogens including Escherichia coli, Salmonella species, Campylobacter jejuni, and Yersinia enterocolitica. Moderate activity against gram-positive bacteria such as Clostridium perfringens and Enterococcus species. Limited antifungal effects against certain yeasts. Formic acid's antimicrobial efficacy is pH-dependent, with optimal activity in acidic environments where undissociated form predominates.",
            pharmacokinetics: "Formic acid exhibits minimal gastrointestinal absorption (bioavailability <10%), acting primarily locally in stomach and small intestine. Absorbed fraction rapidly metabolizes via one-carbon metabolism pathways, oxidized to carbon dioxide by hepatic folate-dependent enzymes or incorporated into cellular biosynthetic processes. Ammonium formate dissociates in gastrointestinal tract; formate follows formic acid metabolism. Elimination occurs primarily through feces (unabsorbed acid) and respiration (CO₂). Plasma half-life of absorbed formate: approximately 45-60 minutes.",
            scientific_evidence: "PNAS research demonstrates formic acid supplementation in weaned piglets significantly reduces post-weaning diarrhea incidence, improves growth performance, and decreases pathogenic E. coli populations. Nature Communications studies show dietary acidification improves mineral absorption (calcium, phosphorus, zinc, iron)."
          },
          indications: [
            "Enteric bacterial infection prevention", "Post-weaning diarrhea control in piglets", "Salmonella control in poultry and swine", "Protein digestion improvement", "Mineral absorption enhancement", "Gastrointestinal tract acidification"
          ],
          dosage_and_administration: {
            poultry: ["0.3-1.0% of feed (3-10 kg/ton)", "Increase during disease challenges"],
            swine: ["Starter pigs: 0.5-1.5% of feed (5-15 kg/ton)", "Grower-finisher: 0.3-0.8% of feed", "Particularly beneficial first 2-3 weeks post-weaning"],
          },
          contraindications: "Severe gastric ulceration or known gastrointestinal perforation. Hypersensitivity to formic acid or formate compounds. Extreme metabolic acidosis or severe renal impairment (impaired acid excretion).",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days"
          },
          adverse_effects: "Reduced feed palatability at excessive inclusion rates (>2% of feed). Transient mild gastrointestinal irritation possible with overdosing. Corrosive to equipment—requires proper material handling (stainless steel, plastic containers). No significant systemic toxicity at recommended doses. Adequate ventilation required due to pungent odor.",
          precautions: "Requires proper bulk liquid handling; corrosive; strong odor requires ventilation; follow all safety protocols.",
          drug_interactions: "Compatible with most antimicrobials; may enhance efficacy of certain antibiotics through gastric acidification. No antagonistic interactions reported with vitamins or most minerals. High concentrations may reduce absorption of weakly basic drugs requiring neutral pH. Avoid concurrent alkaline compounds which neutralize acidity.",
          storage: "Appropriate bulk containers at 15-30°C.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: ["aquaculture"]
        },]
    },
    {
      slug: "feed-flavours",
      name: "Feed Flavours",
      image: "/feed-flavour.jpg",
      items: [{
          id: "amchem-flavour",
          brand: "AMCHEM",
          product: "AMCHEM FLAVOUR",
          active_substance: "Feed Flavoring Agents",
          composition: [
            "Molasses Flavor", "Milky Flavor", "Vanilla Flavor", "Banana Flavor", "Strawberry Flavor", "Fish Flavor", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "20 kg bags",
          description: "Varies by flavor. Powdered or liquid form with characteristic flavor profile.",
          pharmacological_properties: {
            mechanism_of_action: "Flavoring agents stimulate olfactory and gustatory receptors, enhancing feed palatability and intake. Different flavors appeal to different species and production stages. Masking of unpalatable ingredients improves acceptance.",
            spectrum: "AMCHEM FLAVOUR is not an antimicrobial agent and possesses no antibacterial, antifungal, or antiparasitic activity. This product functions solely as a palatability enhancer and sensory stimulant for feed. It does not exert pharmacological effects on pathogenic or commensal microorganisms. The flavoring compounds interact with olfactory and gustatory receptors to improve feed acceptance and consumption patterns across various animal species and production stages.",
            pharmacokinetics: "Flavoring compounds are generally recognized as safe (GRAS) substances with minimal systemic absorption. Most flavor molecules are volatile organic compounds that stimulate olfactory receptors without significant gastrointestinal absorption. Any absorbed fractions undergo rapid first-pass hepatic metabolism via conjugation pathways (glucuronidation, sulfation). Metabolites are readily excreted via urine and expired air. No bioaccumulation occurs. Flavoring agents do not interfere with nutrient absorption or metabolism at recommended inclusion rates.",
            scientific_evidence: "Studies demonstrate flavoring agents significantly improve feed intake in situations where palatability is compromised (medication inclusion, ingredient quality variations, stress periods). Research shows consistent flavor use can condition animals to feed, improving consumption patterns.",
          },
          indications: [
            "Feed palatability enhancement", "Feed intake optimization", "Masking unpalatable ingredients", "Supporting intake during stress or transition periods", "Species/age-appropriate flavor profiles",
          ],
          dosage_and_administration: {
            all_species: [
              "0.5-2.0 kg/ton feed (standard inclusion)", "Up to 5.0 kg/ton for heavily medicated or problematic feeds",
            ],
          },
          contraindications: "None known.",
          withdrawal_period: {
            all_species: "0 days",
          },
          adverse_effects: "No adverse effects. Non-toxic, non-nutritive additives.",
          precautions: "Quality flavors from reputable sources; avoid excessive use (may become aversive); consistent flavor use recommended.",
          drug_interactions: "No interactions",
          storage: "15-25°C sealed. Protect from moisture and light (maintains flavor intensity).",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "swine"
          ]
        },]
    },
    {
      slug: "agp-replacement-products",
      name: "AGP Replacement Products",
      image: "/agp-replacement.jpg",
      items: [
        {
          id: "amchem-allicin",
          brand: "AMCHEM",
          product: "AMCHEM ALLICIN",
          active_substance: "Garlic-Derived Organosulfur Compounds",
          composition: [
            "Diallyl Disulfide and Diallyl Trisulfide 25%", "Source: Garlic (Allium sativum) extract", "Carrier: Pharmaceutical-grade excipients"
          ],
          pack_size: "25 kg bags",
          description: "Light yellow to tan powder with characteristic garlic odor.",
          pharmacological_properties: {
            mechanism_of_action: "Allicin (diallyl thiosulfinate) and related organosulfur compounds possess: Antimicrobial Activity: Disrupt bacterial membranes, inhibit sulfhydryl-dependent enzymes (particularly cysteine proteases), interfere with bacterial metabolism. Effective against gram-positive and gram-negative bacteria including E. coli, Salmonella, Clostridium species. Antioxidant Effects: Scavenge free radicals, enhance endogenous antioxidant systems (glutathione, SOD). Immunomodulation: Enhance phagocytosis, cytokine production, natural killer cell activity. Growth Promotion: Modulate gut microbiota favoring beneficial bacteria, improve digestive enzyme activity, enhance nutrient absorption.",
            spectrum: "AMCHEM ALLICIN, standardized to 25% organosulfur compounds (diallyl disulfide and diallyl trisulfide) from Allium sativum extract, exhibits broad-spectrum antimicrobial and antifungal activity. It is effective against bacteria (Escherichia coli, Salmonella spp. etc.) and fungi (Aspergillus, Penicillium), inhibiting spore germination, hyphal growth, and microbial metabolism, making it suitable for food, feed, and preservation applications.",
            pharmacokinetics: "Allicin and related organosulfur compounds act locally by disrupting microbial cell membranes, inhibiting thiol-dependent enzymes, and impairing metabolic pathways. Upon ingestion, allicin is partially metabolized in the gastrointestinal tract to stable sulfides, absorbed minimally, and rapidly converted to allyl metabolites. Excretion occurs primarily via urine and breath, with negligible tissue accumulation.",
            scientific_evidence: "Studies demonstrate allicin supplementation improves growth performance, feed efficiency, and immune responses in poultry and swine. Research shows antimicrobial effects without inducing resistance, making it valuable AGP alternative."
          },
          indications: [
            "Antibiotic growth promoter alternative", "Gut health support", "Pathogenic bacteria reduction", "Immune function enhancement", "Antioxidant support", "Growth promotion and feed efficiency"
          ],
          dosage_and_administration: {
            poultry: [
              "100-300 g/ton feed (25-75 mg active compounds/kg)"
            ],
            swine: [
              "100-400 g/ton feed"
            ],
            cattle: [
              "100-300 g/ton concentrate"
            ]
          },
          contraindications: "None known.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
            cattle_meat: "0 days"
          },
          adverse_effects: "No adverse effects at recommended doses. Strong odor may affect palatability at excessive levels.",
          precautions: "Use coated/stabilized forms to minimize odor; ensure adequate mixing; may affect flavor of animal products at very high doses.",
          drug_interactions: "AMCHEM ALLICIN may interact with anticoagulants, antiplatelet agents, or other sulfur-containing supplements, potentially enhancing anticoagulant effects. Strong oxidizing agents may degrade allicin, reducing antimicrobial efficacy. Compatible with approved food and feed preservatives when used at recommended levels.",
          storage: "15-25°C sealed. Protect from moisture and light (maintains potency).",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "poultry",
            "swine",
            "cattle"
          ]
        },
        {
          id: "amchem-tributyrate",
          brand: "AMCHEM",
          product: "AMCHEM TRIBUTYRATE",
          active_substance: "Glycerol Tributyrate",
          composition: [
            "Glycerol Tributyrate (Tributyrin) 60%", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "White to off-white powder or beads. Protected/coated butyrate form.",
          pharmacological_properties: {
            mechanism_of_action: "Tributyrin is triglyceride of butyric acid providing controlled release throughout GI tract. Following ingestion, lipases hydrolyze tributyrin releasing butyric acid. Butyric Acid Functions: Primary energy source for colonocytes: Preferred fuel for intestinal epithelial cells. Gene expression modulation: Histone deacetylase (HDAC) inhibition affects genes regulating inflammation, apoptosis, differentiation. Intestinal barrier enhancement: Improves tight junction integrity (claudin, occludin expression). Anti-inflammatory: Reduces pro-inflammatory cytokine production (TNF-α, IL-6, IL-1β). Antimicrobial: Disrupts pathogenic bacterial membranes; modulates gut microbiota. Immune modulation: Enhances regulatory T-cell function",
            spectrum: "AMCHEM TRIBUTYRATE, containing 60% glycerol tributyrate (tributyrin), exhibits antimicrobial and gut-modulating activity. Tributyrin is hydrolyzed to butyric acid in the gastrointestinal tract, promoting beneficial microbiota growth and inhibiting pathogenic bacteria such as Salmonella spp., E. coli, and Clostridium spp., supporting intestinal health, feed efficiency, and prevention of microbial spoilage.",
            pharmacokinetics: "Upon ingestion, glycerol tributyrate is enzymatically hydrolyzed in the gastrointestinal tract to release butyric acid and glycerol. Butyric acid acts locally on the intestinal epithelium, enhancing mucosal integrity and regulating inflammation. Minimal systemic absorption occurs, with butyrate metabolized primarily by colonocytes for energy or converted to CO₂ and short-chain metabolites, ensuring limited tissue accumulation.",
            scientific_evidence: "Nature research demonstrates butyrate significantly improves intestinal morphology (villus height, crypt depth), enhances barrier function, and reduces inflammation. Studies show comparable or superior growth promotion to traditional AGPs. Research indicates benefits for post-weaning piglets and broilers during enteric challenges."
          },
          indications: [
            "Antibiotic growth promoter alternative", "Intestinal health support", "Post-weaning diarrhea prevention", "Inflammatory bowel condition management", "Feed efficiency improvement", "Immune function support"
          ],
          dosage_and_administration: {
            poultry: [
              "0.5-1.5 kg/ton feed"
            ],
            swine: ["0.5-2.0 kg/ton feed (300-1200 mg tributyrin/kg; 150-600 mg butyric acid/kg)", "Particularly beneficial post-weaning"]
          },
          contraindications: "None known.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days"
          },
          adverse_effects: "No adverse effects. Natural metabolite; highly tolerable.",
          precautions: "Use protected/coated forms for targeted release; ensure adequate mixing.",
          drug_interactions: "AMCHEM TRIBUTYRATE exhibits low interaction potential. High doses of strong acids or alkalis may reduce stability. Concurrent use with other gut-modulating supplements is generally compatible but should consider cumulative acid effects to maintain optimal gastrointestinal pH.",
          storage: "15-25°C sealed. Protect from moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "poultry",
            "swine"
          ]
        },
        {
          id: "amchem-g-amino",
          brand: "AMCHEM",
          product: "AMCHEM G-AMINO",
          active_substance: "Functional Amino Acid Blend",
          composition: [
            "Guanidinoacetic Acid (GAA)", "Methionine", "Betaine Hydrochloride", "Synergist compounds", "Carrier: Pharmaceutical-grade excipients",
          ],
          pack_size: "25 kg bags",
          description: "White to off-white powder.",
          pharmacological_properties: {
            mechanism_of_action: "Guanidinoacetic Acid (GAA): Creatine precursor. Following absorption, GAA methylated in liver producing creatine, essential for energy metabolism (phosphocreatine system). Creatine enables rapid ATP regeneration during high-energy demand. Methionine: Essential amino acid; methyl donor; protein synthesis; antioxidant (glutathione precursor); lipotropic effects. Betaine: Osmolyte; methyl donor (spares methionine); cellular osmoregulation; supports methylation reactions. Synergists: Enhance absorption, utilization, and efficacy.",
            spectrum: "AMCHEM G-AMINO is a synergistic blend of guanidinoacetic acid (GAA), methionine, and betaine hydrochloride, designed to enhance creatine biosynthesis, methylation pathways, and amino acid utilization. It supports energy metabolism, protein synthesis, and muscle development. The formulation indirectly modulates metabolic pathways in livestock and aquaculture, improving growth performance and feed efficiency.",
            pharmacokinetics: "GAA is absorbed in the gastrointestinal tract and transported to the liver and kidneys, where it is methylated to creatine using methionine-derived S-adenosylmethionine (SAM). Betaine HCl serves as a methyl donor and aids in pH regulation for optimal enzymatic activity. Excretion occurs primarily via renal elimination of excess creatine, creatinine, and methylated metabolites. Minimal accumulation occurs in tissues under recommended supplementation levels.",
            scientific_evidence: "Studies demonstrate GAA supplementation improves growth performance, feed efficiency, carcass lean percentage, and muscle creatine content. Research shows synergistic effects with methionine and betaine optimizing methylation pathways and energy metabolism. Particularly effective in high-performance animals and aquaculture."
          },
          indications: [
            "Growth performance optimization", "Feed efficiency improvement", "Muscle development and lean percentage enhancement", "Energy metabolism support", "Methionine sparing", "Osmotic stress management (particularly aquaculture)"
          ],
          dosage_and_administration: {
            poultry: ["0.5-1.5 kg/ton feed (depending on GAA concentration)"],
            swine: ["0.6-1.2 kg/ton feed"],
            aquaculture: ["1.0-3.0 kg/ton feed (species-dependent)"]
          },
          contraindications: "None known.",
          withdrawal_period: 
            {poultry_meat: "0 days",
            swine_meat: "0 days",
            aquaculture: "0 days"},
          adverse_effects: "No adverse effects at recommended doses.",
          precautions: "Adjust methionine levels in formulation considering betaine methylation contribution; ensure adequate mixing.",
          drug_interactions: "AMCHEM G-AMINO may interact with other methyl donors, creatine supplements, or amino acid analogs, potentially altering methylation balance or metabolic flux. Excessive concurrent supplementation with methionine or betaine should be monitored to prevent metabolic overload. Compatible with standard feed formulations at recommended concentrations.",
          storage: "15-25°C sealed. Protect from moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "poultry",
            "swine",
            "aquaculture"
          ]
        },
        {
          id: "amchem-gaa-acid",
          brand: "AMCHEM",
          product: "AMCHEM GAA-ACID",
          active_substance: "Guanidinoacetic Acid (GAA)",
          composition: [
            "Guanidinoacetic Acid 98%", "Carrier: Minimal (high purity product)",
          ],
          pack_size: "25 kg bags",
          description: "White crystalline powder.",
          pharmacological_properties: {
            mechanism_of_action: "GAA is immediate precursor to creatine. Following intestinal absorption, GAA transported to liver where S-adenosylmethionine-dependent guanidinoacetate N-methyltransferase (GAMT) methylates GAA producing creatine. Creatine distributed to tissues (particularly muscle, brain) where phosphorylated to phosphocreatine. Phosphocreatine System: Serves as rapid ATP regeneration system during high-energy demand: Phosphocreatine + ADP ↔ Creatine + ATP (catalyzed by creatine kinase), Critical for sustaining muscle contraction, particularly during intense activity, Supports protein synthesis (energy provision)",
            spectrum: "AMCHEM GAA-ACID, containing 98% high-purity guanidinoacetic acid (GAA), functions as a direct precursor for creatine biosynthesis. It enhances energy metabolism, protein synthesis, and growth performance in livestock, aquaculture, and feed applications. By supporting endogenous creatine formation, it indirectly improves muscle development, feed efficiency, and overall metabolic health.",
            pharmacokinetics: "GAA is efficiently absorbed in the gastrointestinal tract and transported to the liver and kidneys, where it undergoes methylation via S-adenosylmethionine to form creatine. Creatine is distributed to muscle tissues, while excess GAA and creatinine are eliminated renally. Minimal carrier components ensure rapid solubilization and absorption, with negligible accumulation or systemic toxicity at recommended doses.",
            scientific_evidence: "Research demonstrates GAA supplementation: Increases tissue creatine concentrations, Improves growth rate and feed efficiency, Enhances muscle development and lean percentage, Supports energy-intensive processes (growth, reproduction, lactation), Cost-effective alternative to dietary creatine (GAA more stable, better absorbed)Studies in poultry, swine, and aquaculture show consistent performance benefits. Particularly valuable in high-performance production systems."
          },
          indications: [
            "Growth performance and feed efficiency optimization", "Muscle development and carcass lean enhancement", "Energy metabolism support in high-performance animals", "Creatine supplementation (via precursor)", "Reproductive performance support", "Aquaculture growth promotion"
          ],
          dosage_and_administration: {
            poultry: ["Broilers: 0.6-1.2 g/kg feed (600-1200 mg/kg; providing ~0.3-0.6 g creatine equivalent/kg)"],
            swine: ["0.6-1.2 g/kg feed"],
            aquaculture: ["(Fish/Shrimp):0.5-2.0 g/kg feed (species and production stage dependent)",],
            cattle: ["5-15 g/animal/day (production stage dependent)"],
          },
          contraindications: "None known.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
            aquaculture: "0 days",
            cattle_meat: "0 days"
          },
          adverse_effects: "No adverse effects at recommended doses. Natural metabolite; highly tolerable.",
          precautions: "Ensure adequate mixing for uniform distribution; consider in context of total diet (some endogenous synthesis occurs); benefits most pronounced in high-growth/high-production scenarios.",
          drug_interactions: "AMCHEM GAA-ACID may interact with other methyl donors (e.g., methionine, betaine) or creatine supplements, potentially affecting methylation balance. High co-supplementation should be monitored to avoid metabolic overload. Compatible with standard feed formulations at recommended concentrations.",
          storage: "15-25°C sealed. Protect from moisture (hygroscopic).",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "poultry",
            "swine",
            "cattle",
            "aquaculture"
          ]
        },
        {
          id: "amchem-monolaurin",
          brand: "AMCHEM",
          product: "AMCHEM MONOLAURIN",
          active_substance: "Alpha-Monolaurin (Glycerol Monolaurate)",
          composition: [
            "Alpha-Monolaurin 30%, 60%, or 90%", "Carrier: Pharmaceutical-grade excipients (concentration-dependent)",
          ],
          pack_size: "25 kg bags",
          description: "White to off-white powder or beads (varies by concentration and formulation).",
          pharmacological_properties: {
            mechanism_of_action: "Alpha-monolaurin is monoglyceride ester of lauric acid (C12:0) with potent antimicrobial properties. Antimicrobial Mechanism: Membrane disruption: Incorporates into bacterial membranes, particularly gram-positive organisms, disrupting lipid bilayer integrity. Envelope disruption: Disrupts lipid envelopes of enveloped viruses. Selective activity: Preferentially affects pathogenic bacteria while sparing beneficial microbiota. Quorum sensing inhibition: Interferes with bacterial communication systems regulating virulence factor expression",
            spectrum: "Particularly effective against gram-positive bacteria (Clostridium perfringens, Staphylococcus aureus, Streptococcus species) and certain enveloped viruses. Also shows activity against some gram-negative organisms and fungi.",
            pharmacokinetics: "Alpha-monolaurin acts primarily at the local level by integrating into microbial lipid membranes, causing membrane destabilization and lysis. Upon oral administration, absorption is moderate, with partial metabolism in the liver via β-oxidation to lauric acid and other fatty acid derivatives. Excretion occurs mainly via CO₂ and minor renal pathways. Minimal tissue accumulation is observed, ensuring a favorable safety profile.",
            scientific_evidence: "Research demonstrates monolaurin significantly reduces pathogenic bacterial colonization while maintaining beneficial Lactobacillus and Bifidobacterium populations. Studies show antimicrobial effects without inducing resistance (physical mechanism rather than biochemical). Nature Communications research indicates monolaurin enhances intestinal barrier function and reduces inflammatory responses. Proven effective against necrotic enteritis and other enteric challenges."
          },
          indications: [
            "Antibiotic growth promoter alternative", "Necrotic enteritis prevention (C. perfringens)", "Gram-positive pathogen control", "Viral challenge support (enveloped viruses)", "Intestinal health optimization", "Growth promotion and feed efficiency", "Immune function support"
          ],
          dosage_and_administration: {
            poultry: ["30% product: 1.0-3.0 kg/ton feed (300-900 mg monolaurin/kg)", "60% product: 0.5-1.5 kg/ton feed", "90% product: 0.3-1.0 kg/ton feed"],
            swine: ["30% product: 1.5-3.0 kg/ton feed", "60% product: 0.75-1.5 kg/ton feed", "90% product: 0.5-1.0 kg/ton feed"
            ],
            aquaculture: ["0.5-2.0 kg/ton feed (concentration and species-dependent)"]
          },
          contraindications: "None known.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
            aquaculture: "0 days"
          },
          adverse_effects: "No adverse effects at recommended doses. Natural fatty acid derivative; highly tolerable.",
          precautions: "Use coated/protected forms for targeted release and improved stability; ensure adequate mixing; fat-soluble compound\u2014consider total dietary fat content.",
          drug_interactions: "AMCHEM MONOLAURIN exhibits low interaction potential. Strong oxidizers or detergents may reduce its antimicrobial efficacy by degrading monolaurin. Compatible with standard feed, food, and pharmaceutical formulations when used at recommended concentrations. Caution is advised when combined with other lipid-based antimicrobials to avoid cumulative effects.",
          storage: "15-25°C sealed. Protect from moisture and light.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "layer",
            "turkey",
            "swine",
            "aquaculture"
          ]
        },
        {
          id: "amchem-c-butyrate",
          brand: "AMCHEM",
          product: "AMCHEM C-BUTYRATE",
          active_substance: "Calcium Butyrate",
          composition: [
            "Calcium Butyrate 50% or 90%", "Carrier: Pharmaceutical-grade excipients (for 50% product)",
          ],
          pack_size: "25 kg bags",
          description: "White to off-white powder or granules.",
          pharmacological_properties: {
            mechanism_of_action: "Calcium butyrate is calcium salt of butyric acid providing protected delivery throughout gastrointestinal tract. The calcium salt form has reduced odor compared to free butyric acid while maintaining biological activity. Butyric Acid Functions: Primary colonocyte energy source, Histone deacetylase (HDAC) inhibitor—modulates gene expression, Intestinal barrier enhancement (tight junction proteins), Anti-inflammatory effects, Antimicrobial activity, Immune modulation",
            spectrum: "AMCHEM C-BUTYRATE, containing 50% or 90% calcium butyrate, exhibits antimicrobial and gut-modulating activity. It selectively inhibits pathogenic bacteria (Salmonella spp., Clostridium spp., E. coli) while promoting beneficial gut microbiota. It enhances intestinal barrier integrity, reduces inflammation, and supports nutrient absorption, improving growth performance in livestock, aquaculture, and feed applications.",
            pharmacokinetics: "Calcium butyrate is hydrolyzed in the gastrointestinal tract to release butyric acid, which acts locally on enterocytes. Butyric acid provides energy for colonocytes, modulates gene expression, and supports mucosal health. Minimal systemic absorption occurs, and metabolic byproducts are either oxidized for energy or excreted via CO₂ and renal pathways. The excipient carrier (50% formulation) ensures stability and controlled release.",
            scientific_evidence: "Studies demonstrate calcium butyrate improves intestinal morphology (villus height:crypt depth ratio), enhances nutrient absorption, reduces pathogenic bacteria, and improves growth performance. Research shows protective effects against enteric pathogens and inflammatory challenges. Particularly effective in post-weaning piglets and during coccidial challenges in poultry."
          },
          indications: [
            "Antibiotic growth promoter alternative", "Intestinal health and integrity support", "Post-weaning diarrhea prevention", "Inflammatory condition management", "Coccidiosis challenge support", "Growth promotion and feed efficiency", "Immune function enhancement", "Supplemental calcium provision"
          ],
          dosage_and_administration: {
            poultry: ["50% product: 1.0-2.0 kg/ton feed", "90% product: 0.5-1.0 kg/ton feed", "Increase during coccidial or bacterial challenges"],
            swine: ["50% product: 1.0-3.0 kg/ton feed (500-1500 mg calcium butyrate/kg; ~300-900 mg butyric acid/kg)", "90% product: 0.5-1.5 kg/ton feed", "Particularly beneficial first 4 weeks post-weaning"],
            cattle: ["50% product: 0.5-2.0 kg/ton concentrate", "90% product: 0.3-1.0 kg/ton"],
            aquaculture: ["0.5-2.0 kg/ton feed (concentration-dependent)"]
          },
          contraindications: "None known.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
            cattle_meat: "0 days",
            aquaculture: "0 days"
          },
          adverse_effects: "No adverse effects. Natural metabolite; excellent tolerance.",
          precautions: "Coated/microencapsulated forms preferred for targeted release and odor control; ensure uniform mixing; consider total dietary calcium when formulating.",
          drug_interactions: "AMCHEM C-BUTYRATE exhibits low potential for interactions. Strong acids or alkalis may reduce stability. Co-administration with other gut-modulating or acidifying agents is generally compatible, but cumulative pH effects should be monitored to maintain optimal gastrointestinal function.",
          storage: "15-25°C sealed. Protect from moisture.",
          shelf_life: "24 months For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "layer",
            "swine",
            "cattle",
            "aquaculture"
          ]
        },
        {
          id: "amchem-s-butyrate",
          brand: "AMCHEM",
          product: "AMCHEM S-BUTYRATE",
          active_substance: "Sodium Butyrate",
          composition: [
            "Sodium Butyrate 30%, 70%, or 90%", "Carrier: Pharmaceutical-grade excipients (concentration-dependent)",
          ],
          pack_size: "25 kg bags",
          description: "White to off-white powder or granules with characteristic odor (varies by coating).",
          pharmacological_properties: {
            mechanism_of_action: "Sodium butyrate is sodium salt of butyric acid. Similar to calcium butyrate, provides protected butyrate delivery with reduced odor compared to free acid. Butyric Acid Functions: Colonocyte energy metabolism, Gene expression regulation (HDAC inhibition), Intestinal barrier enhancement, Anti-inflammatory effects, Antimicrobial properties, Immune modulation, Gut microbiota optimization",
            spectrum: "AMCHEM S-BUTYRATE, containing 30%, 70%, or 90% sodium butyrate, exhibits potent antimicrobial and gut-modulating properties. It selectively suppresses pathogenic bacteria (Salmonella spp., Clostridium spp., E. coli) while supporting beneficial microbiota growth. Sodium butyrate enhances intestinal barrier function, regulates inflammation, and improves nutrient absorption, promoting growth performance in livestock and aquaculture.",
            pharmacokinetics: "Sodium butyrate releases butyric acid upon hydrolysis in the gastrointestinal tract, acting locally on enterocytes to provide energy, modulate gene expression, and maintain mucosal integrity. Systemic absorption is minimal; metabolized butyrate is oxidized to CO₂ or utilized for energy by colonocytes. The excipient carrier ensures stability, controlled release, and ease of incorporation into feed or food matrices.",
            scientific_evidence: "Extensive research demonstrates sodium butyrate efficacy in improving intestinal health, reducing pathogenic colonization, enhancing growth performance, and supporting immune function. Studies show benefits comparable to calcium butyrate and tributyrin. Particularly effective in preventing post-weaning disorders and managing enteric challenges. Nature research indicates butyrate supplementation comparable or superior to traditional AGPs for growth promotion."
          },
          indications: [
            "Antibiotic growth promoter alternative", "Intestinal health and mucosal integrity support", "Post-weaning diarrhea prevention in piglets", "Necrotic enteritis prevention in poultry", "Inflammatory bowel condition management", "Growth promotion and feed efficiency improvement", "Coccidiosis challenge support", "Immune function enhancement"
          ],
          dosage_and_administration: {
            poultry: [
              "Broilers: 30% product: 1.0-3.0 kg/ton feed", "70% product: 0.4-1.3 kg/ton feed", "90% product: 0.3-1.0 kg/ton feed", "Increase during enteric or coccidial challenges",
              "Layers: 30% product: 0.5-1.5 kg/ton feed", "70% product: 0.2-0.6 kg/ton feed", "90% product: 0.15-0.5 kg/ton feed"
            ],
            swine: [
              "piglets: 30% product: 1.0-4.0 kg/ton feed (300-1200 mg sodium butyrate/kg; ~200-800 mg butyric acid/kg)", "70% product: 0.5-1.7 kg/ton feed", "90% product: 0.3-1.3 kg/ton feed", "Critical period: First 4 weeks post-weaning",
              "grower_finisher: 30% product: 0.5-2.0 kg/ton feed", "70% product: 0.2-0.9 kg/ton feed", "90% product: 0.15-0.7 kg/ton feed"
            ],
            cattle: ["30% product: 0.5-2.0 kg/ton concentrate", "70% product: 0.2-0.9 kg/ton", "90% product: 0.15-0.7 kg/ton"],
            aquaculture: ["0.5-2.0 kg/ton feed (concentration and species-dependent)"]
          },
          contraindications: "None known.",
          withdrawal_period: {
            poultry_meat: "0 days",
            swine_meat: "0 days",
            cattle_meat: "0 days",
            aquaculture: "0 days"
          },
          adverse_effects: "No adverse effects at recommended doses. Natural metabolite present in GI tract; excellent tolerance across species.",
          precautions: "Use coated/microencapsulated formulations for:  Targeted release (survive upper GI tract, release in intestine) Odor control (uncoated butyrate has strong odor) Stability during feed processing Ensure uniform mixing throughout feed Consider total dietary sodium when formulating (particularly important in poultry) Store properly to maintain coating integrity",
          drug_interactions: "AMCHEM S-BUTYRATE exhibits low interaction potential. Strong acids, alkalis, or oxidizing agents may reduce stability or bioavailability. Concurrent use with other gut-modulating or acidifying agents is generally compatible, but cumulative pH effects should be monitored to maintain gastrointestinal homeostasis.",
          storage: "15-25°C sealed containers. Protect from moisture (critical for coated products). Store away from strong odors (uncoated products may absorb odors).",
          shelf_life: "24 months (coated products); verify for specific formulations For Veterinary Use Only",
          veterinary_use_only: true,
          species: [
            "broiler",
            "layer",
            "swine",
            "cattle",
            "aquaculture"
          ]
        }]
    }
  ]
};


export const arrOfSpecies = ["broiler",
            "layer",
            "swine",
            "cattle", "turkey", "goats-and-sheep", "rabbits", "aquaculture" ]