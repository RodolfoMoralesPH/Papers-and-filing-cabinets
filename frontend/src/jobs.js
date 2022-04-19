const jobs = [
    {
        'name': 'Landscaping',
        'img': 'img/gardener.jpg',
        'clients': [
            {
                'name': 'John D.',
                'faceimg': 'img/john.jpg',
                'yardimg': 'img/canyon.jpg',
                'type': 'bimonthly',
                'visits': [
                    {
                        'id': '1',
                        'date': '2/08/22',
                        'payment': {
                            'price': '$342.23',
                            'scheduled': '3/1/22'
                        }
                    },
                    {
                        'id': '2',
                        'date': '2/22/22',
                        'payment': {
                            'price': '$342.23',
                            'scheduled': '3/1/22'
                        }
                    }
                ]
            },

            {
                'name': 'Chamica Ramirez.',
                'faceimg': 'img/baby.jpg',
                'yardimg': 'img/desert.jpg',
                'type': 'weekly',
                'visits': [
                    {
                        'id': '1',
                        'date': '2/08/22',
                        'payment': {
                            'price': '$120.20',
                            'scheduled': '3/1/22'
                        }
                    },
                    {
                        'id': '2',
                        'date': '2/15/22',
                        'payment': {
                            'price': '$120.20',
                            'scheduled': '3/1/22'
                        }
                    },
                    {
                        'id': '3',
                        'date': '2/22/22',
                        'payment': {
                            'price': '$120.20',
                            'scheduled': '3/1/22'
                        }
                    },
                    {
                        'id': '4',
                        'date': '2/29/22',
                        'payment': {
                            'price': '$120.20',
                            'scheduled': '3/1/22'
                        }
                    }
                ]
            },
            {
                'name': 'Brenda M.',
                'faceimg': 'img/john.jpg',
                'yardimg': 'img/taiwan.jpg',
                'type': 'bimonthly',
                'visits': [
                    {
                        'id': '1',
                        'date': '2/08/22',
                        'payment': {
                            'price': '$342.23',
                            'scheduled': '3/1/22'
                        }
                    }
                ]
            },
            {
                'name': 'Mariko M.',
                'faceimg': 'img/Mariko.jpg',
                'yardimg': 'img/williams.jpg',
                'type': 'custom',
                'visits': [
                    {
                        'id': '1',
                        'date': '2/13/22',
                        'payment': {
                            'price': '$600',
                            'scheduled': '2/13/22'
                        }
                    }
                ]
            },
        ]
    }
]

export default jobs