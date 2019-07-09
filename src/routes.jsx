import PageFrHome from './pages/PageFrHome'
import PageFrProjects from './pages/PageFrProjets';
import PageFrProjetDetail from './pages/PageFrProjetDetails'
import PageFrPublications from './pages/PageFrPublications'
import PageFrProfil from './pages/PageFrProfil'
import PageFrContact from './pages/PageFrContact'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: PageFrHome,
  },
  {
    path: '/projets',
    name: 'projets',
    component: PageFrProjects,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: PageFrProjetDetail,
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