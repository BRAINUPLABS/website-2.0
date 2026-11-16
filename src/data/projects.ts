import { StudentProject } from '../types.ts';

export const STUDENT_PROJECTS_DATA: StudentProject[] = [
  {
    id: 'fire-fighting-rover',
    title: 'Autonomous Fire-fighting Rover',
    category: 'Robotics',
    studentClass: 'Class 8',
    schoolName: 'Delhi Public School, Gurgaon',
    description:
      'Utilizes dual thermal sensor arrays to locate flame sources and triggers an automatic pressurized pump extinguisher with zero human intervention.',
    hardware: 'ESP32 + Dual Flame Sensors + Relay Shields',
    recognition: 'National Finalist • World Robot Olympiad',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCA2q0vFKOJXlHh7Sc1fwXYBx4y4T_EMAOC3KPkOdKaAIseFJAAkW7l5hW56cvFcXNEs86PGCbwlG2jo_uwVGmJDLJmplo6_8lOA-YEp_8jpQYmHS1R4aEAzET-dXbUdqkiOBQjd0VJBYeVCNUac_pJxd7hWKCM32wGHFBTrgzG6aMIoSWVlHZnG81sEDc1cnjAOVEcCqkyp5vInQKT6tBqh38-HtrydC9YrtxBJqtW'
  },
  {
    id: 'solar-weather-station',
    title: 'Solar Tracking Weather Hub',
    category: 'IoT',
    studentClass: 'Class 9',
    schoolName: 'National Public School, Indiranagar',
    description:
      'Dual-axis sun-following photovoltaic station logging real-time solar irradiation, air quality indices, and barometric pressure directly to school cloud servers.',
    hardware: 'LDR Array + BMP280 + ESP32 Wi-Fi',
    recognition: 'ATL Innovation Award • NITI Aayog',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDa0TOlrJAk94_j-GTR6VDrHbFncEI1brxM7_FtoH467Sbs4DGJPJbQ1J7__yULPPQCJ2_G2K02JZIKfA878ggY-649ONM_-C0rMrIgLERh8igXVDJ8d49V0rFTXj59ngE_IJ_PPGKYkZdjMf-ES4zm8x4iSqfsLP_rvlTqq65q_A4lykFt_B8IU6vGqtfWRMiUmw_6uwnUIPYTZJRnAdOjf4Owms4iMYU_PL7xIoDV'
  },
  {
    id: 'eeg-robotic-gripper',
    title: 'EEG Brainwave Controlled Gripper',
    category: 'Neuroscience',
    studentClass: 'Class 11',
    schoolName: 'Greenwood High International, Bengaluru',
    description:
      'Decodes focused alpha and beta brain rhythms to actuate high-torque servo linkages for assisted prosthetic applications and accessibility.',
    hardware: 'TGAM Biosensor Module + Metal Gear Servos',
    recognition: 'ISEF Shortlisted (International Science Fair)',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqx0eqXADb2tmasp7vqKObPuFn34v3Ysx6_5tpAgVDf5zTvRAR0WDKgDS7_W_xQvn8ZbHBnadKDVnD2THiPXdr3Vh7PgqYiTqKnvxlf0hmTuXGLMG7RvZuqmtVNGDHXEmVA4QSr93Z3gzf586JTASO70sJ-SBVzHS5V_S9KuvNDjeEnyYTLhz_rWsHeQkW84ARGNkzah6Df2E-n5PgO9nHHerl3y45sMfy3rI8n06A'
  },
  {
    id: 'gesture-quadcopter',
    title: 'Vision-Controlled Drone Delivery',
    category: 'Aerospace',
    studentClass: 'Class 10',
    schoolName: 'Vidyashilp Academy, Bengaluru',
    description:
      'Quadcopter drone with optical flow cameras recognizing pilot hand postures to take off, orbit, and soft-land payloads without a radio transmitter.',
    hardware: 'Raspberry Pi Zero 2W + OpenCV + Flight Controller',
    recognition: 'Gold Medal • National Aeromodelling Challenge',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9r78nhIuCQ8TOUM8HV--0_juVjy19WIqLhoOC94eRB0A7tKYUagivkIOTz_hV_p2xKG1iFoKCdAEpVbgVWRga-WbEmEcGDl6cd7UHXRbfOEHvlPRr_4FexGVvAkKtj0KFGbm0B8nY98_CWHbckwrd8Pjh8yqS_j38dWUpceeJcpdUAMWzbUE3zBwPDfQtfCty6esBkkWFCZL5R4x8VNQwuCdcZMbqrJTuiESeFFa9'
  },
  {
    id: 'smart-waste-sorter',
    title: 'AI Smart Waste Classifier',
    category: 'AI & Computer Vision',
    studentClass: 'Class 8',
    schoolName: 'Modern School, Barakhamba, New Delhi',
    description:
      'Edge camera scans trash placed on sorting hopper and triggers robotic flapper doors into biodegradable, recyclable, and e-waste compartments.',
    hardware: 'K210 Neural RISC-V + Servos + Infrared gates',
    recognition: 'CBSE Regional Science Exhibition 1st Prize',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHu62WGoEYBFiPGRt8yDgJlK9S-hFTcg_RpIzsfrM4RfhsyEiykoTi2u0Yl9cz3JukiLlR2CoYOk-_lmSHVKMsgLXrYHbWdPk_TTAZGyYJuYpqj7WYoWnh3UkzINgklgF_P8clJWrk8TfRT0rNP49EQYcoY7PjuQKgBP3sbNmTnNBgWKowW6PivLIJOfMlPWjcl9fY-Sc9YJEPyP0qf27XIwiQi8RjoaG9j8VXh6Co'
  },
  {
    id: 'bipedal-walker',
    title: 'Terrain Adaptive Bipedal Robot',
    category: 'Electronics',
    studentClass: 'Class 7',
    schoolName: 'St. Mary’s Convent, Pune',
    description:
      'Six-degree-of-freedom biped walker utilizing inverse kinematics equations computed in MicroPython to navigate uneven steps and gravel slopes.',
    hardware: 'RP2040 Microcontroller + 6x High Torque Servos',
    recognition: 'State Maker Faire Best Engineering Build',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBq1M-F7apbb81rESvzhY1xpU46_l-kfCbqNjxT3CWwBqO6sKDeZ8vXDS40DshXRyoc4JlixyDMhQckeJJ3BQuSDj5KUYO3ldNHAAlW11SiAorb4qvin6y7l3kR2wkt3YqUIfWbJA-VfMPjYHTSQOg2ZuIH_BlsPcVfkRhKP_Kj0mvL51nehekWJ7yfN98juxW9-olm8_8e_tSRnrnWW6Dx7z4_cnWjLr4Z8OyZ43bf'
  }
];
