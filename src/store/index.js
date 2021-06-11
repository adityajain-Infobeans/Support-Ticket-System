import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navItems: [
      {
        icon: 'mdi-home',
        text: 'Home',
        route: '/',
      },
      {
        icon: 'mdi-ticket',
        text: 'Add Ticket',
        route: '/addTicket',
      },
      {
        icon: 'mdi-view-list',
        text: 'View Ticket',
        route: '/ViewTicket',
      },
      {
        icon: 'mdi-logout',
        text: 'Logout',
        route: 'Logout',
      },
    ],
    headers: [
      {
        text: 'S. no',
        align: 'center',
        sortable: true,
        value: 'ticket_id',
      },
      {
        text: 'Status',
        align: 'center',
        sortable: true,
        value: 'ticket_status',
      },
      {
        text: 'Priority',
        align: 'center',
        sortable: true,
        value: 'ticket_priority',
      },
      {
        text: 'Subject',
        align: 'center',
        sortable: false,
        value: 'ticket_subject',
      },
      {
        text: 'Last Update',
        align: 'center',
        sortable: false,
        value: 'ticket_last_updated',
      },
      {
        text: 'Edit',
        align: 'center',
        sortable: false,
        value: 'ticket_id',
      },
      {
        text: 'Delete',
        align: 'center',
        sortable: false,
        value: 'ticket_id',
      },
    ],
    priorities: [
      { priority: '', value: '' },
      { priority: 'P1 -- Critical', value: 'P1' },
      { priority: 'P2 -- High', value: 'P2' },
      { priority: 'P3 -- Medium', value: 'P3' },
    ],
    userData: {
      emp_id: null,
      emp_name: null,
      emp_email: null,
      token: null,
      is_hr: null,
      is_login: false,
    },
  },
  mutations: {
    userLogin(state, userData) {
      state.userData.emp_id = userData.emp_id;
      state.userData.emp_name = userData.emp_name;
      state.userData.emp_email = userData.emp_email;
      state.userData.token = userData.token;
      state.userData.is_hr = userData.is_hr;
      state.userData.is_login = true;
    },
    userLogout(state) {
      state.userData.emp_id = null;
      state.userData.emp_name = null;
      state.userData.emp_email = null;
      state.userData.token = null;
      state.userData.is_hr = null;
      state.userData.is_login = false;
    },
  },
  actions: {
    userLogin(context, userData) {
      context.commit('userLogin', userData);
    },
    userLogout(context) {
      context.commit('userLogout');
    },
  },
  modules: {},
});
