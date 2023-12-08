import PropTypes from "prop-types";

export function Filtered({handleFilterChange, filters}) {

    return (<div className='view'>
            <button className={`view__btn ${filters === 'all' ? 'view__current' : ''}`}
                    onClick={() => handleFilterChange('all')}
            >
                All
            </button>
            <button className={`view__btn ${filters === 'active' ? 'view__current' : ''}`}
                    onClick={() => handleFilterChange('active')}
            >
                Active
            </button>
            <button className={`view__btn ${filters === 'done' ? 'view__current' : ''}`}
                    onClick={() => handleFilterChange('done')}
            >
                Done
            </button>
        </div>
    )
}

Filtered.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    filters: PropTypes.string.isRequired,
}