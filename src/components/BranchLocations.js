import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
    Globe, ChevronRight, Star, Mail, Phone,
    Code, Users, Building2, Link2,
    MapPin, Timer, CheckCircle2, Boxes, MessageSquare,
    ExternalLink
} from 'lucide-react';

const PremiumCard = ({ isActive, children }) => (
    <div className={`
    relative rounded-xl transition-all duration-500 h-full
    before:absolute before:inset-0 before:-z-10 before:rounded-xl 
    before:transition-all before:duration-300 
    after:absolute after:inset-0 after:-z-20 after:rounded-xl after:blur-2xl after:transition-all after:duration-500
    ${isActive
            ? 'before:bg-gradient-to-br before:from-white/10 before:via-white/5 before:to-transparent before:shadow-lg before:shadow-white/5 after:bg-white/5'
            : 'hover:before:bg-white/5 hover:after:bg-white/2'}
    group
  `}>
        {children}
    </div>
);

const StatusIndicator = ({ active = true }) => (
    <div className="absolute -right-1 -top-1 p-0.5 backdrop-blur-sm rounded-full bg-black/20">
        <div className="relative">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-500" />
            <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-r from-emerald-400 to-green-500 opacity-75" />
        </div>
    </div>
);

const FeaturePill = ({ icon: Icon, text, variant = 'default' }) => (
    <div className={`
    flex w-full justify-center items-center gap-1 px-2 py-1 rounded-full text-xs font-medium min-w-custom
    ${variant === 'primary'
            ? 'bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/10 border border-emerald-500/20 text-white/90'
            : 'bg-gradient-to-r from-white/10 to-transparent border border-white/10 text-white/70'}
  `}>
        <Icon className="w-3 h-3" />
        <span>{text}</span>
    </div>
);

const MetricCard = ({ icon: Icon, label, value, sublabel }) => (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-white/5 p-3 group">
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 
      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <div className="relative">
            <Icon className="w-4 h-4 text-white/40 mb-1" />
            <div className="text-sm font-medium text-white/90">{value}</div>
            <div className="text-xs text-white/40">{label}</div>
            {sublabel && <div className="text-[10px] text-white/30 mt-0.5">{sublabel}</div>}
        </div>
    </div>
);

