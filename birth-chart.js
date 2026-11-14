/**
 * ============================================================================
 * 1. ASTROLOGICAL DATA & KNOWLEDGE BASE (THAI + ENGLISH)
     * ============================================================================
     */
    const ZODIAC_SIGNS = [
      { id: 0, en: 'Aries', th: 'ราศีเมษ', symbol: '♈', element: 'fire', modality: 'cardinal', color: '#f87171', ruler: 'Mars',
        traits: 'กล้าหาญ ตรงไปตรงมา มีไฟในการเริ่มต้นสิ่งใหม่ และรักอิสระ' },
      { id: 1, en: 'Taurus', th: 'ราศีพฤษภ', symbol: '♉', element: 'earth', modality: 'fixed', color: '#34d399', ruler: 'Venus',
        traits: 'มั่นคง ละเมียดละไม ให้คุณค่ากับความสบายใจและความงามที่จับต้องได้' },
      { id: 2, en: 'Gemini', th: 'ราศีเมถุน', symbol: '♊', element: 'air', modality: 'mutable', color: '#60a5fa', ruler: 'Mercury',
        traits: 'ช่างคิด ช่างเจรจา ปรับตัวเก่ง ใฝ่รู้ และเต็มไปด้วยไอเดียสดใหม่' },
      { id: 3, en: 'Cancer', th: 'ราศีกรกฎ', symbol: '♋', element: 'water', modality: 'cardinal', color: '#c084fc', ruler: 'Moon',
        traits: 'อ่อนโยน ใส่ใจความรู้สึก มีสัญชาตญาณเฉียบคม และปกป้องคนที่รัก' },
      { id: 4, en: 'Leo', th: 'ราศีสิงห์', symbol: '♌', element: 'fire', modality: 'fixed', color: '#fbbf24', ruler: 'Sun',
        traits: 'อบอุ่น สง่างาม มีพลังสร้างสรรค์สูง ใจกว้าง และเป็นศูนย์กลางของพลังบวก' },
      { id: 5, en: 'Virgo', th: 'ราศีกันย์', symbol: '♍', element: 'earth', modality: 'mutable', color: '#34d399', ruler: 'Mercury',
        traits: 'ละเอียดรอบคอบ วิเคราะห์เก่ง รักการพัฒนาตนเอง และใส่ใจในรายละเอียด' },
      { id: 6, en: 'Libra', th: 'ราศีตุลย์', symbol: '♎', element: 'air', modality: 'cardinal', color: '#60a5fa', ruler: 'Venus',
        traits: 'รักความสมดุล มีเสน่ห์ทางการทูต อ่อนหวาน และให้คุณค่ากับความสัมพันธ์' },
      { id: 7, en: 'Scorpio', th: 'ราศีพิจิก', symbol: '♏', element: 'water', modality: 'fixed', color: '#c084fc', ruler: 'Pluto',
        traits: 'ลุ่มลึก น่าค้นหา มีความมุ่งมั่นแรงกล้า เข้าใจจิตใจคนอย่างถ่องแท้' },
      { id: 8, en: 'Sagittarius', th: 'ราศีธนู', symbol: '♐', element: 'fire', modality: 'mutable', color: '#f87171', ruler: 'Jupiter',
        traits: 'มองโลกในแง่ดี รักการผจญภัย แสวงหาปรัชญาชีวิตและอิสรภาพทางความคิด' },
      { id: 9, en: 'Capricorn', th: 'ราศีมังกร', symbol: '♑', element: 'earth', modality: 'cardinal', color: '#34d399', ruler: 'Saturn',
        traits: 'สุขุม มีเป้าหมายชัดเจน รับผิดชอบสูง และสร้างความสำเร็จอย่างยั่งยืน' },
      { id: 10, en: 'Aquarius', th: 'ราศีกุมภ์', symbol: '♒', element: 'air', modality: 'fixed', color: '#60a5fa', ruler: 'Uranus',
        traits: 'มีเอกลักษณ์ไม่เหมือนใคร ล้ำสมัย รักอิสระ และมองการณ์ไกลเพื่อส่วนรวม' },
      { id: 11, en: 'Pisces', th: 'ราศีมีน', symbol: '♓', element: 'water', modality: 'mutable', color: '#c084fc', ruler: 'Neptune',
        traits: 'ช่างฝัน อ่อนไหว มีเมตตาสูง เปี่ยมด้วยจินตนาการและศิลปะในหัวใจ' }
    ];

    const HOUSE_THEMES = [
      'ตัวตน บุคลิกภาพ และภาพลักษณ์แรกเห็น',
      'การเงิน ทรัพย์สิน และคุณค่าในตนเอง',
      'การสื่อสาร ความคิด การเรียนรู้ และคนใกล้ชิด',
      'ครอบครัว รากฐานชีวิต และโลกส่วนตัว',
      'ความรัก ความโรแมนติก ความคิดสร้างสรรค์',
      'การทำงานประจำ สุขภาพ และระเบียบวินัย',
      'คู่ครอง หุ้นส่วน และความสัมพันธ์ระยะยาว',
      'การเปลี่ยนแปลงเชิงลึก จิตวิญญาณ และมรดก',
      'ปรัชญาชีวิต การเดินทางไกล และวิสัยทัศน์',
      'อาชีพการงาน ชื่อเสียง และเป้าหมายสูงสุด',
      'มิตรภาพ สังคม อุดมคติ และความหวัง',
      'จิตใต้สำนึก ความฝัน และการเยียวยาภายใน'
    ];

    const PLANET_META = {
      sun:     { nameTh: 'อาทิตย์', nameEn: 'Sun', symbol: '☉', role: 'แก่นแท้และตัวตนหลัก', color: '#fbbf24' },
      moon:    { nameTh: 'จันทร์', nameEn: 'Moon', symbol: '☽', role: 'โลกภายในและอารมณ์', color: '#e2e8f0' },
      asc:     { nameTh: 'ลัคนา', nameEn: 'Ascendant', symbol: 'AC', role: 'บุคลิกภายนอกและมุมมองชีวิต', color: '#f472b6' },
      mercury: { nameTh: 'พุธ', nameEn: 'Mercury', symbol: '☿', role: 'ความคิดและการสื่อสาร', color: '#38bdf8' },
      venus:   { nameTh: 'ศุกร์', nameEn: 'Venus', symbol: '♀', role: 'ความรัก เสน่ห์ และสุนทรียะ', color: '#fb7185' },
      mars:    { nameTh: 'อังคาร', nameEn: 'Mars', symbol: '♂', role: 'พลังขับเคลื่อนและความกล้า', color: '#f87171' },
      jupiter: { nameTh: 'พฤหัสบดี', nameEn: 'Jupiter', symbol: '♃', role: 'โชคลาภ การเติบโต และปัญญา', color: '#a78bfa' },
      saturn:  { nameTh: 'เสาร์', nameEn: 'Saturn', symbol: '♄', role: 'บทเรียน วินัย และความมั่นคง', color: '#94a3b8' }
    };

    const THAI_MONTHS = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

    /**
     * ============================================================================
     * 2. ASTRONOMICAL / EPHEMERIS APPROXIMATION ENGINE
     * Calculates realistic ecliptic longitudes (0-360°) for Sun, Moon, Planets & Ascendant
     * ============================================================================
     */
    function normDeg(deg) {
      return ((deg % 360) + 360) % 360;
    }

    function calculateNatalChart(dateStr, timeStr, unknownTime, lat, lon) {
      const [year, month, day] = dateStr.split('-').map(Number);
      let hour = 12, minute = 0;
      if (!unknownTime && timeStr) {
        [hour, minute] = timeStr.split(':').map(Number);
      }

      // Convert Bangkok local time (UTC+7) to Julian Day (UT)
      const utHour = hour + minute / 60 - 7;
      const a = Math.floor((14 - month) / 12);
      const y = year + 4800 - a;
      const m = month + 12 * a - 3;
      const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
      const jd = jdn + (utHour - 12) / 24;
      const d = jd - 2451545.0; // Days since J2000.0

      // 1. Sun Ecliptic Longitude (Tropical)
      const gSun = normDeg(357.529 + 0.98560028 * d);
      const qSun = normDeg(280.459 + 0.98564736 * d);
      const sunLon = normDeg(qSun + 1.915 * Math.sin(gSun * Math.PI / 180) + 0.020 * Math.sin(2 * gSun * Math.PI / 180));

      // 2. Moon Ecliptic Longitude
      const lMoon = normDeg(218.316 + 13.176396 * d);
      const mMoon = normDeg(134.963 + 13.064993 * d);
      const fMoon = normDeg(93.272 + 13.229350 * d);
      const moonLon = normDeg(
        lMoon +
        6.289 * Math.sin(mMoon * Math.PI / 180) +
        1.274 * Math.sin((2 * (lMoon - sunLon) - mMoon) * Math.PI / 180) +
        0.658 * Math.sin(2 * (lMoon - sunLon) * Math.PI / 180) -
        0.186 * Math.sin(gSun * Math.PI / 180)
      );

      // 3. Inner & Outer Planets (Keplerian mean + equation of center approximation)
      // Mercury (stays within ~28 deg of Sun)
      const mercPhase = normDeg(252.25 + 4.09233445 * d);
      const mercuryLon = normDeg(sunLon + 22.5 * Math.sin((mercPhase - sunLon) * Math.PI / 180));

      // Venus (stays within ~47 deg of Sun)
      const venusPhase = normDeg(181.98 + 1.60213034 * d);
      const venusLon = normDeg(sunLon + 44.0 * Math.sin((venusPhase - sunLon) * Math.PI / 180));

      // Mars
      const mMars = normDeg(19.373 + 0.52402068 * d);
      const helioMars = normDeg(355.433 + 0.52402068 * d + 10.691 * Math.sin(mMars * Math.PI / 180));
      const marsLon = normDeg(Math.atan2(
        1.524 * Math.sin(helioMars * Math.PI / 180) + Math.sin(sunLon * Math.PI / 180),
        1.524 * Math.cos(helioMars * Math.PI / 180) + Math.cos(sunLon * Math.PI / 180)
      ) * 180 / Math.PI);

      // Jupiter
      const mJup = normDeg(20.020 + 0.08308529 * d);
      const helioJup = normDeg(34.351 + 0.08308529 * d + 5.555 * Math.sin(mJup * Math.PI / 180));
      const jupiterLon = normDeg(Math.atan2(
        5.203 * Math.sin(helioJup * Math.PI / 180) + Math.sin(sunLon * Math.PI / 180),
        5.203 * Math.cos(helioJup * Math.PI / 180) + Math.cos(sunLon * Math.PI / 180)
      ) * 180 / Math.PI);

      // Saturn
      const mSat = normDeg(317.020 + 0.03344414 * d);
      const helioSat = normDeg(50.077 + 0.03344414 * d + 6.406 * Math.sin(mSat * Math.PI / 180));
      const saturnLon = normDeg(Math.atan2(
        9.537 * Math.sin(helioSat * Math.PI / 180) + Math.sin(sunLon * Math.PI / 180),
        9.537 * Math.cos(helioSat * Math.PI / 180) + Math.cos(sunLon * Math.PI / 180)
      ) * 180 / Math.PI);

      // 4. Ascendant (Rising Sign) via Local Sidereal Time & Obliquity
      const gmst = normDeg(280.46061837 + 360.98564736629 * d);
      const lst = normDeg(gmst + lon);
      const ramc = lst * Math.PI / 180;
      const eps = 23.4393 * Math.PI / 180;
      const latRad = lat * Math.PI / 180;

      let ascRad = Math.atan2(
        Math.cos(ramc),
        -(Math.sin(ramc) * Math.cos(eps) + Math.tan(latRad) * Math.sin(eps))
      );
      let ascLon = normDeg(ascRad * 180 / Math.PI);
      if (unknownTime) {
        // Solar chart fallback (Sunrise chart places Ascendant at Sun sign)
        ascLon = sunLon;
      }

      // Helper to build planet object with Sign, Degree, and Whole-Sign House
      const ascSignIndex = Math.floor(ascLon / 30);

      function buildPlacement(key, longitude) {
        const signIndex = Math.floor(longitude / 30);
        const degInSign = longitude % 30;
        const deg = Math.floor(degInSign);
        const min = Math.floor((degInSign - deg) * 60);
        const house = ((signIndex - ascSignIndex + 12) % 12) + 1;
        return {
          key,
          ...PLANET_META[key],
          longitude,
          sign: ZODIAC_SIGNS[signIndex],
          degreeStr: `${deg}°${String(min).padStart(2, '0')}'`,
          house,
          houseTheme: HOUSE_THEMES[house - 1]
        };
      }

      const placements = {
        sun: buildPlacement('sun', sunLon),
        moon: buildPlacement('moon', moonLon),
        asc: buildPlacement('asc', ascLon),
        mercury: buildPlacement('mercury', mercuryLon),
        venus: buildPlacement('venus', venusLon),
        mars: buildPlacement('mars', marsLon),
        jupiter: buildPlacement('jupiter', jupiterLon),
        saturn: buildPlacement('saturn', saturnLon)
      };

      return {
        placements,
        ascLon,
        ascSignIndex,
        unknownTime
      };
    }

    /**
     * ============================================================================
     * 3. DYNAMIC INTERPRETATION GENERATOR (THAI)
     * ============================================================================
     */
    function getPlanetInterpretation(p) {
      const s = p.sign;
      switch (p.key) {
        case 'sun':
          return `แก่นแท้ของคุณเปล่งประกายแบบ${s.th} (${s.en}) คุณเป็นคน${s.traits} และมักแสดงศักยภาพโดดเด่นในเรื่อง${p.houseTheme} (เรือนที่ ${p.house})`;
        case 'moon':
          return `โลกภายในและความรู้สึกของ${s.th} ทำให้คุณเยียวยาใจตัวเองผ่านความ${s.traits.split(' ')[0]} คุณต้องการความมั่นคงทางอารมณ์ในด้าน${p.houseTheme}`;
        case 'asc':
          return `ผู้คนรอบข้างมักสัมผัสได้ถึงออร่าแบบ${s.th}ตั้งแต่แรกพบ คุณใช้มุมมองที่${s.traits}ในการก้าวเดินและรับมือกับโลกภายนอก`;
        case 'mercury':
          return `สไตล์การคิดและการสื่อสารแบบ${s.th} ทำให้คุณเรียบเรียงไอเดียได้อย่างมีเอกลักษณ์ มักใช้ไหวพริบกับเรื่อง${p.houseTheme}`;
        case 'venus':
          return `คุณแสดงความรักและสัมผัสความงามผ่านเลนส์ของ${s.th} เสน่ห์ของคุณดึงดูดผู้คนและโอกาสดีๆ เข้ามาในเรื่อง${p.houseTheme}`;
        case 'mars':
          return `แรงผลักดันและสัญชาตญาณการลงมือทำแบบ${s.th} มอบความกล้าหาญให้คุณทุ่มเทพลังงานอย่างเต็มที่ในด้าน${p.houseTheme}`;
        case 'jupiter':
          return `ประตูแห่งโชคลาภและการเติบโตเปิดกว้างผ่านคุณสมบัติของ${s.th} คุณมักได้รับโอกาสขยายขอบเขตชีวิตในเรื่อง${p.houseTheme}`;
        case 'saturn':
          return `ดาวเสาร์ใน${s.th}สอนให้คุณสร้างรากฐานที่แข็งแกร่งและมีวินัย แม้ต้องใช้เวลาฝึกฝนในเรื่อง${p.houseTheme} แต่ผลลัพธ์จะยั่งยืน`;
        default:
          return s.traits;
      }
    }

    /**
     * ============================================================================
     * 4. INTERACTIVE SVG NATAL WHEEL RENDERER
     * ============================================================================
     */
    let currentChart = null;
    let selectedPlanetKey = 'sun';

    function renderNatalWheel(chart) {
      const svg = document.getElementById('natalWheelSvg');
      svg.innerHTML = '';

      const cx = 260, cy = 260;
      const rOuter = 242;
      const rZodiacInner = 198;
      const rHouseInner = 102;
      const rPlanetTrack = 152;

      const ns = 'http://www.w3.org/2000/svg';
      const createEl = (tag, attrs = {}) => {
        const el = document.createElementNS(ns, tag);
        for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
        return el;
      };

      // Defs: Gradients & Glow Filters
      const defs = createEl('defs');
      defs.innerHTML = `
        <radialGradient id="wheelBgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e1042" stop-opacity="0.95"/>
          <stop offset="70%" stop-color="#0f0724" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#080314" stop-opacity="1"/>
        </radialGradient>
        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      `;
      svg.appendChild(defs);

      // Base Backdrop Circle
      svg.appendChild(createEl('circle', {
        cx, cy, r: rOuter,
        fill: 'url(#wheelBgGrad)',
        stroke: 'rgba(192, 132, 252, 0.45)',
        'stroke-width': '1.5'
      }));

      // Rotate chart so Ascendant (House 1 cusp) sits on the Left Horizon (180° in SVG coordinates)
      // Standard astrological wheel: Ascendant on Left (9 o'clock), going counter-clockwise
      const ascBaseDeg = chart.ascSignIndex * 30;
      const lonToAngleRad = (lon) => {
        // Left = 180 deg. Counter-clockwise means increasing longitude goes downward then right
        const relDeg = 180 - (lon - ascBaseDeg);
        return (relDeg * Math.PI) / 180;
      };

      // 1. Draw 12 Zodiac Segments (Outer Ring)
      for (let i = 0; i < 12; i++) {
        const sign = ZODIAC_SIGNS[i];
        const startLon = i * 30;
        const endLon = (i + 1) * 30;
        const a1 = lonToAngleRad(startLon);
        const a2 = lonToAngleRad(endLon);

        const x1Out = cx + rOuter * Math.cos(a1);
        const y1Out = cy + rOuter * Math.sin(a1);
        const x2Out = cx + rOuter * Math.cos(a2);
        const y2Out = cy + rOuter * Math.sin(a2);

        const x1In = cx + rZodiacInner * Math.cos(a1);
        const y1In = cy + rZodiacInner * Math.sin(a1);
        const x2In = cx + rZodiacInner * Math.cos(a2);
        const y2In = cy + rZodiacInner * Math.sin(a2);

        // Segment Wedge
        const pathData = [
          `M ${x1In} ${y1In}`,
          `L ${x1Out} ${y1Out}`,
          `A ${rOuter} ${rOuter} 0 0 0 ${x2Out} ${y2Out}`,
          `L ${x2In} ${y2In}`,
          `A ${rZodiacInner} ${rZodiacInner} 0 0 1 ${x1In} ${y1In}`,
          'Z'
        ].join(' ');

        svg.appendChild(createEl('path', {
          d: pathData,
          fill: i % 2 === 0 ? 'rgba(139, 92, 246, 0.08)' : 'rgba(59, 130, 246, 0.04)',
          stroke: 'rgba(168, 85, 247, 0.25)',
          'stroke-width': '1'
        }));

        // Zodiac Glyph Symbol
        const midAngle = lonToAngleRad(startLon + 15);
        const rGlyph = (rOuter + rZodiacInner) / 2;
        const gx = cx + rGlyph * Math.cos(midAngle);
        const gy = cy + rGlyph * Math.sin(midAngle);

        const glyphText = createEl('text', {
          x: gx,
          y: gy,
          fill: sign.color,
          'font-size': '17',
          'font-weight': '600',
          'text-anchor': 'middle',
          'dominant-baseline': 'central',
          opacity: '0.92'
        });
        glyphText.textContent = sign.symbol;
        svg.appendChild(glyphText);
      }

      // Inner Ring Borders
      svg.appendChild(createEl('circle', {
        cx, cy, r: rZodiacInner,
        fill: 'none',
        stroke: 'rgba(192, 132, 252, 0.45)',
        'stroke-width': '1.2'
      }));

      svg.appendChild(createEl('circle', {
        cx, cy, r: rHouseInner,
        fill: 'rgba(12, 6, 28, 0.9)',
        stroke: 'rgba(168, 85, 247, 0.35)',
        'stroke-width': '1.2'
      }));

      // 2. Draw 12 House Spokes & House Numbers
      for (let h = 0; h < 12; h++) {
        const cuspLon = ascBaseDeg + h * 30;
        const ang = lonToAngleRad(cuspLon);
        const isAxis = h === 0 || h === 3 || h === 6 || h === 9;

        svg.appendChild(createEl('line', {
          x1: cx + rHouseInner * Math.cos(ang),
          y1: cy + rHouseInner * Math.sin(ang),
          x2: cx + rZodiacInner * Math.cos(ang),
          y2: cy + rZodiacInner * Math.sin(ang),
          stroke: isAxis ? 'rgba(232, 121, 249, 0.65)' : 'rgba(168, 85, 247, 0.2)',
          'stroke-width': isAxis ? '1.6' : '0.9',
          'stroke-dasharray': isAxis ? 'none' : '3,3'
        }));

        // House Number near inner circle
        const midHouseAng = lonToAngleRad(cuspLon + 15);
        const rNum = rHouseInner + 14;
        const numText = createEl('text', {
          x: cx + rNum * Math.cos(midHouseAng),
          y: cy + rNum * Math.sin(midHouseAng),
          fill: 'rgba(196, 181, 253, 0.55)',
          'font-size': '10',
          'font-weight': '600',
          'text-anchor': 'middle',
          'dominant-baseline': 'central'
        });
        numText.textContent = h + 1;
        svg.appendChild(numText);
      }

      // 3. Draw Aspect Lines (Geometric connections between planets inside inner circle)
      const planetList = Object.values(chart.placements);
      for (let i = 0; i < planetList.length; i++) {
        for (let j = i + 1; j < planetList.length; j++) {
          const p1 = planetList[i];
          const p2 = planetList[j];
          let diff = Math.abs(p1.longitude - p2.longitude);
          if (diff > 180) diff = 360 - diff;

          let aspectColor = null;
          if (Math.abs(diff - 120) <= 8) aspectColor = 'rgba(96, 165, 250, 0.35)'; // Trine (Harmonious)
          else if (Math.abs(diff - 60) <= 6) aspectColor = 'rgba(52, 211, 153, 0.32)'; // Sextile
          else if (Math.abs(diff - 90) <= 7) aspectColor = 'rgba(248, 113, 113, 0.32)'; // Square (Dynamic)
          else if (Math.abs(diff - 180) <= 8) aspectColor = 'rgba(232, 121, 249, 0.35)'; // Opposition

          if (aspectColor) {
            const a1 = lonToAngleRad(p1.longitude);
            const a2 = lonToAngleRad(p2.longitude);
            svg.appendChild(createEl('line', {
              x1: cx + (rHouseInner - 3) * Math.cos(a1),
              y1: cy + (rHouseInner - 3) * Math.sin(a1),
              x2: cx + (rHouseInner - 3) * Math.cos(a2),
              y2: cy + (rHouseInner - 3) * Math.sin(a2),
              stroke: aspectColor,
              'stroke-width': '1.1'
            }));
          }
        }
      }

      // Center Core Emblem
      svg.appendChild(createEl('circle', {
        cx, cy, r: 28,
        fill: 'rgba(30, 16, 66, 0.9)',
        stroke: 'rgba(192, 132, 252, 0.4)',
        'stroke-width': '1'
      }));
      const centerStar = createEl('text', {
        x: cx, y: cy,
        fill: '#e9d5ff',
        'font-size': '16',
        'text-anchor': 'middle',
        'dominant-baseline': 'central'
      });
      centerStar.textContent = '✦';
      svg.appendChild(centerStar);

      // 4. Plot Interactive Planet Nodes (with collision avoidance offset)
      const sortedPlanets = [...planetList].sort((a, b) => a.longitude - b.longitude);
      const placedCoords = [];

      sortedPlanets.forEach((p) => {
        const ang = lonToAngleRad(p.longitude);
        // Check proximity to previously placed nodes to stagger radius slightly
        let radiusOffset = 0;
        for (const prev of placedCoords) {
          let dLon = Math.abs(p.longitude - prev.lon);
          if (dLon > 180) dLon = 360 - dLon;
          if (dLon < 14 && prev.offset === 0) {
            radiusOffset = 22;
          }
        }
        placedCoords.push({ lon: p.longitude, offset: radiusOffset });

        const rNode = rPlanetTrack + radiusOffset;
        const px = cx + rNode * Math.cos(ang);
        const py = cy + rNode * Math.sin(ang);

        // Degree Tick on Zodiac Ring
        svg.appendChild(createEl('line', {
          x1: cx + (rZodiacInner - 6) * Math.cos(ang),
          y1: cy + (rZodiacInner - 6) * Math.sin(ang),
          x2: cx + rZodiacInner * Math.cos(ang),
          y2: cy + rZodiacInner * Math.sin(ang),
          stroke: p.color,
          'stroke-width': '2'
        }));

        // Interactive Group
        const g = createEl('g', {
          class: 'planet-node',
          'data-planet': p.key
        });

        const isSelected = p.key === selectedPlanetKey;

        // Node Circle
        g.appendChild(createEl('circle', {
          cx: px,
          cy: py,
          r: isSelected ? '16' : '13.5',
          fill: isSelected ? '#4c1d95' : '#160b30',
          stroke: isSelected ? '#f0abfc' : p.color,
          'stroke-width': isSelected ? '2.2' : '1.5',
          filter: isSelected ? 'url(#neonGlow)' : ''
        }));

        // Planet Symbol
        const txt = createEl('text', {
          x: px,
          y: py,
          fill: '#ffffff',
          'font-size': p.key === 'asc' ? '10' : '13',
          'font-weight': '700',
          'text-anchor': 'middle',
          'dominant-baseline': 'central'
        });
        txt.textContent = p.symbol;
        g.appendChild(txt);

        // Click & Hover Events
        const activatePlanet = () => {
          selectedPlanetKey = p.key;
          updatePlanetInspector(p);
          renderNatalWheel(currentChart);
        };
        g.addEventListener('click', activatePlanet);
        g.addEventListener('mouseenter', () => updatePlanetInspector(p));

        svg.appendChild(g);
      });
    }

    function updatePlanetInspector(p) {
      document.getElementById('inspectorSymbol').textContent = p.symbol;
      document.getElementById('inspectorSymbol').style.color = p.color;
      document.getElementById('inspectorTitle').textContent = `${p.nameTh} (${p.nameEn}) ใน${p.sign.th} (${p.sign.en})`;
      document.getElementById('inspectorHouse').textContent = `เรือนที่ ${p.house} • ${p.degreeStr}`;
      document.getElementById('inspectorDesc').textContent = getPlanetInterpretation(p);
    }

    /**
     * ============================================================================
     * 5. RENDER BIG THREE, ELEMENTS, PLANET CARDS & DEEP-DIVE TABS
     * ============================================================================
     */
    function renderDashboard(chart, userName, dateStr, timeStr, provinceName) {
      currentChart = chart;
      const { placements, unknownTime } = chart;

      // Update Header & Meta Badge
      const displayName = userName.trim() || 'คุณ';
      document.getElementById('chartOwnerHeader').innerHTML = `
        แผนที่ดวงดาวของ <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-200 to-indigo-300">${escapeHtml(displayName)}</span>
      `;

      const [y, m, d] = dateStr.split('-').map(Number);
      const formattedDate = `${d} ${THAI_MONTHS[m - 1]} ${y}`;
      const timeLabel = unknownTime ? 'ไม่ระบุเวลาเกิด (Solar Chart)' : `เวลา ${timeStr} น.`;
      document.getElementById('chartMetaBadge').textContent = `${formattedDate} • ${timeLabel} • ${provinceName}`;

      // 1. Render Big Three Cards
      const bigThreeKeys = ['sun', 'moon', 'asc'];
      const bigThreeContainer = document.getElementById('bigThreeContainer');
      bigThreeContainer.innerHTML = bigThreeKeys.map((key) => {
        const p = placements[key];
        const isAscUnknown = key === 'asc' && unknownTime;
        return `
          <div onclick="selectPlanetFromCard('${key}')" 
               class="cosmic-card rounded-2xl p-4 sm:p-5 cursor-pointer hover:border-purple-400/50 transition-all group">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/25 to-indigo-600/20 border border-purple-400/30 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform" style="color:${p.color}">
                  ${p.symbol}
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-medium text-purple-300">${p.nameTh} (${p.nameEn})</span>
                    <span class="text-[11px] px-2 py-0.5 rounded-full bg-purple-950/90 text-purple-300 border border-purple-500/25">
                      ${isAscUnknown ? 'ประมาณการ' : `เรือน ${p.house}`}
                    </span>
                  </div>
                  <h4 class="text-base sm:text-lg font-bold text-white mt-0.5 flex items-center gap-2">
                    <span>${p.sign.th}</span>
                    <span class="text-sm font-normal text-purple-300/80">${p.sign.symbol} ${p.sign.en}</span>
                  </h4>
                </div>
              </div>
              <div class="text-right hidden sm:block">
                <span class="text-xs text-purple-300/60 block">${p.degreeStr}</span>
                <span class="text-[11px] text-purple-400 group-hover:translate-x-0.5 inline-block transition-transform">ดูรายละเอียด →</span>
              </div>
            </div>
            <p class="text-xs text-purple-200/75 mt-3 pt-2.5 border-t border-purple-500/15 leading-relaxed">
              <strong class="text-purple-200 font-medium">${p.role}:</strong> ${p.sign.traits}
            </p>
          </div>
        `;
      }).join('');

      // 2. Render Element & Modality Balance
      const elementCounts = { fire: 0, earth: 0, air: 0, water: 0 };
      const modalityCounts = { cardinal: 0, fixed: 0, mutable: 0 };
      const allPlanets = Object.values(placements);

      allPlanets.forEach((p) => {
        elementCounts[p.sign.element]++;
        modalityCounts[p.sign.modality]++;
      });

      const elementMeta = [
        { key: 'fire', label: 'ธาตุไฟ (Fire)', icon: '🔥', barClass: 'from-rose-500 to-amber-400' },
        { key: 'earth', label: 'ธาตุดิน (Earth)', icon: '🌿', barClass: 'from-emerald-500 to-teal-400' },
        { key: 'air', label: 'ธาตุลม (Air)', icon: '🌬️', barClass: 'from-sky-400 to-indigo-400' },
        { key: 'water', label: 'ธาตุน้ำ (Water)', icon: '💧', barClass: 'from-purple-500 to-fuchsia-400' }
      ];

      const dominantEl = elementMeta.reduce((prev, curr) =>
        elementCounts[curr.key] > elementCounts[prev.key] ? curr : prev
      );
      document.getElementById('dominantElementBadge').textContent = `เด่น${dominantEl.label.split(' ')[0]} ${dominantEl.icon}`;

      document.getElementById('elementsContainer').innerHTML = elementMeta.map((el) => {
        const count = elementCounts[el.key];
        const pct = Math.round((count / allPlanets.length) * 100);
        return `
          <div>
            <div class="flex justify-between text-xs mb-1">
              <span class="text-purple-100/90">${el.icon} ${el.label}</span>
              <span class="text-purple-300/80 font-medium">${count} ดวง (${pct}%)</span>
            </div>
            <div class="w-full h-2 rounded-full bg-purple-950/90 overflow-hidden border border-purple-500/15">
              <div class="h-full rounded-full bg-gradient-to-r ${el.barClass} transition-all duration-700" style="width: ${pct}%"></div>
            </div>
          </div>
        `;
      }).join('');

      const modalities = [
        { key: 'cardinal', th: 'จรราศี (ริเริ่ม)', en: 'Cardinal' },
        { key: 'fixed', th: 'สถิรราศี (มั่นคง)', en: 'Fixed' },
        { key: 'mutable', th: 'อุภยราศี (ปรับตัว)', en: 'Mutable' }
      ];
      document.getElementById('modalityContainer').innerHTML = modalities.map((m) => `
        <div class="rounded-xl bg-purple-950/50 border border-purple-500/15 py-2 px-1">
          <div class="text-base font-bold text-white">${modalityCounts[m.key]}</div>
          <div class="text-[11px] text-purple-200/85">${m.th}</div>
          <div class="text-[10px] text-purple-400/70">${m.en}</div>
        </div>
      `).join('');

      // 3. Render Complete Planetary Grid
      document.getElementById('planetsGrid').innerHTML = allPlanets.map((p) => `
        <div onclick="selectPlanetFromCard('${p.key}')"
             class="rounded-2xl bg-[#0c061e]/85 border border-purple-500/20 hover:border-purple-400/55 p-4 transition-all cursor-pointer group flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2.5">
              <div class="flex items-center gap-2">
                <span class="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-400/25 flex items-center justify-center text-base font-bold" style="color:${p.color}">
                  ${p.symbol}
                </span>
                <div>
                  <div class="text-sm font-semibold text-white group-hover:text-purple-200 transition-colors">${p.nameTh}</div>
                  <div class="text-[10px] text-purple-300/65">${p.nameEn}</div>
                </div>
              </div>
              <span class="text-[11px] px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-200 border border-purple-400/20">
                เรือน ${p.house}
              </span>
            </div>

            <div class="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-purple-950/50 border border-purple-500/15 mb-2.5">
              <span class="font-medium text-purple-100">${p.sign.symbol} ${p.sign.th}</span>
              <span class="text-purple-300/70 font-mono text-[11px]">${p.degreeStr}</span>
            </div>
          </div>

          <p class="text-xs text-purple-200/75 leading-relaxed">
            ${p.role}: <span class="text-purple-100/90">${p.houseTheme}</span>
          </p>
        </div>
      `).join('');

      // 4. Render SVG Wheel & Inspector
      renderNatalWheel(chart);
      updatePlanetInspector(placements[selectedPlanetKey] || placements.sun);

      // 5. Render Active Deep-Dive Tab
      const activeTabBtn = document.querySelector('.tab-btn.active');
      renderDeepDiveTab(activeTabBtn ? activeTabBtn.dataset.tab : 'identity');
    }

    function selectPlanetFromCard(key) {
      if (!currentChart) return;
      selectedPlanetKey = key;
      const p = currentChart.placements[key];
      updatePlanetInspector(p);
      renderNatalWheel(currentChart);
      document.getElementById('natalWheelSvg').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    /**
     * ============================================================================
     * 6. DEEP-DIVE PERSONALITY TABS CONTENT
     * ============================================================================
     */
    function renderDeepDiveTab(tabKey) {
      if (!currentChart) return;
      const { sun, moon, asc, venus, mars, mercury, jupiter, saturn } = currentChart.placements;
      const container = document.getElementById('tabContentArea');

      if (tabKey === 'identity') {
        container.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 space-y-4">
              <h4 class="text-lg font-semibold text-white flex items-center gap-2">
                <span class="text-purple-400">✦</span> โครงสร้างตัวตน: อาทิตย์${sun.sign.th} • จันทร์${moon.sign.th} • ลัคนา${asc.sign.th}
              </h4>
              <p class="text-sm text-purple-100/85 leading-relaxed">
                คุณผสานพลังแห่งเป้าหมายชีวิตแบบ<strong>${sun.sign.th}</strong> (${sun.sign.traits}) เข้ากับโลกทางอารมณ์ที่ลึกซึ้งแบบ<strong>${moon.sign.th}</strong> 
                ทำให้เวลาอยู่ท่ามกลางผู้คน คุณจะแสดงบุคลิกภาพแบบ<strong>${asc.sign.th}</strong> ซึ่งสร้างความประทับใจแรกที่โดดเด่นและเป็นเอกลักษณ์
              </p>
              <p class="text-sm text-purple-200/80 leading-relaxed">
                ในด้านความคิดและการสื่อสาร ดาวพุธสถิตใน<strong>${mercury.sign.th} (เรือนที่ ${mercury.house})</strong> ส่งผลให้คุณมักประมวลผลข้อมูลและถ่ายทอดเรื่องราวได้อย่างเฉียบคม โดยเฉพาะเมื่อเกี่ยวข้องกับเรื่อง<em>${mercury.houseTheme}</em>
              </p>
            </div>
            <div class="rounded-2xl bg-purple-950/55 border border-purple-500/25 p-5 flex flex-col justify-between">
              <div>
                <span class="text-xs font-semibold text-purple-300 uppercase tracking-wider">จุดแข็งตามดวงดาว</span>
                <ul class="mt-3 space-y-2.5 text-xs sm:text-sm text-purple-100/90">
                  <li class="flex items-start gap-2"><span class="text-purple-400">◆</span> พลังสร้างสรรค์และความมั่นใจจากอาทิตย์ในเรือนที่ ${sun.house}</li>
                  <li class="flex items-start gap-2"><span class="text-purple-400">◆</span> สัญชาตญาณการรับรู้อารมณ์ผู้คนจากจันทร์${moon.sign.th}</li>
                  <li class="flex items-start gap-2"><span class="text-purple-400">◆</span> เสน่ห์เฉพาะตัวที่ดึงดูดมิตรภาพและโอกาสดีๆ</li>
                </ul>
              </div>
              <div class="mt-4 pt-3 border-t border-purple-500/20 text-xs text-purple-300/80">
                คำแนะนำจักรวาล: เชื่อมั่นในสัญชาตญาณแรกของตัวเอง
              </div>
            </div>
          </div>
        `;
      } else if (tabKey === 'love') {
        container.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 space-y-4">
              <h4 class="text-lg font-semibold text-white flex items-center gap-2">
                <span class="text-rose-400">♥</span> ภาษาแห่งความรัก: ดาวศุกร์ใน${venus.sign.th} &amp; ดาวอังคารใน${mars.sign.th}
              </h4>
              <p class="text-sm text-purple-100/85 leading-relaxed">
                ด้วยตำแหน่ง<strong>ดาวศุกร์ใน${venus.sign.th} (เรือนที่ ${venus.house})</strong> คุณให้คุณค่ากับความรักที่${venus.sign.traits} 
                คุณมักตกหลุมรักคนที่สามารถเชื่อมโยงกันได้ทั้งทางความรู้สึกและทัศนคติ โดยพื้นที่ความสัมพันธ์ของคุณมักโคจรอยู่รอบเรื่อง<em>${venus.houseTheme}</em>
              </p>
              <p class="text-sm text-purple-200/80 leading-relaxed">
                ขณะที่<strong>ดาวอังคารใน${mars.sign.th}</strong> บ่งบอกถึงแรงดึงดูดและความทุ่มเทเมื่อคุณรักใครสักคน คุณเป็นคนจริงใจและพร้อมปกป้องความสัมพันธ์ให้เติบโตอย่างมีความหมาย
              </p>
            </div>
            <div class="rounded-2xl bg-purple-950/55 border border-rose-400/25 p-5 flex flex-col justify-between">
              <div>
                <span class="text-xs font-semibold text-rose-300 uppercase tracking-wider">เสน่ห์และคู่ที่สมพงษ์</span>
                <ul class="mt-3 space-y-2.5 text-xs sm:text-sm text-purple-100/90">
                  <li class="flex items-start gap-2"><span class="text-rose-400">♥</span> เสน่ห์ดึงดูดใจแบบชาว${venus.sign.th}</li>
                  <li class="flex items-start gap-2"><span class="text-rose-400">♥</span> ต้องการพื้นที่ปลอดภัยทางอารมณ์แบบจันทร์${moon.sign.th}</li>
                  <li class="flex items-start gap-2"><span class="text-rose-400">♥</span> พัฒนาความสัมพันธ์ได้ดีผ่านการสื่อสารที่เปิดใจ</li>
                </ul>
              </div>
              <div class="mt-4 pt-3 border-t border-purple-500/20 text-xs text-rose-200/80">
                คีย์เวิร์ดความรัก: ความจริงใจและพื้นที่เติบโตไปด้วยกัน
              </div>
            </div>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 space-y-4">
              <h4 class="text-lg font-semibold text-white flex items-center gap-2">
                <span class="text-amber-400">❖</span> ศักยภาพและความสำเร็จ: ดาวพฤหัสบดีใน${jupiter.sign.th} &amp; ดาวเสาร์ใน${saturn.sign.th}
              </h4>
              <p class="text-sm text-purple-100/85 leading-relaxed">
                เส้นทางการเติบโตของคุณได้รับการส่งเสริมจาก<strong>ดาวพฤหัสบดีใน${jupiter.sign.th} (เรือนที่ ${jupiter.house})</strong> 
                ซึ่งเป็นจุดนำโชคที่เปิดโอกาสให้คุณขยายศักยภาพในด้าน<em>${jupiter.houseTheme}</em> ยิ่งคุณแบ่งปันความรู้และวิสัยทัศน์ โอกาสยิ่งหลั่งไหลเข้ามา
              </p>
              <p class="text-sm text-purple-200/80 leading-relaxed">
                ในระยะยาว <strong>ดาวเสาร์ใน${saturn.sign.th} (เรือนที่ ${saturn.house})</strong> จะหล่อหลอมให้คุณกลายเป็นผู้เชี่ยวชาญตัวจริงในเรื่อง<em>${saturn.houseTheme}</em> ความพยายามที่คุณลงแรงไว้จะออกดอกออกผลอย่างมั่นคง
              </p>
            </div>
            <div class="rounded-2xl bg-purple-950/55 border border-amber-400/25 p-5 flex flex-col justify-between">
              <div>
                <span class="text-xs font-semibold text-amber-300 uppercase tracking-wider">เข็มทิศสู่ความสำเร็จ</span>
                <ul class="mt-3 space-y-2.5 text-xs sm:text-sm text-purple-100/90">
                  <li class="flex items-start gap-2"><span class="text-amber-400">★</span> จุดขยายโชคลาภ: เรือนที่ ${jupiter.house} (${jupiter.sign.th})</li>
                  <li class="flex items-start gap-2"><span class="text-amber-400">★</span> พลังลงมือทำ: อังคารใน${mars.sign.th}</li>
                  <li class="flex items-start gap-2"><span class="text-amber-400">★</span> ความเชี่ยวชาญระยะยาว: เสาร์ในเรือนที่ ${saturn.house}</li>
                </ul>
              </div>
              <div class="mt-4 pt-3 border-t border-purple-500/20 text-xs text-amber-200/80">
                คีย์เวิร์ดการงาน: วิสัยทัศน์ที่ผสานกับวินัยที่สม่ำเสมอ
              </div>
            </div>
          </div>
        `;
      }
    }

    /**
     * ============================================================================
     * 7. UI EVENTS, TOAST & CLIPBOARD HELPERS
     * ============================================================================
     */
    function escapeHtml(str) {
      return str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
      }[m]));
    }

    let toastTimer = null;
    function showToast(msg) {
      const toast = document.getElementById('toastNotification');
      document.getElementById('toastMessage').textContent = msg;
      toast.classList.remove('translate-y-20', 'opacity-0');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 3200);
    }

    function copyChartSummary() {
      if (!currentChart) return;
      const name = document.getElementById('userName').value.trim() || 'ฉัน';
      const { sun, moon, asc } = currentChart.placements;
      const summary = `✨ Birth Chart ของ ${name} ✨\n☉ ราศีอาทิตย์ (Sun): ${sun.sign.th} (${sun.sign.en})\n☽ ราศีจันทร์ (Moon): ${moon.sign.th} (${moon.sign.en})\n↑ ลัคนาราศี (Rising): ${asc.sign.th} (${asc.sign.en})`;

      const textarea = document.createElement('textarea');
      textarea.value = summary;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showToast('คัดลอกสรุปแผนที่ดวงดาวเรียบร้อยแล้ว ✦');
      } catch (err) {
        showToast('ไม่สามารถคัดลอกข้อความได้');
      }
      document.body.removeChild(textarea);
    }

    function runCalculation(notify = false) {
      const name = document.getElementById('userName').value;
      const dateStr = document.getElementById('birthDate').value;
      const timeStr = document.getElementById('birthTime').value;
      const unknownTime = document.getElementById('unknownTime').checked;
      const provinceSelect = document.getElementById('birthProvince');
      const [lat, lon] = provinceSelect.value.split(',').map(Number);
      const provinceName = provinceSelect.options[provinceSelect.selectedIndex].text.split(' (')[0];

      const chart = calculateNatalChart(dateStr, timeStr, unknownTime, lat, lon);
      renderDashboard(chart, name, dateStr, timeStr, provinceName);
      document.getElementById('resultsDashboard').classList.remove('hidden');

      if (notify) {
        showToast('คำนวณแผนที่ดวงดาวของคุณเรียบร้อยแล้ว ✦');
        document.getElementById('resultsDashboard').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    const THAI_PROVINCES = [
      ['กรุงเทพมหานคร', 13.7563, 100.5018], ['กระบี่', 8.0863, 98.9063], ['กาญจนบุรี', 14.0228, 99.5328], ['กาฬสินธุ์', 16.4322, 103.5069], ['กำแพงเพชร', 16.4828, 99.5227], ['ขอนแก่น', 16.4322, 102.8236], ['จันทบุรี', 12.6113, 102.1039], ['ฉะเชิงเทรา', 13.6904, 101.0779], ['ชลบุรี', 13.3611, 100.9847], ['ชัยนาท', 15.1852, 100.1251], ['ชัยภูมิ', 15.8068, 102.0315], ['ชุมพร', 10.4930, 99.1800], ['เชียงราย', 19.9105, 99.8406], ['เชียงใหม่', 18.7883, 98.9853], ['ตรัง', 7.5563, 99.6114], ['ตราด', 12.2428, 102.5175], ['ตาก', 16.8960, 99.2530], ['นครนายก', 14.2069, 101.2131], ['นครปฐม', 13.8199, 100.0622], ['นครพนม', 17.4108, 104.7780], ['นครราชสีมา', 14.9799, 102.0978], ['นครศรีธรรมราช', 8.4304, 99.9631], ['นครสวรรค์', 15.6930, 100.1226], ['นนทบุรี', 13.8591, 100.5144], ['นราธิวาส', 6.4264, 101.8231], ['น่าน', 18.7756, 100.7730], ['บึงกาฬ', 18.3609, 103.6464], ['บุรีรัมย์', 14.9930, 103.1029], ['ปทุมธานี', 14.0208, 100.5250], ['ประจวบคีรีขันธ์', 11.8117, 99.7970], ['ปราจีนบุรี', 14.0509, 101.3727], ['ปัตตานี', 6.8695, 101.2505], ['พะเยา', 19.1667, 99.9000], ['พังงา', 8.4509, 98.5310], ['พัทลุง', 7.6167, 100.0833], ['พิจิตร', 16.4419, 100.3488], ['พิษณุโลก', 16.8211, 100.2659], ['เพชรบุรี', 13.1119, 99.9391], ['เพชรบูรณ์', 16.4190, 101.1606], ['แพร่', 18.1459, 100.1410], ['ภูเก็ต', 7.8804, 98.3923], ['มหาสารคาม', 16.1851, 103.3020], ['มุกดาหาร', 16.5436, 104.7235], ['แม่ฮ่องสอน', 19.3013, 97.9698], ['ยโสธร', 15.7928, 104.1453], ['ยะลา', 6.5411, 101.2804], ['ร้อยเอ็ด', 16.0538, 103.6520], ['ระนอง', 9.9529, 98.6085], ['ระยอง', 12.6810, 101.2570], ['ราชบุรี', 13.5283, 99.8134], ['ลพบุรี', 14.7995, 100.6534], ['ลำปาง', 18.2888, 99.4909], ['ลำพูน', 18.5745, 99.0087], ['เลย', 17.4860, 101.7223], ['ศรีสะเกษ', 15.1186, 104.3220], ['สกลนคร', 17.1546, 104.1348], ['สงขลา', 7.1898, 100.5951], ['สตูล', 6.6238, 100.0674], ['สมุทรปราการ', 13.5991, 100.5998], ['สมุทรสงคราม', 13.4098, 100.0023], ['สมุทรสาคร', 13.5475, 100.2744], ['สระแก้ว', 13.8240, 102.0646], ['สระบุรี', 14.5289, 100.9101], ['สิงห์บุรี', 14.8936, 100.3967], ['สุโขทัย', 17.0078, 99.8230], ['สุพรรณบุรี', 14.4742, 100.1177], ['สุราษฎร์ธานี', 9.1382, 99.3217], ['สุรินทร์', 14.8828, 103.4937], ['สุหนองบัวลำภู', 17.2041, 102.4407], ['หนองคาย', 17.8783, 102.7413], ['อ่างทอง', 14.5896, 100.4551], ['อำนาจเจริญ', 15.8657, 104.6258], ['อุดรธานี', 17.4138, 102.7872], ['อุตรดิตถ์', 17.6201, 100.0993], ['อุทัยธานี', 15.3794, 100.0246], ['อุบลราชธานี', 15.2448, 104.8473], ['พระนครศรีอยุธยา', 14.3532, 100.5684], ['หนองบัวลำภู', 17.2041, 102.4407]
    ];

    const provinceSelect = document.getElementById('birthProvince');
    const provinces = THAI_PROVINCES.filter(([name]) => name !== 'สุหนองบัวลำภู');
    provinceSelect.innerHTML = '<option value="" selected disabled>เลือกจังหวัด</option>' + provinces.map(([name, lat, lon]) => `<option value="${lat},${lon}">${name}</option>`).join('');

    // Event Listeners
    document.getElementById('unknownTime').addEventListener('change', (e) => {
      const birthTime = document.getElementById('birthTime');
      birthTime.disabled = e.target.checked;
      birthTime.required = !e.target.checked;
    });

    document.getElementById('birthForm').addEventListener('submit', (e) => {
      e.preventDefault();
      runCalculation(true);
    });

    document.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach((b) => {
          b.classList.remove('active', 'bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30');
          b.classList.add('text-purple-200/80');
        });
        btn.classList.add('active', 'bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30');
        btn.classList.remove('text-purple-200/80');
        renderDeepDiveTab(btn.dataset.tab);
      });
    });
