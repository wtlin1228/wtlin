import { alpha, get } from '../../utils/color';

export default {
  fg: {
    default: get('scale.gray.1'),
    muted: get('scale.gray.3'),
    subtle: get('scale.gray.4'),
    onEmphasis: get('scale.white'),
  },
  canvas: {
    default: get('scale.gray.9'),
    overlay: get('scale.gray.8'),
    inset: get('scale.black'),
    subtle: get('scale.gray.8'),
  },
  border: {
    default: get('scale.gray.6'),
    muted: get('scale.gray.7'),
    subtle: alpha(get('scale.gray.0'), 0.1),
  },

  // Roles
  neutral: {
    emphasisPlus: get('scale.gray.4'),
    emphasis: get('scale.gray.4'),
    muted: alpha(get('scale.gray.4'), 0.4),
    subtle: alpha(get('scale.gray.4'), 0.1),
  },
  accent: {
    fg: get('scale.blue.3'),
    emphasis: get('scale.blue.5'),
    muted: alpha(get('scale.blue.4'), 0.4),
    subtle: alpha(get('scale.blue.4'), 0.15),
  },
  success: {
    fg: get('scale.green.3'),
    emphasis: get('scale.green.5'),
    muted: alpha(get('scale.green.4'), 0.4),
    subtle: alpha(get('scale.green.4'), 0.15),
  },
  attention: {
    fg: get('scale.yellow.3'),
    emphasis: get('scale.yellow.5'),
    muted: alpha(get('scale.yellow.4'), 0.4),
    subtle: alpha(get('scale.yellow.4'), 0.15),
  },
  severe: {
    fg: get('scale.orange.4'),
    emphasis: get('scale.orange.5'),
    muted: alpha(get('scale.orange.4'), 0.4),
    subtle: alpha(get('scale.orange.4'), 0.15),
  },
  danger: {
    fg: get('scale.red.4'),
    emphasis: get('scale.red.5'),
    muted: alpha(get('scale.red.4'), 0.4),
    subtle: alpha(get('scale.red.4'), 0.15),
  },
  open: {
    fg: get('scale.green.3'),
    emphasis: get('scale.green.5'),
    muted: alpha(get('scale.green.4'), 0.4),
    subtle: alpha(get('scale.green.4'), 0.15),
  },
  closed: {
    fg: get('scale.red.4'),
    emphasis: get('scale.red.5'),
    muted: alpha(get('scale.red.4'), 0.4),
    subtle: alpha(get('scale.red.4'), 0.15),
  },
  done: {
    fg: get('scale.purple.4'),
    emphasis: get('scale.purple.5'),
    muted: alpha(get('scale.purple.4'), 0.4),
    subtle: alpha(get('scale.purple.4'), 0.15),
  },
  sponsors: {
    fg: get('scale.pink.4'),
    emphasis: get('scale.pink.5'),
    muted: alpha(get('scale.pink.4'), 0.4),
    subtle: alpha(get('scale.pink.4'), 0.15),
  },
};
