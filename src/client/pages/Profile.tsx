import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

interface ProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  practiceName: string;
  specialty: string;
  licenseNumber: string;
  licenseState: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

type EditingSection = 'account' | 'practice' | null;

const empty: ProfileData = {
  firstName: '', lastName: '', phone: '', practiceName: '',
  specialty: '', licenseNumber: '', licenseState: '',
  streetAddress: '', city: '', state: '', zip: '',
};

function SectionHeader({ label, title, onEdit }: {
  label: string;
  title: string;
  onEdit?: () => void;
}) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <p className="text-[10px] font-bold tracking-widest text-gold mb-1">{label}</p>
        <h2 className="font-serif text-xl text-navy">{title}</h2>
        <div className="w-8 h-px bg-gold mt-2" />
      </div>
      {onEdit && (
        <button
          type="button"
          onClick={onEdit}
          className="border border-navy/25 text-navy text-[11px] font-semibold tracking-widest px-4 py-2 hover:bg-gray-50 transition-colors"
        >
          EDIT
        </button>
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-widest text-navy/40 mb-1">{label}</p>
      <p className="text-sm text-navy">{value || <span className="text-navy/30 italic">—</span>}</p>
    </div>
  );
}

function FormField({ label, name, value, onChange }: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-[10px] font-bold tracking-widest text-navy/40 mb-1.5">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}

export default function Profile() {
  const { user } = useAuth();
  const [data, setData] = useState<ProfileData>(empty);
  const [draft, setDraft] = useState<ProfileData>(empty);
  const [editingSection, setEditingSection] = useState<EditingSection>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/auth/profile', { credentials: 'include' })
      .then((r) => r.json())
      .then((res) => {
        const profile: ProfileData = {
          firstName: res.firstName ?? '',
          lastName: res.lastName ?? '',
          phone: res.phone ?? '',
          practiceName: res.practiceName ?? '',
          specialty: res.specialty ?? '',
          licenseNumber: res.licenseNumber ?? '',
          licenseState: res.licenseState ?? '',
          streetAddress: res.streetAddress ?? '',
          city: res.city ?? '',
          state: res.state ?? '',
          zip: res.zip ?? '',
        };
        setData(profile);
      })
      .finally(() => setLoading(false));
  }, []);

  function startEditing(section: EditingSection) {
    setDraft({ ...data });
    setError('');
    setEditingSection(section);
  }

  function cancelEditing() {
    setEditingSection(null);
    setError('');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDraft((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/auth/profile', {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(draft),
    });
    if (res.ok) {
      setData(draft);
      setEditingSection(null);
    } else {
      const body = await res.json();
      setError(body.error ?? 'Failed to save');
    }
  }

  const formActions = (
    <div className="flex items-center gap-4 mt-6">
      <button
        type="submit"
        className="bg-olive text-white font-bold tracking-widest text-xs px-8 py-3 hover:bg-olive/90 transition-colors"
      >
        SAVE
      </button>
      <button
        type="button"
        onClick={cancelEditing}
        className="border border-navy/25 text-navy font-semibold tracking-widest text-xs px-8 py-3 hover:bg-gray-50 transition-colors"
      >
        CANCEL
      </button>
      {error && <span className="text-[11px] font-semibold tracking-widest text-red-500">{error}</span>}
    </div>
  );

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-navy py-12 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] font-bold tracking-widest text-gold mb-2">ACCOUNT</p>
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-1">My Profile</h1>
          <div className="w-16 h-px bg-gold mt-4" />
        </div>
      </section>

      {loading ? (
        <div className="flex items-center justify-center py-24">
          <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-10">

          {/* Account Info */}
          {editingSection === 'account' ? (
            <form onSubmit={handleSubmit}>
              <SectionHeader label="CONTACT" title="Account Info" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="FIRST NAME" name="firstName" value={draft.firstName} onChange={handleChange} />
                <FormField label="LAST NAME" name="lastName" value={draft.lastName} onChange={handleChange} />
                <div className="md:col-span-2">
                  <p className="text-[10px] font-bold tracking-widest text-navy/40 mb-1.5">EMAIL</p>
                  <input
                    value={user?.email ?? ''}
                    readOnly
                    className="w-full border border-gray-100 bg-gray-50 px-4 py-2.5 text-sm text-navy/40 cursor-not-allowed"
                  />
                </div>
                <FormField label="PHONE" name="phone" value={draft.phone} onChange={handleChange} />
                <div className="md:col-span-2">
                  <FormField label="STREET ADDRESS" name="streetAddress" value={draft.streetAddress} onChange={handleChange} />
                </div>
                <FormField label="CITY" name="city" value={draft.city} onChange={handleChange} />
                <FormField label="STATE" name="state" value={draft.state} onChange={handleChange} />
                <FormField label="ZIP" name="zip" value={draft.zip} onChange={handleChange} />
              </div>
              {formActions}
            </form>
          ) : (
            <div>
              <SectionHeader
                label="CONTACT"
                title="Account Info"
                onEdit={editingSection === null ? () => startEditing('account') : undefined}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoRow label="FIRST NAME" value={data.firstName} />
                <InfoRow label="LAST NAME" value={data.lastName} />
                <InfoRow label="EMAIL" value={user?.email ?? ''} />
                <InfoRow label="PHONE" value={data.phone} />
                <div className="md:col-span-2">
                  <InfoRow label="STREET ADDRESS" value={data.streetAddress} />
                </div>
                <InfoRow label="CITY" value={data.city} />
                <InfoRow label="STATE" value={data.state} />
                <InfoRow label="ZIP" value={data.zip} />
              </div>
            </div>
          )}

          <div className="w-full h-px bg-gray-100" />

          {/* Practice Info */}
          {editingSection === 'practice' ? (
            <form onSubmit={handleSubmit}>
              <SectionHeader label="PROFESSIONAL" title="Practice Info" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <FormField label="PRACTICE NAME" name="practiceName" value={draft.practiceName} onChange={handleChange} />
                </div>
                <FormField label="SPECIALTY" name="specialty" value={draft.specialty} onChange={handleChange} />
                <FormField label="LICENSE NUMBER" name="licenseNumber" value={draft.licenseNumber} onChange={handleChange} />
                <FormField label="LICENSE STATE" name="licenseState" value={draft.licenseState} onChange={handleChange} />
              </div>
              {formActions}
            </form>
          ) : (
            <div>
              <SectionHeader
                label="PROFESSIONAL"
                title="Practice Info"
                onEdit={editingSection === null ? () => startEditing('practice') : undefined}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <InfoRow label="PRACTICE NAME" value={data.practiceName} />
                </div>
                <InfoRow label="SPECIALTY" value={data.specialty} />
                <InfoRow label="LICENSE NUMBER" value={data.licenseNumber} />
                <InfoRow label="LICENSE STATE" value={data.licenseState} />
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
