import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const ManagementDepartment = () => import('@/components/ListDepartment.vue')
const ManagementEmployee = () => import('@/components/ListEmployee.vue')
const ManagementProject = () => import('@/components/ListProject.vue')
const EditDepartment = () => import('@/components/EditDepartment.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/departments"
  },
  {
    path: '/departments',
    component: ManagementDepartment
  },
  {
    path: '/departments/:id',
    component: ManagementDepartment
  },
  {
    path: "/employees",
    component: ManagementEmployee
  },
  {
    path: "/projects",
    component: ManagementProject
  },
  { path: "/departments/:id",
    component: EditDepartment
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
