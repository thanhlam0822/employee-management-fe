import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const ManagementDepartment = () => import('@/layout/ManageDepartment.vue')
const ManagementEmployee = () => import('@/layout/ManageEmployee.vue')
const ManagementProject = () => import('@/layout/ManageProject.vue')
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
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
