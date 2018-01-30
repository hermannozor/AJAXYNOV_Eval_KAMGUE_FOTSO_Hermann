import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './moviesBox.css';
import Player from './Player';
import Connexionfb from './Connexionfb';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const styles = {

};

const App = () => (
  
  <div style={styles} className="moviesBox">
    <h1>Bienvenue Sur votre site de vidéo à la demande</h1>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Connexion">Connexion</Link></li>
          <li><Link to="/Player">Player</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Hello} />
        <Route path="/connexion" component={Connexionfb} />
        <Route path="/Player" component={Player} />
      </div>
    </Router>
    
    <article id="post-84512">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/jumanji-bienvenue-dans-la-jungle/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/01/Jumanji-Bienvenue-dans-la-Jungle-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Jumanji  Bienvenue dans la Jungle" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/jumanji-bienvenue-dans-la-jungle/">Jumanji : Bienvenue dans la Jungle</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Le destin de quatre lycéens en retenue bascule lorsqu’ils sont aspirés dans le monde de Jumanji. Après avoir découvert une vieille console contenant un jeu vidéo dont ils n’avaient jamais entendu parler, les quatre jeunes se retrouvent mystérieusement propulsés au cœur de la jungle de Jumanji, dans le corps de leurs avatars. Ils vont rapidement découvrir que l’on ne joue pas à Jumanji, c’est le jeu qui joue avec vous… Pour revenir dans le monde réel, il va leur falloir affr...</div>
        </div>
      </div>
    </article>
    
    <article id="post-1192">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/les-tuche/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2012/06/Les-Tuche-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Les Tuche" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/les-tuche/">Les Tuche</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis">À Bouzolles, tout le monde connaît la famille Tuche. Jeff, Cathy et leurs trois enfants vivent du système D et en sont très fiers. Respectueuse de la philosophie Tuche (« L’homme n’est pas fait pour travailler. »), toute la famille s’emploie à être heureuse malgré le cruel manque de revenus. Leurs vies étaient alors toutes tracées : ils seraient toujours pauvres, mais toujours heureux.
Cependant, le jour où ils gagnent cent millions d'euros à l'Euro Loterie, leur vie est boul...</div>
        </div>
      </div>
    </article><article id="post-119744">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/voldemort-origins-of-the-heir/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/01/Voldemort-Origins-of-the-Heir-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Voldemort Origins of the Heir" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/voldemort-origins-of-the-heir/">Voldemort: Origins of the Heir</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Un éventail a fait la préface de la série Harry Potter basée sur Tom Riddle et sa progression pour devenir The Dark Lord. ...</div>
        </div>
      </div>
    </article>
    <article id="post-119241">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/la-forme-de-leau/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/02/La-forme-de-leau-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="La forme de l&#039;eau" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/la-forme-de-leau/">La forme de l&rsquo;eau</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Modeste employée d’un laboratoire gouvernemental ultrasecret, Elisa mène une existence morne et solitaire, d’autant plus isolée qu’elle est muette. Sa vie bascule à jamais lorsqu’elle et sa collègue Zelda découvrent une expérience encore plus secrète que les autres… ...</div>
        </div>
      </div>
    </article>
    
    <article id="post-73594">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/justice-league/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2017/12/Justice-League-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Justice League" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/justice-league/">Justice League</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Après avoir retrouvé foi en l'humanité, Bruce Wayne, inspiré par l'altruisme de Superman, sollicite l'aide de sa nouvelle alliée, Diana Prince, pour affronter un ennemi plus redoutable que jamais. Ensemble, Batman et Wonder Woman ne tardent pas à recruter une équipe de méta-humains pour faire face à cette menace inédite. Pourtant, malgré la force que représente cette ligue de héros sans précédent – Batman, Wonder Woman, Aquaman, Cyborg et Flash –, il est peut-être déjà tro...</div>
        </div>
      </div>
    </article>
    
    <article id="post-74639">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/thor-ragnarok-2/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2017/11/Thor-Ragnarok-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Thor  Ragnarok" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/thor-ragnarok-2/">Thor : Ragnarok</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis">Privé de son puissant marteau, Thor est retenu prisonnier sur une lointaine planète aux confins de l’univers. Pour sauver Asgard, il va devoir lutter contre le temps afin d’empêcher l’impitoyable Hela d’accomplir le Ragnarök – la destruction de son monde et la fin de la civilisation asgardienne. Mais pour y parvenir, il va d’abord devoir mener un combat titanesque de gladiateurs contre celui qui était autrefois son allié au sein des Avengers : l’incroyable Hulk… ...</div>
        </div>
      </div>
    </article>

    <article id="post-119444">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/game-of-thrones-conquest-rebellion/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/01/Game-of-Thrones-Conquest-Rebellion-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Game of Thrones Conquest &amp; Rebellion" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/game-of-thrones-conquest-rebellion/">Game of Thrones Conquest &amp; Rebellion</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d'au-delà du Mur protecteur, n'a plus les ressources nécessaires pour assurer la sécurité de tous. ...</div>
        </div>
      </div>
    </article>
    
    <article id="post-83654">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/star-wars-episode-viii-les-derniers-jedi/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/01/Star-Wars-épisode-VIII-Les-Derniers-Jedi-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Star Wars, épisode VIII  Les Derniers Jedi" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/star-wars-episode-viii-les-derniers-jedi/">Star Wars, épisode VIII : Les Derniers Jedi</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de surprenantes révélations sur le passé… ...</div>
        </div>
      </div>
    </article>
    <article id="post-119851">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/the-passenger/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/01/The-Passenger-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="The Passenger" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/the-passenger/">The Passenger</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Comme tous les jours après son travail, Michael MacCauley (Liam Neeson) prend le train de banlieue qui le ramène chez lui. Mais aujourd’hui, son trajet quotidien va prendre une toute autre tournure. Après avoir reçu l’appel d’un mystérieux inconnu, il est forcé d’identifier un passager caché dans le train, avant le dernier arrêt. Alors qu’il se bat contre la montre pour résoudre cette énigme, il se retrouve pris dans un terrible engrenage. Une conspiration qui devient une qu...</div>
        </div>
      </div>
    </article>
    
    <article id="post-71580">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/coco-2017/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2017/12/Coco-2017-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Coco (2017)" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/coco-2017/">Coco (2017)</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis">Miguel, un mexicain de 12 ans vivant avec sa famille dans une zone rurale du Mexique, résout un mystère générationnel lié à sa famille en déclenchant une série d'événements qui donnera lieu à une réunion de famille, entre défunts et vivants. L'action se déroule lors du traditionnel Jour des morts....</div>
        </div>
      </div>
    </article>
    
    <article id="post-119748">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/horse-soldiers/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/01/Horse-Soldiers-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Horse Soldiers" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/horse-soldiers/">Horse Soldiers</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Le capitaine Mitch Nelson est le chef de l’unité des Forces Spéciales qui a été choisie pour une périlleuse mission secrète. Son détachement et lui sont envoyés en Afghanistan, en plein conflit armé, pour apporter leur aide aux Afghans dans leur lutte contre les talibans.  ...</div>
        </div>
      </div>
    </article>
    
    <article id="post-68598">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/cinquante-nuances-plus-sombres/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2017/05/Cinquante-nuances-plus-sombres-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Cinquante nuances plus sombres" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/cinquante-nuances-plus-sombres/">Cinquante nuances plus sombres</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis">Interdit aux moins de 12 ans