const LocationCard = ({ location, isActive, onClick }) => {
    const intl = useIntl();

    return (
        <PremiumCard isActive={isActive}>
            <div
                onClick={onClick}
                className={`
          cursor-pointer rounded-xl border transition-all duration-300 h-full
          ${isActive
                        ? 'border-white/20 bg-gradient-to-br from-white/10 to-transparent'
                        : 'border-white/10 hover:border-white/20'
                    }
        `}
            >
                <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex md:flex-row justify-between items-start gap-0 flex-wrap">
                        {/* Left Section */}
                        <div className="flex flex-1 min-w-2 m-2 gap-4 flex-wrap flex-col items-start">
                            {/* Office Icon */}
                            <div className="relative flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg overflow-hidden p-[1px]">
                                    <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-white/10 to-transparent 
                    flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                        <Globe className="w-6 h-6 text-white/70" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]" />
                                    </div>
                                </div>
                                {location.isMain && <StatusIndicator />}
                            </div>

                            {/* Location Info */}
                            <div className="flex-1 min-w-custom">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-white/90 text-base font-medium">
                                        <FormattedMessage id={`branches.locations.${location.id}.country`} />
                                    </h3>
                                    <div className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}>
                                        <ChevronRight className="w-3 h-3 text-white/30" />
                                    </div>
                                </div>
                                <p className="text-white/60 text-sm mb-2">
                                    <FormattedMessage id={`branches.locations.${location.id}.city`} />
                                </p>
                            </div>
                        </div>

                        {/* Right Section - Badges */}
                        <div className="flex flex-row md:flex-col gap-3 flex-wrap md:flex-nowrap m-3 w-1/2">
                            <div className="flex gap-2 w-full">
                                {location.isMain ? (
                                    <FeaturePill
                                        icon={Star}
                                        text={intl.formatMessage({ id: 'branches.mainHub' })}
                                        variant="primary"
                                    />
                                ) : (
                                    <FeaturePill
                                        icon={Link2}
                                        text={intl.formatMessage({ id: 'branches.network' })}
                                    />
                                )}
                            </div>
                            {location.isMain ? (
                                <>
                                    <FeaturePill
                                        icon={Code}
                                        text={intl.formatMessage({ id: 'branches.techCenter' })}
                                    />
                                    <FeaturePill
                                        icon={Users}
                                        text={intl.formatMessage({ id: 'branches.coreOps' })}
                                    />
                                </>
                            ) : (
                                <FeaturePill
                                    icon={Building2}
                                    text={intl.formatMessage({ id: 'branches.repOffice' })}
                                />
                            )}
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`space-y-4 overflow-auto transition-all duration-500 ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <MetricCard
                                icon={MapPin}
                                label={intl.formatMessage({ id: 'branches.metrics.location' })}
                                value={intl.formatMessage({ id: `branches.locations.${location.id}.city` })}
                                sublabel={intl.formatMessage({ id: `branches.locations.${location.id}.address` })}
                            />
                            <MetricCard
                                icon={Mail}
                                label={intl.formatMessage({ id: 'branches.metrics.contact' })}
                                value={intl.formatMessage({ id: 'branches.metrics.emailSupport' })}
                                sublabel={location.email}
                            />
                            {location.isMain ? (
                                <MetricCard
                                    icon={Phone}
                                    label={intl.formatMessage({ id: 'branches.metrics.phone' })}
                                    value={intl.formatMessage({ id: 'branches.metrics.support24_7' })}
                                    sublabel={location.phone}
                                />
                            ) : (
                                <MetricCard
                                    icon={Timer}
                                    label={intl.formatMessage({ id: 'branches.metrics.responseTime' })}
                                    value={intl.formatMessage({ id: 'branches.metrics.lessThan24' })}
                                    sublabel={intl.formatMessage({ id: 'branches.metrics.businessDays' })}
                                />
                            )}
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {location.isMain ? (
                                <>
                                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5">
                                        <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-white/90 text-xs font-medium">
                                                <FormattedMessage id="branches.features.primarySupport" />
                                            </p>
                                            <p className="text-white/50 text-[10px]">
                                                <FormattedMessage id="branches.features.techAssistance" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5">
                                        <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                                            <Boxes className="w-4 h-4 text-white/70" />
                                        </div>
                                        <div>
                                            <p className="text-white/90 text-xs font-medium">
                                                <FormattedMessage id="branches.features.coreOps" />
                                            </p>
                                            <p className="text-white/50 text-[10px]">
                                                <FormattedMessage id="branches.features.devInnovation" />
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5">
                                        <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                                            <Link2 className="w-4 h-4 text-white/70" />
                                        </div>
                                        <div>
                                            <p className="text-white/90 text-xs font-medium">
                                                <FormattedMessage id="branches.features.networkOffice" />
                                            </p>
                                            <p className="text-white/50 text-[10px]">
                                                <FormattedMessage id="branches.features.strategicPresence" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5">
                                        <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                                            <MessageSquare className="w-4 h-4 text-white/70" />
                                        </div>
                                        <div>
                                            <p className="text-white/90 text-xs font-medium">
                                                <FormattedMessage id="branches.features.supportChannel" />
                                            </p>
                                            <p className="text-white/50 text-[10px]">
                                                <FormattedMessage id="branches.features.extendedAssistance" />
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => window.location.href = `mailto:${location.email}`}
                                className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-white/20 via-white/15 to-white/10 
                  text-white text-xs font-medium hover:from-white/25 hover:via-white/20 hover:to-white/15 
                  transition-all duration-300 flex items-center justify-center gap-1"
                            >
                                <Mail className="w-3 h-3" />
                                <FormattedMessage id="branches.actions.sendEmail" />
                            </button>
                            {location.isMain ? (
                                <button
                                    onClick={() => window.location.href = `tel:${location.phone}`}
                                    className="w-full py-2 px-3 rounded-lg bg-white/5 text-white/80 
                    hover:bg-white/10 text-xs font-medium transition-all duration-300
                    flex items-center justify-center gap-1"
                                >
                                    <Phone className="w-3 h-3" />
                                    <FormattedMessage id="branches.actions.callSupport" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => window.location.href = `mailto:${location.email}`}
                                    className="w-full py-2 px-3 rounded-lg bg-white/5 text-white/80 
                    hover:bg-white/10 text-xs font-medium transition-all duration-300
                    flex items-center justify-center gap-1"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                    <FormattedMessage id="branches.actions.getDetails" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PremiumCard>
    );
};

const BranchLocations = () => {
    const [activeLocation, setActiveLocation] = useState(null);
    const intl = useIntl();

    const locations = [
        {
            id: "jordan",
            email: "info@softylus.com",
            phone: "+962 782 944 706",
            isMain: true
        },
        {
            id: "uk",
            email: "info@softylus.com",
            isMain: false
        },
        {
            id: "saudi",
            email: "info@softylus.com",
            isMain: false
        }
    ];

    return (
        <div className="py-8 w-full px-3">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                    <FormattedMessage id="branches.globalPresence" />
                </span>
                <div className="h-px flex-grow bg-gradient-to-r from-white via-gray-600 to-transparent"></div>
                {/* <div className="h-px flex-grow bg-gradient-to-l from-transparent via-gray-600 to-transparent" /> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {locations.map((location, index) => (
                    <LocationCard
                        key={location.id}
                        location={location}
                        isActive={activeLocation === index}
                        onClick={() => setActiveLocation(activeLocation === index ? null : index)}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" // Adjust based on your layout preferences
                    />
                ))}
            </div>
        </div>
    );
};
export default BranchLocations;