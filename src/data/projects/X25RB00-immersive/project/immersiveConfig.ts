import type { ProjectConfig } from '../../../../components/blocks/types';

export const immersiveConfig: ProjectConfig = {
  id: 'X25-RB00',
  title: 'Immersive Learning',
  code: 'X25-RB00',
  subtitle: 'Exploring Immersive Technologies in Education',
  category: 'immersive',
  researcher: 'Alex Wickes',
  totalHours: 40,
  accentColor: '#00A9E0',

  blocks: [
    // ===== 1. OVERVIEW (Slides 1-10) =====
    {
      type: 'section',
      id: 'section-overview',
      data: { title: 'Overview' },
    },
    {
      type: 'text-content',
      id: 'overview-intro',
      data: {
        content: `**Immersive Learning** is learning with a physical experience **enhanced** by a digital experience.

This research explores how immersive technologies can transform educational environments, providing students with opportunities for authentic situations, boundless landscapes, and shared experiences that were previously impossible in traditional classroom settings.

As part of the GPISD initiative, this study examines the vision, implementation strategies, vendor landscape, and cost considerations for bringing immersive learning to K-12 education.`,
      },
    },
    {
      type: 'key-findings',
      id: 'overview-findings',
      data: {
        findings: [
          {
            title: 'Authentic Situations',
            value: 'Real-World Learning',
            detail: 'Immersive learning provides opportunities for authentic, experiential situations',
            icon: 'target',
          },
          {
            title: 'Boundless Landscapes',
            value: 'Scalable Experiences',
            detail: 'Students can explore environments impossible to visit physically',
            icon: 'globe',
          },
          {
            title: 'Shared Experiences',
            value: 'Collaborative Discovery',
            detail: 'Students share experiences with others and discover on their own',
            icon: 'users',
          },
          {
            title: 'Knowledge Retention',
            value: '75%',
            detail: 'Learning through experience can boost knowledge retention by 75%',
            icon: 'brain',
          },
        ],
      },
    },
    {
      type: 'image-gallery',
      id: 'overview-gallery',
      title: 'TM Clark Renderings',
      data: {
        images: [
          {
            src: '/images/projects/X25RB00-immersive/tmclark-ocean.jpeg',
            alt: 'TMC - In The Ocean',
            caption: 'TMC - In The Ocean - Full panoramic immersion with floor projection',
          },
          {
            src: '/images/projects/X25RB00-immersive/tmclark-eye.jpeg',
            alt: 'TMC - The Eye',
            caption: 'TMC - The Eye - Central viewing experience surrounded by immersion',
          },
          {
            src: '/images/projects/X25RB00-immersive/tmclark-render-01.png',
            alt: 'TM Clark Immersive Library - Ocean Theme',
            caption: 'The Eye Below The Boats - Immersive ocean experience',
          },
          {
            src: '/images/projects/X25RB00-immersive/tmclark-render-02.png',
            alt: 'TM Clark Immersive Library - Forest Theme',
            caption: 'Lab Entry - Transition into immersive space',
          },
          {
            src: '/images/projects/X25RB00-immersive/tmclark-render-03.jpeg',
            alt: 'TM Clark Hands-On Lab',
            caption: 'Hands-On Lab - Flexible making space',
          },
          {
            src: '/images/projects/X25RB00-immersive/tmclark-render-04.jpeg',
            alt: 'TM Clark Immersive Experience',
            caption: 'Entering Immersion - Student perspective',
          },
          {
            src: '/images/projects/X25RB00-immersive/tmclark-render-05.jpeg',
            alt: 'TM Clark Ocean Environment',
            caption: 'In The Ocean - Full panoramic immersion',
          },
          {
            src: '/images/projects/X25RB00-immersive/tmclark-render-06.jpeg',
            alt: 'TM Clark The Eye',
            caption: 'The Eye - Central viewing experience',
          },
        ],
        columns: 3,
      },
    },

    // ===== 2. THE IMMERSIVE VISION (Slides 2-5) =====
    {
      type: 'section',
      id: 'section-vision',
      data: { title: 'The Immersive Vision', sources: [1, 2, 3] },
    },
    {
      type: 'text-content',
      id: 'vision-intro',
      data: {
        content: `Immersive Learning sits at the intersection of **Experiential Learning** and emerging technologies. It connects to multiple educational frameworks:

- **STEM/STEAM** - Science, Technology, Engineering, Arts, and Math integration
- **CTE Programs** - Career and Technical Education pathways
- **Outdoor Learning** - Nature-based educational experiences
- **Play-Based Learning** - Learning through structured and unstructured play

The key question: If we have an immersive learning space, **how do we use it effectively?**`,
      },
    },

    // ===== 3. IMMERSIVE COMPOSITIONS (Slides 11-19) =====
    {
      type: 'section',
      id: 'section-compositions',
      data: { title: 'Immersive Compositions', sources: [4, 5, 6, 7, 8, 9] },
    },
    {
      type: 'text-content',
      id: 'compositions-intro',
      data: {
        content: `**Crafting Immersive Lessons** requires understanding how content, space, and technology work together.

When talking about immersive content:
- **Play** helps students make sense of their world
- Play includes **choice, various outcomes, and levels of engagement**
- Play is physical/locomotor, constructive, and language-based

The **Immersive Learning Vision** consists of three key components:
1. **Content** - The educational material and experiences
2. **Space** - The physical environment and its affordances
3. **Composition** - How content and space are orchestrated together`,
      },
    },
    {
      type: 'text-content',
      id: 'compositions-bloom',
      title: "Bloom's Digital Taxonomy",
      data: {
        content: `**Bloom's Taxonomy** arranges actions based on the level of cognition. A digital overlay should **aid, not replace** traditional learning.

The **Technology Implementation Matrix** can guide the use of immersive technologies:
- Consider the cognitive level being targeted
- Match technology to learning objectives
- Ensure technology enhances rather than distracts`,
      },
    },
    {
      type: 'image-gallery',
      id: 'compositions-gallery',
      data: {
        images: [
          {
            src: '/images/projects/X25RB00-immersive/compositions-bloom.png',
            alt: "Bloom's Digital Taxonomy",
            caption: "Bloom's Taxonomy adapted for digital learning environments",
          },
          {
            src: '/images/projects/X25RB00-immersive/compositions-apple.png',
            alt: 'Apple Spatial Design Canvas',
            caption: 'Apple guidelines for arranging immersive content alongside the real world',
          },
        ],
        columns: 2,
      },
    },
    {
      type: 'text-content',
      id: 'compositions-apple',
      title: 'Digital Content Guidelines',
      data: {
        content: `**Apple's Spatial Design principles** provide guidance for immersive experiences:

- Reserve **full immersion for special moments** - don't overuse it
- Consider the **spatial relationship** between digital and physical
- Design for **comfort and accessibility**
- Allow users to **control their level of immersion**`,
      },
    },
    {
      type: 'workflow-steps',
      id: 'compositions-process',
      title: 'Making the Immersive Composition',
      description: 'A process for functional educational content - by Daniel Forrester of PEAK Institute',
      data: {
        steps: [
          {
            number: 1,
            title: 'The teacher has an idea',
            status: 'complete',
            findings: ['Teachers review curriculum and develop lesson plans that may be effective as immersive lessons'],
          },
          {
            number: 2,
            title: 'Submits the Idea via Online Form',
            status: 'complete',
            findings: ['Teachers submit plans, supporting materials, and ideas on how to use the space'],
          },
          {
            number: 3,
            title: 'Lesson Idea is Reviewed',
            status: 'complete',
            findings: ['An immersive team receives the Form, examines the goal of the lesson, curates the content, and tests the resources'],
          },
          {
            number: 4,
            title: 'Composition is Created',
            status: 'complete',
            findings: ['Once the material is given the ok, the teacher is notified and the composition is created'],
          },
          {
            number: 5,
            title: 'Lesson is Scheduled',
            status: 'complete',
            findings: ['The teacher books the room, does a demo run, and administers the immersive composition'],
          },
        ],
      },
    },

    // ===== 4. IMMERSIVE CONTENT GUIDELINES (Slides 20-25) =====
    {
      type: 'section',
      id: 'section-content',
      data: { title: 'Immersive Content Guidelines' },
    },
    {
      type: 'key-findings',
      id: 'content-principles',
      title: 'Guiding Principles',
      data: {
        findings: [
          {
            title: 'Interactions',
            value: 'Affordance',
            detail: 'Design for natural, intuitive interactions',
            icon: 'hand',
          },
          {
            title: 'Experience Type',
            value: 'Individual vs Shared',
            detail: 'Consider whether experiences are solo or collaborative',
            icon: 'users',
          },
          {
            title: 'Movement',
            value: 'Stationary vs Active',
            detail: 'Plan for student movement and physical engagement',
            icon: 'move',
          },
          {
            title: 'Environment',
            value: 'Scale, Light, Sound',
            detail: 'Consider the full sensory environment',
            icon: 'sun',
          },
        ],
      },
    },
    {
      type: 'text-content',
      id: 'content-costs',
      title: 'Cost Considerations',
      data: {
        content: `**Costs for installed systems can be upwards of $100,000** depending on the scale and scope. Additional coordination on hardware specifications and MEP requirements is needed.

Key cost factors:
- **Installed systems** can be location-specific and require architectural integration
- **Ground-up content** requires dedicated development leading to additional costs
- **Specialized content** requires updates with the curriculum
- **Free content** is available but may not align with specific learning objectives

**Mobile systems can be shared between locations**, reducing per-site costs while still providing immersive experiences.`,
      },
    },
    {
      type: 'text-content',
      id: 'content-experiences',
      title: 'Experience Spectrum',
      data: {
        content: `Systems range from **individual to shared**, and **stationary to active** experiences:

- **Stationary experiences** allow students to have a "4th wall" experience
- **Sensory modules** can convert an active space into a stationary one
- **Device-based systems** are movable and easily transported
- **Fixed systems** are built into dedicated spaces`,
      },
    },

    // ===== 5. HARDWARE & SOFTWARE (Slides 26-31) =====
    {
      type: 'section',
      id: 'section-hardware',
      data: { title: 'Hardware & Software Framework', sources: [10, 11] },
    },
    {
      type: 'text-content',
      id: 'hardware-intro',
      data: {
        content: `The immersive learning ecosystem consists of five interconnected layers:

**Content** -> **Marketplace** -> **Converter** -> **End Device** -> **User**

Each layer has different options ranging from generalized/low-cost to specialized/high-cost solutions.`,
      },
    },
    {
      type: 'comparison-table',
      id: 'hardware-framework',
      title: 'Framework Layers',
      data: {
        headers: ['Layer', 'Description', 'Range'],
        rows: [
          { label: 'Content', values: ['Educational experiences and modules', 'Generalized (360 images) to Specialized (simulations)'], highlight: false },
          { label: 'Marketplace', values: ['Distribution platform', 'Device-based to Cloud-based'], highlight: false },
          { label: 'Converter', values: ['Hardware/software compatibility', 'Some content requires specific hardware'], highlight: false },
          { label: 'End Device', values: ['Display and interaction hardware', 'Plane, Cube, Cylinder, Portal, Device'], highlight: false },
          { label: 'User', values: ['Student characteristics', 'Age group, multi-sensory needs, specialized tasks'], highlight: true },
        ],
      },
    },

    // ===== 6. IMMERSIVE SPACE TYPES (Slides 52-55) =====
    {
      type: 'section',
      id: 'section-spacetypes',
      data: { title: 'Immersive Space Types' },
    },
    {
      type: 'case-study-card',
      id: 'spacetypes-cards',
      title: 'Space Type Comparison',
      description: 'Four primary approaches to immersive learning environments',
      data: {
        studies: [
          {
            id: 'device-based',
            title: 'Device-Based',
            subtitle: 'Individual Surfaces',
            image: '/images/projects/X25RB00-immersive/spacetype-device.png',
            tags: ['Individual', 'Portable', 'AR/VR'],
            description: 'Individual experience using laptops, tablets, or AR/VR headsets. Hardware can quickly become dated but offers pre-made specialized content. Used in existing classroom seating.',
            metrics: [
              { label: 'Space Required', value: 'Existing Classroom' },
              { label: 'Experience', value: 'Individual' },
              { label: 'Setup', value: 'Minimal' },
            ],
          },
          {
            id: 'plane-based',
            title: 'Plane-Based',
            subtitle: 'Single Surface',
            image: '/images/projects/X25RB00-immersive/spacetype-plane.png',
            tags: ['Interactive', 'Motion Tracking', 'Projection'],
            description: "Students can interact with touch and body. Parallels contemporary classroom projector hardware but interactive. Easy to retrofit into spaces with wifi.",
            metrics: [
              { label: 'Space Required', value: "10'-16' wall or floor" },
              { label: 'Experience', value: 'Small Group' },
              { label: 'Setup', value: 'Moderate' },
            ],
          },
          {
            id: 'interaction-based',
            title: 'Interaction Based',
            subtitle: 'Interactable Surface',
            image: '/images/projects/X25RB00-immersive/spacetype-tactile.png',
            tags: ['Tactile', '3D Glasses', 'Hands-On'],
            description: 'Allows for a tactile experience. Can be paired with 3d glasses for an additional immersive experience. Allows students to experience the curriculum or their creations. Tactile interaction adds additional immersion cues.',
            metrics: [
              { label: 'Space Required', value: "15'x15' minimum" },
              { label: 'Experience', value: 'Hands-On' },
              { label: 'Setup', value: 'Dedicated' },
            ],
          },
          {
            id: 'panorama-based',
            title: 'Panorama-Based',
            subtitle: 'Shared Surface',
            image: '/images/projects/X25RB00-immersive/spacetype-shared.png',
            tags: ['Panorama', 'Surround Sound', 'Full Immersion'],
            description: "iMax-like experience with spatial audio. The teacher guides an exploring experience. Systems require aligned vision between teachers, staff, and the school. Requires thorough design process.",
            metrics: [
              { label: 'Space Required', value: "20'x20' dedicated" },
              { label: 'Experience', value: 'Whole Class' },
              { label: 'Setup', value: 'Significant' },
            ],
          },
        ],
        columns: 2,
      },
    },

    // ===== 7. VENDOR ANALYSIS (Slides 32-51) =====
    {
      type: 'section',
      id: 'section-vendors',
      data: { title: 'Immersive Vendors', sources: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
    },
    {
      type: 'case-study-card',
      id: 'vendors-cards',
      title: 'Vendor Overview',
      description: 'Leading providers of immersive learning technology',
      data: {
        studies: [
          {
            id: 'eyeclick',
            title: 'Eye Click',
            subtitle: 'Interactive Projection Systems',
            image: '/images/projects/X25RB00-immersive/vendor-eyeclick.png',
            tags: ['Interactive', 'Motion Tracking', 'Customizable'],
            description: 'Customizable game marketplace with cloud-controlled access and district standardization. Vertical and horizontal projection with integrated motion tracking. Has special needs-based content library.',
            metrics: [
              { label: 'Projection', value: 'Vertical & Horizontal' },
              { label: 'Content', value: 'Cloud Marketplace' },
              { label: 'Special Needs', value: 'Supported' },
            ],
            strategies: [
              { name: 'EyeWiz Platform', description: 'Teachers can create custom games', impact: 'Curriculum alignment' },
              { name: 'Content Library', description: 'Developed with teachers', impact: 'Educational focus' },
            ],
          },
          {
            id: 'kidsjump',
            title: 'Kids Jump Tech',
            subtitle: 'Physical + Digital Integration',
            image: '/images/projects/X25RB00-immersive/vendor-kidsjump.jpeg',
            tags: ['PE', 'Sensory', 'Climbing', 'Sandbox'],
            description: 'Integrated motion tracking with in-house content and end-user customizable options. Offers interactive sandboxes and multi-touch tables. Physical education and sensory-based content focus.',
            metrics: [
              { label: 'Products', value: 'Walls, Floors, Tables' },
              { label: 'Focus', value: 'PE & Sensory' },
              { label: 'Warranty', value: '2 Years' },
            ],
            strategies: [
              { name: 'Climbing Walls', description: 'Synchronizes digital and physical', impact: 'Active engagement' },
              { name: 'AR Sandbox', description: 'Tactile learning experiences', impact: 'Multi-sensory' },
            ],
          },
          {
            id: 'playlu',
            title: 'Play Lu',
            subtitle: 'Gymnasium Systems',
            image: '/images/projects/X25RB00-immersive/vendor-playlu.jpeg',
            tags: ['Gymnasium', 'PE', 'Academic'],
            description: 'Single, dual, and mobile interactive gym systems. Mixes PE with academics through gamified learning. Requires special wifi privileges and unobstructed view.',
            metrics: [
              { label: 'Configurations', value: 'Single, Duo, Mobile' },
              { label: 'Integration', value: 'PE + Academics' },
              { label: 'Space', value: 'Gymnasium' },
            ],
            strategies: [
              { name: 'Dual System', description: 'Two-sided interactive walls', impact: 'Double capacity' },
              { name: 'Academic Games', description: 'Math, reading integrated with movement', impact: 'Cross-curricular' },
            ],
          },
          {
            id: 'elumenati',
            title: 'Elumenati',
            subtitle: 'Panoramic Domes & Projections',
            image: '/images/projects/X25RB00-immersive/vendor-elumenati.jpeg',
            tags: ['Panorama', '4K', 'Surround Sound'],
            description: '8000lm projection in 4K. Explore 360 content in shared collaborative experiences. Specialized modules developed alongside curriculum with flexible installation constraints.',
            metrics: [
              { label: 'Resolution', value: '4K' },
              { label: 'Brightness', value: '8000lm' },
              { label: 'Audio', value: '5.1 Surround' },
            ],
            strategies: [
              { name: 'Curriculum Modules', description: 'Content developed with educators', impact: 'Standards aligned' },
              { name: 'Time Travel', description: 'Historical immersion experiences', impact: 'Engagement boost' },
            ],
          },
          {
            id: 'worldviz',
            title: 'WorldViz',
            subtitle: 'VR Simulation Rooms',
            image: '/images/projects/X25RB00-immersive/vendor-worldviz.jpeg',
            tags: ['Simulation', 'Prism', 'Touch Control'],
            description: 'Integrated immersive surround sound and touch control. Uses Prism as a user-friendly way to organize and interact with content. Simple controls to create dynamic experiences.',
            metrics: [
              { label: 'Interface', value: 'Prism (Age-Friendly)' },
              { label: 'Audio', value: 'Surround Sound' },
              { label: 'Control', value: 'Touch-Based' },
            ],
            strategies: [
              { name: 'Prism Platform', description: 'Intuitive content management', impact: 'Easy adoption' },
              { name: 'Simulation', description: 'Professional-grade VR labs', impact: 'CTE applications' },
            ],
          },
          {
            id: 'benq',
            title: 'BenQ',
            subtitle: 'Simulation Projectors',
            image: '/images/projects/X25RB00-immersive/vendor-benq.jpeg',
            tags: ['Projector', 'Low Maintenance', 'High Accuracy'],
            description: 'Simulation-specific projectors with sealed design that is virtually maintenance-free. High color accuracy and brightness. Lower total cost of ownership compared to alternatives.',
            metrics: [
              { label: 'Design', value: 'Sealed/Maintenance-Free' },
              { label: 'Color', value: 'High Accuracy' },
              { label: 'TCO', value: 'Lower' },
            ],
            strategies: [
              { name: 'Multi-Projector', description: 'Edge-blending for large displays', impact: 'Scalable installations' },
              { name: 'Art + Tech', description: 'Creative installations possible', impact: 'Flexible applications' },
            ],
          },
          {
            id: 'classvr',
            title: 'ClassVR',
            subtitle: 'Managed VR Headsets',
            image: '/images/projects/X25RB00-immersive/vendor-classvr.png',
            tags: ['VR Headsets', 'Lesson Plans', 'Managed'],
            description: 'Ready-made lesson plans aligned with immersive content modules. Spotify-based UI for ease of use. Harmful content can be blocked and teachers can see what students are watching.',
            metrics: [
              { label: 'Retention Boost', value: '75%' },
              { label: 'Interface', value: 'Spotify-like UI' },
              { label: 'Management', value: 'Teacher Dashboard' },
            ],
            strategies: [
              { name: 'Content Control', description: 'Block inappropriate content', impact: 'Safe environment' },
              { name: 'Lesson Plans', description: 'Pre-made curriculum-aligned lessons', impact: 'Quick adoption' },
            ],
          },
          {
            id: 'zspace',
            title: 'zSpace',
            subtitle: 'AR Laptops for STEM',
            image: '/images/projects/X25RB00-immersive/vendor-zspace.png',
            tags: ['AR Laptop', 'STEM', 'Sandbox'],
            description: 'Augmented reality experience for technical applications. A sandbox learning approach with new devices having improved functionality. Works like a laptop cart for secure storage.',
            metrics: [
              { label: 'Focus', value: 'STEM' },
              { label: 'Format', value: 'AR Laptop + Pen' },
              { label: 'Storage', value: 'Cart-Based' },
            ],
            strategies: [
              { name: 'Technical Applications', description: 'Anatomy, engineering, science', impact: 'Hands-on STEM' },
              { name: 'Cognitive Development', description: 'Spatial reasoning skills', impact: 'Deep learning' },
            ],
          },
        ],
        columns: 2,
      },
    },

    // ===== 8. VENDOR COST COMPARISON (Excel Data) =====
    {
      type: 'section',
      id: 'section-costs',
      data: { title: 'Cost Analysis' },
    },
    {
      type: 'comparison-table',
      id: 'costs-table',
      title: 'Vendor Cost Breakdown',
      description: 'Midland IML project cost analysis',
      data: {
        headers: ['Vendor', 'Product', 'Device', 'Content', 'Architecture', 'Total'],
        rows: [
          { label: 'Elumenati', values: ['6.8m Panorama', '$100,900', '$7,600', '$80,000', '$188,500'], highlight: true },
          { label: 'KidsJumpTech', values: ['Mobile Wall (x3)', '$38,820', '$0', '$750', '$39,570'], highlight: false },
          { label: 'KidsJumpTech', values: ['Mobile Floor (x3)', '$44,505', '$0', '$750', '$45,255'], highlight: false },
          { label: 'KidsJumpTech', values: ['Fixed Floor (x3)', '$20,997', '$0', '$15,000', '$35,997'], highlight: false },
          { label: 'KidsJumpTech', values: ['Sandbox', '$16,999', '$0', '$2,000', '$18,999'], highlight: false },
          { label: 'KidsJumpTech', values: ['Touch Table (x2)', '$15,398', '$0', '$2,000', '$17,398'], highlight: false },
          { label: 'Play Lu', values: ['Single (x3)', '$120,000', '$22,800', '$3,000', '$142,800'], highlight: true },
          { label: 'zSpace', values: ['10 Laptops', '$49,990', '$50,000', '$2,500', '$102,490'], highlight: false },
          { label: 'Looking Glass', values: ['27" (x10)', '$100,000', '$0', '$5,000', '$105,000'], highlight: false },
          { label: 'VXR Labs', values: ['50 Quest 3', '$41,875', '$0', '$12,000', '$53,875'], highlight: false },
          { label: 'Quiver Vision', values: ['AR Worksheets', '$300', '$0', '$0', '$300'], highlight: false },
        ],
      },
    },
    {
      type: 'stat-grid',
      id: 'costs-summary',
      title: 'Project Summary',
      data: {
        stats: [
          { label: 'Total Project Budget', value: '$750,184', detail: 'All vendors combined' },
          { label: 'Largest Investment', value: 'Elumenati', detail: '$188,500 for 6.8m Panorama' },
          { label: 'Lowest Entry', value: 'Quiver Vision', detail: '$300 for AR Worksheets' },
          { label: 'Vendors', value: '8', detail: 'Technology providers' },
        ],
        columns: 4,
      },
    },

    // ===== 9. CASE STUDY: TM CLARK (Slides 56-69) =====
    {
      type: 'section',
      id: 'section-tmclark',
      data: { title: 'Case Study: TM Clark Elementary' },
    },
    {
      type: 'case-study-card',
      id: 'tmclark-card',
      data: {
        studies: [
          {
            id: 'tmclark',
            title: 'TM Clark Elementary',
            subtitle: 'GPISD Immersive Learning Pioneer',
            tags: ['New Construction', 'K-5', 'GPISD'],
            description: 'TM Clark Elementary serves as the flagship immersive learning implementation for GPISD. The design integrates multiple immersive technologies across the gymnasium and library spaces, creating a comprehensive learning environment.',
            location: 'Grand Prairie, TX',
            year: 2025,
            metrics: [
              { label: 'Spaces', value: 'Gymnasium + Library' },
              { label: 'Panorama', value: "15' Immersive" },
              { label: 'Audio', value: '5.1 Surround Sound' },
            ],
            strategies: [
              { name: 'Gymnasium', description: 'Play Lu Duo system', impact: 'Active learning' },
              { name: 'Immersive Library', description: 'Panorama with hands-on flex space', impact: 'Multi-modal learning' },
              { name: 'Maker Labs', description: 'First and second floor labs', impact: 'STEM integration' },
            ],
          },
        ],
        columns: 1,
      },
    },
    // TM Clark Library - Detailed Design
    {
      type: 'text-content',
      id: 'tmclark-library-title',
      title: 'TM Clark Library',
      description: 'Shared Surface: Panorama - New Construction',
      data: {
        content: `The TM Clark Library represents a comprehensive **Immersive Learning Lab** designed to support multiple levels of immersion and flexible learning experiences.`,
      },
    },
    {
      type: 'key-findings',
      id: 'tmclark-library-features',
      title: 'Immersive Learning Lab Features',
      data: {
        findings: [
          {
            title: 'Flex Hands-on Space',
            value: 'Adaptable',
            detail: 'Flexible use and seating for hands-on activities',
            icon: 'layout',
          },
          {
            title: "15' Immersive Panorama",
            value: 'Shared Surface',
            detail: 'Large-scale panoramic projection for whole-class experiences',
            icon: 'monitor',
          },
          {
            title: '5.1 Surround Sound',
            value: 'Spatial Audio',
            detail: 'Immersive audio environment with directional sound',
            icon: 'volume-2',
          },
          {
            title: 'Floor Projection',
            value: 'Interactive',
            detail: 'Additional interactive surface for engagement',
            icon: 'square',
          },
        ],
      },
    },
    {
      type: 'text-content',
      id: 'tmclark-library-concepts',
      data: {
        content: `**Additional Features:**
- **Composition Editor** - Tools for creating custom immersive content
- **'Always Open' Concept** - Accessible design for continuous learning
- **Flexible Use and Seating** - Adaptable furniture configurations`,
      },
    },
    {
      type: 'image-gallery',
      id: 'tmclark-floorplan',
      title: 'Learning Zone Circulation',
      description: 'Level of Immersion flow from Zone 1 to Zone 4',
      data: {
        images: [
          {
            src: '/images/projects/X25RB00-immersive/tmclark-floorplan-circulation.png',
            alt: 'TM Clark Learning Zone Circulation Floor Plan',
            caption: 'Immersive Learning Floor Plan - Progressive levels of immersion',
          },
        ],
        columns: 1,
      },
    },
    {
      type: 'workflow-steps',
      id: 'tmclark-zones',
      title: 'Level of Immersion',
      description: 'Progressive journey through learning zones',
      data: {
        steps: [
          {
            number: 1,
            title: 'Entry Zone',
            status: 'complete',
            findings: ['Traditional library seating', 'Low-stimulus environment', 'Transition from hallway'],
          },
          {
            number: 2,
            title: 'Collaboration Zone',
            status: 'complete',
            findings: ['Group tables and flexible seating', 'Medium engagement level', 'Preparation for immersion'],
          },
          {
            number: 3,
            title: 'Hands-On Zone',
            status: 'complete',
            findings: ['Maker Lab activities', 'Interactive floor projection', 'Active learning space'],
          },
          {
            number: 4,
            title: 'Full Immersion',
            status: 'complete',
            findings: ["15' Panorama experience", '5.1 Surround Sound', 'Maximum engagement level'],
          },
        ],
      },
    },
    // Illumination Simulation Section
    {
      type: 'section',
      id: 'section-illumination',
      data: { title: 'Illumination Simulation' },
    },
    {
      type: 'text-content',
      id: 'tmclark-lighting-intro',
      title: 'Lighting Analysis Estimations',
      data: {
        content: `Detailed lighting simulations were conducted to optimize the immersive environment:

- **Tinted interior glazing recommended** - Reduce external light interference
- **Modulate ceilings** - Reduce light and sound spill from hands-on space
- **Automatic shades recommended** - Dynamic light control
- **Dimmable LEDs** - In Hands-On and Panorama Areas for flexible lighting scenarios`,
      },
    },
    {
      type: 'image-gallery',
      id: 'tmclark-lighting-gallery',
      title: 'Lighting Simulation Results',
      data: {
        images: [
          {
            src: '/images/projects/X25RB00-immersive/tmclark-lighting-01.png',
            alt: 'TM Clark Lighting Analysis - Base Line',
            caption: 'TMC Maker Lab Natural + Artificial Illuminance: Base Line No Shades/Tint',
          },
          {
            src: '/images/projects/X25RB00-immersive/tmclark-lighting-02.png',
            alt: 'TM Clark Lighting Analysis - Tint Application',
            caption: 'TMC Maker Lab Natural + Artificial Illuminance: Tint Application',
          },
          {
            src: '/images/projects/X25RB00-immersive/tmclark-lighting-03.png',
            alt: 'TM Clark Lighting Analysis - Shade/Tint Application',
            caption: 'TMC Maker Lab Natural + Artificial Illuminance: Shade/Tint Application',
          },
        ],
        columns: 3,
      },
    },

    // ===== 10. ADDITIONAL PROJECTS (Slides 70-79) =====
    {
      type: 'section',
      id: 'section-additional',
      data: { title: 'Additional GPISD Projects' },
    },
    {
      type: 'case-study-card',
      id: 'additional-cards',
      title: 'Immersive Learning Partners',
      description: 'Three schools implementing the Immersive Learning Vision',
      data: {
        studies: [
          {
            id: 'eastcliff',
            title: 'East Cliff',
            subtitle: 'Immersive Learning Vision',
            image: '/images/projects/X25RB00-immersive/gpisd-eastcliff-plan.jpeg',
            tags: ['New Construction', 'K-5'],
            description: 'New construction with immersive library featuring panoramic projection and flexible learning spaces.',
            metrics: [
              { label: 'Type', value: 'Demo & New' },
              { label: 'Gym', value: 'Play Lu Uno' },
              { label: 'Library', value: "15' Panorama" },
            ],
            strategies: [
              { name: 'Mobile Floor Unit', description: 'Kids Jump Tech', impact: 'Flexible deployment' },
              { name: 'AR Sandbox', description: 'Tactile learning', impact: 'Multi-sensory' },
            ],
          },
          {
            id: 'newaustin',
            title: 'New Austin',
            subtitle: 'Immersive Learning Vision',
            image: '/images/projects/X25RB00-immersive/gpisd-newaustin-plan.jpeg',
            tags: ['New Construction', 'K-5'],
            description: 'New construction project with comprehensive immersive learning integration from the ground up.',
            metrics: [
              { label: 'Type', value: 'Demo & New' },
              { label: 'Gym', value: 'Play Lu Duo' },
              { label: 'Library', value: "15' Panorama" },
            ],
            strategies: [
              { name: 'Mobile Floor Unit', description: 'Kids Jump Tech', impact: 'Flexible deployment' },
              { name: 'AR Sandbox', description: 'Tactile learning', impact: 'Multi-sensory' },
              { name: 'Light Wall', description: 'Interactive display', impact: 'Visual engagement' },
            ],
          },
          {
            id: 'wcandrews',
            title: 'WC Andrews',
            subtitle: 'Immersive Learning Vision',
            image: '/images/projects/X25RB00-immersive/gpisd-wcandrews-plan.jpeg',
            tags: ['Renovation', 'K-5'],
            description: 'Renovation project bringing immersive learning capabilities to an existing facility.',
            metrics: [
              { label: 'Type', value: 'Renovation' },
              { label: 'Gym', value: 'Play Lu Duo' },
              { label: 'Library', value: "15' Panorama" },
            ],
            strategies: [
              { name: 'Mobile Floor Unit', description: 'Kids Jump Tech', impact: 'Flexible deployment' },
              { name: 'AR Sandbox', description: 'Tactile learning', impact: 'Multi-sensory' },
              { name: 'Light Wall', description: 'Interactive display', impact: 'Visual engagement' },
            ],
          },
        ],
        columns: 3,
      },
    },
    // East Cliff Library Concept (Slide 74)
    {
      type: 'text-content',
      id: 'eastcliff-concept-title',
      title: 'East Cliff Library',
      description: 'Shared Surface: Panorama - Existing & New Construction',
      data: {
        content: `The East Cliff Library demonstrates the core **Immersive Learning Lab** concept applied across all GPISD projects.`,
      },
    },
    {
      type: 'key-findings',
      id: 'eastcliff-features',
      title: 'Immersive Learning Lab Features',
      data: {
        findings: [
          {
            title: "15' Immersive Panorama",
            value: 'Shared Surface',
            detail: 'Large-scale panoramic projection for whole-class experiences',
            icon: 'monitor',
          },
          {
            title: '5.1 Surround Sound',
            value: 'Spatial Audio',
            detail: 'Immersive audio environment with directional sound',
            icon: 'volume-2',
          },
          {
            title: 'Optional Floor Projection',
            value: 'Interactive',
            detail: 'Additional interactive surface for enhanced engagement',
            icon: 'square',
          },
          {
            title: 'Composition Editor',
            value: 'Content Creation',
            detail: 'Tools for creating custom immersive content',
            icon: 'edit',
          },
        ],
      },
    },
    {
      type: 'text-content',
      id: 'eastcliff-concepts',
      data: {
        content: `**Additional Features:**
- **'Always Open' Concept** - Accessible design with transparent glazing for continuous visibility
- **Flexible Use and Seating** - Adaptable furniture configurations for different learning modes
- **Roller Shades and Tinted Glazing** - Light control for optimal projection environments
- **Deep Storage and Seating** - Integrated book storage with flexible seating options
- **Peg Board** - Interactive display and organization wall`,
      },
    },
    {
      type: 'image-gallery',
      id: 'eastcliff-axon',
      title: 'Library Concept Design',
      data: {
        images: [
          {
            src: '/images/projects/X25RB00-immersive/gpisd-axon-concept.png',
            alt: 'East Cliff Library Axon - Immersive Learning Lab Concept',
            caption: 'East Cliff Library - Shared Surface: Panorama concept with 15\' panorama, 5.1 surround sound, and flexible seating',
          },
        ],
        columns: 1,
      },
    },
    {
      type: 'image-gallery',
      id: 'gpisd-renderings',
      title: 'GPISD Library Renderings',
      data: {
        images: [
          {
            src: '/images/projects/X25RB00-immersive/project-eastcliff-01.png',
            alt: 'East Cliff Library - Outside Panorama',
            caption: 'Outside the Panorama - Equal and different options',
          },
          {
            src: '/images/projects/X25RB00-immersive/project-eastcliff-02.png',
            alt: 'East Cliff Library - Inside Panorama View 1',
            caption: 'Inside the Panorama - Immersive experience',
          },
          {
            src: '/images/projects/X25RB00-immersive/project-eastcliff-03.png',
            alt: 'East Cliff Library - Inside Panorama View 2',
            caption: 'Inside the Panorama - Student perspective',
          },
          {
            src: '/images/projects/X25RB00-immersive/gpisd-render-01.png',
            alt: 'GPISD Immersive Library Rendering',
            caption: 'Immersive Library - Full panoramic experience',
          },
          {
            src: '/images/projects/X25RB00-immersive/gpisd-render-02.png',
            alt: 'GPISD Immersive Library Rendering',
            caption: 'Immersive Library - Student engagement view',
          },
          {
            src: '/images/projects/X25RB00-immersive/gpisd-render-03.png',
            alt: 'GPISD Immersive Library Rendering',
            caption: 'Immersive Library - Panorama and flex space',
          },
        ],
        columns: 3,
      },
    },

    // ===== 11. SOURCES =====
    {
      type: 'section',
      id: 'section-sources',
      data: { title: 'Sources' },
    },
    {
      type: 'sources',
      id: 'sources-list',
      data: {
        sources: [
          // Vision & Background
          { id: 1, title: 'Types of Experiential Learning', author: 'University of Tennessee', url: 'https://experiencelearning.utk.edu/about/types/' },
          { id: 2, title: 'Ground Breaking Laptop from zSpace Combines AR with VR', author: 'XR Today', url: 'https://www.xrtoday.com/mixed-reality/ground-breaking-laptop-from-zspace-combines-ar-with-vr/' },
          { id: 3, title: 'Immersive Learning Research', author: 'MDPI', url: 'https://www.mdpi.com/2673-8392/3/2/26' },
          // Instructional Design
          { id: 4, title: 'Designing Effective Instruction', author: 'Google Books', url: 'https://books.google.com.tj/books?id=ygIbaClN3KMC' },
          { id: 5, title: 'Learning Research', author: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/39252139/' },
          { id: 6, title: "Updating Bloom's Taxonomy for Digital Learning", author: 'Tech Learning', url: 'https://www.techlearning.com/news/updating-blooms-taxonomy-for-digital-learning' },
          { id: 7, title: 'Technology Integration Matrix', author: 'USF FCIT', url: 'https://fcit.usf.edu/matrix/matrix/' },
          { id: 8, title: "Integrating Technology with Bloom's Taxonomy", author: 'ASU', url: 'https://teachonline.asu.edu/2016/05/integrating-technology-blooms-taxonomy/' },
          { id: 9, title: 'Human Interface Guidelines - Immersive Experiences', author: 'Apple', url: 'https://developer.apple.com/design/human-interface-guidelines/immersive-experiences' },
          // Hardware & Framework
          { id: 10, title: 'Immersive Learning Resources', author: 'Center for Engaged Learning', url: 'https://www.centerforengagedlearning.org/resources/immersive-learning/' },
          { id: 11, title: 'The Promise of Immersive Learning', author: 'ITIF', url: 'https://itif.org/publications/2021/08/30/promise-immersive-learning-augmented-and-virtual-reality-potential/' },
          // Vendors
          { id: 12, title: 'EyeClick Games Library', author: 'EyeClick', url: 'https://www.eyeclick.com/games/all' },
          { id: 13, title: 'EyeWiz Content Creation', author: 'EyeClick', url: 'https://www.eyeclick.com/eyewiz' },
          { id: 14, title: 'Kids Jump Tech Products', author: 'Kids Jump Tech', url: 'https://kidsjumptech.com/' },
          { id: 15, title: 'Interactive Climbing Wall', author: 'Kids Jump Tech', url: 'https://kidsjumptech.com/interactive-climbing-wall/' },
          { id: 16, title: 'Play Lu Case Studies', author: 'Play Lu', url: 'https://play-lu.com/case-studies/' },
          { id: 17, title: 'GeoDome Products', author: 'Elumenati', url: 'https://www.elumenati.com/products/geodomes/' },
          { id: 18, title: 'Elumenati Projects', author: 'Elumenati', url: 'https://www.elumenati.com/projects/' },
          { id: 19, title: 'Virtual Simulation Room', author: 'WorldViz', url: 'https://www.worldviz.com/virtual-simulation-room' },
          { id: 20, title: 'BenQ Immersive Installation Case Study', author: 'BenQ', url: 'https://www.benq.eu/en-eu/business/resource/case-study/lorem-distrusts-everything.html' },
          { id: 21, title: 'Eduverse Content Overview', author: 'ClassVR', url: 'https://www.classvr.com/eduverse-content-overview/' },
          { id: 22, title: 'zSpace Subject Areas', author: 'zSpace', url: 'https://zspace.com/edu/subject' },
        ],
      },
    },
  ],
};
