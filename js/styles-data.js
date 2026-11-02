// Bibliothèque centrale : ajoutez vos styles dans ce tableau.
const styles = [
    { id: 1, name: "Aesthetic Study Notes", category: "Study & Education", description: "Des fiches douces et organisées avec des couleurs pastel et des annotations délicates.", image: "assets/images/styles/aesthetic.svg", tags: ["Pastel", "Study", "Notes"], prompt: `Tu es un designer spécialisé dans les supports pédagogiques esthétiques.\n\nJe vais te fournir un document. Utilise son contenu pour créer un support dans le style Aesthetic Study Notes.\n\nDirection artistique : palette pastel beige, rose poudré et blanc cassé ; titres élégants ; typographie très lisible ; encadrés arrondis ; petites illustrations minimalistes ; annotations discrètes ; mise en page aérée et harmonieuse.\n\nConserve les informations importantes du document, respecte leur sens et organise-les clairement. N'invente aucune information. Applique cette identité visuelle de façon cohérente à tout le résultat.` },
    { id: 2, name: "Futuristic Tech", category: "Presentation", description: "Un univers technologique sombre, lumineux et moderne, inspiré des interfaces du futur.", image: "assets/images/styles/futuristic.svg", tags: ["Technology", "Dark", "Neon"], prompt: `Agis comme un directeur artistique spécialisé dans les présentations technologiques. Utilise le document que je joins et applique le style Futuristic Tech : fond sombre, accents bleu électrique et violet, contrastes lumineux, grilles fines, formes géométriques, schémas modernes et typographie sans-serif nette. Structure les idées avec une hiérarchie claire. Préserve les faits, les chiffres et les explications du document original. N'ajoute pas de contenu non vérifié.` },
    { id: 3, name: "Minimalist Editorial", category: "Professional & Editorial", description: "Une mise en page épurée, beaucoup d'espace blanc et une typographie soignée.", image: "assets/images/styles/minimalist.svg", tags: ["Minimal", "Clean", "Editorial"], prompt: `Tu es un designer éditorial. Transforme le document fourni en un support au style Minimalist Editorial : fond blanc ou ivoire, palette limitée, grandes marges, typographie élégante, titres hiérarchisés, alignements précis et éléments graphiques réduits au nécessaire. Privilégie la lisibilité et la simplicité. Conserve les informations et le sens du document sans inventer de contenu.` },
    { id: 4, name: "Colorful Infographic", category: "Visual & Diagram", description: "Des informations transformées en blocs visuels, pictogrammes et schémas colorés.", image: "assets/images/styles/infographic.svg", tags: ["Infographic", "Colorful", "Visual"], prompt: `Agis comme un expert en infographie pédagogique. À partir du document joint, crée un support au style Colorful Infographic : palette vive mais équilibrée, sections visuelles, pictogrammes cohérents, flèches, diagrammes, chiffres mis en évidence et textes courts. Organise les informations de manière logique et facile à parcourir. Respecte fidèlement le contenu source et n'omets aucune notion essentielle.` },
    { id: 5, name: "Pixel Art", category: "Creative & Artistic", description: "Un univers rétro inspiré des jeux vidéo, avec des pixels et des couleurs franches.", image: "assets/images/styles/pixel.svg", tags: ["Pixel", "Retro", "Creative"], prompt: `Tu es un designer spécialisé en pixel art. Utilise le document fourni pour créer un support dans un style rétro jeu vidéo : illustrations pixelisées, icônes 8-bit, cadres carrés, palette cohérente et contrastée, petits éléments ludiques et titres inspirés des interfaces de jeux. Garde une excellente lisibilité. Préserve toutes les informations importantes et leur exactitude.` },
    { id: 6, name: "Hand-drawn Notebook", category: "Creative & Artistic", description: "L'apparence d'un carnet de notes avec dessins, soulignements et annotations manuscrites.", image: "assets/images/styles/handdrawn.svg", tags: ["Notebook", "Sketch", "Hand-drawn"], prompt: `Agis comme un illustrateur pédagogique. Applique au document fourni un style Hand-drawn Notebook : papier clair, titres manuscrits lisibles, encadrés dessinés à la main, flèches, surlignages doux, petits croquis explicatifs et annotations. Le résultat doit ressembler à un carnet de révision soigné. Conserve fidèlement le contenu et organise les notions sans en modifier le sens.` },



    // ==========================================
    // 1. STUDY & EDUCATION
    // ==========================================

    {
        id: 7,
        name: "Aesthetic Study Notes",
        category: "Study & Education",
        description: "Beautiful and organized study notes with soft colors and elegant typography.",
        image: "assets/images/styles/aesthetic-study-notes.svg",
        tags: ["Study", "Notes", "Aesthetic"],
        prompt: `Transform the attached document into beautiful Aesthetic Study Notes.Use a soft palette of beige, cream, pastel pink, sage green and lavender.
        Create organized sections, elegant headings, highlighted keywords,
        color-coded information, small icons and clean typography.

        Use rounded information boxes, subtle dividers and balanced spacing.
        Make the document visually attractive while remaining easy to study.
        Preserve all original information, definitions, examples and explanations.
        Do not invent, remove or change any information.`
    },

    {
        id: 8,
        name: "Cornell Notes",
        category: "Study & Education",
        description: "A structured academic note-taking layout with questions, notes and summaries.",
        image: "assets/images/styles/cornell-notes.jpg",
        tags: ["Academic", "Revision", "Organization"],
        prompt: `Transform the attached document into a Cornell Notes layout.

Organize the content into three main areas:
1. A narrow left column for key questions and keywords.
2. A large right column for detailed notes and explanations.
3. A bottom section for a concise summary.

Use a clean white and warm beige palette, professional typography,
thin dividers and clear academic formatting.

Keep all original information and organize it logically.
Do not invent questions or answers that are not supported by the source.`
    },

    {
        id: 9,
        name: "Mind Map",
        category: "Study & Education",
        description: "A visual learning structure connecting central ideas and related concepts.",
        image: "assets/images/styles/mind-map.svg",
        tags: ["Mind Map", "Learning", "Concepts"],
        prompt: `Convert the attached document into a clear educational Mind Map.

Identify the main topic and place it in a central node.
Organize related ideas into branches and sub-branches.
Use connecting lines, short labels, keywords and distinct colors
to show relationships between concepts.

Create a balanced layout with clear visual hierarchy.
Keep the original concepts and their relationships accurate.
Do not invent facts or omit important information.
Use readable text and avoid overcrowding.`
    },

    {
        id: 10,
        name: "Flashcards",
        category: "Study & Education",
        description: "Educational question-and-answer cards for active recall and revision.",
        image: "assets/images/styles/flashcards.svg",
        tags: ["Revision", "Questions", "Learning"],
        prompt: `Transform the attached learning material into a set of educational Flashcards.

Create individual cards with one clear question or concept on the front
and its corresponding answer or explanation on the back.

Use a clean card-based layout with soft pastel colors,
rounded corners, clear typography and subtle visual accents.
Organize the cards by topic and difficulty when possible.

Keep answers accurate and based only on the supplied document.
Cover the important definitions, facts and concepts.
Do not invent information or change the original meaning.`
    },

    {
        id: 11,
        name: "Handwritten Notes",
        category: "Study & Education",
        description: "Natural handwritten notebook pages with highlighted concepts and annotations.",
        image: "assets/images/styles/handwritten-notes.svg",
        tags: ["Notebook", "Handwriting", "Study"],
        prompt: `Transform the attached document into realistic Handwritten Study Notes.

Use an ivory notebook-paper background with subtle ruled lines.
Apply a neat handwritten-style font for selected headings and annotations,
combined with highly readable body text.

Include colored underlines, handwritten-style arrows,
small margin notes, highlighted definitions and simple sketches.
Use blue, dark ink, muted pink and soft yellow accents.

Maintain a natural student notebook appearance.
Preserve all original information and ensure every word remains readable.`
    },

    {
        id: 12,
        name: "Science Notes",
        category: "Study & Education",
        description: "Scientific learning notes with formulas, diagrams and organized explanations.",
        image: "assets/images/styles/science-notes.svg",
        tags: ["Science", "Formulas", "Education"],
        prompt: `Transform the attached document into professional Science Study Notes.

Use a clean white background with navy blue, teal and light blue accents.
Organize scientific concepts into sections with clear headings.
Highlight formulas, definitions, variables and important results.

Include accurate labeled diagrams, scientific symbols and structured tables
when they are relevant to the original content.

Keep mathematical and scientific notation accurate.
Do not invent formulas, measurements or scientific facts.
Preserve all original explanations and information.`
    },


    // ==========================================
    // 2. PRESENTATION PROFESSIONAL & EDITORIAL
    // ==========================================

    {
        id: 13,
        name: "Minimalist Editorial",
        category: "Presentation Professional & Editorial",
        description: "An elegant editorial layout with generous whitespace and refined typography.",
        image: "assets/images/styles/minimalist-editorial.svg",
        tags: ["Minimal", "Editorial", "Elegant"],
        prompt: `Redesign the attached document using a Minimalist Editorial style.

Use an ivory or off-white background, charcoal typography
and subtle beige accents.
Create generous whitespace, elegant typography,
strong alignment and carefully structured sections.

Use refined headings, thin separators and minimal decorative elements.
Give the document a premium editorial appearance.
Prioritize readability and visual balance.
Preserve all original content and meaning.`
    },

    {
        id: 14,
        name: "Swiss Design",
        category: "Presentation Professional & Editorial",
        description: "A precise graphic design style based on grids, alignment and typography.",
        image: "assets/images/styles/swiss-design.svg",
        tags: ["Grid", "Typography", "Modern"],
        prompt: `Apply the International Swiss Graphic Design style.

Use a strict modular grid, strong alignment,
bold sans-serif typography and asymmetrical composition.
Use a restrained palette of white, black, grey and one accent color.

Create a strong information hierarchy with precise spacing.
Use geometric structure and clean visual organization.
Avoid unnecessary decoration.
Preserve all original content and meaning.`
    },

    {
        id: 15,
        name: "Corporate Professional",
        category: "Presentation Professional & Editorial",
        description: "A polished business design for reports, proposals and professional documents.",
        image: "assets/images/styles/corporate-professional.svg",
        tags: ["Business", "Corporate", "Professional"],
        prompt: `Transform the attached document into a Corporate Professional design.

Use a sophisticated palette of navy blue, white, light grey
and restrained gold or blue accents.
Apply modern sans-serif typography, structured sections,
professional tables, clean charts and consistent spacing.

Create a polished business-document appearance.
Highlight key findings and important information.
Keep the layout formal, clear and easy to navigate.
Preserve all original facts, data and meaning.`
    },

    {
        id: 16,
        name: "Newspaper Editorial",
        category: "Presentation Professional & Editorial",
        description: "A classic newspaper-inspired layout with columns and strong headlines.",
        image: "assets/images/styles/newspaper-editorial.svg",
        tags: ["Newspaper", "Editorial", "Classic"],
        prompt: `Redesign the attached document in a Newspaper Editorial style.

Use an off-white paper background, black typography,
elegant serif headlines and subtle grey dividers.
Organize information into balanced editorial columns.
Use clear subtitles, captions, highlighted quotations
and carefully aligned text blocks.

Create a sophisticated newspaper or magazine appearance.
Do not fabricate quotations, sources or facts.
Preserve all original information and meaning.`
    },

    {
        id: 17,
        name: "Luxury Presentation",
        category: "Presentation Professional & Editorial",
        description: "A premium visual identity with refined typography and elegant details.",
        image: "assets/images/styles/luxury-presentation.svg",
        tags: ["Luxury", "Premium", "Elegant"],
        prompt: `Transform the attached document into a Luxury Presentation design.

Use a sophisticated palette of ivory, champagne, warm beige,
deep brown and subtle metallic gold accents.
Apply elegant typography, generous whitespace,
refined separators and premium visual composition.

Use restrained decorative details and sophisticated layouts.
Make important information stand out without visual clutter.
Maintain excellent readability.
Preserve all original information and meaning.`
    },

    {
        id: 18,
        name: "Modern Magazine",
        category: "Presentation Professional & Editorial",
        description: "A contemporary magazine layout with bold titles and visual storytelling.",
        image: "assets/images/styles/modern-magazine.svg",
        tags: ["Magazine", "Modern", "Editorial"],
        prompt: `Transform the attached document into a Modern Magazine layout.

Use a contemporary editorial grid, bold typography,
large section headings and carefully balanced visual elements.
Combine clean backgrounds with selected accent colors.
Use visual storytelling, elegant captions,
highlighted information and organized content blocks.

Create a professional magazine-inspired composition.
Keep the document cohesive and easy to read.
Preserve all original information and meaning.`
    },


    // ==========================================
    // 3. VISUAL & DIAGRAM
    // ==========================================

    {
        id: 19,
        name: "Infographic",
        category: "Visual & Diagram",
        description: "A visual summary using icons, statistics and organized information blocks.",
        image: "assets/images/styles/infographic.svg",
        tags: ["Infographic", "Visual", "Data"],
        prompt: `Transform the attached document into a professional Infographic.

Organize information into clear visual sections.
Use icons, short text blocks, numbered steps,
simple charts, labels and visual comparisons where appropriate.

Choose a harmonious color palette with strong contrast.
Create a clear reading path and consistent visual hierarchy.
Use visual elements to explain the information, not replace it.

Keep statistics and facts accurate.
Do not invent numbers or information.
Preserve the meaning of the original content.`
    },

    {
        id: 20,
        name: "Technical Blueprint",
        category: "Visual & Diagram",
        description: "An engineering-inspired design with technical grids and precise annotations.",
        image: "assets/images/styles/technical-blueprint.svg",
        tags: ["Engineering", "Technical", "Blueprint"],
        prompt: `Transform the attached document into a Technical Blueprint design.

Use a deep navy blue background with white and cyan technical lines.
Include structured grids, precise annotations,
numbered labels, technical symbols and engineering-style typography.

Represent technical concepts using clear diagrams when relevant.
Keep all labels and measurements accurate to the source.
Do not invent technical specifications or dimensions.
Preserve all original information and meaning.`
    },

    {
        id: 21,
        name: "Flowchart",
        category: "Visual & Diagram",
        description: "A structured process diagram showing steps, decisions and connections.",
        image: "assets/images/styles/flowchart.svg",
        tags: ["Process", "Diagram", "Workflow"],
        prompt: `Convert the attached document into a clear professional Flowchart.

Identify the processes, steps, decisions and relationships.
Use standard flowchart symbols:
rounded rectangles for start and end,
rectangles for processes, diamonds for decisions
and arrows to show the direction of the workflow.

Use consistent colors, readable labels and balanced spacing.
Make the process easy to understand from beginning to end.
Do not invent steps or change the logical order of the source.`
    },

    {
        id: 22,
        name: "3D Explainer",
        category: "Visual & Diagram",
        description: "A modern educational visual style using depth and dimensional illustrations.",
        image: "assets/images/styles/3d-explainer.svg",
        tags: ["3D", "Explainer", "Visual"],
        prompt: `Transform the attached document into a modern 3D Explainer design.

Use clean 3D illustrations, dimensional objects,
soft realistic shadows, layered visual elements and rounded panels.
Choose a harmonious palette with light backgrounds and vivid accents.

Use 3D visualizations to explain complex ideas when appropriate.
Keep labels, explanations and diagrams clear and accurate.
Avoid excessive effects that reduce readability.
Preserve all original content and meaning.`
    },

    {
        id: 23,
        name: "Scientific Diagram",
        category: "Visual & Diagram",
        description: "Precise scientific illustrations with labels and explanatory annotations.",
        image: "assets/images/styles/scientific-diagram.svg",
        tags: ["Science", "Diagram", "Educational"],
        prompt: `Transform the attached document into a Scientific Diagram presentation.

Use a clean white background, precise illustrations,
clear labels, thin connector lines and organized annotations.
Use restrained scientific colors such as navy, teal, green and grey.

Represent structures, systems and scientific processes accurately.
Keep all labels connected to the correct elements.
Do not invent scientific details or alter the source information.
Prioritize precision, clarity and educational value.`
    },

    {
        id: 24,
        name: "Data Visualization",
        category: "Visual & Diagram",
        description: "A clear data-focused design with charts, graphs and statistical highlights.",
        image: "assets/images/styles/data-visualization.svg",
        tags: ["Data", "Charts", "Statistics"],
        prompt: `Transform the attached document into a professional Data Visualization design.

Identify the available numerical data and present it
using appropriate charts, graphs, tables and visual comparisons.
Use consistent colors, clear axis labels, legends and titles.
Highlight important trends and comparisons.

Choose chart types that accurately represent the data.
Never invent data, values, percentages or conclusions.
Preserve the original numbers and explain them clearly.
If no numerical data exists, use structured visual diagrams instead.`
    },


    // ==========================================
    // 4. CREATIVE & ARTISTIC
    // ==========================================

    {
        id: 25,
        name: "Dark Academia",
        category: "Creative & Artistic",
        description: "A vintage academic atmosphere with dark brown, parchment and classical details.",
        image: "assets/images/styles/dark-academia.svg",
        tags: ["Vintage", "Academic", "Classic"],
        prompt: `Transform the attached document using a Dark Academia visual identity.

Use dark brown, cream, parchment beige and muted gold.
Apply elegant serif typography, vintage paper textures,
classic academic details and sophisticated editorial layouts.

Create a timeless intellectual atmosphere.
Use subtle illustrations and refined decorative elements.
Keep all information readable.
Preserve all original content and meaning.`
    },

    {
        id: 26,
        name: "Kawaii Pastel",
        category: "Creative & Artistic",
        description: "A cute and playful visual identity with pastel colors and charming details.",
        image: "assets/images/styles/kawaii-pastel.svg",
        tags: ["Cute", "Pastel", "Playful"],
        prompt: `Transform the attached document into a Kawaii Pastel visual style.

Use pastel pink, lavender, baby blue, mint green and cream.
Include cute illustrations, rounded shapes,
friendly icons, small stars and playful headings.

Create a cheerful and charming visual composition.
Keep the layout structured and readable.
Avoid excessive decorations.
Preserve all original information and meaning.`
    },

    {
        id: 27,
        name: "Cyberpunk Neon",
        category: "Creative & Artistic",
        description: "A futuristic digital aesthetic with neon colors and dark backgrounds.",
        image: "assets/images/styles/cyberpunk-neon.svg",
        tags: ["Cyberpunk", "Neon", "Futuristic"],
        prompt: `Transform the attached document into a Cyberpunk Neon visual experience.

Use a deep black or midnight navy background
with electric cyan, magenta, violet and neon blue accents.
Apply futuristic typography, glowing borders,
digital panels and subtle technological grid patterns.

Create a bold futuristic atmosphere.
Maintain strong contrast and excellent readability.
Do not allow visual effects to hide the content.
Preserve all original information and meaning.`
    },

    {
        id: 28,
        name: "Botanical Organic",
        category: "Creative & Artistic",
        description: "A natural artistic style inspired by plants, leaves and earthy colors.",
        image: "assets/images/styles/botanical-organic.svg",
        tags: ["Nature", "Organic", "Botanical"],
        prompt: `Transform the attached document into a Botanical Organic design.

Use sage green, olive, warm beige, ivory and earthy brown.
Include delicate botanical illustrations, leaf motifs,
organic shapes and subtle natural textures.

Apply elegant typography and balanced compositions.
Create a calm, refined and nature-inspired atmosphere.
Use decorations sparingly and keep the content readable.
Preserve all original information and meaning.`
    },

    {
        id: 29,
        name: "Retro 90s",
        category: "Creative & Artistic",
        description: "A colorful nostalgic graphic identity inspired by 1990s design.",
        image: "assets/images/styles/retro-90s.svg",
        tags: ["Retro", "90s", "Colorful"],
        prompt: `Transform the attached document into a 1990s Retro Graphic Design.

Use vibrant purple, turquoise, hot pink, yellow and black.
Include bold geometric shapes, checkerboard patterns,
retro typography and nostalgic graphic details.

Create an energetic and playful composition.
Use strong visual hierarchy and organized sections.
Keep all text readable.
Preserve all original content and meaning.`
    },

    {
        id: 30,
        name: "Japanese Minimalism",
        category: "Creative & Artistic",
        description: "A peaceful Japanese-inspired aesthetic based on simplicity and harmony.",
        image: "assets/images/styles/japanese-minimalism.svg",
        tags: ["Japanese", "Minimal", "Zen"],
        prompt: `Transform the attached document using Japanese Minimalism.

Use warm white, ivory, beige, charcoal and natural muted colors.
Create generous whitespace, balanced composition,
simple geometric forms and delicate lines.

Use elegant minimal typography and subtle Japanese-inspired details.
Prioritize simplicity, harmony and visual clarity.
Avoid unnecessary decoration and visual clutter.
Preserve all original information and meaning.`
    }



];
const categories = [...new Set(styles.map(style => style.category))];