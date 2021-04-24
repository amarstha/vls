export default {
    items: [
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    classes: 'nav-item',
                    icon: 'fa fa-home'
                },
                {
                    id: 'users',
                    title: 'Users',
                    type: 'item',
                    url: '/users',
                    classes: 'nav-item',
                    icon: 'fa fa-users'
                },
                {
                    id: 'exam',
                    title: 'Courses',
                    type: 'item',
                    url: '/courses',
                    classes: 'nav-item',
                    icon: 'fa fa-book'
                },
                {
                    id: 'exam',
                    title: 'Exams',
                    type: 'item',
                    url: '/exams',
                    classes: 'nav-item',
                    icon: 'fa fa-graduation-cap'
                }     
            ]
        }
    ]
}