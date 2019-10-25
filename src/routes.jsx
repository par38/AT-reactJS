import PageFrHome from './pages/PageFrHome'
import PageFrProjects from './pages/PageFrProjets';
import PageFrProjetDetail from './pages/PageFrProjetDetails'
import PageFrPublications from './pages/PageFrPublications'
import PageFrProfil from './pages/PageFrProfil'
import PageFrContact from './pages/PageFrContact'

import PageBoProjets from './pages/PageBoProjets'
import PageBoProjetNouveau from './pages/PageBoProjetNouveau'

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/admin/projets',
    name: 'BO projets',
    component: PageBoProjets
  },
  // {
  //   path: '/admin/projets/modif/:id',
  //   name: 'BO projets',
  //   component: PageBoProjetDetails
  // },
  {
    path: '/admin/projets/nouveau',
    name: 'BO projets',
    component: PageBoProjetNouveau
  }
]

export default routes