import lol from '../../images/category_lol.jpg';
import valorant from '../../images/category_valorant.jpg';
import csgo from '../../images/category_csgo.jpg';
import fortnite from '../../images/category_fortnite.jpg';
import fallguys from '../../images/category_fallguys.jpg';
import apex from '../../images/category_apex.jpg';
import gta from '../../images/gta.jpg';
import rocket from '../../images/rocket.jpg';
import just  from '../../images/wow.jpg';
import tft  from '../../images/tft.jpg';
import warzone  from '../../images/warzone.jpg';

//fazer uma consulta na api e trazer os dados ali 

export default [
  { name: 'League of Legends', source: lol, view: '51.9K '},
  { name: 'VALORANT', source: valorant,view: '55.2K ' },
  { name: 'Teamfight Tactics ', source: tft, view: '51.1K ' },
  { name: 'Apex Legends', source: apex,view: '50.9K '},
  { name: 'Counter-Strike: Global Offensive', source: csgo,view: '47.9K ' },
  { name: 'Fortnite', source: fortnite, view: '45.2K '},
  { name: 'Call of Duty: Warzone', source: warzone, view: '44.8K ' },
  { name: 'Fall Guys', source: fallguys, view: '40.7K ' },
  { name: 'Grand Theft Auto V', source: gta, view: '40.6K ' },
  { name: 'Rocket League', source: rocket, view: '40.5K ' },
  { name: 'World of Warcraft', source: just, view: '40.2K ' },
];

