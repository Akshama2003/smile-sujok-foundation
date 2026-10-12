// All content below is taken from the existing Smile Su-Jok Foundation site
// (https://foundation-to-help-uh3f.vercel.app) and its linked pages.

export const SITE = 'https://foundation-to-help-uh3f.vercel.app';
export const img = (name: string) => `${SITE}/images/img/${encodeURIComponent(name)}`;

import logo from './assets/img/logo.png';
import portrait from './assets/img/portrait.jpg';
import consultation from './assets/img/consultation.jpg';
import demonstration from './assets/img/demonstration.jpg';
import sessionHall from './assets/img/session-hall.jpg';
import sessionAuditorium from './assets/img/session-auditorium.jpg';
import practitioners from './assets/img/practitioners.jpg';
import visit from './assets/img/visit.jpg';
import conference from './assets/img/conference.jpg';
import meeting from './assets/img/meeting.jpg';
import gurmeet from './assets/img/gurmeet.jpg';

export { logo, portrait, consultation, practitioners };

// Photos supplied by the foundation. Captions describe what is visible and do not name people.
export const GALLERY = [
  { src: consultation, title: 'Free consultation camp', alt: 'A therapist holds a participant’s hand during a consultation while other visitors wait their turn', span: 'col-span-2 row-span-2' },
  { src: demonstration, title: 'Live demonstration', alt: 'A practitioner demonstrates hand points on a volunteer in front of an anatomy slide', span: 'row-span-2' },
  { src: visit, title: 'Guests at the clinic', alt: 'Visitors and practitioners pose at a desk covered with Su-Jok hand charts', span: '' },
  { src: conference, title: 'Invited talk', alt: 'A practitioner presenting a slide that compares the body’s protruding parts with the hand', span: '' },
  { src: sessionHall, title: 'Group practice', alt: 'A hall full of participants stretching their arms forward during a guided session', span: '' },
  { src: sessionAuditorium, title: 'Mass session', alt: 'Rows of participants in an auditorium practising the same hand exercise', span: '' },
  { src: practitioners, title: 'Practitioners’ seminar', alt: 'Seven practitioners standing together in front of a seminar welcome screen', span: '' },
  { src: meeting, title: 'Meeting and gift exchange', alt: 'Five people in an office; two men hold a small potted plant between them, with a wrapped red gift box on the table', span: '' },
];

export const CONTACT = {
  email: 'smilesujokfoundation46@gmail.com',
  phones: [
    { label: '+91 94129 39707', href: 'tel:+919412939707' },
    { label: '+91 97603 21477', href: 'tel:+919760321477' },
  ],
  address: '#64, Ashwani Enclave, Lane No 2, Sewla Kalan, Majra, Dehradun, 248001, Uttarakhand',
};

export const SOCIAL = [
  { label: 'YouTube', href: 'https://www.youtube.com/@smilesujokfoundationdehrad5435' },
  { label: 'Instagram', href: 'https://www.instagram.com/smile_sujok_foundation/' },
  { label: 'X', href: 'https://x.com/gurmeetchauhan' },
];

export const EVENTS = [
  {
    title: 'Annual Day Function',
    body: 'A grand event bringing together therapists and professionals from all over India.',
    icon: 'award',
  },
  {
    title: 'Training Camps',
    body: 'Comprehensive learning experiences for therapists to enhance their Sujok therapy skills.',
    icon: 'cap',
  },
  {
    title: 'Blood Donation Drives',
    body: 'Community service initiatives to promote health and save lives through blood donation.',
    icon: 'drop',
  },
];

export const CONDITIONS = [
  'Bronchitis',
  'Asthma',
  'Headaches',
  'Dizziness',
  'Migraines',
  'Gastritis',
  'Ulcers',
  'Diabetes',
  'Depression',
  'Fever',
  'Back pain',
  'Knee pain',
];

