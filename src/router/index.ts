import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const ManagementDepartment = () => import('@/components/ListDepartment.vue')
const ManagementEmployee = () => import('@/components/ListEmployee.vue')
const ManagementProject = () => import('@/components/ListProject.vue')
const EditDepartment = () => import('@/components/EditDepartment.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/manage-department"
  },
  {
    path: '/manage-department',
    component: ManagementDepartment



  },
  {
    path: "/manage-employee",
    component: ManagementEmployee
  },
  {
    path: "/manage-project",
    component: ManagementProject
  },
  { path: "/edit-department/:id",
    component: EditDepartment
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
