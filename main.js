const locations = {
  countryNames: [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'The Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bonaire,   Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'The British Indian Ocean Territory',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'The Cayman Islands',
  'The Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'The Cocos Islands',
  'The Keeling Islands',
  'Colombia',
  'The Comoros',
  'The Democratic Republic of the Congo',
  'The Congo',
  'The Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  'Côte d\'Ivoire',
  'Denmark',
  'Djibouti',
  'Dominica',
  'The Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'The Falkland Islands',
  'The Malvinas',
  'The Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'The French Southern Territories',
  'Gabon',
  'The Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'The Holy See',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Islamic Republic of Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'The Democratic People\'s Republic of Korea',
  'North Korea',
  'The Republic of Korea',
  'South Korea',
  'Kuwait',
  'Kyrgyzstan',
  'The Lao People\'s Democratic Republic',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'The Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Federated States of Micronesia',
  'The Republic of Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'The Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'The Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Macedonia',
  'The Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'State of Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'The Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Romania',
  'The Russian Federation',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena,   Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'The Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'The Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania,   the United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'The Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'The United Arab Emirates',
  'The United Kingdom of Great Britain and Northern Ireland',
  'The United States Minor Outlying Islands',
  'The United States of America',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'The Bolivarian Republic of Venezuela',
  'Vietnam',
  'British Virgin Islands',
  'U.S. Virgin Islands',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
  ],
  countryCodes: [
  'AF',
  'AL',
  'DZ',
  'AS',
  'AD',
  'AO',
  'AI',
  'AQ',
  'AG',
  'AR',
  'AM',
  'AW',
  'AU',
  'AT',
  'AZ',
  'BS',
  'BH',
  'BD',
  'BB',
  'BY',
  'BE',
  'BZ',
  'BJ',
  'BM',
  'BT',
  'BO',
  'BQ',
  'BA',
  'BW',
  'BV',
  'BR',
  'IO',
  'BN',
  'BG',
  'BF',
  'BI',
  'CV',
  'KH',
  'CM',
  'CA',
  'KY',
  'CF',
  'TD',
  'CL',
  'CN',
  'CX',
  'CC',
  'CC',
  'CO',
  'KM',
  'CD',
  'CG',
  'CK',
  'CR',
  'HR',
  'CU',
  'CW',
  'CY',
  'CZ',
  'CI',
  'DK',
  'DJ',
  'DM',
  'DO',
  'EC',
  'EG',
  'SV',
  'GQ',
  'ER',
  'EE',
  'SZ',
  'ET',
  'FK',
  'FK',
  'FO',
  'FJ',
  'FI',
  'FR',
  'GF',
  'PF',
  'TF',
  'GA',
  'GM',
  'GE',
  'DE',
  'GH',
  'GI',
  'GR',
  'GL',
  'GD',
  'GP',
  'GU',
  'GT',
  'GG',
  'GN',
  'GW',
  'GY',
  'HT',
  'HM',
  'VA',
  'HN',
  'HK',
  'HU',
  'IS',
  'IN',
  'ID',
  'IR',
  'IQ',
  'IE',
  'IM',
  'IL',
  'IT',
  'JM',
  'JP',
  'JE',
  'JO',
  'KZ',
  'KE',
  'KI',
  'KP',
  'KP',
  'KR',
  'KR',
  'KW',
  'KG',
  'LA',
  'LV',
  'LB',
  'LS',
  'LR',
  'LY',
  'LI',
  'LT',
  'LU',
  'MO',
  'MG',
  'MW',
  'MY',
  'MV',
  'ML',
  'MT',
  'MH',
  'MQ',
  'MR',
  'MU',
  'YT',
  'MX',
  'FM',
  'MD',
  'MC',
  'MN',
  'ME',
  'MS',
  'MA',
  'MZ',
  'MM',
  'NA',
  'NR',
  'NP',
  'NL',
  'NC',
  'NZ',
  'NI',
  'NE',
  'NG',
  'NU',
  'NF',
  'MK',
  'MP',
  'NO',
  'OM',
  'PK',
  'PW',
  'PS',
  'PA',
  'PG',
  'PY',
  'PE',
  'PH',
  'PN',
  'PL',
  'PT',
  'PR',
  'QA',
  'RO',
  'RU',
  'RW',
  'RE',
  'BL',
  'SH',
  'KN',
  'LC',
  'MF',
  'PM',
  'VC',
  'WS',
  'SM',
  'ST',
  'SA',
  'SN',
  'RS',
  'SC',
  'SL',
  'SG',
  'SX',
  'SK',
  'SI',
  'SB',
  'SO',
  'ZA',
  'GS',
  'SS',
  'ES',
  'LK',
  'SD',
  'SR',
  'SJ',
  'SE',
  'CH',
  'SY',
  'TW',
  'TJ',
  'TZ',
  'TH',
  'TL',
  'TG',
  'TK',
  'TO',
  'TT',
  'TN',
  'TR',
  'TM',
  'TC',
  'TV',
  'UG',
  'UA',
  'AE',
  'GB',
  'UM',
  'US',
  'UY',
  'UZ',
  'VU',
  'VE',
  'VN',
  'VG',
  'VI',
  'WF',
  'EH',
  'YE',
  'ZM',
  'ZW',
  'AX',
  ],
  mapCountries() {
    let array = [];
    locations.countryNames.map((i) => {
      i = {
        name: i,
        code: locations.countryCodes[locations.countryNames.indexOf(i)],
      };
      array.push(i);
    })
    return array;
  },
  isoCode(country) {
    let list = this.mapCountries();
    let obj = list.filter((i) => i.name === country)
    let code = obj[0].code;
    return code;
  },
  codeToCountry(code) {
    let list = this.mapCountries();
    let obj = list.filter((i) => i.code === code)
    let country = obj[0].name
    return country;
  },
}
// keys
const keys = {
  weather: 'c55bd60f1d7742b09f523d06e681c9f8',
}
const dom = {
  init() {
    this.hovered = false;
  },
  hoverTrue() {
    dom.hovered = true;
  },
  hoverFalse() {
    dom.hovered = false;
  },
  cacheDom() {
    // form
    this.form = document.getElementById('form');
    this.city = document.getElementById('city');
    this.cityError = document.querySelector('#city + span.error');
    this.cityAuto = document.getElementById('city-auto');
    this.cityAutoHover = document.querySelector('#city-auto:hover');
    this.country = document.getElementById('country');
    this.countryError = document.querySelector('#country + span.error');
    this.countryAuto = document.getElementById('country-auto');
    this.countryAutoHover = document.querySelector('#country-auto:hover');
    this.submitBtn = document.getElementById('submit');
    this.mag = document.getElementById('mag');
    // loading & error
    this.spinner = document.getElementById('spinner');
    this.resultsError = document.getElementById('results-error');
    // wrappers
    this.initWrapper = document.getElementById('init-wrapper');
    this.outputWrapper = document.getElementById('output-wrapper');
    this.errorWrapper = document.getElementById('error-wrapper');
    this.tempWrap = document.getElementById('temp-wrap');
    this.windWrap = document.getElementById('wind-wrap');
    this.sunWrap = document.getElementById('sun-wrap');
    // data fills
      // main
    this.cityFill = document.getElementById('city-fill');
    this.countryFill = document.getElementById('country-fill');
    this.bigTempFill = document.getElementById('big-temp-fill');
    this.altTempFill = document.getElementById('alt-temp-fill');
    this.desc = document.getElementById('desc');
      // temp
    this.cFill = document.getElementById('c-fill');
    this.fFill = document.getElementById('f-fill');
    this.cFeelFill = document.getElementById('c-feel-fill');
    this.fFeelFill = document.getElementById('f-feel-fill');
    this.humFill = document.getElementById('hum-fill');
      //wind
    this.mSpeedFill = document.getElementById('m-speed-fill');
    this.iSpeedFill = document.getElementById('i-speed-fill');
    this.direcFill = document.getElementById('direc-fill');
      // sun
    this.timeFill = document.getElementById('time-fill');
    this.riseFill = document.getElementById('rise-fill');
    this.setFill = document.getElementById('set-fill');
      // link icons
    this.navLinks = Array.from(document.querySelectorAll('.link'));
    // listeners
    this.form.addEventListener('submit', this.formSubmit);
    this.city.addEventListener('input', this.cityListen);
    this.city.addEventListener('blur', this.cityBlur);
    this.country.addEventListener('input', this.countryListen);
    this.country.addEventListener('blur', this.countryBlur);
    this.submitBtn.addEventListener('click', this.submitForm);
    this.navLinks.forEach((link) => {
      link.addEventListener('click', dom.navigate)
    })
  },
  navigate() {
    const type = this.getAttribute('data-type');
    dom.navLinks.forEach((link) => {
      const data = link.getAttribute('data-type')
      if(type !== data) {
        vis = `${type}Wrap`;
        hid = `${data}Wrap`;
        dom[hid].style.display = 'none';
        link.classList.remove('active');
        dom[vis].style.display = 'block';
        this.classList.add('active');
      }
    })
  },
  // submit functions
  submitForm() {
    const loc = dom.textFormat();
    dom.spinToggle();
    util.weatherInfo(requests.getWeather(loc[0], loc[1], keys.weather, util.units));
  },
  textFormat() {
    let city = dom.city.value;
    let country = dom.country.value;
    let code = locations.isoCode(country);
    city = city.split(' ');
    city = city.map((i) => {
     return i[0].toUpperCase() + i.substring(1);
    })
    city = city.join(' ');
    let loc = [];
    loc = [city, code];
    return loc;
  },
  spinToggle() {
    dom.spinner.classList.toggle('visible');
    dom.mag.classList.toggle('visible');
  },
  toggleWrappers() {
    if (util.initPage === true || util.errorPage === true) {
      dom.initWrapper.style.visibility = 'hidden';
      dom.errorWrapper.style.visibility = 'hidden'
      dom.outputWrapper.style.visibility = 'visible';
      util.initPage = false;
    }
  },
  showErrorWrapper() {
      dom.initWrapper.style.visibility = 'hidden';
      dom.outputWrapper.style.visibility = 'hidden';
      dom.errorWrapper.style.visibility = 'visible';
      util.errorPage = true;
  },
  // CITY METHODS
  cityListen() {
    dom.cityShowError('empty');
  },
  cityShowError(type) {
    dom.cityError.visibility = 'hidden';
    if (dom.city.validity.valueMissing && type === 'empty') {
      dom.cityError.style.visibility = 'visible';
      dom.cityError.textContent = 'Enter a city';
    } else if (type === 'api') {
      dom.cityError.style.visibility = 'visible';
      dom.cityError.textContent = 'Enter a valid city';
    } else {
      dom.cityError.style.visibility = 'hidden';
    }
  },
  // COUNTRY METHODS
  countryListen() {
    let list = locations.mapCountries();
    if (this.value) {
      list = list.filter((obj) => obj.name.toLowerCase().includes(this.value.toLowerCase()));
      list = list.map((obj) => `<li class="li-item">${obj.name}</li>`);
      dom.countryShow(list);
      dom.countryListItems();
      if (dom.countryAuto.innerHTML.length > 0) {
        dom.countryAuto.style.visibility = 'visible';
      } else {
        dom.countryAuto.style.visibility = 'hidden';
      }
    }
    dom.countryShowError();
  },
  countryShow(array) {
      const firstLi = ['<li id="li-top">Select country:</li>']
    if (dom.country.value !== '') {
      const newArray = firstLi.concat(array);
      const html = newArray.join('');
      dom.countryAuto.innerHTML = html;
    }
  },
  countryBlur() {
    if (dom.hovered === false) {
      dom.countryAuto.style.visibility = 'hidden';
    }
  },
  countryListItems() {
    const array = Array.from(document.querySelectorAll('.li-item'));
    array.forEach((li) => {
      li.addEventListener('click', dom.countryLiClick);
      li.addEventListener('mouseover', dom.hoverTrue);
      li.addEventListener('mouseout', dom.hoverFalse);
    });
  },
  countryLiClick() {
    dom.country.value = '';
    dom.country.value = this.innerText;
    dom.countryAuto.style.visibility = 'hidden';
    dom.countryShowError();
  },
  countryShowError() {
    if (dom.country.validity.valid) {
      // 
      if (locations.countryNames.includes(dom.country.value)) {
        dom.countryError.style.visibility = 'hidden';
      } else if (!locations.countryNames.includes(dom.country.value)) {
        dom.countryError.style.visibility = 'visible';
        dom.countryError.textContent = 'Invalid country';
        dom.countryError.className = 'error active';
      } 
    } else if (dom.country.validity.valueMissing) {
      dom.countryError.textContent = 'Enter a country';
      dom.countryError.className = 'error active';
    }
  },
}
// API interactions
const requests = {
  async getWeather(city, country, key, unit) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${key}&units=${unit}`);
    if (response.status !==200) {
      dom.resultsError.innerText = '';
      dom.resultsError.innerText = 'We couldn\'t find that city... please try again';
      dom.city.focus();
      dom.city.select();
      dom.cityShowError('api');
      dom.spinToggle();
      return response.status;
    } else {
      dom.resultsError.innerText = '';
      const data = await response.json();
      if (dom.spinner.classList.contains('visible')) {
        setTimeout(function() { dom.spinToggle(); }, 500);
      }
      return data;
    }
  },
};
// create data for dom
const util = {
  init() {
    this.units = 'metric';
    this.initPage = true;
    this.errorPage = false;
  },
  async weatherInfo(fn) {
    const data = await fn;
    if (data === 404) {
      dom.showErrorWrapper();
    } else {
      const location = {
          city: data.name,
          country: data.sys.country,
          lat: data.coord.lat,
          lon: data.coord.lon,
      };
      const main = {
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          feel: Math.round(data.main.feels_like),
          desc: data.weather[0].description,
      };
      const wind = {
          deg: data.wind.deg,
          speed: data.wind.speed,
      };
      const other = {
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          time: data.timezone,
          dt: data.dt,
      };
      this.fillDom(location, main, wind, other)
      dom.toggleWrappers();
    }
  },
  fillDom(location, main, wind, other) {
    dom.cityFill.innerText = location.city;
    dom.countryFill.innerText = locations.codeToCountry(location.country);

    dom.bigTempFill.innerText = main.temp;
    dom.altTempFill.innerText = this.convertToF(main.temp);
    dom.desc.innerText = main.desc;

    dom.cFill.innerText = main.temp;
    dom.cFeelFill.innerText = main.feel;
    dom.fFill.innerText = Math.round(this.convertToF(main.temp));
    dom.fFeelFill.innerText = Math.round(this.convertToF(main.feel));
    dom.humFill.innerText = main.humidity;

    dom.mSpeedFill.innerText = wind.speed.toFixed(2);
    dom.iSpeedFill.innerText = this.convertSpeed(wind.speed).toFixed(2);
    dom.direcFill.innerText = this.windDirection(wind.deg);

    dom.timeFill.innerText = this.convertTime(other.time);
    dom.riseFill.innerText = this.convertSun(other.sunrise, other.time);
    dom.setFill.innerText = this.convertSun(other.sunset, other.time);

    


  },
  convertToF(c) {
    let f = Math.round(c * 9/5 + 32);
    return f;
  },
  convertSpeed(m) {
    const meters = m;
    const miles = Math.round(meters * 3600 / 1610.3*1000)/1000
    return miles;
  },
  windDirection(angle) {
    const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    return directions[Math.round(angle / 45) % 8];
  },
  convertTime(tz) {
    const date = new Date;
    let hours = date.getUTCHours() + (tz/3600);
    if (hours >= 24) {
      hours = '0' + (hours - 24);
    }
    let minutes = date.getUTCMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    const time = hours + ':' + minutes
    return time;
  },
  convertSun(ms, tz) {
    console.log(tz)
    const date = new Date(ms * 1000)
    let hours = date.getUTCHours() + (tz/3600);
    if (hours > 24) {
      hours = '0' + (hours - 24);
    } else if (hours < 0) {
      hours += 24;
    }
    let minutes = date.getUTCMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    const time = hours + ':' + minutes
    return time;
  }
};

//util.weatherInfo(requests.getWeather('Omaha', 'The United States of America', keys.weather, 'metric'));




dom.init();
dom.cacheDom();
util.init();