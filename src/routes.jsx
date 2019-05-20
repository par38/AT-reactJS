import PageFrHome from './pages/PageFrHome'
import PageFrProjects from './pages/PageFrProjets';
import PageFrProjectDetail from './pages/PageFrProjetDetails'
import dojo from './components/dojoArnaud/AppArnaud'
import PageFrPublications from './pages/PageFrPublications'
import PageFrProfil from './pages/PageFrProfil'
import PageFrContact from './pages/PageFrContact'

const routes = [
  {
    path: '/', // Machu Pichu seul
    name: 'home',
    component: PageFrHome,
  },
  {
    path: '/projets',
    name: 'projets',
    component: PageFrProjects,
  },
  {
    path: '/details', // Machu Pichu ++
    name: 'details',
    component: PageFrProjectDetail,
  },
  {
    path: '/dojo',  // title body form
    name: 'dojoArnaud',
    component: dojo,
  },
  {
    path: '/publications',
    name: 'publications',
    component: PageFrPublications
  },
  {
    path: '/profil',
    name: 'profil',
    component: PageFrProfil
  },
  {
    path: '/contact',
    name: 'contact',
    component: PageFrContact
  }
]

export default routes