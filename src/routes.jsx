
// / il faut ajouter tous les composants

import PageFrProjects from './pages/PageFrProjects';
import PageFrProjectDetail from './pages/PageFrProjectDetail'


const routes = [
  {
    path: '/',
    name: 'Projets',
    component: PageFrProjects,
  },
  {
    path: '/simpson',
    name: 'Détails projet',
    component: PageFrProjectDetail,
  }
]

export default routes