export interface WaveLayer {
  /** Vertical centre of the curve, as a fraction of the wave's height. */
  mid: number;
  /** Peak height of the curve, as a fraction of the wave's height. */
  amp: number;
  /** How many arches fit across the full width. */
  cycles: number;
  /** Drift speed in radians per second. */
  speed: number;
  phase: number;
}

export const LAYERS: Record<'back' | 'front', WaveLayer> = {
  back: { mid: 0.42, amp: 0.3, cycles: 1.1, speed: 0.16, phase: 1.9 },
  front: { mid: 0.56, amp: 0.3, cycles: 1.25, speed: 0.24, phase: 0.4 },
};

/** Height of the curve at `u` (0 to 1 across the width), as a fraction of the wave's height. */
export function waveY(layer: WaveLayer, u: number, t = 0): number {
  const a = u * Math.PI * 2 * layer.cycles + layer.phase - t * layer.speed;
  return layer.mid + layer.amp * (Math.sin(a) * 0.82 + Math.sin(a * 2 + 0.6) * 0.18);
}

/** Closed SVG path for a layer, filled from the curve down to the bottom edge. */
export function wavePath(layer: WaveLayer, width: number, height: number, t = 0): string {
  const steps = 48;
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const u = i / steps;
    d += `${i === 0 ? 'M' : 'L'}${(u * width).toFixed(1)} ${(waveY(layer, u, t) * height).toFixed(1)}`;
  }
  return `${d}L${width} ${height}L0 ${height}Z`;
}
