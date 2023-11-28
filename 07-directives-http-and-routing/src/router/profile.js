export const profileRoutes = {
    path: '/profile',
    component: ProfileContainer,
    children: [
      {
        path: 'my-profile',
        component: MyProfile,
      },
      {
        path: 'change-pass',
        component: ChangePass,
      },
      {
        path: 'close-profile',
        component: CloseProfile,
      },
    ],

  },