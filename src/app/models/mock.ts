import { Universe } from './universe';

export const UNIVERSES: Universe[] = [
  {
    id: 1,
    name: 'Beereal',
    areas: [{
      id: 1,
      name: 'Develop'
    }],
    levels: [
      {
        'id': 1,
        'position': 2,
        'name': 'Junior',
        'description': 'Developing professional and technical expertise. Able to resolve routine issues and problems.',
        'skills': [
          {
            'id': 3,
            'name': 'Basic resolver',
            'description': 'Can take care about simple tasks by his own'
          },
          {
            'id': 4,
            'name': 'Listener II',
            'description': 'She/He is used to taking notes of his weekly learning'
          }
        ]
      }, {
        'id': 2,
        'position': 1,
        'name': 'Trainee',
        'description': 'First time experience',
        'skills': [
          {
            'id': 1,
            'name': 'Bases',
            'description': 'Has engineering and programming foundation'
          },
          {
            'id': 2,
            'name': 'Listener',
            'description': 'Has come to learn, allways must be listening to other developesr'
          }
        ]
      },
      {
        'id': 3,
        'position': 3,
        'name': 'Junior Advance',
        'description': 'Well developed professional and technical expertise. Affects quality and timeline of part of product or service.',
        'skills': [
          {
            'id': 5,
            'name': 'Basic resolver II',
            'description': 'Daily it is responsible for solving various simple tasks'
          },
          {
            'id': 6,
            'name': 'Listener III',
            'description': 'She/He is used to taking notes of his weekly daily'
          },
          {
            'id': 7,
            'name': 'Internet student I',
            'description': 'Can search for fixes on Stackoverflow'
          }
        ]
      },
      {
        'id': 4,
        'position': 4,
        'name': 'Semi Senior',
        'description': 'Seasoned professional with competence, creativity in wide range of technical areas. Resolves most issues and problems effectively.',
        'skills': [
          {
            'id': 8,
            'name': 'Problem solver I',
            'description': 'Can understand a problem, and a way to solve it'
          },
          {
            'id': 9,
            'name': 'Internet student II',
            'description': 'Best friend of Stackoverflow and has an account on some elearning site'
          }
        ]
      },
      {
        'id': 5,
        'position': 5,
        'name': 'Senior',
        'description': 'Extremely seasoned professional. Able to solve most issues and problems. Uses skills to drive company objectives and achieve goals.',
        'skills': [
          {
            'id': 10,
            'name': 'Bug Hunter I',
            'description': 'Uses and understands tools needed to debug and diagnose issues in a test and/or simple production environment'
          },
          {
            'id': 11,
            'name': 'Teacher I',
            'description': 'Can help and guide Trainees and Juniors'
          },
          {
            'id': 12,
            'name': 'Two is better than one',
            'description': 'Capable to work and guide a small team (1-3 ppl)'
          }
        ]
      },
      {
        'id': 6,
        'position': 6,
        'name': 'Leader',
        'description': 'Wide range of experience, and is looked to as a thought leader and technical guru. Affects design, quality and timeline of entire product or service.',
        'skills': [
          {
            'id': 13,
            'name': 'Clairvoyance',
            'description': 'Knows the problem and where is it, before it exists'
          },
          {
            'id': 14,
            'name': 'Two is better than one III',
            'description': 'Capable to work and guide a team (1-20 ppl)'
          }
        ]
      },
      {
        'id': 7,
        'position': 7,
        'name': 'Rockstar',
        'description': 'Superstar. Critically important to growth and product development. Only a handful at this level throughout the company. Develops department objectives from company strategies.',
        'skills': [
          {
            'id': 13,
            'name': 'Teacher IV',
            'description': 'If some Junior walks near of her/him, will learn at least two good programming practices'
          },
          {
            'id': 14,
            'name': 'Two is better than one V',
            'description': 'Capable to work and guide a complete stadium (1-20000 ppl)'
          }
        ]
      },
    ]
  }
];
