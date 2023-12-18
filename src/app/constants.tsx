import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faTwitter ,faSnapchat,faTiktok} from '@fortawesome/free-brands-svg-icons';

import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const ContactInfo = {
    mobileNumber: '0582775949',
    workingTime: "8:00 إلى 11:00",
    "address": {
        country:"الممكلة العربية السعودية",
        city: "الرياض"
    }
}

export const NavList = [
    {
      id: "1",
      label: "الرئيسيه",
      link: "/",
      description : ""
    },
    {
      id: "2",
      label: "اصباغ خارجيه",
      link: "categories/اصباع-خارجيه",
      description: `نقوم بأحدث أعمال اصباغ خارجيه 
      لدينا عمالة مهنية مدربة على مستوى من الخبرة والاحترافية في انجاز العمل المطلوب بأكمل وجه. أفضل...وخصم يصل 30%`,
      images: [
        "/category/2/001.jpeg",
        "/category/2/002.jpeg",
        "/category/2/003.jpeg",
        "/category/2/004.jpeg",
        "/category/2/005.jpeg",
        "/category/2/006.jpeg",
        "/category/2/007.jpeg",
        "/category/2/008.jpeg",
        "/category/2/009.jpeg",
        "/category/2/010.jpeg",
        "/category/2/011.jpeg",
        "/category/2/012.jpeg",
        "/category/2/013.jpeg",
        "/category/2/014.jpeg",
        "/category/2/015.jpeg",
        "/category/2/016.jpeg",
        "/category/2/017.jpeg",
        "/category/2/018.jpeg",
        "/category/2/019.jpeg",
        "/category/2/020.jpeg",
      ]
    },
    {
      id: "3",
      label: "اصباغ داخليه",
      link: "categories/اصباغ-داخليه",
      description:`نقوم بالطبع بإستخدام أفضل الاصباغ الداخلية للجدران و التي تعتبر النوعية الأفضل في منزلك
      لدينا عمالة مهنية مدربة على مستوى من الخبرة والاحترافية في انجاز العمل المطلوب بأكمل وجه. أفضل...وخصم يصل ..30%`,
      images: [
        "/category/3/001.jpeg",
        "/category/3/002.jpeg",
        "/category/3/003.jpeg",
        "/category/3/004.jpeg",
        "/category/3/005.jpeg",
        "/category/3/006.jpeg",
        "/category/3/007.jpeg",
        "/category/3/008.jpeg",
        "/category/3/009.jpeg",
        "/category/3/010.jpeg",
        "/category/3/011.jpeg",
        "/category/3/012.jpeg",
        "/category/3/013.jpeg",
        "/category/3/014.jpeg",
        "/category/3/015.jpeg",
        "/category/3/016.jpeg",
        "/category/3/017.jpeg",
        "/category/3/018.jpeg",
        "/category/3/019.jpeg",
        "/category/3/020.jpeg",
        "/category/3/021.jpeg",
        "/category/3/022.jpeg",
        "/category/3/023.jpeg",
        "/category/3/024.jpeg",
        "/category/3/025.jpeg",
        "/category/3/026.jpeg",
        "/category/3/027.jpeg",
        "/category/3/028.jpeg",
      ],
    },
    {
      id: "4",
      label: "عوازل اسطح",
      link: "categories/عوازل-اسطح",
      description:`تركيب جميع انواع عازل عوازل الاسطح ضط تسريب مياه  مقاومة الحرارة العالية وتمنع تسربها للمنزل وبالتالي تحافظ على اعتدال الحرارة`,
      images: [
        "/category/4/001.jpeg",
        "/category/4/002.jpeg",
        "/category/4/003.jpeg",
        "/category/4/004.jpeg",
        "/category/4/005.jpeg",
        "/category/4/006.jpeg",
        "/category/4/007.jpeg",
        "/category/4/008.jpeg",
        "/category/4/009.jpeg",
        "/category/4/010.jpeg",
        "/category/4/011.jpeg",
        "/category/4/012.jpeg",
        "/category/4/013.jpeg",
        "/category/4/014.jpeg",
        "/category/4/015.jpeg",
        "/category/4/016.jpeg",
        "/category/4/017.jpeg"
      ]
    },
    {
      id: "5",
      label: " ديكورات",
      link: "categories/اقسام-ديكورات",
      description: `نساعدك في تصميم وتنفيذ منزلك، لتجربة تصميم داخلي مميزة ومتكاملة ابدأ معنا الآن. سواء كانت غرفة, غرفة نوم, صالة, مجلس لفلة او شقة نصمم لك حسب ميزانيتك`,
      images: [
        "/category/5/001.jpeg",
        "/category/5/002.jpeg",
        "/category/5/003.jpeg",
        "/category/5/004.jpeg",
        "/category/5/005.jpeg",
        "/category/5/006.jpeg",
        "/category/5/007.jpeg",
        "/category/5/008.jpeg",
        "/category/5/009.jpeg",
        "/category/5/010.jpeg",
        "/category/5/011.jpeg",
        "/category/5/012.jpeg",
        "/category/5/013.jpeg",
        "/category/5/014.jpeg",
        "/category/5/015.jpeg",
        "/category/5/016.jpeg",
        "/category/5/017.jpeg",
        "/category/5/018.jpeg",
        "/category/5/019.jpeg",
        "/category/5/020.jpeg",
        "/category/5/021.jpeg",
      ]
    },
    {
      id: "6",
      label: " بناء مجالس خارجيه",
      link: "categories/اقسام-بناء-مجالس-خارجيه",
      description: `نتخصص في كافة اعمال بناء مجالس خارجية بالدمام ، بناء ملاحق  ، حيث نوفر افضل كادر عمل  سرعه دق في عمل`,
      images: [
        "/category/6/001.jpeg",
        "/category/6/002.jpeg",
        "/category/6/003.jpeg",
        "/category/6/004.jpeg",
        "/category/6/005.jpeg",
        "/category/6/006.jpeg",
        "/category/6/007.jpeg",
        "/category/6/008.jpeg",
        "/category/6/009.jpeg",
        "/category/6/010.jpeg",
        "/category/6/011.jpeg",
        "/category/6/012.jpeg",
        "/category/6/013.jpeg",
        "/category/6/014.jpeg",
        "/category/6/015.jpeg",
        "/category/6/016.jpeg",
        "/category/6/017.jpeg",
        "/category/6/018.jpeg",
        "/category/6/019.jpeg",
        "/category/6/020.jpeg",
        "/category/6/021.jpeg",
      ]
    },
    {
      id: "7",
      label: " بناء ملاحق ترميم شامل",
      link: "categories/اقسام-بناء-ملاحق-ترميم-شامل",
      description: `نقوم باحدث ترميم مباني وترميم الفلل والقصور نستطيع بناء الجدران ومباني الحوائط بمهاره. لدينا خبره كبيره في ترميم المباني السكنيه وترميم الفلل وترميم شامل`,
      images: [
        "/category/7/001.jpeg",
        "/category/7/002.jpeg",
        "/category/7/003.jpeg",
        "/category/7/004.jpeg",
        "/category/7/005.jpeg",
        "/category/7/006.jpeg",
        "/category/7/007.jpeg",
        "/category/7/008.jpeg",
        "/category/7/009.jpeg",
        "/category/7/010.jpeg",
        "/category/7/011.jpeg",
        "/category/7/012.jpeg",
        "/category/7/013.jpeg",
        "/category/7/014.jpeg",
        "/category/7/015.jpeg",
      ]
    },
    {
      id: "8",
      label: "مظلات-سواتر-برجولات عشب صناعي",
      link: "categories/مظلات-سواتر-برجولات-عشب-صناعي",
      description: `تركيب كافة أنواع المظلات والسواتر والبرجولات ومظلات الجلسات والحدائق والأحواش. نقوم بتنفيذ وتركيب جميع أعمال المظلات والسواتر والبرجولات والهناجر بجميع
      `,
      images: [
        "/category/8/001.jpeg",
        "/category/8/002.jpeg",
        "/category/8/003.jpeg",
        "/category/8/004.jpeg",
        "/category/8/005.jpeg",
        "/category/8/006.jpeg",
        "/category/8/007.jpeg",
        "/category/8/008.jpeg",
        "/category/8/009.jpeg",
        "/category/8/010.jpeg",
        "/category/8/011.jpeg",
        "/category/8/012.jpeg",
        "/category/8/013.jpeg",
        "/category/8/014.jpeg",
        "/category/8/015.jpeg",
        "/category/8/016.jpeg",
        "/category/8/017.jpeg",
        "/category/8/018.jpeg",
        "/category/8/019.jpeg",
        "/category/8/020.jpeg",
        "/category/8/021.jpeg",
      ]
    },
    {
      id: "9",
      label: "أسفلت ولايبوكسي",
      link: "categories/اسفلت-ولايبوكسي",
      description:`تنفيذ جميع اعمال الاسفلت والردميات ... السيارات متخصصون في اعمال الاسفلت في الشرقية وتركيب جميع انواع الانترلوك والبلدورة ...ولايبوكسي`,
      images: [
        "/category/9/001.jpeg",
        "/category/9/002.jpeg",
        "/category/9/003.jpeg",
        "/category/9/004.jpeg",
        "/category/9/005.jpeg",
        "/category/9/006.jpeg",
        "/category/9/007.jpeg",
        "/category/9/008.jpeg",
        "/category/9/009.jpeg",
        "/category/9/010.jpeg",
        "/category/9/011.jpeg",
        "/category/9/012.jpeg",
        "/category/9/013.jpeg",
       
      ]

    },
  ];

  export const ServicesObject = [
    {
      id:"2",
      label: "اصباغ خارجيه",
      link: "categories/اصباع-خارجيه",
      description: `نقوم بأحدث أعمال اصباغ خارجيه لدينا عمالة مهنية مدربة على مستوى من الخبرة والاحترافية في انجاز العمل المطلوب بأكمل وجه. أفضل...وخصم يصل 30%`,
      image: "/category/2/001.jpeg",
    },
    {
      id:"3",
      label: "اصباغ داخليه",
      link: "categories/اصباغ-داخليه",
      description: `نقوم بالطبع بإستخدام أفضل الاصباغ الداخلية للجدران و التي تعتبر النوعية الأفضل في منزلك لدينا عمالة مهنية مدربة على مستوى من الخبرة والاحترافية في انجاز العمل المطلوب بأكمل وجه. أفضل...وخصم يصل ..30%`,
      image: "/category/3/001.jpeg",
    },
    {
      id:"4",
      label: "عوازل اسطح",
      link: "categories/عوازل-اسطح",
      description: `تركيب جميع انواع عازل عوازل الاسطح ضط تسريب مياه  مقاومة الحرارة العالية وتمنع تسربها للمنزل وبالتالي تحافظ على اعتدال الحرارة`,
      image: "/category/4/001.jpeg",
    },
    {
      id:"5",
      label: "ديكورات",
      link: "categories/اقسام-ديكورات",
      description: `نساعدك في تصميم وتنفيذ منزلك، لتجربة تصميم داخلي مميزة ومتكاملة ابدأ معنا الآن. سواء كانت غرفة, غرفة نوم, صالة, مجلس لفلة او شقة نصمم لك حسب ميزانيتك`,
      image: "/category/5/001.jpeg",
    },
    {
      id:"6",
      label: "بناء مجالس خارجيه",
      link: "categories/اقسام-بناء-مجالس-خارجيه",
      description: `نتخصص في كافة اعمال بناء مجالس خارجية بالدمام ، بناء ملاحق  ، حيث نوفر افضل كادر عمل  سرعه دق في عمل`,
      image: "/category/6/001.jpeg",
    },
    {
      id:"7",
      label: "بناء ملاحق ترميم شامل",
      link: "categories/اقسام-بناء-ملاحق-ترميم-شامل",
      description: `نقوم باحدث ترميم مباني وترميم الفلل والقصور نستطيع بناء الجدران ومباني الحوائط بمهاره. لدينا خبره كبيره في ترميم المباني السكنيه وترميم الفلل وترميم شامل`,
      image: "/category/7/001.jpeg",
    },
    {
      id:"8",
      label: "مظلات-سواتر-برجولات عشب صناعي",
      link: "categories/مظلات-سواتر-برجولات-عشب-صناعي",
      description: `تركيب كافة أنواع المظلات والسواتر والبرجولات ومظلات الجلسات والحدائق والأحواش. نقوم بتنفيذ وتركيب جميع أعمال المظلات والسواتر والبرجولات والهناجر بجميع`,
      image: "/category/8/001.jpeg",
    },
    {
      id:"9",
      label: "أسفلت ولايبوكسي",
      link: "categories/اسفلت-ولايبوكسي",
      description: `تنفيذ جميع اعمال الاسفلت والردميات ... السيارات متخصصون في اعمال الاسفلت في الشرقية وتركيب جميع انواع الانترلوك والبلدورة ...ولايبوكسي`,
      image: "/category/9/001.jpeg",
    },
  ];
  

  export const FixedContactList = [
      {
        name:"phone",
        icon:<FontAwesomeIcon icon={faPhone} size='2x' color='blue'/>,
        link: `tel:${ContactInfo.mobileNumber}`
      },
      {
        name:"whatsapp",
        icon: <FontAwesomeIcon size="2x" icon={faWhatsapp} color='green'/>,
        link: "https://api.whatsapp.com/message/SINYIKMZEU35A1?autoload=1&app_absent=0"
      },
      {
        name:"instagram",
        icon:<FontAwesomeIcon size="2x"icon={faInstagram} color='purple'/>,
        link:"https://instagram.com/hh0507923952?igshid=ZGUzMzM3NWJiOQ==ا"
      },
      {
        name:"snapshat",
        icon:<FontAwesomeIcon size="2x"icon={faSnapchat} color='#8B8000'/>,
        link:"https://www.snapchat.com/add/s_dykwrtfwmtr20?share_id=g8SI0-od-7Q&locale=ar-AA"
      },
      
      {
        name:"twitter",
        icon:<FontAwesomeIcon size="2x"icon={faTwitter} color='#1DA1F2'/>,
        link:"https://twitter.com/SAldhran49144?t=q0LsJWVHFDyI8eYfuPOF3A&s=09"
      },
      {
        name:"tiktok",
        icon:<FontAwesomeIcon size="2x"icon={faTiktok}/>,
        link:"https://www.tiktok.com/@haithammoh0507923952?_t=8fIfeMtoj72&_r=1"
      },
     
  ]


  
  