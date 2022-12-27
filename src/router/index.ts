import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const ManagementDepartment = () => import('@/components/department/DepartmentList.vue')
const ManagementEmployee = () => import('@/components/employee/EmployeeList.vue')
const ManagementProject = () => import('@/components/ListProject.vue')
const EditDepartment = () => import('@/components/department/DepartmentEdit.vue')
const EmployeeEdit = () => import('@/components/employee/EmployeeEdit.vue')
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
    path: "/employees",children: [
      {path:":id",component:EmployeeEdit}
    ],
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