C’est un Christian blessé qui tente de reconquérir Anastasia. Cette dernière exige un nouveau contrat avant de lui laisser une seconde chance. Mais une ombre surgit du passé de Christian et plane sur les deux amants, déterminée à détruire un quelconque espoir de vie commune. ...</div>
        </div>
      </div>
    </article>
    <article id="post-83634">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/bright/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/04/Bright-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Bright" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/bright/">Bright</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Dans un monde contemporain alternatif, humains, orcs, elfes et fées coexistent depuis le début des temps. Défiant les genres, Bright est un film d'action qui suit deux policiers issus de milieux différents, Ward et Jakoby. Confrontés aux ténèbres lors d'une patrouille nocturne de routine, ils voient leur avenir et leur monde se métamorphoser à jamais. ...</div>
        </div>
      </div>
    </article>
    
    <article id="post-54318">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/downsizing/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/01/Downsizing-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Downsizing" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/downsizing/">Downsizing</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis"> Pour lutter contre la surpopulation, des scientifiques mettent au point un processus permettant de réduire les humains à une taille d’environ 12 cm : le "downsizing". Chacun réalise que réduire sa taille est surtout une bonne occasion d’augmenter de façon considérable son niveau de vie. Cette promesse d’un avenir meilleur décide Paul Safranek  et sa femme à abandonner le stress de leur quotidien à Omaha (Nebraska), pour se lancer dans une aventure qui changera leur vie pour toujo...</div>
        </div>
      </div>
    </article>
    
    <article id="post-119452">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/the-secret-man-mark-felt/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2018/01/The-Secret-Man-Mark-Felt-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="The Secret Man: Mark Felt" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/the-secret-man-mark-felt/">The Secret Man: Mark Felt</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis">En 1973, l'agent du FBI Mark Felt va, anonymement sous le nom de Gorge profonde, aider les journalistes du Washington Post Carl Bernstein et Bob Woodward à révéler le scandale du Watergate....</div>
        </div>
      </div>
    </article>
    
    <article id="post-83452">
      <div class="typicalGrey coverGroup">
        <a class="coverImage" href="http://papystreaming.com/fr/p/le-crime-de-lorient-express/"><img width="148" height="220" src="http://papystreaming.com/fr/files/2017/12/Le-Crime-de-lOrient-Express-148x220.jpg" class="attachment-thumbnail wp-post-image" alt="Le Crime de l&#039;Orient-Express" /></a>
        <span class="movieName">
          <a href="http://papystreaming.com/fr/p/le-crime-de-lorient-express/">Le Crime de l&rsquo;Orient-Express</a>
        </span>
        <div class="bubbleinfo">
          <div class="bubblesubtitle">Synopsis</div>
          <div class="bubblesynopsis">Le luxe et le calme d’un voyage en Orient Express est soudainement bouleversé par un meurtre. Les 13 passagers sont tous suspects et le fameux détective Hercule Poirot se lance dans une course contre la montre pour identifier l’assassin, avant qu’il ne frappe à nouveau. D’après le célèbre roman d’Agatha Christie. ...</div>
        </div>
      </div>
    </article>
    
  </div>
);

render(<App />, document.getElementById('root'));
