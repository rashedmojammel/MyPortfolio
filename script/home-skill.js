(function() {
  const container = document.getElementById('skills-orb-container');
  if (!container) return;

  /* Add center orb */
  const center = document.createElement('div');
  center.className = 'orbit-center';
  center.innerHTML = '<i class="fas fa-code"></i>';
  container.appendChild(center);

  const skills = [
    /* ── inner orbit (r = 155px) — 8 skills ── */
    { icon: 'fab fa-html5',           label: 'HTML',      cls: 's-html',      size: 'lg', orbit: 155, start:   0, dur: 18, dir:  1 },
    { icon: 'fab fa-css3-alt',        label: 'CSS',       cls: 's-css',       size: 'lg', orbit: 155, start:  45, dur: 18, dir:  1 },
    { icon: 'fab fa-js',              label: 'JS',        cls: 's-js',        size: 'lg', orbit: 155, start:  90, dur: 18, dir:  1 },
    { icon: 'fab fa-react',           label: 'Next.js',   cls: 's-react',     size: 'lg', orbit: 155, start: 135, dur: 18, dir:  1 },
    { icon: 'fab fa-python',          label: 'Python',    cls: 's-python',    size: 'lg', orbit: 155, start: 180, dur: 18, dir:  1 },
    { icon: 'fab fa-node-js',         label: 'Node.js',   cls: 's-node',            orbit: 155, start: 225, dur: 18, dir:  1 },
    { icon: 'fab fa-php',             label: 'PHP',       cls: 's-php',             orbit: 155, start: 270, dur: 18, dir:  1 },
    { icon: 'fab fa-java',            label: 'Java',      cls: 's-java',            orbit: 155, start: 315, dur: 18, dir:  1 },

    /* ── outer orbit (r = 230px) — 12 skills ── */
    { icon: 'fas fa-database',        label: 'MySQL',     cls: 's-mysql',           orbit: 230, start:   0, dur: 28, dir: -1 },
    { icon: 'fas fa-fire',            label: 'Firebase',  cls: 's-firebase',        orbit: 230, start:  30, dur: 28, dir: -1 },
    { icon: 'fas fa-microchip',       label: 'Arduino',   cls: 's-arduino',         orbit: 230, start:  60, dur: 28, dir: -1 },
    { icon: 'fab fa-git-alt',         label: 'Git',       cls: 's-git',             orbit: 230, start:  90, dur: 28, dir: -1 },
    { icon: 'fab fa-github',          label: 'GitHub',    cls: 's-github',          orbit: 230, start: 120, dur: 28, dir: -1 },
    { icon: 'fab fa-figma',           label: 'Figma',     cls: 's-figma',           orbit: 230, start: 150, dur: 28, dir: -1 },
    { icon: 'fab fa-bootstrap',       label: 'Bootstrap', cls: 's-bootstrap',       orbit: 230, start: 180, dur: 28, dir: -1 },
    { icon: 'fas fa-hashtag',         label: 'C#',        cls: 's-csharp',          orbit: 230, start: 210, dur: 28, dir: -1 },
    { icon: 'fas fa-code',            label: 'C++',       cls: 's-cpp',             orbit: 230, start: 240, dur: 28, dir: -1 },
    { icon: 'fas fa-wind',            label: 'Tailwind',  cls: 's-tailwind',        orbit: 230, start: 270, dur: 28, dir: -1 },
    { icon: 'fas fa-layer-group',     label: 'DaisyUI',   cls: 's-daisy',           orbit: 230, start: 300, dur: 28, dir: -1 },
    { icon: 'fas fa-broadcast-tower', label: 'RF',        cls: 's-rf',              orbit: 230, start: 330, dur: 28, dir: -1 },
  ];

  skills.forEach(skill => {
    const ball = document.createElement('div');
    ball.className = 'skill-ball '
      + (skill.cls  ? skill.cls  + ' ' : '')
      + (skill.size === 'lg' ? 'lg' : '');

    ball.innerHTML = skill.img
      ? `<img src="${skill.img}" alt="${skill.label}" /><span>${skill.label}</span>`
      : `<i class="${skill.icon}"></i><span>${skill.label}</span>`;

    const startDeg = skill.start;
    const dur      = skill.dur + 's';
    /* counter-clockwise → negative duration trick */
    const animDur  = skill.dir === -1 ? '-' + dur : dur;

    ball.style.cssText = `
      top: 50%;
      left: 50%;
      margin-top: -${(skill.size === 'lg' ? 37 : 31)}px;
      margin-left: -${(skill.size === 'lg' ? 37 : 31)}px;
      --orbit-r: ${skill.orbit}px;
      --orbit-start: ${startDeg}deg;
      animation: orbitSpin ${Math.abs(skill.dur)}s linear infinite;
      animation-direction: ${skill.dir === -1 ? 'reverse' : 'normal'};
    `;

    container.appendChild(ball);
  });
})();