export const HAND_POINTS = [
  { n: 1, title: 'Thumb', body: 'Corresponds to the head and the neck.' },
  { n: 2, title: 'Fleshy part under the thumb', body: 'Corresponds to the chest.' },
  { n: 3, title: 'The palm as a whole', body: 'Refers to the abdominal region.' },
];

export const SERVICES = [
  {
    title: 'Sujok Therapy for Fever',
    body: 'Our Sujok therapy effectively alleviates fever by targeting specific acupressure points on the hands and feet, promoting natural healing.',
  },
  {
    title: 'Sujok Therapy for Back Pain',
    body: "Experience relief from back pain with our specialized Sujok therapy, which stimulates the body's healing processes without medication.",
  },
  {
    title: 'Sujok Therapy for Knee Pain',
    body: 'Our customized Sujok therapy plans address knee pain by using targeted acupressure techniques to enhance recovery and well-being.',
  },
];

export const TEAM = [
  {
    name: 'Dr. Subhash Chaudhary',
    role: 'President of Foundation',
    body: 'Working in this field for the last 12 years.',
    image: portrait,
  },
  {
    name: 'Dr. Gurmeet Chauhan',
    role: 'Head of Foundation · Trainer',
    body: 'A professional doctor and the trainer for our foundation, working tirelessly as Co-Head of the organization.',
    image: gurmeet,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Dr. M.C. Khanduri',
    role: 'Veterinarian',
    quote:
      "After suffering from severe neuropathy, I found hope and healing at the Su-Jok clinic. Dr. Subhash Chaudhary's expertise and care have transformed my life, allowing me to return to my veterinary practice and enjoy daily activities.",
  },
  {
    name: 'Anita Sharma',
    role: 'Retired Teacher',
    quote:
      'I was struggling with chronic pain for years until I discovered Su-Jok therapy. The compassionate approach of the practitioners has given me a new lease on life. I am now able to engage with my family and community again.',
  },
  {
    name: 'Rajesh Gupta',
    role: 'Businessman',
    quote:
      'The treatment I received at the Smile Su-Jok Department was life-changing. I had lost hope due to my condition, but the dedicated team helped me regain my strength and confidence.',
  },
  {
    name: 'Sita Devi',
    role: 'Housewife',
    quote:
      'I was bedridden for months due to my illness. Thanks to the Su-Jok therapy, I can now manage my household and enjoy life with my grandchildren. I am forever grateful to Dr. Chaudhary.',
  },
  {
    name: 'Vikram Singh',
    role: 'Software Engineer',
    quote:
      'I came to the Su-Jok clinic with severe anxiety and physical ailments. The holistic approach of the therapy has not only healed my body but also my mind. I feel rejuvenated and ready to take on new challenges.',
  },
  {
    name: 'Neha Patel',
    role: 'Student',
    quote:
      'As a young person facing health issues, I felt hopeless. The support and treatment I received at the Smile Su-Jok Department have empowered me to pursue my dreams and live a fulfilling life.',
  },
];

export const FAQS = [
  {
    q: 'What is Sujok?',
    a: 'Sujok therapy is a natural healing method that involves massaging the hands and feet to treat a variety of conditions.',
  },
  {
    q: 'What health conditions can it treat?',
    a: 'Sujok treats several conditions like bronchitis, asthma, headaches, dizziness, migraines, gastritis, ulcers, diabetes, and also mental disorders like depression.',
  },
  {
    q: 'How does it differ from conventional treatments?',
    a: 'Su Jok therapy can be an alternative to reduce pain which is easy, inexpensive and provides quick results.',
  },
  { q: 'How many centers are there?', a: 'We have 27 healthcare centers across India dedicated to serving our community.' },
  { q: 'Do you offer home services?', a: 'Yes, we offer home services.' },
  {
    q: 'Can I receive services from abroad?',
    a: 'Yes. We have professionals outside India as well who work for their patients.',
  },
  { q: 'How do I contact you?', a: `You can reach us at ${CONTACT.address}.` },
];

