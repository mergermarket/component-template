import { action } from '@storybook/addon-actions';
import Component from '../Component.svelte';

export default {
  title: 'Component',
  component: Component,
};

export const Text = () => ({
  Component: Component,
  props: {},
});
