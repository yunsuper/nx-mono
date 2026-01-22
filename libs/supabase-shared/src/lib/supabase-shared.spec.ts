import { supabaseShared } from './supabase-shared';

describe('supabaseShared', () => {
  it('should work', () => {
    expect(supabaseShared()).toEqual('supabase-shared');
  });
});
