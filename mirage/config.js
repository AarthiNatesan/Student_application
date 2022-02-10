export default function() {
    this.namespace = '/api';

    this.get('/studentdetails', function() {
        return {
            data: [{
                    type: 'studentdetails',
                    id: 1,
                    attributes: {
                        registration_num: 1,
                        first_name: 'Aarthi',
                        last_name: 'N',
                        phone_num: 8903841274,
                        year: 4,
                        city: 'Namakkal'
                    }
                },
                {
                    type: 'studentdetails',
                    id: 2,
                    attributes: {
                        registration_num: 2,
                        first_name: 'Barani',
                        last_name: 'R',
                        phone_num: 947841274,
                        year: 4,
                        city: 'Erode'
                    }
                },
                {
                    type: 'studentdetails',
                    id: 3,
                    attributes: {
                        registration_num: 3,
                        first_name: 'Charu',
                        last_name: 'L',
                        phone_num: 76373841274,
                        year: 4,
                        city: 'Salem'
                    }
                }
            ]
        }
    })
}