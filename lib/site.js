export const SITE = {
  name: 'Shalvah Homes Group',
  tagline: 'Design. Build. Live Better.',
  strap: 'Transforming Spaces, Enriching Lives.',
  whatsapp: '255666507045',
  whatsappDisplay: '+255 666 507 045',
  email: 'shalvahhomesgroup@gmail.com',
  instagram: 'shalvahhomesgroup',
  address: 'Mbezi Beach, Dar es Salaam, Tanzania',
};

export function waLink(text) {
  const msg = text || 'Hello Shalvah Homes Group, I would like to talk about my project.';
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const SERVICES = [
  { key: 'interior', title: 'Interior Design', text: 'Living rooms, bedrooms, kitchens, offices and commercial spaces.' },
  { key: 'finishing', title: 'Construction Finishing', text: 'Tiling, painting, ceilings, flooring and fittings.' },
  { key: 'renovation', title: 'Renovations', text: 'Full home or office makeovers, upgrades and repairs.' },
  { key: 'plans', title: 'Architectural Floor Plan Design', text: 'Custom plans based on your idea, for homeowners, land owners and diaspora Tanzanians.' },
];

export const STEPS = [
  { n: '01', title: 'Consultation', text: 'Understand your needs.' },
  { n: '02', title: 'Design and Quote', text: 'Create the perfect plan.' },
  { n: '03', title: 'Execution', text: 'Build with quality and care.' },
  { n: '04', title: 'Handover', text: 'Enjoy your dream space.' },
];

export const WHY = [
  { title: 'Clear Communication', text: 'Stay informed at every step.' },
  { title: 'Quality Finishing', text: 'Excellence in every detail.' },
  { title: 'Project Management', text: 'On time, within plan.' },
  { title: 'Fair Pricing', text: 'Get the best value.' },
];