export const LEVELS = [
  {
    level: 'Level One',
    title: 'Foundations of Sujok',
    price: '₹5,000',
    body: 'Our introductory course covering the fundamental principles of Sujok therapy: the basics of foot reflexology, hand massage techniques, and simple treatments for common ailments.',
  },
  {
    level: 'Level Two',
    title: 'Advanced Techniques',
    price: '₹15,000',
    body: 'Delve deeper into complex treatment methods, learn about specialized tools, and gain insights into treating various health conditions using Sujok principles.',
  },
  {
    level: 'Level Three',
    title: 'Mastery Program',
    price: '₹25,000',
    body: 'Advanced techniques, case studies, and the business skills necessary to establish your own practice. Completion awards a certification recognizing your expertise in Sujok therapy.',
  },
];

export const ONLINE_EXPECT = [
  'A comprehensive consultation to understand your health concerns and goals',
  'Personalized treatment plans tailored to your specific needs',
  'Guided self-treatment instructions using simple, accessible materials',
  'Follow-up support to monitor your progress and address any questions',
];

export const ONLINE_POINTS = [
  { t: 'Convenience', b: 'Access Sujok therapy from anywhere with an internet connection' },
  { t: 'Privacy', b: 'Enjoy confidential consultations in the comfort of your home' },
  { t: 'Accessibility', b: 'Ideal for those with mobility issues or living in remote areas' },
  { t: 'Cost-effective', b: 'Often less expensive than traditional in-person sessions' },
];

export const OFFLINE_BENEFITS = [
  'Hands-on training under expert supervision',
  'Interactive learning environment fostering peer-to-peer exchange',
  'Opportunity to practice on real clients under instructor guidance',
  'Comprehensive study materials and resources',
  'Certification upon successful completion of each level',
];

export const LEARN_FAQS = [
  {
    q: 'What is Sujok Therapy?',
    a: 'Sujok therapy is a holistic healing system developed by Professor Park Jae Woo. It treats illnesses by stimulating corresponding points on the hands and feet. The therapy is based on the principle that each part of the body is represented by micro-points on the hands and feet, similar to reflexology.',
  },
  {
    q: 'How does Sujok therapy work?',
    a: 'It works by stimulating these micro-points on the hands and feet to treat diseases in other parts of the body. It can be used for preventive care by strengthening the immune system and for treating various physical, mental, and emotional health issues.',
  },
  {
    q: 'Is there formal training available?',
    a: 'Yes. Courses are offered at different levels, typically ranging from beginner to advanced. They often include hands-on training and may lead to certification upon completion.',
  },
  {
    q: 'Can Sujok therapy be learned at home?',
    a: 'While formal courses exist, it is possible to start learning at home. Some online resources and low-budget courses are available for self-study. For professional practice, formal training is generally recommended.',
  },
  {
    q: 'What kind of health issues can it address?',
    a: 'A wide range of issues, including common ailments like headaches and stress, chronic conditions, physical health problems, and mental and emotional health issues. It should not replace conventional medical treatment; it is best used as a complementary therapy under the guidance of a qualified practitioner.',
  },
];

export const DRIVES = [
  {
    title: 'Clothing drives',
    body: 'Offers dignity through appropriate clothing for various needs, and sets up homes for those transitioning out of homelessness.',
    icon: 'shirt',
  },
  {
    title: 'Children drives',
    body: 'Provides comfort and joy to children in difficult situations.',
    icon: 'baby',
  },
  {
    title: 'Food drives',
    body: 'Feeds families and individuals who struggle to access nutritious meals.',
    icon: 'food',
  },
];

export const DRIVE_TAGS = ['Children drives', 'Food drives', 'Clothing drives', 'Women drives', 'Workers drives'];

export const CERTIFICATION = {
  level: 'Certification Course',
  title: 'Su-Jok Practitioner Certification',
  price: 'Fees on request',
  body: 'For students who have completed the three levels. Supervised practice, an assessment, and a certificate to practise as a Su-Jok therapist. Call us for the next batch and the fee.',
};
