import { StemKit } from '../types.ts';

export const STEM_KITS_DATA: StemKit[] = [
  {
    id: 'robospark-pioneer',
    name: 'RoboSpark Pioneer Kit',
    grade: 'Grade 1-3',
    domain: 'Robotics',
    categoryLabel: 'Foundational Circuitry',
    mcu: 'Magnetic Snap Logic Block (No Coding Required)',
    sensors: 'Light, Tilt, Magnetic Touch, Buzzer',
    platform: 'Visual Snap-Mount (Tactile Logic)',
    hours: '16 Hours (8 Storybook Modules)',
    price: 2999,
    originalPrice: 3499,
    rating: 4.9,
    reviewsCount: 124,
    description:
      'Tactile motor-driven exploration without screens. Large magnetic snap-together blocks introduce polarity, closed loops, and kinetic motion for early primary learners.',
    features: [
      '100% Solder-free magnetic snap logic',
      '16 Illustrated story-driven challenge cards',
      'Buzzer, solar cell & geared DC motor modules'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCI0uDkGfWO9tiejVJMmjmQrrsvOvjB8ifyNH6GA2Uui710hFH1D9EauE5QWYONvIt91HXt2gAuPx4ZNu7sNIxGRmWySODbFMsFPnrQtpACKg4xzT7UFhB7hQxLsIFz9nSAMtNl27iaGPidlBc4CwPfKdZ0crmabETh0-i6rcsY3i34njMy7T8WJuIxL76MZTpX6m68wdngtzuarRHDrjaOiZHJeAtZdgVGxS65Pkl_',
    inStock: true
  },
  {
    id: 'sensorcraft-iot',
    name: 'SensorCraft IoT Explorer',
    grade: 'Grade 4-6',
    domain: 'IoT',
    categoryLabel: 'Internet of Things',
    mcu: 'ESP32-S2 Wi-Fi & Bluetooth Microcontroller',
    sensors: 'Soil Moisture, DHT11 Temp/Humidity, Ultrasonic, LDR',
    platform: 'Blockly & MakeCode (Visual Block Programming)',
    hours: '24 Hours (12 Project Worksheets)',
    price: 4499,
    originalPrice: 5299,
    rating: 4.8,
    reviewsCount: 98,
    description:
      'Connect real-world environments to live cloud dashboards. Build smart automated irrigation, ultrasonic mini-radars, and classroom weather stations.',
    features: [
      'ESP32 Wi-Fi microcontroller + 0.96" OLED display',
      '10+ Plug-and-play Grove environmental sensors',
      'Includes free access to Brain Up IoT Cloud Telemetry'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxNa5hGWoNrFIYt4qL0FRjyOxx0EQQTRIP5VtVgVQljd2YxZwiVHM8gt92XyWmhxdl_TxSQDoecVaMJzUIpqgKJaNuwWHIZQPWHzbqpuKBXN1w_M4aQRjqmcKtTmhP1nNGFeP0k0sMJciNOPoJ1V3TCoF4xFpjPmmmjiheX8m7BIKgY7kLY6JmK7rMjXd0VepwdnAJ9N5th_qswqM_g7FedhkNAIE8emDFvREeVw2g',
    inStock: true
  },
  {
    id: 'cyberbotics-rover',
    name: 'CyberBotics Autonomous Rover',
    grade: 'Grade 7-9',
    domain: 'Robotics',
    categoryLabel: 'Autonomous Navigation',
    mcu: 'Dual-Core RP2040 Robotics Controller + Motor Drivers',
    sensors: '5-Way Infrared Line Tracker, HC-SR04 Sonar, Wheel Encoders',
    platform: 'Blockly, MicroPython & C++ Arduino IDE',
    hours: '36 Hours (18 Challenge Tracks)',
    price: 6999,
    originalPrice: 8499,
    rating: 5.0,
    reviewsCount: 210,
    description:
      'Bridge block-based code to MicroPython. Features precision optical encoders, PID-tuned line tracking, and PID wall following algorithms.',
    features: [
      'Heavy-duty chassis with metal gear precision DC motors',
      'Dual MicroPython & Block programming workspace',
      'RoboCup Junior & WRO competition compliant'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZDz7Nuu1ASUjRaY5zshYmdT9SALXFHMhIthB6C4eNiKQ2pj8mTIyHLupBoJnKNx-kKnfoJJN4rZv58B4vhs-0yjuLtLHPBzvNjzEDRqmnEGeX-511JCq8YwmuD4v8KdBK7ZE1llCPGGE1_UuZtrP06O4Zd3Mni0Le0eF2lFywTVDNGZRKhcohHylnHJOxwa1Ze0zgDBKFMqznXcL84VW0OKxbwYEVFqPaiKdyG1as',
    inStock: true
  },
  {
    id: 'neurovision-ai',
    name: 'NeuroVision AI & BCI Suite',
    grade: 'Grade 10-12',
    domain: 'AI & Vision',
    categoryLabel: 'Edge AI & Neuroscience',
    mcu: 'Raspberry Pi RP2040 + K210 Neural RISC-V Dual Core',
    sensors: 'OmniVision Camera, 2-Ch EEG Headband, IMU 9-DOF',
    platform: 'Python 3.11, TensorFlow Lite, Edge Impulse, OpenCV',
    hours: '48 Hours (Advanced Capstone Projects)',
    price: 14999,
    originalPrice: 17999,
    rating: 4.95,
    reviewsCount: 67,
    description:
      'Computer vision and brain-computer interface kit. Deploy on-device edge neural nets for gesture recognition, eye tracking, and attention-controlled robotics.',
    features: [
      'Hardware accelerated 0.5 TOPS Edge AI Camera module',
      'Dry-contact student safe EEG biosensing headband',
      'Full Python SDK with TensorFlow Lite model trainer'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRzoJ9pcmKCxBfP8S-SjHnfwuJCx8Ubd8u2f0YCDCXBf6LWXuR-Y4Abu3sFfn0pD9dgfYYvFt6jKqAuy2oHo_F5T6rDKTFrznP31HaiduSoIE56m_f_MJxuJ9wwwHgHT0A_wnnHPX8XiiXg4z77d_2ovxPi0F9EGOWItA175Ga0ciTaOPZoL6b5WofhRxEM-rxDqGbtJ9xeEiDg4oJZZbw2VGVo6TYD0apkGvGYr9H',
    inStock: true
  },
  {
    id: 'labs-on-table-multi-pack',
    name: 'Labs on Table™ 10-Seat Multi-Pack',
    grade: 'Classroom Multi-Pack',
    domain: 'Institutional',
    categoryLabel: 'Turnkey Institutional Bundle',
    mcu: '10x Cross-Grade Boards (Snap, ESP32 & RP2040)',
    sensors: 'Comprehensive 120-piece School Sensor Vault',
    platform: 'All platforms (Snap, Scratch, Python, C++)',
    hours: '180 Hours Comprehensive K-12 Curriculum',
    price: 42000,
    originalPrice: 52000,
    rating: 4.98,
    reviewsCount: 88,
    isMultiPack: true,
    packDetails: '30 Students / 10 Workstations',
    description:
      'The turnkey solution for Atal Tinkering Labs and private school STEM rooms. Includes durable compartmentalized storage bins, spare component drawers, master teacher manuals, and pre-configured student kits.',
    features: [
      '10 Complete hardware sets with LiFePO4 batteries',
      'Industrial ruggedized plastic cases with foam inserts',
      'Teacher LMS with 180 structured lesson plans',
      'Includes 1-year unconditional parts replacement warranty'
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9r7j3VnkYDG37bDiTBKi8z4qhqHYRvWeYJELjqV69FjTjhVm2Rg_ni90_FR10wqxVjnu6rAhDBuNFlVVmgLJje9PQpmXlaVJbc151QUWo6yLGY1rwmQSWe3ZfIeCYzDBCD2IalF7y_uPTvTbRiOD0uA9xjzLhYZkkf9p8LZdULIoLlNnr_JZeBGZh4dorwijhWU5w0I398ak7gYBPJ7BjV0pHcM0ZaVnFYBrUH871',
    inStock: true
  }
];

export const PRINTED_RESOURCES = [
  {
    id: 'book-python',
    title: 'Python for Young Inventors',
    grade: 'Grades 6–9',
    pages: '120 pages of bite-sized syntax drills, turtle graphics, and hardware control.',
    price: 349,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiiFnfZcH3yiuWYm4ni3QgZCyYfm8bsomONt_cAylM03g0ScB8xiCgKd2qYxHAehFrRTv4F0GcpFM91b_K2Dm-fvxlfCQLZw0lLIWOyxgcO6fZJTLIGVVolBrOgPMWtSL2xjNPJeqYhtCaVbCcTXjAkWF_mox_xV0n7dbA2WX9HIT-tCUe0ihppuA_TpRnW4ePunbcfTJyFYzM7-ZAHqaueyiiXrXXJv-w1edsYdy3'
  },
  {
    id: 'book-pinout',
    title: 'Hardware Pinout Quick-Guides',
    grade: 'All Levels',
    pages: 'Waterproof laminated deck covering breadboards, ESP32 pinouts & resistor codes.',
    price: 199,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPGpSD3JdATSD2eyvIGMDnib9HAcr4Mx85osdQM73CSyHfPou6CLasyaF07U1Ld-nKFrXKh51nteRHWYPylU6jMOTh_nLk1sNLNxxI8Oy6K1-UxIXxN0sJwLxO8nAzYvmnW3jSPbJlQy95AWDHM9z_i3vPfibQjWwISurvlti2kCP_joqjekMiQicXiwA9UaJ6OCIRAlgMAS-2YyUBWhaEzGZeUxQVt7HHNA8JP19b'
  },
  {
    id: 'book-teacher',
    title: 'Teacher Lesson Binder',
    grade: 'Educators',
    pages: 'Rubrics, troubleshooting flowcharts, and 36 graded laboratory assignments.',
    price: 899,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGM74i93h5YKG0rGtzLoegEAmsyPrHlWKQ8s3W8kc5I-C4KvCpNlV0FjZYrPK6NnjnYI1csB0IvB0DPfOKUMZIKI2vC-zYI0b7oQecGSSu07wP_eY6Hu7MbQ4ARiyoOOBwticQ1f2AChWw_BmZd5GD44q4UETOZeE3bNOBgu5-_w-Bp3VdhQCN__TeWAr3ojcF-CeI31uRUh8LFi8N19jA13i7ku-TYUoGk2KQdWPl'
  }
];
