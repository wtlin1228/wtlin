import { alpha, get, lighten } from '../../utils/color';

export default {
  fg: {
    default: get('scale.gray.9'),
    muted: get('scale.gray.6'),
    subtle: get('scale.gray.5'),
    onEmphasis: get('scale.white'),
  },
  canvas: {
    default: get('scale.white'),
    overlay: get('scale.white'),
    inset: get('scale.gray.0'),
    subtle: get('scale.gray.0'),
  },
  border: {
    default: get('scale.gray.2'),
    muted: lighten(get('scale.gray.2'), 0.03),
    subtle: alpha(get('scale.black'), 0.15),
  },

  // Roles
  neutral: {
    emphasisPlus: get('scale.gray.9'),
    emphasis: get('scale.gray.5'),
    muted: alpha(get('scale.gray.3'), 0.2),
    subtle: alpha(get('scale.gray.1'), 0.5),
  },
  accent: {
    fg: get('scale.blue.5'),
    emphasis: get('scale.blue.5'),
    muted: alpha(get('scale.blue.3'), 0.4),
    subtle: get('scale.blue.0'),
  },
  success: {
    fg: get('scale.green.5'),
    emphasis: get('scale.green.4'),
    muted: alpha(get('scale.green.3'), 0.4),
    subtle: get('scale.green.0'),
  },
  attention: {
    fg: get('scale.yellow.5'),
    emphasis: get('scale.yellow.4'),
    muted: alpha(get('scale.yellow.3'), 0.4),
    subtle: get('scale.yellow.0'),
  },
  severe: {
    fg: get('scale.orange.5'),
    emphasis: get('scale.orange.5'),
    muted: alpha(get('scale.orange.3'), 0.4),
    subtle: get('scale.orange.0'),
  },
  danger: {
    fg: get('scale.red.5'),
    emphasis: get('scale.red.5'),
    muted: alpha(get('scale.red.3'), 0.4),
    subtle: get('scale.red.0'),
  },
  open: {
    fg: get('scale.green.5'),
    emphasis: get('scale.green.4'),
    muted: alpha(get('scale.green.3'), 0.4),
    subtle: get('scale.green.0'),
  },
  closed: {
    fg: get('scale.red.5'),
    emphasis: get('scale.red.5'),
    muted: alpha(get('scale.red.3'), 0.4),
    subtle: get('scale.red.0'),
  },
  done: {
    fg: get('scale.purple.5'),
    emphasis: get('scale.purple.5'),
    muted: alpha(get('scale.purple.3'), 0.4),
    subtle: get('scale.purple.0'),
  },
  sponsors: {
    fg: get('scale.pink.5'),
    emphasis: get('scale.pink.5'),
    muted: alpha(get('scale.pink.3'), 0.4),
    subtle: get('scale.pink.0'),
  },
};
